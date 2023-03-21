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
  if (state.view === "Events"){
    const input = document.querySelector('input[type="search"]');

    input.addEventListener("search", () => {
      console.log(input.value);
      let lowerCase = input.value.toLowerCase();
      let inputArrSplit = lowerCase.split(" ");
      console.log(inputArrSplit);
      let inputArrJoin = inputArrSplit.join("+");
      console.log(inputArrJoin);
      let TMQuery = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${inputArrJoin}&apikey=${process.env.TM_API_KEY}`;
      let SGQuery = `https://api.seatgeek.com/2/events?q=${inputArrJoin}&client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_CLIENT_SECRET}`;
      let promiseTMQuery = axios.get(TMQuery);
      let promiseSGQuery = axios.get(SGQuery);
      Promise.allSettled([promiseTMQuery, promiseSGQuery])
      .then(results => {
        const response1 = results[0].status === 'fulfilled' ? results[0].value.data : null;
        const response2 = results[1].status === 'fulfilled' ? results[1].value.data : null;
        const error1 = results[0].status === 'rejected' ? results[0].reason : null;
        const error2 = results[1].status === 'rejected' ? results[1].reason : null;
        const result1 = { response: response1, error: error1 };
        const result2 = { response: response2, error: error2 };
        store.Events.eventSearchTM = result1.response._embedded.events ;
        store.Events.eventSearchSG = result2.response.events ;
        console.log('Ticketmaster API Query:', result1);
        console.log('Seatgeek API Query:', result2);
        router.navigate("/Events");
        // done();
      });


      // const filArrTM = store.Events.eventSearchTM.filter(curr => {
      //   return curr.name.includes(input.value) ||
      //   curr._embedded.venues[0].city.name.includes(input.value) ||
      //   curr._embedded.venues[0].state.stateCode.includes(input.value);
      // })
      // if(filArrTM.length > 0){
      // store.Events.eventSearchTM = filArrTM;
      // }
      router.navigate("/Events")
  });
  }
  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

    const inputList = event.target.elements;
    console.log("Input Element List", inputList);

  const requestData = {
    name: inputList.name.value,
    email: inputList.email.value,
    phone: inputList.phone.value,
    freeText: inputList.freeText.value
  };
  console.log("request body", requestData);

  axios
      .post (`${process.env.CONTACT_API_URL}`, requestData)
      .then (response => {
        // store.Contact.contact.push(response.data);
        router.navigate("/Contact");
        alert("Thank you for your submission!")
      })
      .catch(error => {
        console.log("It puked", error);
      });
    });
  }
}

const TM = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}`;
const SG = `https://api.seatgeek.com/2/events?client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_CLIENT_SECRET}`;

const promiseTM = axios.get(TM);
const promiseSG = axios.get(SG);


router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        Promise.allSettled([promiseTM, promiseSG])
        .then(results => {
          const response1 = results[0].status === 'fulfilled' ? results[0].value.data : null;
          const response2 = results[1].status === 'fulfilled' ? results[1].value.data : null;
          const error1 = results[0].status === 'rejected' ? results[0].reason : null;
          const error2 = results[1].status === 'rejected' ? results[1].reason : null;
          const result1 = { response: response1, error: error1 };
          const result2 = { response: response2, error: error2 };
          store.Events.eventSearchTM = result1.response._embedded.events ;
          store.Events.eventSearchSG = result2.response.events ;
          console.log('Ticketmaster API:', result1);
          console.log('Seatgeek API:', result2);
          done();
        });
       break;
          case "Events":
            Promise.allSettled([promiseTM, promiseSG])
  .then(results => {
    const response1 = results[0].status === 'fulfilled' ? results[0].value.data : null;
    const response2 = results[1].status === 'fulfilled' ? results[1].value.data : null;
    const error1 = results[0].status === 'rejected' ? results[0].reason : null;
    const error2 = results[1].status === 'rejected' ? results[1].reason : null;
    const result1 = { response: response1, error: error1 };
    const result2 = { response: response2, error: error2 };
    store.Events.eventSearchTM = result1.response._embedded.events ;
    store.Events.eventSearchSG = result2.response.events ;
    console.log('Ticketmaster API:', result1);
    console.log('Seatgeek API:', result2);
    done();
  });
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
