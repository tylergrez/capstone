${state.eventSearch
  .map(event => {
    return `
    <tr><td>${event.eventName}${event.eventDate}${event.eventTime}</td><td>Seat Info</td><td>Vendor</td><td>Price</td>
    `
  }).join("")}
// using this file for keeping my non-working code and so it can be worked on.
