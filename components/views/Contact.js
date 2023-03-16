import html from "html-literal";

export default () => html`<h1 class="written-content" id="contact-header">Contact OneTicket</h1>
<p class="written-content" id="contact-about">Please feel free to fill out the contact form below with any comments, questions or concerns.</p>
<form id="contact-form" action="" method="POST">
<div class="written-content"><label for="name">Name:&nbsp;</label><input type="text" name="name" value="" placeholder="Enter Name" class="contact-input" required/></div><br>
<div class="written-content"><label for="email">Email:&nbsp;</label><input type="text" name=
"email" placeholder="Enter Email" class="contact-input" required/></div><br>
<div class="written-content"><label for="phone">Phone:&nbsp;</label><input type="text" name="phone" placeholder="Enter Phone Number (optional)" class="contact-input"/></div><br>
<div class="written-content"><label for="freeText"></label><textarea id="contact-input-text" name="freeText" text-align="center" cols="60" rows="10" placeholder="Tell us a little bit about your inquiry." required></textarea></div><br>
<div class="written-content"><button type="submit" name="submit" value="Submit Contact Information">Submit</button></div>
</form>
`;
// add code to empty input boxes after submission
