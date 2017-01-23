const url = "https://www.costco.com.tw/Computers-%26-Office/Laptops/Laptops/HP-13-3%22-Envy-Notebook-13-d114TU-/p/111793";

/**
 * Loading dependent library
 */
const request = require("request");
const cheerio = require("cheerio");

request(url, function(error, response, body){

	if (!error && response.statusCode == 200) {
		let $ = cheerio.load(body)

		var title 			= $("title").text().trim();
		var serial_number 	= "#"+$(".item-number",".product-name").text().trim().split("#")[1];
		var $price_sections = $(".price-sections");
		var origin_price 	= $price_sections.find(".price-value").text().trim();
		var discount_value 	= $price_sections.find(".discount-value").text().trim();
		var you_pay_value 	= $price_sections.find(".you-pay-value").text().trim();

		console.log("title: "+ title);
		console.log("serial number: "+serial_number);
		console.log("origin price: "+origin_price);
		console.log("discount: "+discount_value);
		console.log("pay: "+ you_pay_value);
	}
});