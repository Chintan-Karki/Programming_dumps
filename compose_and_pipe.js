// Required 'Lodash' npm package
// Compose and pipe
import pkg from "lodash/fp.js";
const { compose, pipe } = pkg;

const trim = (string) => string.trim();
const toLWC = (string) => string.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrapInType = (type) => (str) => `<${type}>${str}</${type}>`;

console.log(wrapInDiv(toLWC(trim("Hello"))));

const transformCompose = compose(wrapInDiv, toLWC, trim);
const tansformPipe = pipe(trim, toLWC, wrapInDiv);
const tansformPipeSpan = pipe(trim, toLWC, wrapInType("span"));
const tansformPipeDiv = pipe(trim, toLWC, wrapInType("div"));

const app = transformCompose("Hello");
const app2 = tansformPipe("Hello Again");
const app3 = tansformPipeSpan("Hello Again from Span");
const app4 = tansformPipeDiv("Hello Again from Span");

console.log(app);
console.log(app2);
console.log(app3);
console.log(app4);
