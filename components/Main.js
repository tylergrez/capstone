import html from "html-literal";

import * as views from "./views";

// using the * to bring all exports from the views index.js

export default (state) => html`
${views[state.view](state)}
`;
