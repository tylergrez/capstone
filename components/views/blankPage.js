<div id="event-search-table-content">
${st.eventSearch
.map(event => {
  return `
  <tr><td>${event.eventName}${event.eventDate}${event.eventTime}</td><td>Seat Info</td><td>Vendor</td><td>Price</td>
  `
}).join("")}
</div>

// using this file for keeping my non-working code and so it can be worked on.
