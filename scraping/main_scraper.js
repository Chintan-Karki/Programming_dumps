const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

//* Scraped URL
const scraped_url = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";

//* Scraping function
async function scrapeData() {
	try {
		const { data } = await axios.get(scraped_url);
		// Load HTML we fetched in the previous line
		const $ = cheerio.load(data);
		const required_list = $(".plainlist ul li");

		// Initializing the main list
		let countries_list = [];

		required_list.each((idx, el) => {
			const country = { name: "", iso3: "" };

			country.name = $(el).children("a").text();
			country.iso3 = $(el).children("span").text();
			countries_list.push(country);
		});

		// To log all the data in the console
		console.dir(countries_list);

		// write the output in a file
		fs.writeFile(
			"countries_list.json",
			JSON.stringify(countries_list, null, 2),
			(err) => {
				if (err) {
					console.log("err");
					return;
				}
				console.log("Data scraping successful");
			}
		);
	} catch (error) {
		console.log(error);
	}
}

scrapeData();
