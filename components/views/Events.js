import html from "html-literal";
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
  console.log(date, time);
  return date + "<br>" + time;
}

// console.logI(eventSearchSG);
// console.log(eventSearchTM);

export default state => html`<div id="search-bar">
<input type="text" class="event-search" placeholder="Search team, zip, event, venue or date" />
</div>
<div id="results">
  <table id="resultsTable">
      <tr id="headersRow">
        <th id="column-one">Date & Time</th>
        <th id="column-two">Event</th>
        <th id="column-three">Seat Information</th>
        <th id="column-four">Vendor</th>
        <th id="column-five">Price</th>
      </tr>
      ${state.eventSearchTM
  .map(Events => {
    return `
    <tr><td>${Events.dates.start.localDate}<br>${timeRemove(Events.dates.start.localTime)}</td><td class="event-name-column">${Events.name}</td><td>${randomSection()} / ${randomRow()} / ${randomSeat()}</td><td><a href="${Events.url}">TM Logo</a></td><td>$${randomPrice()}</td>
    `
  }).join("")}
  ${state.eventSearchSG
  .map(Events => {
    return `
    <tr><td>${fixSGDateTime(Events.datetime_local)}</td><td class="event-name-column">${Events.short_title}</td><td>${randomSection()} / ${randomRow()} / ${randomSeat()}</td><td><a href="${Events.url}">SG Logo</a></td><td>$${randomPrice()}</td>
    `
  }).join("")}
  </table>
  </div>
  <p>All times shown are in PST.</p>
  <p>All prices shown are randomly generated and not reflective of actual prices.</p>
  <p>All seat information shown is randomly generated and not reflective of the actual venues.</p>
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
