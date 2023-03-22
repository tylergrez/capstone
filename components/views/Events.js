import html from "html-literal";
import { isNaN } from "lodash";
// import tmLogo from "../../assets/img/Ticketmaster-Emblem.png";

function randomSection() {
  let min = 100 ;
  let max = 400 ;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRow() {
  let min = 1 ;
  let max = 40 ;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomSeat() {
  let min = 1 ;
  let max = 20 ;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomPrice() {
  let min = 1 ;
  let max = 200 ;
  let dollars = (Math.random() * (max - min + 1) + min) ;
  return dollars.toFixed(2)
}

function timeRemove(string) {
  if (!string) {
    return "TBA"
  }
  let stringSplit = string.split(":");
  console.log(stringSplit);
  let stringPop = stringSplit.pop();
  console.log(stringPop);
  let stringJoin = stringSplit.join(":");
  return stringJoin
}

function fixSGDateTime(string) {
  let splitWord = string.split("T");
  console.log(splitWord);
  let date = splitWord[0];
  let time = splitWord[1];
  console.log("function fixSGDatetime", date, time);
  return date + "<br>" + time;
}

// var tables = document.querySelectorAll("table.sortable"), table, thead, headers, i, j;
// for (i = 0; i < tables.length; i++) {
//   table = tables[i];

//   if (thead = table.querySelector("thead")) {
//       headers = thead.querySelectorAll("th");

//       for (j = 0; j < headers.length; j++) {
//           headers[j].innerHTML = "<a href='#'>" + headers[j].innerText + "</a>";
//       }

//       thead.addEventListener("click", sortTableFunction(table));
//   }
// }

// function sortTableFunction(table) {
//   return function(ev) {
//       if (ev.target.tagName.toLowerCase() == 'a') {
//           sortRows(table, siblingIndex(ev.target.parentNode));
//           ev.preventDefault();
//       }
//   };
// }

// function siblingIndex(node) {
//   var count = 0 ;

//   while (node = node.previousElementSibling) {
//     count++ ;
//   }
//   return count;
// }

// function sortRows(table, columnIndex) {
//   var rows = table.querySelectorAll("tbody tr"),
//   sel = "thead th:nth-child(" + (columnIndex + 1) + ")",
//   sel2 = "td:nth-child(" + (columnIndex + 1) + ")",
//   classList = table.querySelector(sel).classList,
//   values = [],
//   cls = "",
//   allNum = true,
//   val,
//   index,
//   node ;

//   if (classList) {
//     if (classList.contains("date")){
//       cls = "date" ;
//     } else if (classList.contains("number")) {
//       cls = "number" ;
//     }
//   }
//   for (index = 0; index < rows.length; index++) {
//     node = rows[index].querySelector(sel2);
//     val = node.innerText ;
//     if (isNaN(val)) {
//       allNum = false ;
//     } else {
//       val = parseFloat(val);
//     }
//     values.push({value: val, row: rows[index] });
//   }
//   if (cls == "" && allNum) {
//     cls = "number" ;
//   }
//   if (cls == "number") {
//     values.sort(sortNumberVal);
//     values = values.reverse();
// } else if (cls == "date") {
//     values.sort(sortDateVal);
// } else {
//     values.sort(sortTextVal);
// }
// for (var idx = 0; idx < values.length; idx++) {
//   table.querySelector("tbody").appendChild(values[idx].row);
// }
// }

// function sortNumber (a, b) {
//   return a-b
// }
// function sortDateVal(a, b) {
//   var dateA = Date.parse(a.value),
//   dateB = Date.parse(b.value);
//   return sortNumber(dateA, dateB);
// }

// function sortTextVal (a, b) {
//   var textA = (a.value + "").toUpperCase();
//   var textB = (b.value + "").toUpperCase();
//   if (textA < textB) {
//     return -1 ;
//   }
//   if (textA > textB) {
//     return 1;
//   }
//   return 0;
// }

// console.logI(eventSearchSG);
// console.log(eventSearchTM);

export default state =>
html`<div id="search-bar">
<input type="search" class="event-search" name="event-input" placeholder="Search team, artist, location, or date" />
</div>
<div id="results">
  <table id="resultsTable" class="table-sortable">
    <thead>
    <tr id="headersRow">
        <th id="column-one">Date & Time</th>
        <th id="column-two">Location</th>
        <th id="column-three">Event</th>
        <th id="column-four">Seat Information</th>
        <th id="column-five">Vendor</th>
        <th id="column-six">Price</th>
      </tr>
    </thead>
    <tbody>
    <div id="apiResults">
      ${state.eventSearchTM
  .map(Events => {
    return `
    <tr><td>${Events.dates.start.localDate}<br>${timeRemove(Events.dates.start.localTime)}</td><td>${Events._embedded.venues[0].city.name}, ${Events._embedded.venues[0].state.stateCode}</td><td class="event-name-column">${Events.name}</td><td>${randomSection()} / ${randomRow()} / ${randomSeat()}</td><td><a href="${Events.url}">TM Logo</a></td><td>$${randomPrice()}</td>
    `
  }).join("")}
  ${state.eventSearchSG
  .map(Events => {
    return `
    <tr><td>${fixSGDateTime(Events.datetime_local)}</td><td>${Events.venue.city}, ${Events.venue.state}</td><td class="event-name-column">${Events.title}</td><td>${randomSection()} / ${randomRow()} / ${randomSeat()}</td><td><a href="${Events.url}">SG Logo</a></td><td>$${randomPrice()}</td>
    `
  }).join("")}
      </div>
    </tbody>
  </table>
  </div>
  <div class="bottom-of-search">
  <p>All times shown are in PST.</p>
  <p>All prices shown are randomly generated and not reflective of actual prices.</p>
  <p>All seat information shown is randomly generated and not reflective of the actual venues.</p>
  <br>
  </div>
`;


//create a loop or use array method to create tr, and td with API data.
// center entire table as well

// ${st.pizzas
//   .map(pizza => {
//     return `<tr><td>${pizza.crust}</td><td>${pizza.cheese}</td><td>${
//       pizza.sauce
//     }</td><td>${pizza.toppings.join(" & ")}</td><td>${
//       pizza.customer
//     }</td></tr>`;
//   })
//   .join("")}
