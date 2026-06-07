import createCache from "@emotion/cache";

// prepend: true moves MUI styles to the top of <head> so they can be
// overridden by any custom styles that come after.
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
