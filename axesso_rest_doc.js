
/**
 * @api {get} /amz/amazon-lookup-product Request Product Information
 * @apiVersion 1.1.0
 * @apiName GetProductInformation
 * @apiGroup Amazon
 *
 * @apiHeader Authorization API key required. 
 * @apiHeader Content-Type (application/json).
 * @apiParam {String} url URL for product page (required).
 * @apiParam {String} merchant Id of a specific merchant (optional).
 * @apiParamExample {query} Input-Example
 *    http://api-prd.axesso.de/amz/amazon-lookup-product?url=https://www.amazon.com/dp/B01MQNPOUF
 *
 * @apiSuccess {String} responseStatus 	Response status of request.
 * @apiSuccess {String} responseMessage  Response Message of request.
 * @apiSuccess {String} productTitle  Title of the product.
 * @apiSuccess {String} manufacturer  Manufacturer of the product.
 * @apiSuccess {Int} countReview  Number of reviews.
 * @apiSuccess {Int} answeredQuestions  Number of answered questions.
 * @apiSuccess {String} productRating  Rating of the product.
 * @apiSuccess {String} asin  Asin of the product. 
 * @apiSuccess {Array} sizeSelection Selection of sizes, if available.
 * @apiSuccess {String} soldBy  Retailer selling the product.
 * @apiSuccess {String} fulfilledBy Retailer fulfilling the purchase.
 * @apiSuccess {String} warehouseAvailability Indication of availability.
 * @apiSuccess {Number} retailPrice Retail price.
 * @apiSuccess {Number} price Actual price.
 * @apiSuccess {String} priceShippingInformation Information to the shipping cost.
 * @apiSuccess {String} priceSaving Savings to retail price.
 * @apiSuccess {Array} features List of features of the product.
 * @apiSuccess {Boolean} prime Indication for prime products.
 * @apiSuccess {Array} imageUrlList List containing the urls to the product images.
 * @apiSuccess {String} productDescription Description of the product.
 * @apiSuccess {Object[]} productDetails  List of product details e.g. size and best seller ranking.
 * @apiSuccess {String} productDetails.name  Name of the product detail.
 * @apiSuccess {Array} productDetails.value  Value of the product detail.
 * @apiSuccess {Boolean} addon Indication for addon products.
 *
 * @apiSuccessExample Success-Response-example:
 *     HTTP/1.1 200 OK
 *	{
 *    "responseStatus": "PRODUCT_FOUND_RESPONSE",
 *    "responseMessage": "Product successfully found!",
 *    "productTitle": "Product Title description",
 *    "manufacturer": "Sony",
 *    "countReview": 19,
 *    "answeredQuestions": 4,
 *    "productRating": "4.4 out of 5 stars",
 *    "asin": "B002YOS9NU",
 *    "sizeSelection": []
 *    "soldBy": "Sony",
 *    "fulfilledBy": "Amazon",
 *    "warehouseAvailability": "In Stock.",
 *    "retailPrice": 137.55,
 *    "price": 77.42,
 *    "priceShippingInformation": "free",
 *    "priceSaving": "You Save: $59,58 (43%)",
 *    "features": [
 *      "Premium SOLID Stainless Steel"
 *    ],
 *    "imageUrlList": [
 *       "https://images-na.ssl-images-amazon.com/images/I/71itkDwgyyL._SL1500_.jpg",
 *       "https://images-na.ssl-images-amazon.com/images/I/716b2w17%2BPL._SL1500_.jpg"
 *   ],
 *    "productDescription": "Timberland White Ledge Mid Waterproof aus hochwertigem wasserfestem Vollnarbenleder für Schutz, lange Haltbarkeit und trockene Füße. Herausnehmbares EVA Fußbett für Dämpfung und Komfort. Waterproof Seam Sealed Construction für trockene Füße bei jedem Wetter. B.S.F.P Motion Efficiency System für beste Traktion auf jedem Untergrund. Abriebfeste Gummiaußensohle.",
 *    "productDetails": [
 *		{
 *           "name": "Item Weight",
 *           "value": "2.46 Kg"
 *       },
 * 		{
 *           "name": "Amazon Bestsellers Rank",
 *           "value": "392,852 in Home & Kitchen (See Top 100 in Home & Kitchen) #336 in Dinner Sets"
 *       }
 *	  "prime": false
 *	  "addon": false
 *	}
 *
 *
 * @apiErrorExample Error-Response-400:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "logref": "error",
 *       "message": "Required String parameter 'url' is not present",
 *       "links": []
 *     }
 *
 * @apiError MissingParameter Some required parameter are missing.
 * @apiError ProductNotFound The product for the requested url were not found.
 *
 * @apiErrorExample Error-Response-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "logref": "error",
 *       "message": "could not find product with url: 'https://www.amazon.com/dummy'",
 *       "links": []
 *     }
 *
 * @apiError IncorrectUrl The provided url were incorrect.
 *
 * @apiErrorExample Error-Response-406:
 *     HTTP/1.1 406 Not Acceptable
 *     {
 *       "logref": "error",
 *       "message": "the url parameter is incorrect: 'htts://wwe.amazon.com/dummy'",
 *       "links": []
 *     }
 *
 *
 */
 


 /**
 * @api {get} /amz/amazon-lookup-buy-recommendations Request Recommendations
 * @apiVersion 1.1.0
 * @apiName GetBuyRecommendations
 * @apiGroup Amazon
 *
 * @apiHeader Authorization API key required.
 * @apiHeader Content-Type (application/json).
 * @apiParam {String} url Product URL for which to fetch recommended products (required).
 * @apiParamExample {query} Input-Example
 *    http://api-prd.axesso.de/amz/amazon-lookup-buy-recommendations?url=https://www.amazon.de/dp/B07BBBVWS5
 *
 * @apiSuccess {String} responseStatus 	Response status of request.
 * @apiSuccess {String} responseMessage  Response Message of request.
 * @apiSuccess {Int} numberOfProducts  Number of recommended products.
 * @apiSuccess {Array} buyRecommendations List of recommendations for the requested product.
 *
 * @apiSuccessExample Success-Response-example:
 *     HTTP/1.1 200 OK
 *	{
 *    "responseStatus": "PRODUCT_FOUND_RESPONSE",
 *    "responseMessage": "Product successfully found!",
 *    "numberOfProducts": 9,
 *    "buyRecommendations": [
 *       "B017O0LA6G:",
 *       "B07D86XYP1:",
 *       "B07DM2S9QP:",
 *       "B07111DCTN:",
 *       "B07DM4FDHS:",
 *       "B071JZ3K91:",
 *       "B01E5LFVY4:",
 *       "B01F5LEC8Y:",
 *       "B07DXPQKKV:"
 *	}
 *
 *
 * @apiErrorExample Error-Response-400:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "logref": "error",
 *       "message": "Required String parameter 'url' is not present",
 *       "links": []
 *     }
 *
 * @apiError ProductNotFound The product for the requested url were not found.
 * @apiError MissingParameter Some required parameter are missing.
 *
 * @apiErrorExample Error-Response-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "logref": "error",
 *       "message": "could not find product with url: 'https://www.amazon.com/dummy'",
 *       "links": []
 *     }
 *
 * @apiError IncorrectUrl The provided url were incorrect.
 *
 * @apiErrorExample Error-Response-406:
 *     HTTP/1.1 406 Not Acceptable
 *     {
 *       "logref": "error",
 *       "message": "the url parameter is incorrect: 'htts://wwe.amazon.com/dummy'",
 *       "links": []
 *     }
 *
 */
 
 /**
 * @api {get} /amz/amazon-search-by-keyword Search Products by Keyword
 * @apiVersion 1.1.0
 * @apiName SearchByKeyword
 * @apiGroup Amazon
 *
 * @apiHeader Authorization API key required.
 * @apiHeader Content-Type (application/json).
 * @apiParam {String} keyword Search key (required).
 * @apiParam {String} domainCode Amazon domain, which should be used (required).
 * @apiParam {String} sortBy Sort option. Possible values: "relevanceblender" (default), "price-asc-rank", "price-desc-rank", "review-rank", "date-desc-rank" (optional).
 * @apiParam {int} page Page, which will be returned (Pagination, required).
 * @apiParamExample {query} Input-Example
 *    http://api-prd.axesso.de/amz/amazon-search-by-keyword?keyword=Playstation4&domainCode=com&sortBy=date-desc-rank&page=5
 *
 * @apiSuccess {String} responseStatus 	Response status of request.
 * @apiSuccess {String} responseMessage  Response Message of request.
 * @apiSuccess {String} sortBy Sort option.
 * @apiSuccess {String} domainCode Amazon domain, which was used.
 * @apiSuccess {String} keyword Search key.
 * @apiSuccess {Int} numberOfProducts  Number of results.
 * @apiSuccess {Array} foundProducts List of products found for the keyword.
 * @apiSuccess {Object[]} foundProductDetails List of product details (/amz/amazon-lookup-product)
 *
 * @apiSuccessExample Success-Response-example:
 *     HTTP/1.1 200 OK
 *	{
 *    "responseStatus": "PRODUCT_FOUND_RESPONSE",
 *    "responseMessage": "Product successfully found!",
 *    "sortStrategy": "date-desc-rank",
 *    "domainCode": "com",
 *    "keyword": "Playstation 4",
 *    "numberOfProducts": 10,
 *    "foundProducts": [
 *       "B07KY8VKGK",
 *       "B07BQFYHKG",
 *       "B07KVP1C4N",
 *       "B07KPQRRFY",
 *       "B07KPMFPLN",
 *       "B07KP15HZX",
 *       "B07HHW8C4V",
 *       "B07JHY99XV",
 *       "B07KJXNYK9",
 *       "B07KGJPBKY"
 *	}
 *	  "foundProductDetails" : []
 *
 *
 * @apiErrorExample Error-Response-400:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "logref": "error",
 *       "message": "Required String parameter 'keyword' is not present",
 *       "links": []
 *     }
 *
 * @apiError MissingParameter Some required parameter are missing.
 * @apiError ProductNotFound The product for the requested parameters could not be found.
 *
 * @apiErrorExample Error-Response-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "logref": "error",
 *       "message": "could not find product for parametes domainCode: dummy |  keyword: Playstation 4 |  sortBy: date-desc-rank |  numberOfProducts: 10",
 *       "links": []
 *     }
 *
 *
 */
 
 
 /**
 * @api {get} /amz/amazon-lookup-prices Request all Seller Prices
 * @apiVersion 1.1.0
 * @apiName LookupPrices
 * @apiGroup Amazon
 *
 * @apiHeader Authorization Authorization API key required.
 * @apiHeader Content-Type (application/json).
 * @apiParam {String} asin Asin of the product (required).
 * @apiParam {String} domainCode Amazon domain, which should be used (required).
 * @apiParam {int} numberOfPages Number of pages to return (optional, default 1).
 * @apiParam {String} condition Filter for condition (optional, default New).
 * @apiParamExample {query} Input-Example
 *    http://api-prd.axesso.de/amz/amazon-lookup-prices?asin=B01AC6PRK4&domainCode=de&numberOfPages=1&condition=new
 *
 * @apiSuccess {String} responseStatus 	Response status of request.
 * @apiSuccess {String} responseMessage  Response Message of request.
 * @apiSuccess {String} domainCode Amazon domain, which was used.
 * @apiSuccess {String} asin Asin of the product.
 * @apiSuccess {String} manufacturer  Manufacturer of the product.
 * @apiSuccess {String} currencyCode  Currency code to pay.
 * @apiSuccess {String} currencyAbbreviation  Currency abbreviation to pay.
 * @apiSuccess {Int} countReview  Number of reviews.
 * @apiSuccess {String} productRating  Rating of the product.
 * @apiSuccess {Object[]} offer  Offer from a specific seller.
 * @apiSuccess {String} offer.condition  Condition of product.
 * @apiSuccess {Array} offer.shippingDescription  List of descriptions related to shipping.
 * @apiSuccess {String} offer.fulfilledBy Retailer fulfilling the purchase.
 * @apiSuccess {Number} offer.price Actual price.
 * @apiSuccess {Number} offer.shippingPrice Shipping price.
 * @apiSuccess {String} offer.sellerName  Name of the seller.
 * @apiSuccess {String} offer.sellerRating  Rating of the seller in stars.
 * @apiSuccess {String} offer.sellerRatingPercentage  Rating of the seller in percentage.
 * @apiSuccess {Boolean} offer.prime Indication for prime products.

 *
 * @apiSuccessExample Success-Response-example:
 *     HTTP/1.1 200 OK
 *{
 *    "responseStatus": "PRODUCT_FOUND_RESPONSE",
 *    "responseMessage": "Product successfully found!",
 *    "domainCode": "de",
 *    "asin": "B01AC6PRK4",
 *    "manufacturer": "von Nike",
 *    "currencyCode": "€",
 *    "currencyAbbreviation": "EUR",
 *    "countReview": 471,
 *    "productRating": "4.5 von 5 Sternen",
 *    "offers": [
 *        {
 *            "condition": "Neu",
 *            "shippingDescription": [
 *                "Versandtarife und Rücknahmerichtlinien."
 *            ],
 *            "fulfilledBy": "Amazon.de",
 *            "price": 14.6,
 *            "shippingPrice": 0,
 *            "sellerName": "Amazon.de",
 *            "sellerRating": null,
 *            "sellerRatingPercentage": 0,
 *            "prime": true
 *        },
 *        {
 *            "condition": "Neu",
 *            "shippingDescription": [
 *                "Versand aus Deutschland",
 *                "Versandtarife"
 *            ],
 *            "fulfilledBy": "sportxshop",
 *            "price": 11.2,
 *            "shippingPrice": 5,
 *            "sellerName": "sportxshop",
 *            "sellerRating": "4,5 von 5 Sternen",
 *            "sellerRatingPercentage": 92,
 *            "prime": false
 *        }
 *	]
 *}	
 *
 *
 * @apiErrorExample Error-Response-400:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "logref": "error",
 *       "message": "Required String parameter 'asin' is not present",
 *       "links": []
 *     }
 *
 * @apiError MissingParameter Some required parameter are missing.
 * @apiError ProductNotFound The product for the requested parameters could not be found.
 *
 * @apiErrorExample Error-Response-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "logref": "error",
 *       "message": "could not find product for parametes asin: dummy |  domainCode: com
 *       "links": []
 *     }
 *
 *
 */
 
 
 /**
 * @api {get} /amz/sort-options Request Sort Options
 * @apiVersion 1.1.0
 * @apiName SortOptions
 * @apiGroup Amazon
 *
 * @apiHeader Authorization No Auth in development environment. Token in production mode.
 * @apiHeader Content-Type (application/json).
 * @apiParamExample {query} Input-Example
 *    http://api.axesso.de/amz/sort-options
 *
 * @apiSuccess {String} responseStatus 	Response status of request.
 * @apiSuccess {String} responseMessage  Response Message of request.
 * @apiSuccess {Int} resultSize  Number of sort options available.
 * @apiSuccess {Array} sortOptions List of available sort options.
 *
 * @apiSuccessExample Success-Response-example:
 *     HTTP/1.1 200 OK
 *	{
 *    "responseStatus": "OPTIONS_PROVIDED_RESPONSE",
 *    "responseMessage": "Successfully provided sort options!",
 *    "resultSize": 5,
 *    "sortOptions": [
 *  {
 *           "order": 0,
 *           "sortName": "relevanceblender",
 *           "strategy": "AMAZON_FEATURED"
 *       },
 *       {
 *           "order": 1,
 *           "sortName": "price-asc-rank",
 *           "strategy": "BEST_PRICE"
 *       },
 *       {
 *           "order": 2,
 *           "sortName": "price-desc-rank",
 *           "strategy": "WORST_PRICE"
 *       },
 *       {
 *           "order": 3,
 *           "sortName": "review-rank",
 *           "strategy": "AVG_CUSTOMER_REVIEW"
 *       },
 *       {
 *           "order": 4,
 *           "sortName": "date-desc-rank",
 *           "strategy": "NEW_ARRIVAL"
 *       }
 *	 }
 *
 *
 *
 *
 */