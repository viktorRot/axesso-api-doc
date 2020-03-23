define({ "api": [
  {
    "type": "get",
    "url": "alb.axesso.de/alb/alibaba-lookup-product",
    "title": "Request Product Information",
    "version": "1.1.0",
    "name": "GetProductInformation",
    "group": "Alibaba",
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
            "field": "URL",
            "description": "<p>URL for product page (required).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-alb.axesso.de/alb/alibaba-lookup-product?url=https://www.alibaba.com/product-detail/USB-PXN-0082-Arcade-Joystick-Wired_60612038161.html?spm=a2700.details.deiletai6.29.58cc55e3i5R8ml",
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
            "type": "Array",
            "optional": false,
            "field": "imageUrlList",
            "description": "<p>List containing the urls to the product images.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "buyersCount",
            "description": "<p>Number of buyers.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "colors",
            "description": "<p>List of color variations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "sizes",
            "description": "<p>List of size variations.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "prices",
            "description": "<p>List of price details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prices.piecesRange",
            "description": "<p>Range of pieces.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prices.price",
            "description": "<p>Actual price of the pieces.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "samplePrice",
            "description": "<p>Actual price of sample.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>Title of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reviews",
            "description": "<p>List of reviews details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.text",
            "description": "<p>Content text of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.date",
            "description": "<p>Date of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.rating",
            "description": "<p>Rating of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.country",
            "description": "<p>Country of reviewer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n  \"responseMessage\": \"Product successfully found!\",\n  \"productTitle\": \"USB PXN-0082 Arcade Joystick Wired Arcade Gaming Controller for Nintendo Switch PC Flight Games Joystick\",\n  \"imageUrlList\": [\n      \"//sc02.alicdn.com/kf/U082481c3a9234aae900ae945bb6efe99v/USB-PXN-0082-Arcade-Joystick-Wired-Arcade.jpg\",\n      \"//sc01.alicdn.com/kf/HTB1SRiYjOCYBuNkSnaVq6AMsVXaK/USB-PXN-0082-Arcade-Joystick-Wired-Arcade.jpg\"\n  ],\n  \"buyersCount\": 4,\n  \"colors\": [],\n  \"sizes\": [],\n  \"prices\": [\n      {\n          \"piecesRange\": \"2-9 Pieces\",\n          \"price\": \"$19.99\"\n      },\n      {\n          \"piecesRange\": \">=50 Pieces\",\n          \"price\": \"$16.66\"\n      }\n  ],\n  \"samplePrice\": 19.99,\n  \"manufacturer\": \"Shenzhen Mystyle Import & Export Co., Ltd.\",\n  \"reviews\": [\n      {\n          \"text\": \"Great, thank you so much.\",\n          \"date\": \"21 Oct 2019\",\n         \"rating\": 5,\n          \"country\": \"Japan\"\n      }\n  ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parameter: 'https://www.alibaba.com/product-detail/Factory-direct-tpu-cell-phone-case_62012846556.html'\",\n  \"links\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response-406:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"logref\": \"error\",\n  \"message\": \"the url parameter is incorrect: 'ttps://www.alibaba.com/product-detail/USB-PXN-0082-Arcade-Joystick-Wired_60612038161.html?spm=a2700.details.deiletai6.29.58cc55e3i5R8ml'\",\n  \"links\": []\n}",
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
    "groupTitle": "Alibaba"
  },
  {
    "type": "get",
    "url": "alb.axesso.de/alb/alibaba-search-by-keyword",
    "title": "Search Products by Keyword",
    "version": "1.1.0",
    "name": "SearchByKeyword",
    "group": "Alibaba",
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
            "field": "type",
            "description": "<p>Type of invocation. Possible values are &quot;upc&quot; or &quot;text&quot; (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Page, which will be returned (Pagination, required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Sort option. Possible values: &quot;best_match&quot; (default), &quot;transaction_level&quot;, &quot;response_rate&quot; (optional).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-alb.axesso.de/alb/alibaba-search-by-keyword?keyword=Playstation 4&page=1&type=text&sortBy=best_match",
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
            "description": "<p>Domain of the Alibaba site.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"sortStrategy\": \"best_match\",\n   \"domainCode\": \"com\",\n   \"keyword\": \"Playstation 4\",\n   \"numberOfProducts\": 20,\n   \"foundProducts\": [\n      \"//www.alibaba.com/product-detail/Vertical-Stand-Cooling-fan-For-Playstation_60696308743.html\",\n      \"//www.alibaba.com/product-detail/High-Quality-Wireless-Controller-V4-0_62283552682.html\",\n      \"//www.alibaba.com/product-detail/Spiderman-For-PS4-Vinyl-Skin-For_62214111002.html\",\n      \"//www.alibaba.com/product-detail/TOP-BOTTOM-CASE-For-PLAYSTATION-4_60821222376.html\",\n      \"//www.alibaba.com/product-detail/Wireless-Game-Controller-For-Ps4-Controller_62359603665.html\",\n      \"//www.alibaba.com/product-detail/Accessories-Smart-Phone-Clip-Clamp-Stand_62151739655.html\",\n      \"//www.alibaba.com/product-detail/PS4-Controller-Charger-Charging-Station-Dual_62119125798.html\",\n\t\t]\n\t}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parametes keyword: Playstatasdion |  sortBy: best_match,\n  \"links\": []\n}",
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
    "groupTitle": "Alibaba"
  },
  {
    "type": "get",
    "url": "prd.axesso.de/amz/amazon-lookup-buy-recommendations",
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
    "url": "prd.axesso.de/amz/amazon-lookup-product",
    "title": "Request Product Information",
    "version": "1.2.0",
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
            "type": "String",
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
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "pantry",
            "description": "<p>Indication for pantry products.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "minimalQuantity",
            "description": "<p>Minimum quantity to purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "dealPrice",
            "description": "<p>Price if product is a deal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "salePrice",
            "description": "<p>Price if product is on sale.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"productTitle\": \"Product Title description\",\n   \"manufacturer\": \"Sony\",\n   \"countReview\": 19,\n   \"answeredQuestions\": 4,\n   \"productRating\": \"4.4 out of 5 stars\",\n   \"asin\": \"B002YOS9NU\",\n   \"sizeSelection\": []\n   \"soldBy\": \"Sony\",\n   \"fulfilledBy\": \"Amazon\",\n   \"warehouseAvailability\": \"In Stock.\",\n   \"retailPrice\": 137.55,\n   \"price\": 77.42,\n   \"priceShippingInformation\": \"free\",\n   \"priceSaving\": \"You Save: $59,58 (43%)\",\n   \"features\": [\n     \"Premium SOLID Stainless Steel\"\n   ],\n   \"imageUrlList\": [\n      \"https://images-na.ssl-images-amazon.com/images/I/71itkDwgyyL._SL1500_.jpg\",\n      \"https://images-na.ssl-images-amazon.com/images/I/716b2w17%2BPL._SL1500_.jpg\"\n  ],\n   \"productDescription\": \"Timberland White Ledge Mid Waterproof aus hochwertigem wasserfestem Vollnarbenleder für Schutz, lange Haltbarkeit und trockene Füße. Herausnehmbares EVA Fußbett für Dämpfung und Komfort. Waterproof Seam Sealed Construction für trockene Füße bei jedem Wetter. B.S.F.P Motion Efficiency System für beste Traktion auf jedem Untergrund. Abriebfeste Gummiaußensohle.\",\n   \"productDetails\": [\n\t\t{\n          \"name\": \"Item Weight\",\n          \"value\": \"2.46 Kg\"\n      },\n\t\t{\n          \"name\": \"Amazon Bestsellers Rank\",\n          \"value\": \"392,852 in Home & Kitchen (See Top 100 in Home & Kitchen) #336 in Dinner Sets\"\n      }\n\t  \"prime\": false\n\t  \"addon\": false\n\t  \"pantry\": false\n\t  \"minimalQuantity\": null\n\t  \"dealPrice\": 71.42\n\t  \"salePrice\": 0.0\n\t}",
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
    "url": "prd.axesso.de/amz/amazon-lookup-prices",
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
    "url": "prd.axesso.de/amz/amazon-search-by-keyword",
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
    "url": "prd.axesso.de/amz/sort-options",
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
  },
  {
    "type": "get",
    "url": "wlm.axesso.de/wlm/walmart-lookup-product",
    "title": "Request Product Information",
    "version": "1.0.0",
    "name": "GetProductInformation",
    "group": "Walmart",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-wlm.axesso.de/wlm/walmart-lookup-product?url=https://www.walmart.com/ip/46271127",
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
            "type": "String",
            "optional": false,
            "field": "productRating",
            "description": "<p>Rating of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "walmartItemId",
            "description": "<p>Item id of the product.</p>"
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
            "field": "soldAndShippedBy",
            "description": "<p>Retailer selling and fulfilling the purchase.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "available",
            "description": "<p>Indication of availability.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "oldPrice",
            "description": "<p>Old price.</p>"
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
            "field": "shippingInformation",
            "description": "<p>Information to the shipping.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "productHighlights",
            "description": "<p>List of highlights of the product.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n    \"productTitle\": \"X Rocker X-Pro 300 Black Pedestal Gaming Chair Rocker with Built-in Speakers\",\n   \"manufacturer\": \"X Rocker\",\n    \"walmartItemId\": 554348865,\n   \"countReview\": 277,\n   \"productRating\": \"4.0 Stars\",\n   \"soldAndShippedBy\": \"Walmart\",\n   \"oldPrice\": 129.0,\n   \"price\": 108.0,\n   \"shippingInformation\": \"Delivery not available\",\n   \"productHighlights\": [\n       \"Dimensions: 27.36L x 22.44W x 19.69H in\",\n        \"Long-lasting plastic frame\",\n        \"Breathable black fabric\",\n        \"Swivel and rocker pedestal base\",\n       \"Bluetooth speakers and subwoofer\"\n   ],\n   \"imageUrlList\": [\n       \"https://i5.walmartimages.com/asr/e9a514cb-3a64-40ff-8ddf-2b39497160c3_1.aa839ceae3ab602481b8f536b44fb36f.jpeg\"\n   ],\n   \"productDetails\": [\n       {\n           \"name\": \"Brand\",\n           \"value\": \"X Rocker\"\n       },\n       {\n           \"name\": \"Age Group\",\n           \"value\": \"Adult Teen Child\"\n        },\n        {\n            \"name\": \"Features\",\n             \"value\": \"2 speakers for total immersion surround sound\\nPowerful subwoofer\\nBuilt-in Bluetooth\"\n        },\n       {\n            \"name\": \"Color\",\n           \"value\": \"Black\"\n       },\n       {\n           \"name\": \"Gender\",\n           \"value\": \"Unisex\"\n       },\n       {\n            \"name\": \"Model\",\n            \"value\": \"5150001\"\n        },\n        {\n           \"name\": \"Manufacturer Part Number\",\n           \"value\": \"5150001\"\n       },\n       {\n            \"name\": \"Type\",\n           \"value\": \"Video Game Chairs Gaming Desktops\"\n       },\n       {\n           \"name\": \"Assembled Product Dimensions (L x W x H)\",\n           \"value\": \"27.36 x 22.44 x 19.69 Inches\"\n       }\n   ],\n   \"available\": false\n}",
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
    "groupTitle": "Walmart"
  },
  {
    "type": "get",
    "url": "wlm.axesso.de/wlm/walmart-search-by-keyword",
    "title": "Search Products by Keyword",
    "version": "1.1.0",
    "name": "SearchByKeyword",
    "group": "Walmart",
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
            "field": "type",
            "description": "<p>Type of invocation. Possible values are &quot;upc&quot; or &quot;text&quot; (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Page, which will be returned (Pagination, required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Sort option. Possible values: &quot;best_match&quot; (default), &quot;best_seller&quot;, &quot;price_low&quot;, &quot;price_high&quot;, &quot;rating_high&quot;, &quot;new&quot; (optional).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-wlm.axesso.de/wlm/walmart-search-by-keyword?keyword=Playstation&page=1&type=text&sortBy=best_match",
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
            "description": "<p>Walmart domain, which was used.</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"sortStrategy\": \"best_match\",\n   \"domainCode\": \"com\",\n   \"keyword\": \"Playstation\",\n   \"numberOfProducts\": 20,\n   \"foundProducts\": [\n      \"/ip/Sony-PlayStation-Classic-Console-Gray-3003868/659739661\",\n\t\t \"/ip/Sony-PlayStation-4-500GB-Slim-System-Black/406966077\",\n      \"/ip/Sony-PlayStation-4-Slim-1TB-Gaming-Console-Black-CUH-2115B/782841840\",\n      \"/ip/Sony-PlayStation-4-1TB-Slim-Gaming-Console/101507200\",\n      \"/ip/Sony-PlayStation-Slim-1TB-Fortnite-Neo-Versa-PS4-Bundle/262620661\",\n      \"/ip/Sony-PlayStation-4-Slim-1TB-Spiderman-Bundle-Black-CUH-2215B/579371947\",\n      \"/ip/Sony-PlayStation-4-Pro-1TB-Gaming-Console-Wireless-Game-Pad-Black/741505081\",\n      \"/ip/Sony-PlayStation-4-Slim-500GB-Gaming-Console-Black-CUH-2115A/536117094\",\n      \"/ip/Sony-PlayStation-Plus-3-Month-Subscription-email-delivery/278949616\",\n      \"/ip/Sony-PlayStation-4-Pro-1TB-Gaming-Console-Black-CUH-7115/562745471\",\n      \"/ip/Sony-PlayStation-4-Slim-500GB-Uncharted-4-Bundle-Black-3001504/52901918\",\n      \"/ip/Sony-PlayStation-4-1TB-Slim-System-w-Call-of-Duty-Black-Ops-4-3003223/838048611\",\n      \"/ip/Sony-PlayStation-4-1TB-Call-of-Duty-WWII-Limited-Edition-Bundle-3002200/423189432\",\n      \"/ip/Sony-PlayStation-Red-Dead-Redemption-2-PS4-Pro-Bundle/278701606\",\n      \"/ip/PlayStation-4-Console-1TB-Slim-Edition/283047110\",\n      \"/ip/PlayStation-4-Pro-1TB-Gaming-Console-Black-3001510/52901919\",\n      \"/ip/Sony-PlayStation-4-Slim-500GB-Call-of-Duty-Infinite-Warfare-Bundle-Black/55332685\",\n      \"/ip/Madden-NFL-20-Electronic-Arts-PlayStation-4-014633738377/844718333\",\n      \"/ip/50-PlayStation-Store-Gift-Card-Sony-Physically-Shipped-Card/41488457\",\n      \"/ip/Sony-PlayStation-4-1TB-Slim-Days-of-Play-Limited-Edition-Blue-3003131/829692281\"\n\t\t]\n\t}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parametes keyword: Playstatasdion |  sortBy: best_match,\n  \"links\": []\n}",
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
    "groupTitle": "Walmart"
  }
] });
