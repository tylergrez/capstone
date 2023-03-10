import html from "html-literal";

export default () => html`<h1 class="written-content" id="contact-header">Contact OneTicket</h1>
<p class="written-content" id="contact-about">Descriptive paragraph about page</p>
<form action="https://formspree.io/f/myyajkka" method="POST">
<p class="written-content" id="contact-input-name"><label>Name:&nbsp;</label><input type="text" name="name" placeholder="Enter Name" class="contact-input"/></p>
<p class="written-content" id="contact-input-email"><label>Email:&nbsp;</label><input type="email" name=
"email" placeholder="Enter Email" class="contact-input"/></p>
<p class="written-content" id="contact-input-phone"><label>Phone:&nbsp;</label><input type="phone" name="phone" placeholder="Enter Phone Number (optional)" class="contact-input"/></p>
<p class="written-content" id="contact-input-text"><label></label><textarea id="contact-input-text" name="free-text"text-align="center" cols="60" rows="10" placeholder="Tell us a little bit about your inquiry."></textarea></p>
<div id="contact-submit-button" ><button type="submit">Submit</button></div>
</form>
`;
// add code to empty input boxes after submission
