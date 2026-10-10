// Three venues shown on the home page's "On the map" panel. Names and
// addresses come from the public station feed (checked 2026-10-10); live
// availability lives on the Locations page, so no counts are shown here.
export interface FeaturedVenue {
  name: string;
  address: string;
  kind: string;
}

export const FEATURED_VENUES: FeaturedVenue[] = [
  { name: "Ford Field", address: "2000 Brush St, Detroit, MI", kind: "Stadium" },
  { name: "Henry Ford Hospital", address: "2799 W Grand Blvd, Detroit, MI", kind: "Hospital" },
  { name: "Four Winds Casino New Buffalo", address: "11111 Wilson Rd, New Buffalo, MI", kind: "Casino" },
];

// Where the network is today, in words that stay true as venues come and go.
export const NETWORK_LINE =
  "Metro Detroit and southwest Michigan, plus kiosks in South Bend, Nashville, Miami, Los Angeles and Cartagena, Colombia.";
