define({ "api": [
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
    "group": "/Users/ROTAEV/Work/git/axesso-api-doc/doc/main.js",
    "groupTitle": "/Users/ROTAEV/Work/git/axesso-api-doc/doc/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "prd.axesso.de/usr/user-account-info",
    "title": "Request Account Information",
    "version": "2.0.0",
    "name": "GetAccountInformation",
    "group": "Account_Info",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
            "field": "apiKey",
            "description": "<p>API key of account (required).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/usr/user-account-info?apiKey=chf7432h-dsj5-md28-fn0h-38dhglqak814",
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
            "field": "email",
            "description": "<p>E-Mail of account.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>API key of account.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "monthlyLimit",
            "description": "<p>Monthly usage limit.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "requestsUsed",
            "description": "<p>Amount of requests already used.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentPeriod",
            "description": "<p>Current period containg month and year.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "lastPeriodRequestsUsed",
            "description": "<p>Amount of requests from last month.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"email\": \"john@doe.com\",\n   \"apiKey\": \"chf7432h-dsj5-md28-fn0h-38dhglqak814\",\n   \"monthlyLimit\": 50000,\n   \"requestsUsed\": 305,\n   \"currentPeriod\": \"JULY 2020\",\n   \"lastPeriodRequestsUsed\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response-404:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"Could not find account information for API key: =chf7432h-dsj5-md28-fn0h-38dhglqak81. Please contact support@axesso.de.\",\n  \"links\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./axesso_rest_doc.js",
    "groupTitle": "Account_Info"
  },
  {
    "type": "get",
    "url": "prd2.axesso.de/alb/alibaba-lookup-product",
    "title": "Request Product Information",
    "version": "2.0.0",
    "name": "GetProductInformation",
    "group": "Alibaba",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
          "content": "http://api-prd2.axesso.de/alb/alibaba-lookup-product?url=https://www.alibaba.com/product-detail/USB-PXN-0082-Arcade-Joystick-Wired_60612038161.html?spm=a2700.details.deiletai6.29.58cc55e3i5R8ml",
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
    "url": "prd2.axesso.de/alb/alibaba-search-by-keyword",
    "title": "Search Products by Keyword",
    "version": "2.0.0",
    "name": "SearchByKeyword",
    "group": "Alibaba",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
          "content": "http://api-prd2.axesso.de/alb/alibaba-search-by-keyword?keyword=Playstation 4&page=1&type=text&sortBy=best_match",
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
    "version": "2.0.0",
    "name": "GetBuyRecommendations",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
    "version": "2.0.0",
    "name": "GetProductInformation",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
            "type": "Number",
            "optional": false,
            "field": "shippingPrice",
            "description": "<p>Shipping price.</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reviews",
            "description": "<p>List including reviews with details.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.text",
            "description": "<p>Content of the review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.date",
            "description": "<p>Date of review creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.rating",
            "description": "<p>Review rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.title",
            "description": "<p>Titel of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userName",
            "description": "<p>User who wrote the review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.url",
            "description": "<p>URL of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "variations",
            "description": "<p>List of different product variations.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "variations.variationName",
            "description": "<p>Name of the variation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "variations.values",
            "description": "<p>Details of the variation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "variations.values.value",
            "description": "<p>Name of the variation product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "variations.values.dpUrl",
            "description": "<p>URL of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "variations.values.selected",
            "description": "<p>Indication if product is selected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "variations.values.available",
            "description": "<p>Indication of availability of variation product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "categories",
            "description": "<p>List of categories where the product is included.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "currency",
            "description": "<p>Currency of price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency.code",
            "description": "<p>Code of currency.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currency.symbol",
            "description": "<p>Symbol of currency.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "acKeywordLink",
            "description": "<p>Amazon choice keyword link.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"productTitle\": \"Product Title description\",\n   \"manufacturer\": \"Sony\",\n   \"countReview\": 19,\n   \"answeredQuestions\": 4,\n   \"productRating\": \"4.4 out of 5 stars\",\n   \"asin\": \"B002YOS9NU\",\n   \"sizeSelection\": []\n   \"soldBy\": \"Sony\",\n   \"fulfilledBy\": \"Amazon\",\n   \"warehouseAvailability\": \"In Stock.\",\n   \"retailPrice\": 137.55,\n   \"price\": 77.42,\n   \"shippingPrice\" : 3.12,\n   \"priceShippingInformation\": \"free\",\n   \"priceSaving\": \"You Save: $59,58 (43%)\",\n   \"features\": [\n     \"Premium SOLID Stainless Steel\"\n   ],\n   \"imageUrlList\": [\n      \"https://images-na.ssl-images-amazon.com/images/I/71itkDwgyyL._SL1500_.jpg\",\n      \"https://images-na.ssl-images-amazon.com/images/I/716b2w17%2BPL._SL1500_.jpg\"\n  ],\n   \"productDescription\": \"PS4 Pro 4K TV GAMING & MORE The most advanced PlayStation system ever. PS4 Pro is designed to take your favorite PS4 games and add to them with more power for graphics\",\n   \"productDetails\": [\n\t\t{\n          \"name\": \"Item Weight\",\n          \"value\": \"2.46 Kg\"\n      },\n\t\t{\n          \"name\": \"Amazon Bestsellers Rank\",\n          \"value\": \"392,852 in Home & Kitchen (See Top 100 in Home & Kitchen) #336 in Dinner Sets\"\n      }\n  ],\n   \"prime\": false,\n   \"addon\": false,\n   \"pantry\": false,\n   \"minimalQuantity\": null,\n   \"dealPrice\": 71.42,\n   \"salePrice\": 0.0,\n   \"reviews\": [\n      {\n          \"text\": \"Purchased New, received Used, already registered to another owner, with a game disc in the tray.\",\n          \"date\": \"Reviewed in the United States on September 11, 2018\",\n          \"rating\": \"1.0 out of 5 stars\",\n          \"title\": \"Used Goods.\",\n          \"userName\": \"John Redman\",\n          \"url\": \"/gp/customer-reviews/RDHY3HUVO55FH/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01LOP8EZC\"\n      }\n\t],\n   \"variations\": [\n      {\n          \"variationName\": \"variation_edition\",\n          \"values\": [\n              {\n                  \"value\": \"Pro 1TB $356.99\",\n                  \"dpUrl\": \"\",\n                  \"selected\": true,\n                  \"available\": true\n             },\n             {\n                  \"value\": \"Slim 1TB used from $279.99\",\n                  \"dpUrl\": \"/dp/B071CV8CG2/ref=twister_B07PZ8NZSZ?_encoding=UTF8&psc=1\",\n                  \"selected\": false,\n                  \"available\": true\n             }\n\t\t}\n\t ],\n   \"categories\": [\n      \"Video Games\",\n      \"PlayStation 4\",\n     \"Consoles\"\n ],\n   \"currency\": {\n      \"code\": \"USD\",\n      \"symbol\": \"$\"\n  },\n   \"acKeywordLink\": \"ps4 pro\"\n\t}",
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
    "url": "prd.axesso.de/v2/amz/amazon-lookup-prices",
    "title": "Request all Seller Prices",
    "version": "2.0.0",
    "name": "LookupPrices",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization API key required in this format: axesso-api-key=xxxxx</p>"
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
            "field": "page",
            "description": "<p>Number of pages to return (optional, default 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>Filter for condition (optional, default New)(Currently not supported).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/v2/amz/amazon-lookup-prices?asin=B01AC6PRK4&domainCode=de&page=1",
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
    "url": "prd.axesso.de/amz/amazon-search-by-keyword-asin",
    "title": "Search Products by Keyword",
    "version": "2.0.0",
    "name": "SearchByKeyword",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
          "content": "http://api-prd.axesso.de/amz/amazon-search-by-keyword-asin?keyword=Playstation4&domainCode=com&sortBy=date-desc-rank&page=5",
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
            "field": "searchProductDetails",
            "description": "<p>List of product details of the found product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "searchProductDetails.productDescription",
            "description": "<p>Description of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "searchProductDetails.asin",
            "description": "<p>Asin of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "searchProductDetails.countReview",
            "description": "<p>Number of reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "searchProductDetails.imgUrl",
            "description": "<p>Url of the displayed image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"sortStrategy\": \"date-desc-rank\",\n   \"domainCode\": \"com\",\n   \"keyword\": \"Playstation 4\",\n   \"numberOfProducts\": 10,\n   \"foundProducts\": [\n      \"B07KY8VKGK\",\n      \"B07BQFYHKG\",\n      \"B07KVP1C4N\",\n      \"B07KPQRRFY\",\n      \"B07KPMFPLN\",\n      \"B07KP15HZX\",\n      \"B07HHW8C4V\",\n      \"B07JHY99XV\",\n      \"B07KJXNYK9\",\n      \"B07KGJPBKY\"\n\t],\n \"searchProductDetails\": [\n     {\n           \"productDescription\": \"JETech Case for Apple iPhone 8 and iPhone 7, 4.7-Inch, Shock-Absorption Bumper Cover, Anti-Scratch Clear Back, HD Clear\",\n           \"asin\": \"B07KY8VKGK\",\n           \"countReview\": 24079,\n           \"imgUrl\": \"https://m.media-amazon.com/images/I/71sHaPpboUL._AC_UL320_ML3_.jpg\"\n       },\n       {\n           \"productDescription\": \"OtterBox Commuter Series Case for iPhone 8 & iPhone 7 (NOT Plus) - Frustration Free Packaging - BLACK\",\n           \"asin\": \"B07BQFYHKG\",\n           \"countReview\": 13652,\n           \"imgUrl\": \"https://m.media-amazon.com/images/I/91bgVqK+-sL._AC_UL320_ML3_.jpg\"\n       },\n       {\n           \"productDescription\": \"iPhone 8 Case Liquid Silicone, iPhone 7 Silicone Case Miracase Gel Rubber Full Body Protection Shockproof Cover Case Drop Protection for Apple iPhone 7/ iPhone 8(4.7\\\") (Clove Purple)\",\n           \"asin\": \"B07KVP1C4N\",\n           \"countReview\": 2523,\n           \"imgUrl\": \"https://m.media-amazon.com/images/I/61JbPNGWyFL._AC_UL320_ML3_.jpg\"\n       },\n       {\n           \"productDescription\": \"Smartish iPhone 11 Pro Armor Case - Gripzilla [Rugged + Protective] Slim Tough Grip Cover - Black Tie Affair\",\n           \"asin\": \"B07KPQRRFY\",\n           \"countReview\": 427,\n          \"imgUrl\": \"https://m.media-amazon.com/images/I/71stlFO+faL._AC_UL320_ML3_.jpg\"\n       }\n\t\t]\n\t}",
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
    "version": "2.0.0",
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
    "type": "get",
    "url": "prd.axesso.de/amz/amazon-lookup-reviews",
    "title": "Request Review Information",
    "version": "2.0.0",
    "name": "lookupReviews",
    "group": "Amazon",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
            "description": "<p>Product asin to lookup (required).</p>"
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
            "field": "page",
            "description": "<p>Page, which will be returned (Pagination, required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Sort option. Possible values: &quot;recent&quot; (default), &quot;helpful&quot; (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filters",
            "description": "<p>Semicolon seperated list of filters. E.g: &quot;reviewerType=avp_only_reviews;filterByStar=two_star&quot; (optional).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd.axesso.de/amz/amazon-lookup-reviews?domainCode=com&page=1&asin=B079338B9X&sortBy=recent&filters=reviewerType=avp_only_reviews;filterByStar=two_star",
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
            "field": "asin",
            "description": "<p>Used asin.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "currentPage",
            "description": "<p>Returned page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sortStrategy",
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
            "type": "Object",
            "optional": false,
            "field": "filters",
            "description": "<p>Map of used filters.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "countReviews",
            "description": "<p>Number of reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "lastPage",
            "description": "<p>The last page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reviews",
            "description": "<p>List of reviews for the given asin and page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.reviewId",
            "description": "<p>Unique review id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.parentReviewId",
            "description": "<p>Parent review id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.text",
            "description": "<p>Review text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.date",
            "description": "<p>Date of review creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.rating",
            "description": "<p>Review rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.title",
            "description": "<p>Revie title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userName",
            "description": "<p>User created the review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.numberOfHelpful",
            "description": "<p>Number of user who found review helpful.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "reviews.imageUrlList",
            "description": "<p>List of images which belong to the review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reviews.verified",
            "description": "<p>Indication if purchase is verfied.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n   \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"asin\": \"B079338B9X\",\n   \"currentPage\": 1,\n   \"sortStrategy\": \"recent\",\n   \"domainCode\": \"com\",\n   \"filters\": {\n       \"filterByStar\": \"two_star\",\n       \"reviewerType\": \"avp_only_reviews\"\n   },\n   \"productTitle\": \"YnM Cotton Duvet Cover for Weighted Blankets (Dark Grey, 48''x72'')\",\n   \"countReviews\": 119,\n   \"lastPage\": 12,\n   \"reviews\": [\n       {\n           \"reviewId\": \"R2UVTBHEC0YG9O\",\n           \"parentReviewId\": null,\n           \"text\": \"The duvet cover was sized to go over the matching weighted blanket but the cover is too small! The weighted blanket has to be bunched to fit inside. Beautiful cover...extremely disappointed about fit.\",\n           \"date\": \"Reviewed in the United States on October 1, 2020\",\n           \"rating\": \"2.0 out of 5 stars\",\n           \"title\": \"Duvet cover dimensions inaccurate.\",\n           \"userName\": \"Amazon Customer\",\n           \"numberOfHelpful\": 0,\n           \"imageUrlList\": null,\n           \"verified\": true\n       },\n       {\n           \"reviewId\": \"R24VPRY2RXBFZK\",\n           \"parentReviewId\": null,\n           \"text\": \"The blanket comes unattached from the loops and you can’t keep the blanket even. I tried all different types of tying techniques and they all came loose. The feel of the blanket is great and it does help keep you cooler. It is just pointless if the blanket inside won’t stay attached. I bought it for the YnM weighted blanket, therefore it is the same brand and made for each other.\",\n           \"date\": \"Reviewed in the United States on September 10, 2020\",\n           \"rating\": \"2.0 out of 5 stars\",\n           \"title\": \"Soft, cooling but read review\",\n           \"userName\": \"Gemini_Butterfly\",\n           \"numberOfHelpful\": 0,\n           \"imageUrlList\": null,\n           \"verified\": true\n       }\n   ]\n }",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parametes asin: ABCSGDHW78\",\n  \"links\": []\n}",
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
    "url": "prd2.axesso.de/tpa/tripadvisor-lookup-reviews",
    "title": "Request Review Information",
    "version": "2.0.0",
    "name": "lookupReviews",
    "group": "TripAdvisor",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
            "description": "<p>Url to get reviews from. (required).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input-Example",
          "content": "http://api-prd2.axesso.de/tpa/tripadvisor-lookup-reviews?url=https://www.tripadvisor.com/Hotel_Review-g35805-d225105-Reviews-The_Peninsula_Chicago-Chicago_Illinois.html",
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
            "field": "previousPage",
            "description": "<p>Url of the last page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentPage",
            "description": "<p>Url of the current page.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nextPage",
            "description": "<p>Url of the next page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "countReviews",
            "description": "<p>Number of reviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reviews",
            "description": "<p>List of reviews for the given url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.id",
            "description": "<p>Unique review id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.url",
            "description": "<p>Uri path to this particular review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.createdDate",
            "description": "<p>Date of review creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.publishedDate",
            "description": "<p>Date when review published.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.provider",
            "description": "<p>Information about provider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.provider.isLocalProvider",
            "description": "<p>Identifies local provider.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.provider.isToolsProvider",
            "description": "<p>Identifies tool provider.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.userProfile",
            "description": "<p>Information about user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.id",
            "description": "<p>Profile unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.userId",
            "description": "<p>User unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.isMe",
            "description": "<p>Identifies if user is logged in user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.isVerified",
            "description": "<p>Identifies if review is verfied.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.displayName",
            "description": "<p>Displayed name of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.username",
            "description": "<p>Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.userProfile.avatar",
            "description": "<p>Information about used avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.hometown",
            "description": "<p>Hometown of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.userProfile.contributionCounts",
            "description": "<p>Number of contributions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.route",
            "description": "<p>Url path to user profile.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userProfile.isFollowing",
            "description": "<p>Identifies if user is following this location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.title",
            "description": "<p>Title of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.language",
            "description": "<p>Review language.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.tripInfo",
            "description": "<p>Information about the trip.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reviews.additionalRatings",
            "description": "<p>Rating of particular items (Room, Service ..).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.mgmtResponse",
            "description": "<p>Response of location management.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.mgmtResponse.id",
            "description": "<p>Id of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.mgmtResponse.language",
            "description": "<p>Language of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.mgmtResponse.text",
            "description": "<p>Resposne text.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.mgmtResponse.publishedDate",
            "description": "<p>Date response published.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.mgmtResponse.username",
            "description": "<p>Username who entered response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.mgmtResponse.connectionToSubject",
            "description": "<p>Position to subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.text",
            "description": "<p>Review text.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.locationId",
            "description": "<p>Unique identifier of location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.rating",
            "description": "<p>Rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.absoluteUrl",
            "description": "<p>Url path to this review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.mcid",
            "description": "<p>Unique identifier of mc.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.mtProviderId",
            "description": "<p>Unique identifier of provider.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reviews.photos",
            "description": "<p>List of photos related to the review and location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "reviews.helpfulVotes",
            "description": "<p>Rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int[]",
            "optional": false,
            "field": "reviews.photoIds",
            "description": "<p>List of photo ids.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.route",
            "description": "<p>Uri path to the particular review.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reviews.socialStatistics",
            "description": "<p>Information about social statistics.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.status",
            "description": "<p>Status of review.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.userId",
            "description": "<p>Unique identifier of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reviews.originalLanguage",
            "description": "<p>Language in which review was entered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "reviews.labels",
            "description": "<p>List of labels.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reviews.alertStatus",
            "description": "<p>Alert status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-example:",
          "content": "    HTTP/1.1 200 OK\n\t{\n \"responseStatus\": \"PRODUCT_FOUND_RESPONSE\",\n   \"responseMessage\": \"Product successfully found!\",\n   \"previousPage\": null,\n   \"currentPage\": \"https://www.tripadvisor.com/Hotel_Review-g35805-d225105-Reviews-The_Peninsula_Chicago-Chicago_Illinois.html\",\n   \"nextPage\": \"/Hotel_Review-g35805-d225105-Reviews-or5-The_Peninsula_Chicago-Chicago_Illinois.html\",\n   \"countReviews\": 1863,\n   \"reviews\": [\n       {\n           \"id\": 749775985,\n           \"url\": \"/ShowUserReviews-g35805-d225105-r749775985-The_Peninsula_Chicago-Chicago_Illinois.html\",\n           \"createdDate\": \"2020-03-07\",\n           \"publishedDate\": \"2020-03-07\",\n           \"provider\": {\n               \"isLocalProvider\": true,\n               \"isToolsProvider\": true\n           },\n           \"userProfile\": {\n               \"id\": \"0D4C1CAEE30ECD6091708CE72AE5B2F2\",\n               \"userId\": \"0D4C1CAEE30ECD6091708CE72AE5B2F2\",\n               \"isMe\": false,\n               \"isVerified\": false,\n               \"displayName\": \"Paul Bkk\",\n               \"username\": \"paulbkk888\",\n               \"avatar\": {\n                   \"id\": 438816317,\n                   \"photoSizes\": [\n                       {\n                           \"url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/27/ce/3d/caption.jpg?w=100&h=100&s=1\",\n                           \"width\": 0,\n                           \"height\": 0\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-t/1a/27/ce/3d/caption.jpg\",\n                           \"width\": 50,\n                           \"height\": 50\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-l/1a/27/ce/3d/caption.jpg\",\n                           \"width\": 150,\n                           \"height\": 150\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-i/1a/27/ce/3d/caption.jpg\",\n                           \"width\": 180,\n                           \"height\": 200\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-f/1a/27/ce/3d/caption.jpg\",\n                           \"width\": 205,\n                           \"height\": 205\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-o/1a/27/ce/3d/caption.jpg\",\n                           \"width\": 450,\n                           \"height\": 450\n                       }\n                   ]\n               },\n               \"hometown\": {\n                   \"locationId\": 293916,\n                   \"fallbackString\": \"293916\",\n                   \"location\": {\n                       \"locationId\": 293916,\n                       \"additionalNames\": {\n                           \"long\": \"Bangkok, Thailand\"\n                       },\n                       \"name\": \"Bangkok\"\n                   }\n               },\n               \"contributionCounts\": {\n                   \"sumAllUgc\": 112,\n                   \"helpfulVote\": 5\n               },\n               \"route\": {\n                   \"url\": \"/Profile/paulbkk888\"\n               },\n               \"isFollowing\": false\n           },\n           \"title\": \"Excellent service staff\",\n           \"language\": \"en\",\n           \"tripInfo\": {\n               \"stayDate\": \"2019-04-30\",\n               \"tripType\": \"BUSINESS\"\n           },\n           \"additionalRatings\": [],\n           \"mgmtResponse\": {\n               \"id\": 750131856,\n               \"language\": \"en\",\n               \"text\": \"Dear paulbkk888, \\n\\nWe are delighted to learn that you enjoyed your stay with us and our service.  We also appreciate your comments on the décor and cuisine. \\n\\nThank you for choosing The Peninsula as the place to stay when visiting Chicago.  We all look forward to welcoming you back again soon. \\n\\nWarm regards, \\n\\nMax Schroeder \\nHotel Manager  \",\n               \"publishedDate\": \"2020-03-09\",\n               \"username\": \"Peninsula_CH\",\n               \"connectionToSubject\": \"Manager\"\n           },\n           \"text\": \"Excellent service staff for 6 stars hotel. \\nLove all new decoration of main lobby, and room. Must see and check point for hangout at rooftop with 360 building view. \\nAll good for breakfast with a signature peninsula egg menu . \",\n           \"username\": \"paulbkk888\",\n           \"locationId\": 225105,\n           \"rating\": 5,\n           \"absoluteUrl\": \"https://www.tripadvisor.com/ShowUserReviews-g35805-d225105-r749775985-The_Peninsula_Chicago-Chicago_Illinois.html\",\n           \"mcid\": 0,\n           \"mtProviderId\": 0,\n           \"photos\": [\n               {\n                   \"id\": 454793848,\n                   \"statuses\": [\n                       \"PUBLISHED\"\n                   ],\n                   \"photoSizes\": [\n                       {\n                           \"url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1b/9a/78/photo4jpg.jpg?w=100&h=100&s=1\",\n                           \"width\": 0,\n                           \"height\": 0\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-t/1b/1b/9a/78/photo4jpg.jpg\",\n                           \"width\": 50,\n                           \"height\": 50\n                       }\n                   ]\n               },\n               {\n                   \"id\": 454793847,\n                   \"statuses\": [\n                       \"PUBLISHED\"\n                   ],\n                   \"photoSizes\": [\n                       {\n                           \"url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/1b/9a/77/photo3jpg.jpg?w=100&h=100&s=1\",\n                           \"width\": 0,\n                           \"height\": 0\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-t/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 50,\n                           \"height\": 50\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-l/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 150,\n                           \"height\": 150\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-f/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 164,\n                           \"height\": 205\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-i/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 180,\n                           \"height\": 200\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-s/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 360,\n                           \"height\": 450\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-p/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 550,\n                           \"height\": 688\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 1024,\n                           \"height\": 1280\n                       },\n                       {\n                           \"url\": \"https://media-cdn.tripadvisor.com/media/photo-w/1b/1b/9a/77/photo3jpg.jpg\",\n                           \"width\": 1024,\n                           \"height\": 1280\n                       }\n                   ]\n               }\n           ],\n           \"helpfulVotes\": 0,\n           \"photoIds\": [\n               454793848,\n               454793847,\n               454793846,\n               454793845,\n               454793844\n           ],\n           \"route\": {\n               \"url\": \"/ShowUserReviews-g35805-d225105-r749775985-The_Peninsula_Chicago-Chicago_Illinois.html\"\n           },\n           \"socialStatistics\": {\n               \"followCount\": 0,\n               \"isFollowing\": false,\n               \"isLiked\": false,\n               \"isReposted\": false,\n               \"isSaved\": false,\n               \"likeCount\": 0,\n               \"repostCount\": 0,\n               \"tripCount\": 0\n           },\n           \"status\": \"PUBLISHED\",\n           \"userId\": \"0D4C1CAEE30ECD6091708CE72AE5B2F2\",\n           \"originalLanguage\": \"en\",\n           \"labels\": [],\n           \"alertStatus\": false\n       }\n   ]\n}",
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
          "content": "HTTP/1.1 404 Not Found\n{\n  \"logref\": \"error\",\n  \"message\": \"could not find product for parametes: 'https://www.tripadvisor.com/Hotel-test-review.html'\",\n  \"links\": []\n}",
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
    "groupTitle": "TripAdvisor"
  },
  {
    "type": "get",
    "url": "prd2.axesso.de/wlm/walmart-lookup-product",
    "title": "Request Product Information",
    "version": "2.0.0",
    "name": "GetProductInformation",
    "group": "Walmart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
          "content": "http://api-prd2.axesso.de/wlm/walmart-lookup-product?url=https://www.walmart.com/ip/46271127",
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
    "url": "prd2.axesso.de/wlm/walmart-search-by-keyword",
    "title": "Search Products by Keyword",
    "version": "2.0.0",
    "name": "SearchByKeyword",
    "group": "Walmart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>API key required in this format: axesso-api-key=xxxxx</p>"
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
          "content": "http://api-prd2.axesso.de/wlm/walmart-search-by-keyword?keyword=Playstation&page=1&type=text&sortBy=best_match",
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
