// Keeping below for notes/comments

// import { Header, Nav, Main, Footer } from "./components";
// import * as store from "./store";
// import Navigo from "navigo";
// import { capitalize } from "lodash";
// import axios from "axios";

// const router = new Navigo("/");

// // then bring over the aggregated modules into the main index.js
// // can alternatively be written as import * as ____ (alias) from "./components" to import all modules
// // add menu toggle to bars icon in nav bar

// // document.querySelector(".fa-bars").addEventListener("click", () => {
// //   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// // }); no longer exists // moved below to afterRender function

// // after the functions have been called with import, they need to be called to be associated with div-ID "root"
// function render(state = store.Home) {
//   document.querySelector("#root").innerHTML = `
//   ${Header(state)}
//   ${Footer()}
//   ${Nav(store.Links)}
//   ${Main(state)}
//   `;
//   afterRender();
//   router.updatePageLinks();
// }

// // function afterRender () {
// //   // add menu toggle to bars icon in nav bar
// //   document.querySelector(".fa-bars").addEventListener("click", () => {
// //     document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// // }};
// // adding router.hooks to allow for the api to be fired upon for each view rather than just when loading the root

// router.hooks({
//   before: (done, params) => {
//     const page =
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Home";
//     // Add a switch case statement to handle multiple routes
//     switch (page) {
//       case "Home":
//         axios
//           .get(
//             // Replace the key provided here with your own key from openweathermap
//             `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=bda01249020fbf5a23a5325278330217`
//           )
//           .then(response => {
//             console.log(response.data);
//             const kelvinToFahrenheit = kelvinTemp =>
//               Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

//             // Save Data into state
//             store.Home.weather = {};
//             store.Home.weather.city = response.data.name;
//             store.Home.weather.temp = kelvinToFahrenheit(
//               response.data.main.temp
//             );
//             store.Home.weather.feelsLike = kelvinToFahrenheit(
//               response.data.main.feels_like
//             );
//             store.Home.weather.description =
//               response.data.weather[0].description;
//             console.log(store.Home.weather);

//             done();
//           });
//         break;
//       default:
//         done();
//     }
//   },
//   already: params => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home";

//     render(store[view]);
//   }
// });

// router
//   .on({
//     "/": () => render(),
//     ":view": params => {
//       let view = capitalize(params.data.view);
//       render(store[view]);
//     }
//   })
//   .resolve();

// // render (); //the router object replaces the render function, router.on needs to be last item listed in index.js
// router
//   .on({
//     "/": () => render(),
//     ":view": params => {
//       let view = capitalize(params.data.view);
//       render(store[view]);
//     }
//   })
//   .resolve();
