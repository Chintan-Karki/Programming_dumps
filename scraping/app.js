const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

// Creating a basic markup
const testMarkup = `
    <ul class = "fruits">
        <li class="fruit_mango">Mango</li>
        <li class="fruit_apple">Apple</li>
    </ul>
`

// Loading the markup in cheerio
const $ = cheerio.load(testMarkup);
//* console.log(pretty($.html()));

const mango = $(".fruit_mango");
console.log(mango.html());  // Mango

const apple = $(".fruit_apple");
console.log(apple.attr("class"));

const listItems = $("li");
console.log(listItems.length);

// Getting each list item from markup using .each() function
listItems.each((index, el) => {
    console.log($(el).text());
    // console.log($(index))
})

// Appending and prepending ==> Cheerio
const ul = $("ul");
ul.append("<li>Banana</li>");
ul.prepend("<li>Pineapple</li>");
console.log(pretty($.html()))