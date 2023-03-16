${state.eventSearch
  .map(event => {
    return `
    <tr><td>${event.eventName}${event.eventDate}${event.eventTime}</td><td>Seat Info</td><td>Vendor</td><td>Price</td>
    `
  }).join("")}

  <p class="written-content" id="contact-input-name"><label>Name:&nbsp;</label><input type="text" name="name" placeholder="Enter Name" class="contact-input"/></p>
<p class="written-content" id="contact-input-email"><label>Email:&nbsp;</label><input type="email" name=
"email" placeholder="Enter Email" class="contact-input"/></p>
<p class="written-content" id="contact-input-phone"><label>Phone:&nbsp;</label><input type="phone" name="phone" placeholder="Enter Phone Number (optional)" class="contact-input"/></p>
<p class="written-content" id="contact-input-text"><label></label><textarea id="contact-input-text" name="free-text"text-align="center" cols="60" rows="10" placeholder="Tell us a little bit about your inquiry."></textarea></p>
<div id="contact-submit-button" ><button type="submit">Submit</button></div>
// using this file for keeping my non-working code and so it can be worked on.
