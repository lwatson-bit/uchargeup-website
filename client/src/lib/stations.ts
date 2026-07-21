// Live station data from the same public U Charge Up backend feed the mobile
// app and scan-to-rent page use. The endpoint is anonymous (no login token)
// and CORS-enabled, so the website can call it directly.
const STATIONS_API =
  "https://m.uchargeup.com/cdb-app-api/v1/app/cdb/shop/listnear";

// Center of the current fleet (Detroit metro). zoomLevel 1 is the widest
// search the backend supports and returns the entire network regardless of
// the center point supplied.
export const FLEET_CENTER = { lat: 42.3354, lng: -83.051 };

export interface Station {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  freeBatteries: number;
  returnSlots: number;
  totalBatteries: number;
  isOpen: boolean;
}

interface RawShop {
  id?: number | string;
  newID?: string;
  shopName?: string;
  shopAddress?: string;
  latitude?: string;
  longitude?: string;
  freeNum?: number;
  canReturnNum?: number;
  batteryNum?: number;
  businessStatus?: number;
}

function isRealVenue(shop: RawShop, lat: number, lng: number): boolean {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  // Unassigned machines are parked under a placeholder venue at (0, 0).
  if (Math.abs(lat) < 0.01 && Math.abs(lng) < 0.01) return false;
  const name = (shop.shopName ?? "").trim();
  // "UCU Inventory" is the internal holding venue; "测试" marks leftover
  // test stores from the original platform vendor.
  if (name === "UCU Inventory" || name.includes("测试")) return false;
  return true;
}

export async function fetchStations(): Promise<Station[]> {
  const form = new FormData();
  form.append("coordType", "WGS-84");
  form.append("mapType", "WGS-84");
  form.append("lat", String(FLEET_CENTER.lat));
  form.append("lng", String(FLEET_CENTER.lng));
  form.append("zoomLevel", "1");

  const res = await fetch(STATIONS_API, { method: "POST", body: form });
  if (!res.ok) {
    throw new Error(`Station feed returned HTTP ${res.status}`);
  }
  const data = await res.json();
  if (data.code !== 0 || !Array.isArray(data.list)) {
    throw new Error(data.msg || "Station feed returned an unexpected response");
  }

  return (data.list as RawShop[])
    .map((shop): Station | null => {
      const lat = parseFloat(shop.latitude ?? "");
      const lng = parseFloat(shop.longitude ?? "");
      if (!isRealVenue(shop, lat, lng)) return null;
      return {
        id: String(shop.newID ?? shop.id ?? `${lat},${lng}`),
        name: (shop.shopName ?? "U Charge Up Station").trim(),
        address: (shop.shopAddress ?? "").trim(),
        lat,
        lng,
        freeBatteries: shop.freeNum ?? 0,
        returnSlots: shop.canReturnNum ?? 0,
        totalBatteries: shop.batteryNum ?? 0,
        isOpen: shop.businessStatus === 1,
      };
    })
    .filter((s): s is Station => s !== null);
}

export function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

// The stations to frame the map around on first load: everything within
// 300 km of the network's median point. Keeps a single far-away venue (e.g.
// Los Angeles) from zooming the initial view out to the whole country.
export function coreStations(stations: Station[]): Station[] {
  if (stations.length === 0) return [];
  const median = (values: number[]) => {
    const s = [...values].sort((x, y) => x - y);
    return s[Math.floor(s.length / 2)];
  };
  const center = {
    lat: median(stations.map((s) => s.lat)),
    lng: median(stations.map((s) => s.lng)),
  };
  const core = stations.filter((s) => haversineKm(center, s) < 300);
  return core.length > 0 ? core : stations;
}
