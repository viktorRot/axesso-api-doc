define({ "api": [
  {
    "type": "get",
    "url": "/amz/amazon-lookup-buy-recommendations",
    "title": "Request Recommendations",
    "version": "1.1.0",
    "name": "GetBuyRecommendations",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Product URL for which to fetch recommended products (required).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/amz/amazon-lookup-buy-recommendations?url=https://www.amazon.de/dp/B07BBBVWS5",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseStatus",
            "description": "<p>Response status of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response Message of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "numberOfProducts",
            "description": "<p>Number of recommended products.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "buyRecommendations",
            "description": "<p>List of recommendations for the requested product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"numberOfProducts\": 9,\n   \"buyRecommendations\": [\n      \"B017O0LA6G:\",\n      \"B07D86XYP1:\",\n      \"B07DM2S9QP:\",\n      \"B07111DCTN:\",\n      \"B07DM4FDHS:\",\n      \"B071JZ3K91:\",\n      \"B01E5LFVY4:\",\n      \"B01F5LEC8Y:\",\n      \"B07DXPQKKV:\"\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response-400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"logref\": \"error\",\n  \"message\": \"Required String parameter 'url' is not present\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-404:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product with url: 'https://www.amazon.com/dummy'\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-406:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"logref\": \"error\",\n  \"message\": \"the url parameter is incorrect: 'htts://wwe.amazon.com/dummy'\",\n  \"links\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The product for the requested url were not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>Some required parameter are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectUrl",
            "description": "<p>The provided url were incorrect.</p>"
          }
        ]
      }
    },
    "filename": "./axesso_rest_doc.js",
    "groupTitle": "Amazon"
  },
  {
    "type": "get",
    "url": "/amz/amazon-lookup-product",
    "title": "Request Product Information",
    "version": "1.1.0",
    "name": "GetProductInformation",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL for product page (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "merchant",
            "description": "<p>Id of a specific merchant (optional).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/amz/amazon-lookup-product?url=https://www.amazon.com/dp/B01MQNPOUF",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseStatus",
            "description": "<p>Response status of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response Message of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productTitle",
            "description": "<p>Title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Manufacturer of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "countReview",
            "description": "<p>Number of reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "answeredQuestions",
            "description": "<p>Number of answered questions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productRating",
            "description": "<p>Rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asin",
            "description": "<p>Asin of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "sizeSelection",
            "description": "<p>Selection of sizes, if available.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "soldBy",
            "description": "<p>Retailer selling the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fulfilledBy",
            "description": "<p>Retailer fulfilling the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "warehouseAvailability",
            "description": "<p>Indication of availability.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "retailPrice",
            "description": "<p>Retail price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Actual price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "priceShippingInformation",
            "description": "<p>Information to the shipping cost.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "priceSaving",
            "description": "<p>Savings to retail price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "features",
            "description": "<p>List of features of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "prime",
            "description": "<p>Indication for prime products.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "imageUrlList",
            "description": "<p>List containing the urls to the product images.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>Description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "productDetails",
            "description": "<p>List of product details e.g. size and best seller ranking.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productDetails.name",
            "description": "<p>Name of the product detail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "productDetails.value",
            "description": "<p>Value of the product detail.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "addon",
            "description": "<p>Indication for addon products.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"productTitle\": \"Product Title description\",\n   \"manufacturer\": \"Sony\",\n   \"countReview\": 19,\n   \"answeredQuestions\": 4,\n   \"productRating\": \"4.4 out of 5 stars\",\n   \"asin\": \"B002YOS9NU\",\n   \"sizeSelection\": []\n   \"soldBy\": \"Sony\",\n   \"fulfilledBy\": \"Amazon\",\n   \"warehouseAvailability\": \"In Stock.\",\n   \"retailPrice\": 137.55,\n   \"price\": 77.42,\n   \"priceShippingInformation\": \"free\",\n   \"priceSaving\": \"You Save: $59,58 (43%)\",\n   \"features\": [\n     \"Premium SOLID Stainless Steel\"\n   ],\n   \"imageUrlList\": [\n      \"https://images-na.ssl-images-amazon.com/images/I/71itkDwgyyL._SL1500_.jpg\",\n      \"https://images-na.ssl-images-amazon.com/images/I/716b2w17%2BPL._SL1500_.jpg\"\n  ],\n   \"productDescription\": \"Timberland White Ledge Mid Waterproof aus hochwertigem wasserfestem Vollnarbenleder für Schutz, lange Haltbarkeit und trockene Füße. Herausnehmbares EVA Fußbett für Dämpfung und Komfort. Waterproof Seam Sealed Construction für trockene Füße bei jedem Wetter. B.S.F.P Motion Efficiency System für beste Traktion auf jedem Untergrund. Abriebfeste Gummiaußensohle.\",\n   \"productDetails\": [\n\t\t{\n          \"name\": \"Item Weight\",\n          \"value\": \"2.46 Kg\"\n      },\n\t\t{\n          \"name\": \"Amazon Bestsellers Rank\",\n          \"value\": \"392,852 in Home & Kitchen (See Top 100 in Home & Kitchen) #336 in Dinner Sets\"\n      }\n\t  \"prime\": false\n\t  \"addon\": false\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response-400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"logref\": \"error\",\n  \"message\": \"Required String parameter 'url' is not present\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-404:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product with url: 'https://www.amazon.com/dummy'\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-406:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"logref\": \"error\",\n  \"message\": \"the url parameter is incorrect: 'htts://wwe.amazon.com/dummy'\",\n  \"links\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>Some required parameter are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The product for the requested url were not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectUrl",
            "description": "<p>The provided url were incorrect.</p>"
          }
        ]
      }
    },
    "filename": "./axesso_rest_doc.js",
    "groupTitle": "Amazon"
  },
  {
    "type": "get",
    "url": "/amz/amazon-lookup-prices",
    "title": "Request all Seller Prices",
    "version": "1.1.0",
    "name": "LookupPrices",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization API key required.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asin",
            "description": "<p>Asin of the product (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domainCode",
            "description": "<p>Amazon domain, which should be used (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "numberOfPages",
            "description": "<p>Number of pages to return (optional, default 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>Filter for condition (optional, default New).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/amz/amazon-lookup-prices?asin=B01AC6PRK4&domainCode=de&numberOfPages=1&condition=new",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseStatus",
            "description": "<p>Response status of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response Message of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domainCode",
            "description": "<p>Amazon domain, which was used.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "asin",
            "description": "<p>Asin of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Manufacturer of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currencyCode",
            "description": "<p>Currency code to pay.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currencyAbbreviation",
            "description": "<p>Currency abbreviation to pay.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "countReview",
            "description": "<p>Number of reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "productRating",
            "description": "<p>Rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "offer",
            "description": "<p>Offer from a specific seller.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "offer.condition",
            "description": "<p>Condition of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "offer.shippingDescription",
            "description": "<p>List of descriptions related to shipping.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "offer.fulfilledBy",
            "description": "<p>Retailer fulfilling the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offer.price",
            "description": "<p>Actual price.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "offer.shippingPrice",
            "description": "<p>Shipping price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "offer.sellerName",
            "description": "<p>Name of the seller.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "offer.sellerRating",
            "description": "<p>Rating of the seller in stars.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "offer.sellerRatingPercentage",
            "description": "<p>Rating of the seller in percentage.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "offer.prime",
            "description": "<p>Indication for prime products.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"domainCode\": \"de\",\n   \"asin\": \"B01AC6PRK4\",\n   \"manufacturer\": \"von Nike\",\n   \"currencyCode\": \"€\",\n   \"currencyAbbreviation\": \"EUR\",\n   \"countReview\": 471,\n   \"productRating\": \"4.5 von 5 Sternen\",\n   \"offers\": [\n       {\n           \"condition\": \"Neu\",\n           \"shippingDescription\": [\n               \"Versandtarife und Rücknahmerichtlinien.\"\n           ],\n           \"fulfilledBy\": \"Amazon.de\",\n           \"price\": 14.6,\n           \"shippingPrice\": 0,\n           \"sellerName\": \"Amazon.de\",\n           \"sellerRating\": null,\n           \"sellerRatingPercentage\": 0,\n           \"prime\": true\n       },\n       {\n           \"condition\": \"Neu\",\n           \"shippingDescription\": [\n               \"Versand aus Deutschland\",\n               \"Versandtarife\"\n           ],\n           \"fulfilledBy\": \"sportxshop\",\n           \"price\": 11.2,\n           \"shippingPrice\": 5,\n           \"sellerName\": \"sportxshop\",\n           \"sellerRating\": \"4,5 von 5 Sternen\",\n           \"sellerRatingPercentage\": 92,\n           \"prime\": false\n       }\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response-400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"logref\": \"error\",\n  \"message\": \"Required String parameter 'asin' is not present\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-404:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parametes asin: dummy |  domainCode: com\n  \"links\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>Some required parameter are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The product for the requested parameters could not be found.</p>"
          }
        ]
      }
    },
    "filename": "./axesso_rest_doc.js",
    "groupTitle": "Amazon"
  },
  {
    "type": "get",
    "url": "/amz/amazon-search-by-keyword",
    "title": "Search Products by Keyword",
    "version": "1.1.0",
    "name": "SearchByKeyword",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Search key (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domainCode",
            "description": "<p>Amazon domain, which should be used (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Sort option. Possible values: &quot;relevanceblender&quot; (default), &quot;price-asc-rank&quot;, &quot;price-desc-rank&quot;, &quot;review-rank&quot;, &quot;date-desc-rank&quot; (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Page, which will be returned (Pagination, required).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/amz/amazon-search-by-keyword?keyword=Playstation4&domainCode=com&sortBy=date-desc-rank&page=5",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseStatus",
            "description": "<p>Response status of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response Message of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Sort option.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "domainCode",
            "description": "<p>Amazon domain, which was used.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Search key.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "numberOfProducts",
            "description": "<p>Number of results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "foundProducts",
            "description": "<p>List of products found for the keyword.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "foundProductDetails",
            "description": "<p>List of product details (/amz/amazon-lookup-product)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"sortStrategy\": \"date-desc-rank\",\n   \"domainCode\": \"com\",\n   \"keyword\": \"Playstation 4\",\n   \"numberOfProducts\": 10,\n   \"foundProducts\": [\n      \"B07KY8VKGK\",\n      \"B07BQFYHKG\",\n      \"B07KVP1C4N\",\n      \"B07KPQRRFY\",\n      \"B07KPMFPLN\",\n      \"B07KP15HZX\",\n      \"B07HHW8C4V\",\n      \"B07JHY99XV\",\n      \"B07KJXNYK9\",\n      \"B07KGJPBKY\"\n\t}\n\t  \"foundProductDetails\" : []",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response-400:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"logref\": \"error\",\n  \"message\": \"Required String parameter 'keyword' is not present\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-404:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parametes domainCode: dummy |  keyword: Playstation 4 |  sortBy: date-desc-rank |  numberOfProducts: 10\",\n  \"links\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameter",
            "description": "<p>Some required parameter are missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProductNotFound",
            "description": "<p>The product for the requested parameters could not be found.</p>"
          }
        ]
      }
    },
    "filename": "./axesso_rest_doc.js",
    "groupTitle": "Amazon"
  },
  {
    "type": "get",
    "url": "/amz/sort-options",
    "title": "Request Sort Options",
    "version": "1.1.0",
    "name": "SortOptions",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>No Auth in development environment. Token in production mode.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>(application/json).</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api.axesso.de/amz/sort-options",
          "type": "query"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseStatus",
            "description": "<p>Response status of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "responseMessage",
            "description": "<p>Response Message of request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "resultSize",
            "description": "<p>Number of sort options available.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "sortOptions",
            "description": "<p>List of available sort options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"OPTIONS_PROVIDED_RESPONSE\",\n   \"responseMessage\": \"Successfully provided sort options!\",\n   \"resultSize\": 5,\n   \"sortOptions\": [\n {\n          \"order\": 0,\n          \"sortName\": \"relevanceblender\",\n          \"strategy\": \"AMAZON_FEATURED\"\n      },\n      {\n          \"order\": 1,\n          \"sortName\": \"price-asc-rank\",\n          \"strategy\": \"BEST_PRICE\"\n      },\n      {\n          \"order\": 2,\n          \"sortName\": \"price-desc-rank\",\n          \"strategy\": \"WORST_PRICE\"\n      },\n      {\n          \"order\": 3,\n          \"sortName\": \"review-rank\",\n          \"strategy\": \"AVG_CUSTOMER_REVIEW\"\n      },\n      {\n          \"order\": 4,\n          \"sortName\": \"date-desc-rank\",\n          \"strategy\": \"NEW_ARRIVAL\"\n      }\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "./axesso_rest_doc.js",
    "groupTitle": "Amazon"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_ROTAEV_Desktop_Viktor_DEV_Service_Access_git_axesso_axesso_api_doc_doc_main_js",
    "groupTitle": "C__Users_ROTAEV_Desktop_Viktor_DEV_Service_Access_git_axesso_axesso_api_doc_doc_main_js",
    "name": ""
  }
] });
