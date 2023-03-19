import html from "html-literal";

import Logo from "../../assets/img/logo-no-background.png" ;

export default () => html `<section id="about">
<p class="written-content" id="about-image"><img class="main-logo" alt="OneTicket" src=${Logo}></p>
<p class="written-content" id="about-paragraph">
  OneTicket is an application devoted to creating a one-stop shop for all event-goers. The goal
  is to give fans an easy way to shop for the best deals on tickets. By aggregating this data
  for the fans, they can quickly search and browse all the events they may be interested in.
  Once they've filtered, sorted and selected an offer that interests them, they can then take a
  trip to the vendor's site to purchase the tickets.
  </p></section>`;
