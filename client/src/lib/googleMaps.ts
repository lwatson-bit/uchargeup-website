// Loads the Google Maps JavaScript API once and shares the promise across
// callers. The key comes from VITE_GOOGLE_MAPS_API_KEY (client/.env.local in
// dev, project env vars on Vercel).
let loaderPromise: Promise<typeof google> | null = null;

export function loadGoogleMaps(): Promise<typeof google> {
  if (loaderPromise) return loaderPromise;

  const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  if (!key) {
    return Promise.reject(new Error("Google Maps API key is not configured"));
  }

  loaderPromise = new Promise<typeof google>((resolve, reject) => {
    const w = window as typeof window & {
      google?: typeof google;
      __ucuMapsReady?: () => void;
    };
    if (w.google?.maps) {
      resolve(w.google);
      return;
    }
    w.__ucuMapsReady = () => {
      delete w.__ucuMapsReady;
      resolve(w.google!);
    };
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=__ucuMapsReady&loading=async`;
    script.async = true;
    script.onerror = () => {
      loaderPromise = null;
      reject(new Error("Failed to load Google Maps"));
    };
    document.head.appendChild(script);
  });
  return loaderPromise;
}
