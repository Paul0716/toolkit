// const url = "https://www.costco.com.tw/Computers-%26-Office/Laptops/Laptops/HP-13-3%22-Envy-Notebook-13-d114TU-/p/111793";

const url = "https://www.costco.com.tw/Health-%26-Beauty/Vitamins%2C-Herbals-%26-Dietary-Supplements/QUAKER-Ginseng-Essence-Gift-Set-%28Ginseng-60ml-X-30-%2B-Bird%27s-Nest-70g-X-1%29-Pack-%28Min-order-of-2-Packs%29/p/112408";
/**
 * Loading dependent library
 */
const request = require("request");
const cheerio = require("cheerio");
const _ = require("lodash");

request(url, function(error, response, body){


	if (!error && response.statusCode == 200) {
		let $ = cheerio.load(body)
		var options = [];

		var title 			= $("title").text().split("|")[0].trim();
		var serial_number 	= "#"+$(".item-number",".product-name").text().trim().split("#")[1];
		var $price_sections = $(".price-sections");
		var origin_price 	= $price_sections.find(".price-value").text().trim();
		var discount_value 	= $price_sections.find(".discount-value").text().trim();
		var you_pay_value 	= $price_sections.find(".you-pay-value").text().trim();
		var min_qty 		= $price_sections.find(".qty-selector > option:first-child").text().trim();
		var opts 			= $(".variant-section").find("li > span");
		_.forEach(opts, function(opt){
			var text = $(opt).text();
			options.push( text );	
		});
		


		console.log("title: "+ title);
		console.log("serial number: "+serial_number);
		console.log("origin price: "+origin_price);
		console.log("discount: "+discount_value);
		console.log("pay: "+ you_pay_value);
		console.log("min qty: "+min_qty);
		_.forEach(options, function(option){
			console.log("option:"+option);
		});
		

	}
});