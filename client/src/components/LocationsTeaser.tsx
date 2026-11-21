import gridUrl from "@assets/city-grid.svg";
import { Button } from "@/components/ui/button";
import { handleAppDownload } from "@/utils/appDownload";

/**
 * Homepage "where to find us" band. Same general wording as the Locations
 * page: no station, state or country counts, and nothing from the station feed.
 */
const STATS = [
  { value: "Coast to Coast", label: "Across the U.S." },
  { value: "International", label: "U.S. and abroad" },
  { value: "200+", label: "Annual Events" },
];

export default function LocationsTeaser() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #25628a 0%, #3078a2 55%, #4a97c4 100%)",
      }}
      data-testid="locations-teaser"
    >
      <img
        src={gridUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(37,98,138,0.94) 0%, rgba(37,98,138,0.7) 40%, rgba(37,98,138,0.25) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col gap-6 md:gap-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex-1 min-w-[260px] flex flex-col gap-3.5">
            <p className="text-sm font-bold tracking-widest uppercase text-brand-pale">
              Where to find us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Power up wherever you go
            </h2>
            <p className="text-lg text-white max-w-xl">
              Stadiums, hospitals, casinos, hotels and restaurants. The app
              takes you to the station closest to you.
            </p>
          </div>
          <Button
            size="lg"
            className="h-[50px] px-7 bg-white hover:bg-gray-100 text-brand-dark-blue text-base font-bold"
            onClick={handleAppDownload}
            data-testid="home-find-station"
          >
            Find a Station Near You
          </Button>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl px-5 py-3.5 sm:px-6 sm:py-5 border border-white/30 backdrop-blur-sm flex sm:block items-baseline justify-between gap-4"
              style={{ background: "rgba(22,61,87,0.5)" }}
            >
              <div className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-tight tracking-tight text-white">
                {stat.value}
              </div>
              <div className="sm:mt-1.5 text-sm sm:text-base font-semibold text-white text-right sm:text-left">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
