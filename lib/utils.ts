import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const location = () => {
  Radar.initialize("prj_live_pk_...");

  // create autocomplete input
  Radar.ui.autocomplete({
    container: "autocomplete",
    showMarkers: true,
    markerColor: "#ACBDC8",
    responsive: true,
    width: "600px",
    maxHeight: "600px",
    placeholder: "Search address",
    limit: 8,
    minCharacters: 3,
    // omit near to use default IP address location
    near: null,
    onSelection: (address) => {
      // do something with selected address
    },
  });
  return Radar;
};
