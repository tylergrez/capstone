import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
const router = new Navigo ("/");
// then bring over the aggregated modules into the main index.js
// can alternatively be written as import * as ____ (alias) from "./components" to import all modules
// add menu toggle to bars icon in nav bar

// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// }); no longer exists //

// after the functions have been called with import, they need to be called to be associated with div-ID "root"
function render (state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  router.updatePageLinks();
}
// render (); //the router object replaces the render function, router.on needs to be last item listed in index.js
router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      render(store[view]);
    },
  })
  .resolve();
