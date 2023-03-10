import html from "html-literal";

export default st => html`<div id="search-bar">
<input type="text" placeholder="Search team, zip, event, venue or date" style="width: 500px; height: 25px;" />
</div>
<div id="results">
  <table id="resultsTable">
    <div id="tableHeads">
      <tr id="headersRow">
        <th id="column-one">Event & Date</th>
        <th id="column-two">Seat Information</th>
        <th id="column-three">Vendor</th>
        <th id="column-four">Price</th>
      </tr>
    </div>
  </table>
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
