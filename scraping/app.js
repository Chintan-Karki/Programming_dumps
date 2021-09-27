const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const testMarkup = `
    <ul class = "fruits">
        <li class="fruit_mango">Mango</li>
        <li class="fruit_apple">Apple</li>
    </ul>
`

const $ = cheerio.load(testMarkup);
// console.log(pretty($.html()));

const mango = $(".fruit_mango");
console.log(mango.html()); // Mango

const apple = $(".fruit_apple");
console.log(apple.attr("class"));

const listItems = $("li");
console.log(listItems.length);
listItems.each((index, el) => {
    console.log($(el).text());
    // console.log($(index))
})