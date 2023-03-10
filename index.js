import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo ("/");

// then bring over the aggregated modules into the main index.js
// can alternatively be written as import * as ____ (alias) from "./components" to import all modules
// add menu toggle to bars icon in nav bar


// after the functions have been called with import, they need to be called to be associated with div-ID "root"
function render (state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender();
  router.updatePageLinks();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}

// add router.hooks (see class SPA for example) to begin implementing API
// router.hooks({
//   before: (done, params) => {
//     const page = params && params.hasOwnProperty("page") ? capitalize(params.page) : "Home";
//     // Add a switch case statement to handle multiple routes
//     switch (view) {
//       case "Home":
//         axios
//           .get(
//             // add in API url when I have it, don't forget to read over .then statement and correct if necessary
//             ``
//           )
//           .then(response => {
//             console.log(response.data);
//             done();
//           }
//       default :
//         done();
//     }
//   },
//   already: (params) => {
//     const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

//     render(store[view]);
//   }
// });

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
