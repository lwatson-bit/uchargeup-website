import { useEffect, useMemo, useRef, useState } from "react";
import { BatteryCharging, LocateFixed, MapPin, Navigation, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  coreStations,
  fetchStations,
  FLEET_CENTER,
  haversineKm,
  type Station,
} from "@/lib/stations";
import { loadGoogleMaps } from "@/lib/googleMaps";

// Same brand pin the mobile app and scan-to-rent page use.
const MARKER_ICON_URL = "https://m.uchargeup.com/content/marker.png";

type MapState = "loading" | "ready" | "error";

export default function LocationsMap() {
  const [stations, setStations] = useState<Station[] | null>(null);
  const [dataError, setDataError] = useState(false);
  const [mapState, setMapState] = useState<MapState>("loading");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [geoError, setGeoError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const mapDivRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const googleRef = useRef<typeof google | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef(new Map<string, google.maps.Marker>());
  const userMarkerRef = useRef<google.maps.Marker | null>(null);

  // Fetch live station data (re-runs when the user hits "Try again").
  useEffect(() => {
    let cancelled = false;
    setDataError(false);
    fetchStations()
      .then((list) => {
        if (!cancelled) setStations(list);
      })
      .catch(() => {
        if (!cancelled) setDataError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  // Load Google Maps and create the map once.
  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps()
      .then((g) => {
        if (cancelled || !mapDivRef.current) return;
        googleRef.current = g;
        mapRef.current = new g.maps.Map(mapDivRef.current, {
          center: FLEET_CENTER,
          zoom: 10,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          clickableIcons: false,
        });
        setMapState("ready");
      })
      .catch(() => {
        if (!cancelled) setMapState("error");
      });
    return () => {
      cancelled = true;
      mapRef.current = null;
    };
  }, []);

  // Place markers once both the map and the data are ready.
  useEffect(() => {
    const g = googleRef.current;
    const map = mapRef.current;
    if (mapState !== "ready" || !stations || !g || !map) return;

    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current.clear();

    // marker.png is 81x113 — scale it proportionally or the pin squashes.
    const icon: google.maps.Icon = {
      url: MARKER_ICON_URL,
      scaledSize: new g.maps.Size(29, 40),
    };
    stations.forEach((s) => {
      const marker = new g.maps.Marker({
        position: { lat: s.lat, lng: s.lng },
        map,
        icon,
        title: s.name,
      });
      marker.addListener("click", () => setSelectedId(s.id));
      markersRef.current.set(s.id, marker);
    });

    const core = coreStations(stations);
    if (core.length > 0) {
      const bounds = new g.maps.LatLngBounds();
      core.forEach((s) => bounds.extend({ lat: s.lat, lng: s.lng }));
      map.fitBounds(bounds, 48);
      g.maps.event.addListenerOnce(map, "idle", () => {
        if ((map.getZoom() ?? 0) > 15) map.setZoom(15);
      });
    }
  }, [mapState, stations]);

  // Selecting a station (pin click or list click) pans the map and scrolls
  // the list entry into view.
  useEffect(() => {
    if (!selectedId) return;
    const map = mapRef.current;
    const marker = markersRef.current.get(selectedId);
    if (map && marker) {
      const pos = marker.getPosition();
      if (pos) {
        map.panTo(pos);
        if ((map.getZoom() ?? 0) < 13) map.setZoom(13);
      }
    }
    // Scroll the card into view without scrollIntoView: that would also
    // scroll ancestor containers (yanking the whole page), and its smooth
    // variant is silently dropped by Chrome when nested scrollers are
    // involved.
    const listEl = listRef.current;
    const card = document.getElementById(`station-${selectedId}`);
    if (!listEl || !card) return;
    if (listEl.scrollHeight > listEl.clientHeight + 1) {
      // Desktop: the list is its own scroll container — center the card.
      const delta = card.getBoundingClientRect().top - listEl.getBoundingClientRect().top;
      const target = listEl.scrollTop + delta - (listEl.clientHeight - card.clientHeight) / 2;
      listEl.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    } else {
      // Mobile: the page scrolls — bring the card under the fixed header.
      window.scrollTo({
        top: window.scrollY + card.getBoundingClientRect().top - 96,
        behavior: "smooth",
      });
    }
  }, [selectedId]);

  const locateMe = () => {
    if (!navigator.geolocation) {
      setGeoError(true);
      return;
    }
    setGeoError(false);
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserPos(p);
        const g = googleRef.current;
        const map = mapRef.current;
        if (g && map) {
          userMarkerRef.current?.setMap(null);
          userMarkerRef.current = new g.maps.Marker({
            position: p,
            map,
            title: "You are here",
            icon: {
              path: g.maps.SymbolPath.CIRCLE,
              scale: 7,
              fillColor: "#1a73e8",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            },
          });
          map.panTo(p);
          map.setZoom(12);
        }
      },
      () => {
        setLocating(false);
        setGeoError(true);
      },
    );
  };

  const sortedStations = useMemo(() => {
    if (!stations) return null;
    if (!userPos) return stations.map((s) => ({ ...s, distanceKm: null as number | null }));
    return stations
      .map((s) => ({ ...s, distanceKm: haversineKm(userPos, s) as number | null }))
      .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
  }, [stations, userPos]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <p className="text-gray-600" data-testid="station-count">
          {stations
            ? "Tap a pin for live availability and directions"
            : dataError
              ? "Location list is temporarily unavailable"
              : "Loading locations…"}
        </p>
        <Button
          variant="outline"
          className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold self-start sm:self-auto"
          onClick={locateMe}
          disabled={locating}
          data-testid="near-me-button"
        >
          <LocateFixed className="w-4 h-4 mr-2" />
          {locating ? "Locating…" : "Find stations near me"}
        </Button>
      </div>
      {geoError && (
        <p className="text-sm text-gray-500 mb-4">
          We couldn't get your location — check your browser's location permission and try again.
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[420px] lg:h-[560px] bg-gray-100 relative">
          {mapState === "error" ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <MapPin className="w-10 h-10 text-gray-400 mb-3" />
              <p className="text-gray-600 font-medium">The map couldn't load right now.</p>
              <p className="text-gray-500 text-sm mt-1">
                All of our locations are still listed{" "}
                <span className="lg:hidden">below</span>
                <span className="hidden lg:inline">on the right</span>.
              </p>
            </div>
          ) : (
            <div
              ref={mapDivRef}
              className="w-full h-full"
              role="application"
              aria-label="Map of U Charge Up charging station locations"
              data-testid="locations-map"
            />
          )}
          {mapState === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <p className="text-gray-500">Loading map…</p>
            </div>
          )}
        </div>

        <div
          ref={listRef}
          className="lg:h-[560px] lg:overflow-y-auto space-y-3 pr-1"
          data-testid="station-list"
        >
          {dataError && (
            <div className="rounded-xl border border-gray-200 p-6 text-center">
              <p className="text-gray-600 mb-4">
                We couldn't load live locations. Please try again in a moment.
              </p>
              <Button
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold"
                onClick={() => setReloadKey((k) => k + 1)}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try again
              </Button>
            </div>
          )}
          {!dataError && !sortedStations &&
            [0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-4 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-100 rounded w-full mb-3" />
                <div className="h-3 bg-gray-100 rounded w-1/3" />
              </div>
            ))}
          {sortedStations?.map((s) => (
            <div
              key={s.id}
              id={`station-${s.id}`}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedId(s.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedId(s.id);
                }
              }}
              className={`rounded-xl border p-4 cursor-pointer transition-colors duration-150 ${
                selectedId === s.id
                  ? "border-brand-blue bg-blue-50/60"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
              data-testid={`station-card-${s.id}`}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 leading-snug">{s.name}</h3>
                {!s.isOpen && (
                  <span className="text-xs font-medium text-red-600 bg-red-50 rounded-full px-2 py-0.5 whitespace-nowrap">
                    Closed
                  </span>
                )}
              </div>
              {s.address && <p className="text-sm text-gray-500 mb-3">{s.address}</p>}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span
                  className={`inline-flex items-center font-medium ${
                    s.freeBatteries > 0 ? "text-green-700" : "text-gray-500"
                  }`}
                >
                  <BatteryCharging className="w-4 h-4 mr-1" />
                  {s.freeBatteries > 0
                    ? `${s.freeBatteries} available now`
                    : "None available"}
                </span>
                {s.distanceKm != null && (
                  <span className="text-gray-500">
                    {(s.distanceKm * 0.621371).toFixed(1)} mi away
                  </span>
                )}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center text-brand-blue hover:underline font-medium"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Directions
                </a>
              </div>
            </div>
          ))}
          {sortedStations && sortedStations.length === 0 && (
            <p className="text-gray-500 p-4">No locations to show right now.</p>
          )}
        </div>
      </div>
    </div>
  );
}
