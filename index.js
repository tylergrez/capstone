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
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}


router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // add in API url when I have it, don't forget to read over .then statement and correct if necessary
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}`
          )
          .then(response => {
            console.log(response.data);
            done();
          });
          break;
          case "Events":
            axios
              .get(
                // add in API url when I have it, don't forget to read over .then statement and correct if necessary
                `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}&size=100`
              )
              .then(response => {
                store.Events.eventSearch = {};
                console.log(response.data);
                store.Events.eventSearch = response.data._embedded.events;
                // console.log(response.data._embedded.events[0].name);
                // store.Events.eventSearch.name = response.data._embedded.events[0].name ;
                // console.log(store.Events.eventSearch.name);
                // store.Events.eventSearch.eventDate = response.data._embedded.events[0].dates.start.localDate ;
                // console.log(store.Events.eventSearch.eventDate);
                // store.Events.eventSearch.eventTime = response.data._embedded.events[0].dates.start.localTime ;
                // console.log(store.Events.eventSearch.eventTime);
                // store.Events.eventSearch.eventUrl = response.data._embedded.events[0].url ;
                // console.log(store.Events.eventSearch.eventUrl);
                // store.Events.eventSearch.performer = response.data._embedded.events[0]._embedded.attractions[0].name ;
                // console.log(store.Events.eventSearch.performer);
                console.log(store.Events.eventSearch);
                done();
              })
              .catch (
                (err) => {
                  console.log(err);
                  done();
                }
              );
              break;
      default :
        done();
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
  }
});

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
