import html from "html-literal";
import { isNaN } from "lodash";
import tmLogo from "../../assets/img/tm-logo.png";
import sgLogo from "../../assets/img/sg-logo-2.png";

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
  let timeSplit = time.split(":");
  let timePop = timeSplit.pop();
  console.log(timePop);
  let timeJoin = timeSplit.join(":");
  return date + "<br>" + timeJoin;
}

export default state =>
html`
<div id="search-bar">
<input type="search" class="event-search" name="event-input" placeholder="Search team, artist, location or event" />
</div>
<div id="results">
  <table id="resultsTable" class="table-sortable">
    <thead>
    <tr id="headersRow" class="header-border">
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
    <tr class="border"><td style="text-align: center">${Events.dates.start.localDate}<br>${timeRemove(Events.dates.start.localTime)}</td><td style="text-align: center">${Events._embedded.venues[0].city.name}, ${Events._embedded.venues[0].state.stateCode}</td><td class="event-name-column" style="text-align: center">${Events.name}</td><td style="text-align: center">${randomSection()} / ${randomRow()} / ${randomSeat()}</td><td style="text-align: center"><a href="${Events.url}"><img id="tm-table-logo" src="${tmLogo}"></a></td><td style="text-align: center">$${randomPrice()}</td>
    `
  }).join("")}
  ${state.eventSearchSG
  .map(Events => {
    return `
    <tr class="border"><td style="text-align: center">${fixSGDateTime(Events.datetime_local)}</td><td style="text-align: center">${Events.venue.city}, ${Events.venue.state}</td><td class="event-name-column" style="text-align: center">${Events.title}</td><td style="text-align: center">${randomSection()} / ${randomRow()} / ${randomSeat()}</td><td style="text-align: center"><a href="${Events.url}"><img id="sg-table-logo" src="${sgLogo}"></a></td><td style="text-align: center">$${randomPrice()}</td>
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
  <pr>All shown events from Ticketmaster are United States only.</pr>
  <br>
  <br>
  <br>
  <br>
  </div>
`;



