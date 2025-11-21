import { router } from "./router.js";
import { state } from "./state.js";

// Run router on page load
window.addEventListener("DOMContentLoaded", () => {
  router();

  // Reactively re-render if state changes
  state.subscribe(() => {
    router();
  });
});

// Run router when hash changes
window.addEventListener("hashchange", router);