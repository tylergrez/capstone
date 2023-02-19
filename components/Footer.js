import html from "html-literal";

export default () => html `<footer class="footer">
  <labeL>Sign up for our newsletter!</labeL><form  action="https://formspree.io/f/mrgvpagp" method="POST">
    <input type="email" name="email" placeholder="Enter email"><button type="submit">Submit</button>
    </form></footer>`;

