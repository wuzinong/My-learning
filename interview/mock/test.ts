import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

const Random = Mock.Random;
export default [
  {
    url: "/api/users",
    method: "get",
    response: ({ query }) => {
      return {
        code: 200,
        data: Mock.mock({
          "list|1-10": [
            {
              "id|+1": 1,
              "name|+1": [
                "Peter",
                "John",
                "Linda",
                "Simon",
                "Diego",
                "Silva",
                "Adam",
                "Davis",
                "Wilson",
                "Karida",
                "Michaela",
                "Lindsay",
                "Mabel",
                "Lisa",
                "Madge",
                "Cora",
                "Marcia",
                "Nicole",
              ],
              "gender|+1": ["male", "female"],
            },
          ],
        }),
      };
    },
  },
  {
    url: RegExp("/api/user" + ".*"),
    method: "get",
    response: ({ query }) => {
      return {
        code: 0,
        data: Mock.mock({
          "id|+1": 1,
          "name|+1": [
            "Peter",
            "John",
            "Linda",
            "Simon",
            "Diego",
            "Silva",
            "Adam",
            "Davis",
            "Wilson",
            "Karida",
            "Michaela",
            "Lindsay",
            "Mabel",
            "Lisa",
            "Madge",
            "Cora",
            "Marcia",
            "Nicole",
          ],
          "gender|+1": ["male", "female"],
          "age|1-50": 0,
          "city|+1": ["Oslo", "Shanghai"],
        }),
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    timeout: 2000,
    response: {
      code: 200,
      data: {
        login: true,
      },
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "vben",
      },
    },
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
  {
    url: "/api/products",
    method: "get",
    response: () => {
      return {
        ms: 47,
        result: [
          {
            internalName: "WIP: Smart Cable Guard",
            productVariants: [],
          },
          {
            internalName: "WIP: T-REX for Energy Project Finance",
            productVariants: [
              {
                _key: "d081cb8b5d54",
                name: "T-REX for Energy Project Finance",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "INSTATRUST™",
            productVariants: [
              {
                _key: "845ea512930a",
                name: "Free access",
                pricingPlans: [
                  {
                    _key: "c05820237bc5",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "sdfasd",
                    name: "Free access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Automation Test 01 for Marketplace",
            productVariants: [
              {
                _key: "6e8e39e68e16",
                name: "Free",
                pricingPlans: [
                  {
                    _key: "b985dd274070",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "AAAA",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Hannah test",
            productVariants: null,
          },
          {
            internalName: "Forecaster",
            productVariants: [
              {
                _key: "cbc72e50ceae",
                name: "Forecaster",
                pricingPlans: [
                  {
                    _key: "4c02a87bf1be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "sadf",
                    name: "test",
                  },
                ],
              },
              {
                _key: "3d3b4ab6c93f",
                name: "ttt",
                pricingPlans: [
                  {
                    _key: "20c747ae1c07",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "AAA",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: Shipweight",
            productVariants: [
              {
                _key: "54142e2f3e93",
                name: "Shipweight",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Rig",
            productVariants: [
              {
                _key: "f70939bac26c",
                name: "Rig",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Data Management Advisory Service",
            productVariants: [
              {
                _key: "756e49b49d6e",
                name: "Data Management Advisory Service",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: TCarta Bathymetry",
            productVariants: [
              {
                _key: "226ee6f65869",
                name: "TCarta Bathymetry",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Port Arrival Prediction (ETA)",
            productVariants: [
              {
                _key: "2c97d0afe977",
                name: "Port Arrival Prediction (ETA)",
                pricingPlans: [
                  {
                    _key: "62087058978c",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited access for one user. Paid monthly",
                    name: "Full license",
                  },
                  {
                    _key: "0c2b5a32ee19",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited access for one user. Paid yearly",
                    name: "Full licence",
                  },
                ],
              },
            ],
          },
          {
            internalName: "In:Range",
            productVariants: [
              {
                _key: "053169a8efad",
                name: "In:Range",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Data Quality as a Service",
            productVariants: [
              {
                _key: "3ac017870c91",
                name: "Data Quality as a Service",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "DUMMY: Kontiki Cargo",
            productVariants: [],
          },
          {
            internalName:
              "TEST CASE [Purchased multi-user]: Veracity Data FabricShort description (optional)",
            productVariants: [
              {
                _key: "a672f9f4e28e",
                name: "Basic Variant",
                pricingPlans: [
                  {
                    _key: "bf07f860fd48",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: [
                      {
                        _key: "b4eb85bc4947",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "half-year",
                        accessDuration2: {
                          _ref: "duration-half-year",
                          _type: "reference",
                        },
                        description: "addon shortname",
                        key: {
                          _type: "slug",
                          current: "test1",
                        },
                        name: "test",
                        prices: [
                          {
                            _key: "82ba2ab5d28b",
                            _type: "price",
                            amount: 22,
                            currency: "EUR",
                          },
                          {
                            _key: "0bed0e4062ca",
                            _type: "price",
                            amount: 44,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "testapi",
                        slaDuration: "30-days",
                        slaDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "Calculation of current and wave drift coefficients is not included. Wind coefficients can be calculated with Blendermann’s method or others.  ",
                    name: "Defaut=lt",
                  },
                  {
                    _key: "e60524a9a926",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "sdfsadf",
                    name: "1 week access",
                  },
                  {
                    _key: "127537e07e83",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "ff",
                    name: "2 weeks access",
                  },
                  {
                    _key: "42657f02ed7a",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "free",
                    name: "Free",
                  },
                ],
              },
              {
                _key: "adfad1645e95395a76b93e93f6a9eee6",
                name: "Another variant",
                pricingPlans: [
                  {
                    _key: "bf07f860fd48",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: [
                      {
                        _key: "b4eb85bc4947",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "half-year",
                        accessDuration2: {
                          _ref: "duration-half-year",
                          _type: "reference",
                        },
                        description: "addon shortname",
                        key: {
                          _type: "slug",
                          current: "test12",
                        },
                        name: "test",
                        prices: [
                          {
                            _key: "82ba2ab5d28b",
                            _type: "price",
                            amount: 22,
                            currency: "EUR",
                          },
                          {
                            _key: "0bed0e4062ca",
                            _type: "price",
                            amount: 44,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "testapi",
                        slaDuration: "30-days",
                        slaDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "Calculation of current and wave drift coefficients is not included. Wind coefficients can be calculated with Blendermann’s method or others.  ",
                    name: "Defaut=lt",
                  },
                  {
                    _key: "e60524a9a926",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "sdfsadf",
                    name: "1 week access",
                  },
                  {
                    _key: "127537e07e83",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "ff",
                    name: "2 weeks access",
                  },
                ],
              },
              {
                _key: "1f492a0ec210",
                name: "Advanced variant",
                pricingPlans: [
                  {
                    _key: "256768e02340",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "frr",
                  },
                ],
              },
            ],
          },
          {
            internalName:
              "TEST CASE [Purchased multi-user]: Veracity Data Fabric",
            productVariants: [],
          },
          {
            internalName: "WIP: Sesam Insight",
            productVariants: [
              {
                _key: "6ed835c982df",
                name: "Sesam Insight",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "DUMMY: Amy Test",
            productVariants: [
              {
                _key: "7ddc7cac5ce4",
                name: "Basic",
                pricingPlans: [],
              },
              {
                _key: "98ecbacb224c",
                name: "Premium",
                pricingPlans: [
                  {
                    _key: "c6b75a27bb00",
                    _type: "trialPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "4 users",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Pressure Safety Valve Manager",
            productVariants: [
              {
                _key: "4de02d832a76",
                name: "Pressure Safety Valve Manager",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Safety Will",
            productVariants: [
              {
                _key: "ecbe8c79b383",
                name: "Safety Will",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Brantest21122233333-timtest-0714-2222-ok",
            productVariants: [
              {
                _key: "f315187ed27b",
                name: "BranTest",
                pricingPlans: [
                  {
                    _key: "a6266e688e71",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "tet",
                  },
                ],
              },
            ],
          },
          {
            internalName: "SurfLoad – Pipeline Surface Loading Calculator",
            productVariants: [
              {
                _key: "894640d9ee01",
                name: "Pipeline Surface Loading Calculator",
                pricingPlans: [
                  {
                    _key: "7b04f49e8e60",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "fasdf",
                    name: "asdfasd",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: Ship implementation plan",
            productVariants: [
              {
                _key: "ab4e81233cb6",
                name: "free ",
                pricingPlans: [
                  {
                    _key: "03b57099caf8",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: Turbine Technology Reviews",
            productVariants: [
              {
                _key: "ffb15398b64f",
                name: "Turbine Technology Reviews",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Umbrella's paid products",
            productVariants: [
              {
                _key: "bc926a06f960",
                name: "Free sample",
                pricingPlans: [
                  {
                    _key: "2a34928a69e4",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "Test with limited resources",
                    name: "Free sample",
                  },
                  {
                    _key: "51298a87f3e1",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: "I am the description for lead gen",
                    name: "Contact us to discuss your needs",
                  },
                ],
              },
              {
                _key: "a7ab63f519b9",
                name: "Pre-installed on a virtual machine",
                pricingPlans: [
                  {
                    _key: "3727df57c7c6",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Hidden plan",
                  },
                  {
                    _key: "3b0f997f498aeef8a8d2746fc37db613",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "Test addon I",
                        key: {
                          _type: "slug",
                          current: "test2",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                      {
                        _key: "59dc2dadb20c",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        internalName: "Paid extension",
                        key: {
                          _type: "slug",
                          current: "paid-extension-2",
                        },
                        name: "Paid extension",
                        prices: [
                          {
                            _key: "c5a4c96bc3e0",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "71324688525a",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "unlimited",
                        salesforceProduct: "fdsfsdf",
                        slaDuration: "none",
                        slaDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "The license is activated and sent immediately after purchase and is valid for all versions of Phast for one user only.",
                    name: "1 day access long name",
                  },
                  {
                    _key: "1490179ff2cd5e9b6dbe09cee3d6e78f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "Test addon I",
                        key: {
                          _type: "slug",
                          current: "test22",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                      {
                        _key: "aa837c6515c7",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        description: "Paid addon is the bomb",
                        internalName: "I am an extension",
                        key: {
                          _type: "slug",
                          current: "paid-addon",
                        },
                        name: "Paid addon",
                        prices: [
                          {
                            _key: "60e90679ab7ca572c913b34fdc960f8f",
                            _type: "price",
                            amount: 10000,
                            currency: "EUR",
                          },
                          {
                            _key: "b776e2561f5f",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "123",
                        slaDuration: "none",
                        slaDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                      },
                    ],
                    description: null,
                    name: "30 day access",
                  },
                  {
                    _key: "a66c0c44593d35a305f6e0db9a527b7c",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "Test addon I",
                        key: {
                          _type: "slug",
                          current: "test222",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                    ],
                    description: null,
                    name: "1 year access",
                  },
                ],
              },
              {
                _key: "301e03a800f435930e1113328033eed4",
                name: "Installation on the N3tw@rk",
                pricingPlans: [
                  {
                    _key: "3727df57c7c6",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "What aobu tnow?",
                        key: {
                          _type: "slug",
                          current: "test2222",
                        },
                        name: "Test extension",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                      {
                        _key: "4827d001c435",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "30-days",
                        accessDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                        description:
                          "Paid extension with a long description. Paid extension with a long description. Paid extension with a long description. Paid extension with a long description. Paid extension with a long description.",
                        internalName: "Paid extension",
                        key: {
                          _type: "slug",
                          current: "paid-extension",
                        },
                        name: "Paid extension",
                        prices: [
                          {
                            _key: "ae65a7b6bdeeabd109e0b4519c2efe94",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "30cf3efd6064",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://google.com",
                        salesforceProduct: "gfdsgfdsgf",
                        slaDuration: "30-days",
                        slaDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                      },
                      {
                        _key: "76e54a3af631",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "30-days",
                        accessDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                        description:
                          "No read more but paid. No read more but paid. No read more but paid. No read more but paid. No read more but paid.",
                        internalName: "What about now",
                        key: {
                          _type: "slug",
                          current: "no-read-more-but-paid",
                        },
                        name: "No read more but paid",
                        prices: [
                          {
                            _key: "14c0f4aa52a3b6f31c54ac66d0a5438d",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "ce5a4d3d4d26",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 31,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "vxcv",
                        slaDuration: "30-days",
                        slaDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "The license is activated and sent immediately after purchase and is valid for all versions of Phast for one user only.",
                    name: "7 day access",
                  },
                  {
                    _key: "1490179ff2cd5e9b6dbe09cee3d6e78f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "I am an extension",
                        key: {
                          _type: "slug",
                          current: "test221",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                    ],
                    description: null,
                    name: "30 day access",
                  },
                  {
                    _key: "a66c0c44593d35a305f6e0db9a527b7c",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "What about now?",
                        key: {
                          _type: "slug",
                          current: "test2224",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                    ],
                    description: null,
                    name: "1 year access",
                  },
                  {
                    _key: "1f5132b10fa3",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Lead gen",
                  },
                  {
                    _key: "af521b7cdecd",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Recurring with trial",
                    name: "Recurring with trial",
                  },
                ],
              },
              {
                _key: "0c88b1ba4c4c",
                name: "Variant with visibility!",
                pricingPlans: [
                  {
                    _key: "1d77a7e6af16",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Restricted plan",
                  },
                  {
                    _key: "67dcda680ae37a6398aa1cc25addc334",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Hidden plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Camo Analytics",
            productVariants: [
              {
                _key: "c7ed7015f207",
                name: "Camo Analytics",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "DUMMY: Apple Product (Single trial plan test)",
            productVariants: [
              {
                _key: "99ff31eb9f73",
                name: "Groovy variant",
                pricingPlans: [
                  {
                    _key: "6bf285317b9a",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "test",
                    name: "test",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Assets Monitoring from Space",
            productVariants: [
              {
                _key: "069d4a4a6f2d",
                name: "Assets Monitoring from Space",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Spottitt Environment",
            productVariants: [
              {
                _key: "77b8c96375e6",
                name: "Spottitt Environment",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName:
              "[TC] TEST COMPANY Oil and gas standards and recommended practices",
            productVariants: [
              {
                _key: "fd4c655073db",
                name: "Access to all documents",
                pricingPlans: [
                  {
                    _key: "550fdfe912ed",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Access to all documents",
                    name: "One user",
                  },
                  {
                    _key: "6b80089e6ebd",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Access to all documents",
                    name: "2 - 5 users",
                  },
                  {
                    _key: "fa177471f251",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Access to all documents",
                    name: "6 - 20 users",
                  },
                  {
                    _key: "f6b6cc8e8f56",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Access to all documents",
                    name: "Unlimited users",
                  },
                ],
              },
              {
                _key: "ba4aa77b0cb9",
                name: "Discount for academic institutions (access to all documents)",
                pricingPlans: [
                  {
                    _key: "2cdecfedfe17",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited users",
                    name: "Academic institutions",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Analytic Innovation Centre – Analytic Services",
            productVariants: [
              {
                _key: "214790df726b",
                name: "Analytic Innovation Centre – Analytic Services",
                pricingPlans: null,
              },
              {
                _key: "36a44a64d3c1",
                name: "TEST",
                pricingPlans: [],
              },
              {
                _key: "7790e797d2bc",
                name: "TEST 2",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "CUI Manager",
            productVariants: [
              {
                _key: "a20b222ed830",
                name: "CUI Manager",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Bluester is real2",
            productVariants: [
              {
                _key: "939d58bd0b88",
                name: "Free",
                pricingPlans: [
                  {
                    _key: "1c970b4df229",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Test",
                  },
                ],
              },
            ],
          },
          {
            internalName: "MyCDA – the Competent Design Authority Service",
            productVariants: [
              {
                _key: "d9390bea8905",
                name: "MyCDA – the Competent Design Authority Service",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Energy Laboratory Services Portal",
            productVariants: [
              {
                _key: "5fb02aa5a83e",
                name: "Free access",
                pricingPlans: [
                  {
                    _key: "18991299fadd",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Ballast Water Management Plan (BWMP) Generator",
            productVariants: [
              {
                _key: "f9de8c5bb839",
                name: "Free access",
                pricingPlans: [
                  {
                    _key: "5a53d8d0a8b6",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "[TC] Container certificationv   vc",
            productVariants: [
              {
                _key: "a4e9bf75-f420-4c65-b34b-7d128cfd2e00",
                name: "Variant with all plans",
                pricingPlans: [
                  {
                    _key: "762a9e1e9cde",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Recurring subscription plan",
                  },
                  {
                    _key: "e25e2c2d4e08",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Metered consumption plan",
                  },
                  {
                    _key: "4046d34d-6185-4bec-b305-6bca589f8557",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access",
                  },
                  {
                    _key: "1e3c60798bd6",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "TEST",
                  },
                ],
              },
            ],
          },
          {
            internalName: "EAS_TEST_NotSelfSub",
            productVariants: [
              {
                _key: "ef3640be7347",
                name: "Plan1",
                pricingPlans: [
                  {
                    _key: "9cd1585e091f",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "10 users",
                  },
                  {
                    _key: "e41d2af4dabb",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "1 user",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Hybrid Sensor Technology",
            productVariants: [
              {
                _key: "f039ead9ff65",
                name: "Hybrid Sensor Technology",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "GS – IHM Green Server",
            productVariants: [
              {
                _key: "df2f106e078c",
                name: "IGS – IHM Green Server",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Digital Paint Report",
            productVariants: [
              {
                _key: "ddb63de6e4f0",
                name: "Standard",
                pricingPlans: [
                  {
                    _key: "661bfda75da7",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description:
                      "Flexible subscription with per-project pricing.",
                    name: "Per project",
                  },
                  {
                    _key: "6451eba9495f",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description:
                      "Flexible subscription with per-asset pricing.",
                    name: "Per asset",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Cisco Kinetic",
            productVariants: [
              {
                _key: "e558408e15cb",
                name: "Cisco Kinetic",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Brantest21122233333-timtest-0714-2",
            productVariants: [
              {
                _key: "a0d4769def61",
                name: "test",
                pricingPlans: [
                  {
                    _key: "4d9dcb06d72e",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "aaaaaaa",
                    name: "aaaa",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Testing terms with this product",
            productVariants: [
              {
                _key: "91ceecc3d38b",
                name: "Fully hidden variant with own terms",
                pricingPlans: [
                  {
                    _key: "765b278336df",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Hidden plan",
                  },
                ],
              },
              {
                _key: "9f95c27fdb87767eee051f5a2e20b197",
                name: "Context-only variant with own terms",
                pricingPlans: [
                  {
                    _key: "765b278336df",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Context plan",
                  },
                ],
              },
              {
                _key: "ef46c30aedd4",
                name: "Variant without terms",
                pricingPlans: [
                  {
                    _key: "d0d61a550f17",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Paid plan 1",
                  },
                  {
                    _key: "d24bc49b577e17def5eb7fa69efe07bb",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Paid plan 2",
                  },
                ],
              },
              {
                _key: "4c7a0980e250a626a0a7f48061410e39",
                name: "Variant with own terms",
                pricingPlans: [
                  {
                    _key: "d0d61a550f17",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Paid plan 1",
                  },
                  {
                    _key: "d24bc49b577e17def5eb7fa69efe07bb",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Paid plan 2",
                  },
                ],
              },
              {
                _key: "9eb9e980a927",
                name: "Variant with same terms as product",
                pricingPlans: [
                  {
                    _key: "a02a4cdb06cc",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Confusing plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Arundo Maritime Suite powered by Veracity",
            productVariants: [
              {
                _key: "642978722b94",
                name: "Arundo Maritime Suite powered by Veracity",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "AGR Software",
            productVariants: [
              {
                _key: "11348dab-29a3-4f8e-aab9-5829278f9ecc",
                name: "MyQRA",
                pricingPlans: [
                  {
                    _key: "e98d654a6b3f",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access request",
                  },
                ],
              },
              {
                _key: "236cd62b-d1a2-4393-8f5d-3ba6794629b8",
                name: "Discount for academic institutions (access to all documents)",
                pricingPlans: [
                  {
                    _key: "2cdecfedfe17",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited users",
                    name: "Academic institutions",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Data Usage Risk Assessment",
            productVariants: [
              {
                _key: "5c6a47875a11",
                name: "Data Usage Risk Assessment",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Synergi Life",
            productVariants: [
              {
                _key: "3f335636d4f3",
                name: "Synergi Life",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Renewables benchmarking",
            productVariants: [
              {
                _key: "3807e04bbcdb",
                name: "Renewables benchmarking",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName:
              "[TC] TEST COMPANY Noble Denton marine services warranty standards",
            productVariants: [
              {
                _key: "59ac8c748155",
                name: "Bran test",
                pricingPlans: [
                  {
                    _key: "2d7ccd1804e1",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "bd073bb25e32",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "quarter",
                        accessDuration2: {
                          _ref: "duration-quarter",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "one-addon",
                        },
                        name: "one addon",
                        prices: [
                          {
                            _key: "4d961cebe4a3",
                            _type: "price",
                            amount: 22,
                            currency: "EUR",
                          },
                          {
                            _key: "af496381bbeb",
                            _type: "price",
                            amount: 3422,
                            currency: "GBP",
                          },
                          {
                            _key: "0a097e1fe3a3",
                            _type: "price",
                            amount: 678,
                            currency: "NOK",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "VER-DFDMES",
                        slaDuration: "day",
                        slaDuration2: {
                          _ref: "duration-day",
                          _type: "reference",
                        },
                      },
                    ],
                    description: "asdfasdf",
                    name: "test onetime",
                  },
                  {
                    _key: "da23cc2b-df90-438f-8c71-2f573271946a",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Copy-paste free plan",
                  },
                  {
                    _key: "09d4aa45035c",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "TEST",
                  },
                ],
              },
              {
                _key: "035b17103f8a",
                name: "FullProv-Active_Interim-None",
                pricingPlans: [
                  {
                    _key: "33ea6d75fefd",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "034d91b3313e",
                        _type: "freeAddOnPlan",
                        key: {
                          _type: "slug",
                          current: "freeaddon2",
                        },
                        name: "FreeAddon2",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://www.baidu.com",
                      },
                      {
                        _key: "e470fe42c94e",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "30-days",
                        accessDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current:
                            "onetimeaddon2-this-is-very-long-sentence-has-twolines",
                        },
                        name: "OneTimeAddon2 This is very long sentence has twolines",
                        prices: [
                          {
                            _key: "eb56c5d4cbb1",
                            _type: "price",
                            amount: 5,
                            currency: "EUR",
                          },
                          {
                            _key: "a4f5911e3b21",
                            _type: "price",
                            amount: 66,
                            currency: "NOK",
                          },
                          {
                            _key: "b4298b79c4e0",
                            _type: "price",
                            amount: 666,
                            currency: "GBP",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://www.baidu2.com",
                        salesforceProduct: "APITEST-onetime-addon2",
                        slaDuration: "day",
                        slaDuration2: {
                          _ref: "duration-day",
                          _type: "reference",
                        },
                      },
                      {
                        _key: "902f9b39ed0a",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "quarter",
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: "slug",
                          current:
                            "recaddon2-this-is-on-long-name-has-two-lines",
                        },
                        name: "RecAddon2 this is on long name has two lines.",
                        paymentTerms: "30 days",
                        prices: [
                          {
                            _key: "c8fcf77c5b5e",
                            _type: "price",
                            amount: 12,
                            currency: "EUR",
                          },
                          {
                            _key: "b498c9423409",
                            _type: "price",
                            amount: 46,
                            currency: "NOK",
                          },
                          {
                            _key: "2e632c46edd3",
                            _type: "price",
                            amount: 67,
                            currency: "GBP",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        renewalNotificationDays: 60,
                        salesforceProduct: "APITEST-rec-addon2",
                      },
                      {
                        _key: "e1c8a50929a4",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "half-year",
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: "slug",
                          current:
                            "metaddon2-this-is-on-long-name-has-two-lines",
                        },
                        name: "MetAddon2 this is on long name has two lines.",
                        paymentTerms: "30 days",
                        prices: [
                          {
                            _key: "5d2b37da8a99",
                            _type: "price",
                            amount: 22,
                            currency: "EUR",
                          },
                          {
                            _key: "71a755b999e6",
                            _type: "price",
                            amount: 88,
                            currency: "NOK",
                          },
                          {
                            _key: "7297cd2ef3eb",
                            _type: "price",
                            amount: 65,
                            currency: "GBP",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://www.baidu3.com",
                        renewalNotificationDays: 60,
                        salesforceProduct: "APITEST-met-addon2",
                      },
                    ],
                    description: "This is one-time base plan",
                    name: "OneTimeBase. This is very long sentences",
                  },
                ],
              },
            ],
          },
          {
            internalName: "HACyberLogix",
            productVariants: [
              {
                _key: "43e4b4cb5b86",
                name: "HACyberLogix",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Veracity Deep Search",
            productVariants: [
              {
                _key: "c200edbffe8e",
                name: "test",
                pricingPlans: [
                  {
                    _key: "6e8c378ed906",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "ddd",
                  },
                ],
              },
              {
                _key: "93abb790a284",
                name: "test2",
                pricingPlans: [
                  {
                    _key: "52b758c88b88",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "123",
                    name: "1231",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Maindeck",
            productVariants: [
              {
                _key: "2e5c0314b5a7",
                name: "Maindeck",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Umbrella's free product test",
            productVariants: [
              {
                _key: "9c686e38d0d3",
                name: "Standard variant",
                pricingPlans: [
                  {
                    _key: "3cece63b70d7",
                    _type: "freePlan",
                    addOnPricingPlans: [
                      {
                        _key: "b593fff326cc",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "month",
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: "slug",
                          current: "super-duper-add-on",
                        },
                        name: "Super-duper add-on",
                        paymentTerms: "14 days",
                        prices: [
                          {
                            _key: "cf25ca7364b9",
                            _type: "price",
                            amount: 150,
                            currency: "EUR",
                          },
                          {
                            _key: "7aff817f4bd3",
                            _type: "price",
                            amount: 125,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        renewalNotificationDays: 30,
                        salesforceProduct: "api-test1",
                      },
                      {
                        _key: "dc2888c4bde5",
                        _type: "freeAddOnPlan",
                        internalName: "Hannah test add on",
                        key: {
                          _type: "slug",
                          current: "hannah-test-pricing-plan",
                        },
                        name: "Hannah test pricing plan",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                      {
                        _key: "b15c94c3c98e",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "year",
                        accessDuration2: {
                          _ref: "duration-3-years",
                          _type: "reference",
                        },
                        description: "Hannah test add on product",
                        key: {
                          _type: "slug",
                          current: "one-time-purchase-add-on-2",
                        },
                        name: "One time purchase add on 2",
                        prices: [
                          {
                            _key: "14e10642d71b55adfe460592990919d0",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "785c78420aff",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "one-time-purchase-add-on-2",
                        slaDuration: "quarter",
                      },
                    ],
                    description: "Start free and upgrade as you prefer",
                    name: "Freemium plan",
                  },
                  {
                    _key: "96392ca5cae9",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "ec3a40ff88e9",
                        _type: "freeAddOnPlan",
                        key: {
                          _type: "slug",
                          current: "hannah-test-add-on2",
                        },
                        name: "Hannah test add-on2",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl:
                          "https://store.veracity.com/veracity-data-fabric-secure-data-sharing",
                      },
                    ],
                    description: null,
                    name: "Premium Hannah test plan",
                  },
                  {
                    _key: "4021118c9b9f",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Recurring subscription plan 1",
                  },
                ],
              },
              {
                _key: "9791227d6005",
                name: "Variant 2",
                pricingPlans: [
                  {
                    _key: "dcdcce55cf17",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "6cb4427d05a8",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "year",
                        accessDuration2: {
                          _ref: "duration-year",
                          _type: "reference",
                        },
                        description:
                          "Displays an input element wrapped in a div to allow extra content, like counter, side icons or buttons. Forwards many relevant props to the inner input. Handles different states, like loading or error. Exposes some props to the children via context.",
                        key: {
                          _type: "slug",
                          current: "one-time-addon-in-v2",
                        },
                        name: "One time addon in V2",
                        prices: [
                          {
                            _key: "e6bf62fe64d0388e0103ddae700fcc65",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "824d4a335f9e",
                            _type: "price",
                            amount: 666,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl:
                          "https://store.veracity.com/veracity-data-fabric-secure-data-sharing",
                        salesforceProduct: "sf-123",
                        slaDuration: "year",
                        slaDuration2: {
                          _ref: "duration-half-year",
                          _type: "reference",
                        },
                      },
                    ],
                    description: null,
                    name: "Test One time plan",
                  },
                ],
              },
              {
                _key: "39cc4d825a20",
                name: "Variant 3",
                pricingPlans: [
                  {
                    _key: "d8903cc9500e",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "test lead plan 3",
                  },
                ],
              },
            ],
          },
          {
            internalName: "asdfasdf",
            productVariants: [
              {
                _key: "ce42bb01f283",
                name: "Oreda@Cloud",
                pricingPlans: [
                  {
                    _key: "f6ae33bb197f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "ttt",
                  },
                ],
              },
            ],
          },
          {
            internalName:
              "EU Energy Efficiency Directive Article 8 compliance plan",
            productVariants: [
              {
                _key: "e38ffda6eb65",
                name: "EU Energy Efficiency Directive Article 8 compliance plan",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Automation Test Product 4 (NewPurchase)offshore",
            productVariants: [
              {
                _key: "0f8b70a13171",
                name: "BranTestVariant",
                pricingPlans: [
                  {
                    _key: "ccd4b2330aae",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "OneTime",
                  },
                  {
                    _key: "53713b693069",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "test trial",
                  },
                  {
                    _key: "4115a4a739c7",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "TestLead Generation",
                  },
                  {
                    _key: "20f36e6c1319",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "free",
                    name: "free",
                  },
                ],
              },
              {
                _key: "3259867863f6",
                name: "TEST",
                pricingPlans: [
                  {
                    _key: "8b031f4d1ccb",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "TEST",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: WindGEMINI",
            productVariants: [],
          },
          {
            internalName: "MyCertificate",
            productVariants: [
              {
                _key: "0741bfa2af3b",
                name: "MyCertificate",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Almost Empty dfadfasfasdf ",
            productVariants: [
              {
                _key: "0b23df28-d056-4e39-ae46-e7dc5f7e9293",
                name: "Discount for academic institutions (access to all documents)",
                pricingPlans: [
                  {
                    _key: "2cdecfedfe17",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited users",
                    name: "Academic institutions",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Brantest211222333334",
            productVariants: [
              {
                _key: "dad74eff56cd",
                name: "VAP standard features",
                pricingPlans: [
                  {
                    _key: "c9f65c185cf9",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Trial ",
                  },
                  {
                    _key: "0b883bb0d5bf",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Standard subscription",
                  },
                ],
              },
            ],
          },
          {
            internalName: "EEDI Calculator",
            productVariants: [
              {
                _key: "ef5f92726ab0",
                name: "EEDI Calculator",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Safeti Compute",
            productVariants: [
              {
                _key: "fefa70e09c6d",
                name: "Safeti Compute",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Veracity Adapter for Power BI (VAP)",
            productVariants: null,
          },
          {
            internalName: "Arundo Analytics",
            productVariants: [
              {
                _key: "9179a4c82add",
                name: "Arundo Analytics",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "ExplEnergyx",
            productVariants: [
              {
                _key: "d859eb0e6ec5",
                name: "Free Beta access ",
                pricingPlans: [
                  {
                    _key: "3c1292b65fff",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Beta access",
                  },
                  {
                    _key: "f757bbf6350a",
                    _type: "pricingPlanGroup",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
              {
                _key: "307d0d425dc0",
                name: "Full version",
                pricingPlans: [
                  {
                    _key: "543475505a18",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Full version",
                  },
                ],
              },
              {
                _key: "cfbdc931b7f4",
                name: null,
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "[TC] Energy Transition Outlook",
            productVariants: [
              {
                _key: "4771945d-334b-4c82-9bb4-fd8ecf45c847",
                name: "Discount for academic institutions (access to all documents)",
                pricingPlans: [
                  {
                    _key: "2cdecfedfe17",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited users",
                    name: "Academic institutions",
                  },
                ],
              },
            ],
          },
          {
            internalName: "GPM Horizon",
            productVariants: [
              {
                _key: "3e78fea52b4c",
                name: "GPM Horizon",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "DP Capability Assessment",
            productVariants: null,
          },
          {
            internalName: "Resource Panorama",
            productVariants: [
              {
                _key: "4182f046ccbe",
                name: "Resource Panorama",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Spottitt Energy",
            productVariants: [
              {
                _key: "8a7461447c40",
                name: "Spottitt Energy",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName:
              "[A]AAAAAAH This product is listed first when sorting alphabetically AND it has a very long name aaa",
            productVariants: [
              {
                _key: "c0911aaa2e997c9a12159bd86913b389",
                name: "Free test2",
                pricingPlans: [
                  {
                    _key: "84fc02e29ec6",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free",
                  },
                  {
                    _key: "b24e51503579",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "ddd",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Resource Compass",
            productVariants: [
              {
                _key: "6f3ea2553252",
                name: "free service",
                pricingPlans: [
                  {
                    _key: "ed1d1709945e",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free service",
                  },
                ],
              },
            ],
          },
          {
            internalName: "RED Product (with BLUE and WHITE contexts)",
            productVariants: [
              {
                _key: "4758f5a52c57",
                name: "FREE Variant",
                pricingPlans: [
                  {
                    _key: "4a224581dfc3",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "FREE as in FREE BEER",
                  },
                ],
              },
            ],
          },
          {
            internalName: "[TC] MyQRAJJJ",
            productVariants: [
              {
                _key: "090c0a55-e786-4c74-80d4-41d4aca67f06",
                name: "Discount for academic institutions (access to all documents)1",
                pricingPlans: [
                  {
                    _key: "2cdecfedfe17",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited users",
                    name: "Academic institutions",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Onix Work",
            productVariants: [
              {
                _key: "718a2f8b4b22",
                name: "Onix Work",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "ioCurrents MarineInsight",
            productVariants: [
              {
                _key: "7351423ebee9",
                name: "ioCurrents MarineInsight",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Automation Test 02 for Marketplace",
            productVariants: [
              {
                _key: "d571b4f8e21b",
                name: "standard access",
                pricingPlans: [
                  {
                    _key: "a07fe60aec7f",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "freeeeeee",
                  },
                ],
              },
            ],
          },
          {
            internalName: "ECO Insight",
            productVariants: [
              {
                _key: "2ffe82e2fa70",
                name: "ECO Insight",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "WIP: Temasys Skylink",
            productVariants: [
              {
                _key: "080f9e5ec55e",
                name: "Temasys Skylink",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "DUMMY: Something seomthing!!!!",
            productVariants: [
              {
                _key: "98f01c929aa8",
                name: "Variant name!!!",
                pricingPlans: [
                  {
                    _key: "49ac663bb8b2",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "I am a short description",
                    name: "One-time purchase plan",
                  },
                  {
                    _key: "21f1e548c01d",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "I am a recurring subscription plan",
                    name: "Recurring subscriptin plan",
                  },
                  {
                    _key: "7c2b9bacb525",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "I am a metered consuptino okan :)",
                    name: "Metered consumption plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: Smart Cable Guard",
            productVariants: [
              {
                _key: "bb24108b1620",
                name: "Variant 1",
                pricingPlans: [
                  {
                    _key: "ecc1aa2e5599",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Plan 1",
                  },
                ],
              },
            ],
          },
          {
            internalName: "INSTATRUST™",
            productVariants: [
              {
                _key: "845ea512930a",
                name: "Free access",
                pricingPlans: [
                  {
                    _key: "c05820237bc5",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "sdfasd",
                    name: "Free access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Test something obvious",
            productVariants: [
              {
                _key: "2205418f2ec7",
                name: "Network",
                pricingPlans: [
                  {
                    _key: "63fd49f11a2c",
                    _type: "freePlan",
                    addOnPricingPlans: [
                      {
                        _key: "707b39a71910",
                        _type: "freeAddOnPlan",
                        internalName: "test test test test test ",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                    ],
                    description: null,
                    name: "Free version",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Hannah test",
            productVariants: null,
          },
          {
            internalName: "Forecaster tim",
            productVariants: [
              {
                _key: "cbc72e50ceae",
                name: "Forecaster",
                pricingPlans: [
                  {
                    _key: "da0d9bc82177",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "sdf",
                    name: "asdf",
                  },
                ],
              },
              {
                _key: "3d3b4ab6c93f",
                name: "ttt",
                pricingPlans: [
                  {
                    _key: "20c747ae1c07",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "AAA",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: Shipweight",
            productVariants: [
              {
                _key: "54142e2f3e93",
                name: "Shipweight",
                pricingPlans: [
                  {
                    _key: "d616a921f1a5",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
            ],
          },
          {
            internalName: "Rig",
            productVariants: [
              {
                _key: "f70939bac26c",
                name: "Rig",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "In:Range",
            productVariants: null,
          },
          {
            internalName: "Pressure Safety Valve Manager",
            productVariants: [
              {
                _key: "4de02d832a76",
                name: "Pressure Safety Valve Manager",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Umbrella's paid products",
            productVariants: [
              {
                _key: "bc926a06f960",
                name: "Free sample",
                pricingPlans: [
                  {
                    _key: "2a34928a69e4",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: "Test with limited resources",
                    name: "Free sample",
                  },
                  {
                    _key: "51298a87f3e1",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: "I am the description for lead gen",
                    name: "Contact us to discuss your needs",
                  },
                ],
              },
              {
                _key: "a7ab63f519b9",
                name: "Pre-installed on a virtual machine",
                pricingPlans: [
                  {
                    _key: "3727df57c7c6",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Hidden plan",
                  },
                  {
                    _key: "3b0f997f498aeef8a8d2746fc37db613",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "Test addon I",
                        key: {
                          _type: "slug",
                          current: "test2",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                      {
                        _key: "59dc2dadb20c",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        internalName: "Paid extension",
                        key: {
                          _type: "slug",
                          current: "paid-extension-2",
                        },
                        name: "Paid extension",
                        prices: [
                          {
                            _key: "c5a4c96bc3e0",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "71324688525a",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "unlimited",
                        salesforceProduct: "fdsfsdf",
                        slaDuration: "none",
                        slaDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "The license is activated and sent immediately after purchase and is valid for all versions of Phast for one user only.",
                    name: "1 day access long name",
                  },
                  {
                    _key: "1490179ff2cd5e9b6dbe09cee3d6e78f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "Test addon I",
                        key: {
                          _type: "slug",
                          current: "test22",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                      {
                        _key: "aa837c6515c7",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        description: "Paid addon is the bomb",
                        internalName: "I am an extension",
                        key: {
                          _type: "slug",
                          current: "paid-addon",
                        },
                        name: "Paid addon",
                        prices: [
                          {
                            _key: "60e90679ab7ca572c913b34fdc960f8f",
                            _type: "price",
                            amount: 10000,
                            currency: "EUR",
                          },
                          {
                            _key: "b776e2561f5f",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "123",
                        slaDuration: "none",
                        slaDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                      },
                    ],
                    description: null,
                    name: "30 day access",
                  },
                  {
                    _key: "a66c0c44593d35a305f6e0db9a527b7c",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "Test addon I",
                        key: {
                          _type: "slug",
                          current: "test222",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                    ],
                    description: null,
                    name: "1 year access",
                  },
                ],
              },
              {
                _key: "301e03a800f435930e1113328033eed4",
                name: "Installation on the N3tw@rk",
                pricingPlans: [
                  {
                    _key: "3727df57c7c6",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "What aobu tnow?",
                        key: {
                          _type: "slug",
                          current: "test2222",
                        },
                        name: "Test extension",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                      {
                        _key: "4827d001c435",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "30-days",
                        accessDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                        description:
                          "Paid extension with a long description. Paid extension with a long description. Paid extension with a long description. Paid extension with a long description. Paid extension with a long description.",
                        internalName: "Paid extension",
                        key: {
                          _type: "slug",
                          current: "paid-extension",
                        },
                        name: "Paid extension",
                        prices: [
                          {
                            _key: "ae65a7b6bdeeabd109e0b4519c2efe94",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "30cf3efd6064",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://google.com",
                        salesforceProduct: "gfdsgfdsgf",
                        slaDuration: "30-days",
                        slaDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                      },
                      {
                        _key: "76e54a3af631",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "30-days",
                        accessDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                        description:
                          "No read more but paid. No read more but paid. No read more but paid. No read more but paid. No read more but paid.",
                        internalName: "What about now",
                        key: {
                          _type: "slug",
                          current: "no-read-more-but-paid",
                        },
                        name: "No read more but paid",
                        prices: [
                          {
                            _key: "14c0f4aa52a3b6f31c54ac66d0a5438d",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "ce5a4d3d4d26",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 31,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "vxcv",
                        slaDuration: "30-days",
                        slaDuration2: {
                          _ref: "duration-30-days",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "The license is activated and sent immediately after purchase and is valid for all versions of Phast for one user only.",
                    name: "7 day access",
                  },
                  {
                    _key: "1490179ff2cd5e9b6dbe09cee3d6e78f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "I am an extension",
                        key: {
                          _type: "slug",
                          current: "test221",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                    ],
                    description: null,
                    name: "30 day access",
                  },
                  {
                    _key: "a66c0c44593d35a305f6e0db9a527b7c",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "84b2a6f28d0c",
                        _type: "freeAddOnPlan",
                        internalName: "What about now?",
                        key: {
                          _type: "slug",
                          current: "test2224",
                        },
                        name: "Test addon",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl: "https://test.com/whatever#text=Tear",
                      },
                    ],
                    description: null,
                    name: "1 year access",
                  },
                  {
                    _key: "1f5132b10fa3",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Lead gen",
                  },
                  {
                    _key: "af521b7cdecd",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Recurring with trial",
                    name: "Recurring with trial",
                  },
                ],
              },
              {
                _key: "0c88b1ba4c4c",
                name: "Variant with visibility!",
                pricingPlans: [
                  {
                    _key: "1d77a7e6af16",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Restricted plan",
                  },
                  {
                    _key: "67dcda680ae37a6398aa1cc25addc334",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Hidden plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "DUMMY: Apple Product (Single trial plan test)",
            productVariants: [
              {
                _key: "99ff31eb9f73",
                name: "Groovy variant",
                pricingPlans: [
                  {
                    _key: "6bf285317b9a",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "test",
                    name: "test",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Analytic Innovation Centre – Analytic Services",
            productVariants: [
              {
                _key: "214790df726b",
                name: "Analytic Innovation Centre – Analytic Services",
                pricingPlans: [
                  {
                    _key: "40b3420219ee",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
              {
                _key: "36a44a64d3c1",
                name: "TEST",
                pricingPlans: [],
              },
              {
                _key: "7790e797d2bc",
                name: "TEST 2",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Bluester is real2",
            productVariants: [
              {
                _key: "939d58bd0b88",
                name: "Free",
                pricingPlans: [
                  {
                    _key: "1c970b4df229",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Test",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Organizational Maturity Assessment",
            productVariants: null,
          },
          {
            internalName: "[TC] Container certification   vc",
            productVariants: [
              {
                _key: "a4e9bf75-f420-4c65-b34b-7d128cfd2e00",
                name: "Variant with all plans",
                pricingPlans: [
                  {
                    _key: "762a9e1e9cde",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Recurring subscription plan",
                  },
                  {
                    _key: "e25e2c2d4e08",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Metered consumption plan",
                  },
                  {
                    _key: "4046d34d-6185-4bec-b305-6bca589f8557",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access",
                  },
                  {
                    _key: "1e3c60798bd6",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "TEST",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Hybrid Sensor Technology",
            productVariants: [
              {
                _key: "f039ead9ff65",
                name: "Hybrid Sensor Technology",
                pricingPlans: [
                  {
                    _key: "fdb798881546",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "onetime",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Product Test",
            productVariants: null,
          },
          {
            internalName: null,
            productVariants: [
              {
                _key: "4d53e2f55b37",
                name: "My variant 2",
                pricingPlans: [
                  {
                    _key: "cfe9cfa17190",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "The free plan 2",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Arundo Maritime Suite powered by Veracity",
            productVariants: [
              {
                _key: "642978722b94",
                name: "Arundo Maritime Suite powered by Veracity",
                pricingPlans: [
                  {
                    _key: "8234fa4699de",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
            ],
          },
          {
            internalName: null,
            productVariants: [
              {
                _key: "eeed46c60c17",
                name: null,
                pricingPlans: [
                  {
                    _key: "f6d4c1643dab",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "The plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: Veracity Deep Searchfabric510",
            productVariants: [
              {
                _key: "c200edbffe8e",
                name: "test",
                pricingPlans: [
                  {
                    _key: "6e8c378ed906",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "ddd",
                  },
                  {
                    _key: "14df476a6f45",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
              {
                _key: "93abb790a284",
                name: "test2",
                pricingPlans: [
                  {
                    _key: "52b758c88b88",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "123",
                    name: "1231",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Umbrella's free product test",
            productVariants: [
              {
                _key: "9c686e38d0d3",
                name: "Standard variant",
                pricingPlans: [
                  {
                    _key: "3cece63b70d7",
                    _type: "freePlan",
                    addOnPricingPlans: [
                      {
                        _key: "b593fff326cc",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "month",
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: "slug",
                          current: "super-duper-add-on",
                        },
                        name: "Super-duper add-on",
                        paymentTerms: "14 days",
                        prices: [
                          {
                            _key: "cf25ca7364b9",
                            _type: "price",
                            amount: 150,
                            currency: "EUR",
                          },
                          {
                            _key: "7aff817f4bd3",
                            _type: "price",
                            amount: 125,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        renewalNotificationDays: 30,
                        salesforceProduct: "api-test1",
                      },
                      {
                        _key: "dc2888c4bde5",
                        _type: "freeAddOnPlan",
                        internalName: "Hannah test add on",
                        key: {
                          _type: "slug",
                          current: "hannah-test-pricing-plan",
                        },
                        name: "Hannah test pricing plan",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                      {
                        _key: "b15c94c3c98e",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "year",
                        accessDuration2: {
                          _ref: "duration-3-years",
                          _type: "reference",
                        },
                        description: "Hannah test add on product",
                        key: {
                          _type: "slug",
                          current: "one-time-purchase-add-on-2",
                        },
                        name: "One time purchase add on 2",
                        prices: [
                          {
                            _key: "14e10642d71b55adfe460592990919d0",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "785c78420aff",
                            _type: "price",
                            amount: 100,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "one-time-purchase-add-on-2",
                        slaDuration: "quarter",
                      },
                    ],
                    description: "Start free and upgrade as you prefer",
                    name: "Freemium plan",
                  },
                  {
                    _key: "96392ca5cae9",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "ec3a40ff88e9",
                        _type: "freeAddOnPlan",
                        key: {
                          _type: "slug",
                          current: "hannah-test-add-on2",
                        },
                        name: "Hannah test add-on2",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl:
                          "https://store.veracity.com/veracity-data-fabric-secure-data-sharing",
                      },
                    ],
                    description: null,
                    name: "Premium Hannah test plan",
                  },
                  {
                    _key: "4021118c9b9f",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Recurring subscription plan 1",
                  },
                ],
              },
              {
                _key: "9791227d6005",
                name: "Variant 2",
                pricingPlans: [
                  {
                    _key: "dcdcce55cf17",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "6cb4427d05a8",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "year",
                        accessDuration2: {
                          _ref: "duration-year",
                          _type: "reference",
                        },
                        description:
                          "Displays an input element wrapped in a div to allow extra content, like counter, side icons or buttons. Forwards many relevant props to the inner input. Handles different states, like loading or error. Exposes some props to the children via context.",
                        key: {
                          _type: "slug",
                          current: "one-time-addon-in-v2",
                        },
                        name: "One time addon in V2",
                        prices: [
                          {
                            _key: "e6bf62fe64d0388e0103ddae700fcc65",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "824d4a335f9e",
                            _type: "price",
                            amount: 666,
                            currency: "USD",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        readmoreurl:
                          "https://store.veracity.com/veracity-data-fabric-secure-data-sharing",
                        salesforceProduct: "sf-123",
                        slaDuration: "year",
                        slaDuration2: {
                          _ref: "duration-half-year",
                          _type: "reference",
                        },
                      },
                    ],
                    description: null,
                    name: "Test One time plan",
                  },
                ],
              },
              {
                _key: "39cc4d825a20",
                name: "Variant 3",
                pricingPlans: [
                  {
                    _key: "d8903cc9500e",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "test lead plan 3",
                  },
                ],
              },
            ],
          },
          {
            internalName: "HEPPSTER",
            productVariants: null,
          },
          {
            internalName: "EEDI Calculator",
            productVariants: [
              {
                _key: "ef5f92726ab0",
                name: "EEDI Calculator",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Arundo Analytics",
            productVariants: [
              {
                _key: "9179a4c82add",
                name: "Arundo Analytics",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "ExplEnergyx",
            productVariants: [
              {
                _key: "d859eb0e6ec5",
                name: "Free Beta access ",
                pricingPlans: [
                  {
                    _key: "3c1292b65fff",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Beta access",
                  },
                  {
                    _key: "7a531ae77f45",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
              {
                _key: "307d0d425dc0",
                name: "Full version",
                pricingPlans: [
                  {
                    _key: "543475505a18",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Full version",
                  },
                  {
                    _key: "a9f9e5aa7347",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
            ],
          },
          {
            internalName: "DP Capability Assessment",
            productVariants: null,
          },
          {
            internalName: "RED Product (with BLUE and WHITE contexts)",
            productVariants: [
              {
                _key: "be3cb8a85bb4",
                name: "Test",
                pricingPlans: [
                  {
                    _key: "6ced07c4122d",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "asdf",
                  },
                  {
                    _key: "0045ac8e6b65",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "aa",
                  },
                ],
              },
            ],
          },
          {
            internalName: "[TC] MyQRAJJJ",
            productVariants: [
              {
                _key: "090c0a55-e786-4c74-80d4-41d4aca67f06",
                name: "Discount for academic institutions (access to all documents)1",
                pricingPlans: [
                  {
                    _key: "2cdecfedfe17",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Unlimited users",
                    name: "Academic institutions",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Automation Test 02 for Marketplace",
            productVariants: [
              {
                _key: "d571b4f8e21b",
                name: "standard access",
                pricingPlans: [
                  {
                    _key: "a07fe60aec7f",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "freeeeeee",
                  },
                ],
              },
            ],
          },
          {
            internalName: "DUMMY: Something seomthing!!!!",
            productVariants: [
              {
                _key: "98f01c929aa8",
                name: "Variant name!!!",
                pricingPlans: [
                  {
                    _key: "49ac663bb8b2",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "I am a short description",
                    name: "One-time purchase plan",
                  },
                  {
                    _key: "21f1e548c01d",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "I am a recurring subscription plan",
                    name: "Recurring subscriptin plan",
                  },
                  {
                    _key: "7c2b9bacb525",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "I am a metered consuptino okan :)",
                    name: "Metered consumption plan",
                  },
                  {
                    _key: "21bf90d69238",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "asd",
                    name: "asd",
                  },
                  {
                    _key: "b2c7b7669a90",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "asd",
                    name: "asd",
                  },
                  {
                    _key: "7d3bf163a6af",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "as",
                    name: "spdovksdvok",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Open Data - Ocean Space",
            productVariants: [
              {
                _key: "b7e894f12025",
                name: "Open Data - Ocean Space",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Data management maturity self-assessment",
            productVariants: [
              {
                _key: "37b5f1dcee6c",
                name: "Free Access",
                pricingPlans: [
                  {
                    _key: "3b077e96c006",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free Access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "MRV Monitoring Plan Generator",
            productVariants: [
              {
                _key: "5b859d3ac6c8",
                name: "MRV Monitoring Plan Generator",
                pricingPlans: [
                  {
                    _key: "c0cbde94cf9a",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Temp test",
            productVariants: [
              {
                _key: "2648b184800e",
                name: "Temp variant",
                pricingPlans: [
                  {
                    _key: "1e8ea1142ab7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "b83150f31ba0",
                        _type: "freeAddOnPlan",
                        key: {
                          _type: "slug",
                          current: "temp-planaa",
                        },
                        name: "Temp planaa",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                    ],
                    description: null,
                    name: "Temp plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Many variants, plans and add-ons",
            productVariants: [
              {
                _key: "68ba5cbe08c5",
                name: "Variant 1",
                pricingPlans: [
                  {
                    _key: "4eafe52c54cc",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-1",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-2",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 1",
                  },
                  {
                    _key: "d87b2c5f4c52e48dd098a69907de0535",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-3",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-4",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 2",
                  },
                ],
              },
              {
                _key: "6e6f117ae2ed6f7560610119472b895a",
                name: "Variant 1_copy",
                pricingPlans: [
                  {
                    _key: "4eafe52c54cc",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-1-copy",
                        },
                        name: "Add-On 1_copy",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-2-copy",
                        },
                        name: "Add-On 2-copy",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 1",
                  },
                  {
                    _key: "d87b2c5f4c52e48dd098a69907de0535",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-3-copy",
                        },
                        name: "Add-On 1-copy",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-4-copy",
                        },
                        name: "Add-On 2-copy",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 2",
                  },
                ],
              },
              {
                _key: "941042990a98c092477cb81b1c50cc3f",
                name: "Variant 2",
                pricingPlans: [
                  {
                    _key: "4eafe52c54cc",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-5",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-6",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 1",
                  },
                  {
                    _key: "d87b2c5f4c52e48dd098a69907de0535",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-7",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-8",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 2",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Myhre",
            productVariants: [
              {
                _key: "9e0e91818afd",
                name: "Variant",
                pricingPlans: [
                  {
                    _key: "5144980c6e18",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free plan",
                  },
                  {
                    _key: "49003986980f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "pricing Plan 2",
                  },
                ],
              },
              {
                _key: "f540d4bd13a3",
                name: "Variant2",
                pricingPlans: [
                  {
                    _key: "91f5c7f6a5b5",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Test",
                  },
                  {
                    _key: "21cb9e93e5fd",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "oneTime",
                  },
                  {
                    _key: "1a5303e3291c",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: [
                      {
                        _key: "0cd72d494c0f",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "year",
                        cancellationTermDays: 30,
                        inheritQuantity: false,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: "slug",
                          current: "acme-extension",
                        },
                        name: "Acme Extension",
                        paymentTerms: "30 days",
                        prices: [
                          {
                            _key: "c5ccc3d1a3a79aeb25c7c9162eaa773f",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "05f991659ed9",
                            _type: "price",
                            amount: 75,
                            currency: "GBP",
                          },
                        ],
                        quantity: 28,
                        quantityBlocks: [
                          {
                            _key: "84bbcb5520d79cbb0e4555447725a44b",
                            _type: "quantityBlock",
                            name: "1-5 users",
                            prices: [
                              {
                                _key: "8281554afe45dc67da1a94d8fca6c988",
                                _type: "price",
                                amount: 100,
                                currency: "EUR",
                              },
                            ],
                          },
                        ],
                        quantityPolicy: "fixed-quantity",
                        renewalNotificationDays: 60,
                        salesforceProduct: "APITEST-HEPP",
                        salesforceProduct2: "APITEST-HEPP",
                      },
                    ],
                    description: null,
                    name: "Annual subscription",
                  },
                ],
              },
            ],
          },
          {
            internalName: "DUMMY: Test 01",
            productVariants: [
              {
                _key: "2b781dcf-2f16-4c55-8d58-b45e33de46d1",
                name: "Test",
                pricingPlans: [
                  {
                    _key: "5440c35bd986",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "The license can be activated at any time after purchase and is valid for one user only.",
                    name: null,
                  },
                  {
                    _key: "1c8b68189491",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.",
                    name: "7 days - 1 user - Network license",
                  },
                  {
                    _key: "5b12415c05be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.",
                    name: "7 days - 2 users - Network license",
                  },
                  {
                    _key: "d945733bf8e7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.",
                    name: "7 days - 3 users - Network license",
                  },
                  {
                    _key: "5641a52bbf62",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Need more than 3 users?",
                  },
                ],
              },
              {
                _key: "c14405dfbbfe60b62b6daa26399fd9fe",
                name: "Sesam for topside - 30 days",
                pricingPlans: [
                  {
                    _key: "5440c35bd986",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "The license can be activated at any time after purchase and is valid for one user only.",
                    name: "30 days - 1 user - Standalone",
                  },
                  {
                    _key: "1c8b68189491",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.",
                    name: "30 days - 1 user - Network license",
                  },
                  {
                    _key: "5b12415c05be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.",
                    name: "30 days - 2 users - Network license",
                  },
                  {
                    _key: "d945733bf8e7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.",
                    name: "30 days - 3 users - Network license",
                  },
                  {
                    _key: "5641a52bbf62",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Need more than 3 users?",
                  },
                ],
              },
              {
                _key: "66ae985002c0161d56b10281ca42d6fa",
                name: "Sesam for topside - 90 days",
                pricingPlans: [
                  {
                    _key: "5440c35bd986",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "The license can be activated at any time after purchase and is valid for one user only.",
                    name: "90 days - 1 user - Standalone",
                  },
                  {
                    _key: "1c8b68189491",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.",
                    name: "90 days - 1 user - Network license",
                  },
                  {
                    _key: "5b12415c05be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.",
                    name: "90 days - 2 users - Network license",
                  },
                  {
                    _key: "d945733bf8e7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.",
                    name: "90 days - 3 users - Network license",
                  },
                  {
                    _key: "5641a52bbf62",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Need more than 3 users?",
                  },
                ],
              },
              {
                _key: "bf015c76a734",
                name: "Need long term access?",
                pricingPlans: [
                  {
                    _key: "47331dd0513e",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description:
                      "Contact us to discuss your needs for long term access to Sesam for Topsides.",
                    name: "Need long term access?",
                  },
                ],
              },
            ],
          },
          {
            internalName: "[TC] Alternative Fuels Insight platform (AFI)",
            productVariants: [
              {
                _key: "0721d29995f8",
                name: "BranTest",
                pricingPlans: [
                  {
                    _key: "ade90186a484",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: "Bran test for Demo",
                    name: "Onetime",
                  },
                ],
              },
              {
                _key: "3416abc1f6cc",
                name: "TESTVariant",
                pricingPlans: [
                  {
                    _key: "de2609109401",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free",
                  },
                ],
              },
              {
                _key: "9ef6b536a6c6",
                name: "Test recurring",
                pricingPlans: [
                  {
                    _key: "f11e7a3bc839",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "recurring",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Pydome",
            productVariants: [
              {
                _key: "7ba7201702f5",
                name: "PyDome",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Open Data - Ocean Space",
            productVariants: [
              {
                _key: "b7e894f12025",
                name: "Open Data - Ocean Space",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Data management maturity self-assessment",
            productVariants: [
              {
                _key: "37b5f1dcee6c",
                name: "Free Access",
                pricingPlans: [
                  {
                    _key: "3b077e96c006",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free Access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Data Quality Assessment",
            productVariants: [
              {
                _key: "78d5908f2577",
                name: "Data Quality Assessment",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "New TEST update event message (TEST)2",
            productVariants: [
              {
                _key: "e237ed8e291e",
                name: "TEST",
                pricingPlans: [
                  {
                    _key: "7d4c13b14145",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "One time purchase",
                  },
                ],
              },
            ],
          },
          {
            internalName: "MRV Monitoring Plan Generator",
            productVariants: [
              {
                _key: "5b859d3ac6c8",
                name: "MRV Monitoring Plan Generator",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Temp test",
            productVariants: [
              {
                _key: "2648b184800e",
                name: "Temp variant",
                pricingPlans: [
                  {
                    _key: "1e8ea1142ab7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "b83150f31ba0",
                        _type: "freeAddOnPlan",
                        key: {
                          _type: "slug",
                          current: "temp-planaa",
                        },
                        name: "Temp planaa",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                    ],
                    description: null,
                    name: "Temp plan",
                  },
                ],
              },
            ],
          },
          {
            internalName: "EETA online",
            productVariants: [
              {
                _key: "58306021dea2",
                name: "EETA Online licence",
                pricingPlans: [
                  {
                    _key: "ca3853a4073f",
                    _type: "trialPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free 3 day trial",
                  },
                  {
                    _key: "a7fb5d3262ff",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description:
                      "Complete access for an unlimited amount of users",
                    name: "Full license",
                  },
                ],
              },
            ],
          },
          {
            internalName:
              "WIP: RSCS+ Route specific container stowage route calculation",
            productVariants: [
              {
                _key: "08d8c42520f9",
                name: "Free service",
                pricingPlans: [
                  {
                    _key: "c2f0b5e50cc8",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free service",
                  },
                ],
              },
            ],
          },
          {
            internalName: "WIP: SDG Lens",
            productVariants: [],
          },
          {
            internalName: "Many variants, plans and addons",
            productVariants: [
              {
                _key: "68ba5cbe08c5",
                name: "Variant 1",
                pricingPlans: [
                  {
                    _key: "4eafe52c54cc",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-1",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-2",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 1",
                  },
                  {
                    _key: "d87b2c5f4c52e48dd098a69907de0535",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-3",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-4",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 2",
                  },
                ],
              },
              {
                _key: "941042990a98c092477cb81b1c50cc3f",
                name: "Variant 2",
                pricingPlans: [
                  {
                    _key: "4eafe52c54cc",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-5",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-6",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 1",
                  },
                  {
                    _key: "d87b2c5f4c52e48dd098a69907de0535",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: [
                      {
                        _key: "d1037b137098",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-7",
                        },
                        name: "Add-On 1",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-1",
                        slaDuration: "none",
                      },
                      {
                        _key: "bf8477693d6f50e4d9b2d4031fd91463",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "add-on-8",
                        },
                        name: "Add-On 2",
                        prices: [
                          {
                            _key: "a61d02f9c1793e66c621af33cbf258cd",
                            _type: "price",
                            amount: 10,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "ADD-ON-2",
                        slaDuration: "none",
                      },
                    ],
                    description: null,
                    name: "Plan 2",
                  },
                ],
              },
            ],
          },
          {
            internalName: "PSC Planner",
            productVariants: [
              {
                _key: "30cf401b28f5",
                name: "Free Service",
                pricingPlans: [
                  {
                    _key: "f70e49b4b57a",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "NEW Alternative Fuels Insight (AFI)",
            productVariants: [
              {
                _key: "636595e1c1be",
                name: "Free",
                pricingPlans: [
                  {
                    _key: "ff5023ed864d",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description:
                      "Access AFI insights dashboard and learn about different fuels consumption",
                    name: "Free",
                  },
                ],
              },
              {
                _key: "dca2f95f155400c8d5053b5784a92ee4",
                name: "Free with extensions",
                pricingPlans: [
                  {
                    _key: "ff5023ed864d",
                    _type: "freePlan",
                    addOnPricingPlans: [
                      {
                        _key: "3725c6900c24",
                        _type: "freeAddOnPlan",
                        key: {
                          _type: "slug",
                          current: "free-extension",
                        },
                        name: "Free extension",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                      {
                        _key: "daaff6438153",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "none",
                        accessDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                        key: {
                          _type: "slug",
                          current: "paid-extension",
                        },
                        name: "Paid extension",
                        prices: [
                          {
                            _key: "35b0b06ec899acb13242334158c35c99",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: "3ac3b9627377262454f2b033eb5fa779",
                            _type: "quantityBlock",
                            name: "1-5 users",
                            prices: [
                              {
                                _key: "db9a3be69a3387af17eeb0ffcfc06b9b",
                                _type: "price",
                                amount: 100,
                                currency: "EUR",
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "NA",
                        slaDuration: "none",
                        slaDuration2: {
                          _ref: "duration-none",
                          _type: "reference",
                        },
                      },
                    ],
                    description:
                      "Access AFI insights dashboard and learn about different fuels consumption",
                    name: "Free with extensions",
                  },
                ],
              },
              {
                _key: "2ffeb9a63c2e",
                name: "AFI Premium - One fuel",
                pricingPlans: [
                  {
                    _key: "0b1b98162c24",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: "Description for this plan",
                    name: "Battery",
                  },
                  {
                    _key: "d7509390e75281cab42c7d3558fb6c56",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "LNG",
                  },
                  {
                    _key: "d0233cbe1f5ccdda1b155d86261cdb8e",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Scrubber",
                  },
                  {
                    _key: "4d6bb5944ab4",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "One time plan",
                  },
                ],
              },
              {
                _key: "e7db808da66001299c32ff4866390ef7",
                name: "AFI Premium - Multipack",
                pricingPlans: [
                  {
                    _key: "0b1b98162c24",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description:
                      "Short description Short description Short description Short description Short description ",
                    name: "Multipack",
                  },
                  {
                    _key: "55675ce7c027838ef32b5b609df4843e",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Multipack 2",
                  },
                ],
              },
              {
                _key: "8d18f1842f31",
                name: "Complex variant for testing block pricing",
                pricingPlans: [
                  {
                    _key: "937ac0b305b1",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: [
                      {
                        _key: "775fc9679bcb",
                        _type: "freeAddOnPlan",
                        internalName: "Free",
                        key: {
                          _type: "slug",
                          current: "free-extension-for-the-show",
                        },
                        name: "Free extension for the show",
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                      },
                      {
                        _key: "5de9b50992dd",
                        _type: "oneTimePurchaseAddOnPlan",
                        accessDuration: "5-years",
                        accessDuration2: {
                          _ref: "duration-5-years",
                          _type: "reference",
                        },
                        internalName: "One-time purchase extension",
                        key: {
                          _type: "slug",
                          current: "one-time-purchase-extension",
                        },
                        name: "One-time purchase extension",
                        prices: [
                          {
                            _key: "e6105387a9e25b05dc981664be770b2a",
                            _type: "price",
                            amount: 101,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "coin",
                        slaDuration: "5-years",
                        slaDuration2: {
                          _ref: "duration-5-years",
                          _type: "reference",
                        },
                      },
                      {
                        _key: "f589be14e3db",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "year",
                        internalName: "Recurring subscription extension",
                        key: {
                          _type: "slug",
                          current: "recurring-subscription-extension",
                        },
                        name: "Recurring subscription extension",
                        prices: [
                          {
                            _key: "ab7fd0799bebf0d6649a262a5cafa753",
                            _type: "price",
                            amount: 102,
                            currency: "EUR",
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: "fixed-quantity",
                        salesforceProduct: "fdsf",
                      },
                    ],
                    description: null,
                    name: "Subscription plan",
                  },
                ],
              },
              {
                _key: "353ed2180a42",
                name: "Enterprise",
                pricingPlans: [
                  {
                    _key: "9a745c622325",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description:
                      "Contact us for a special discount. You would be surprised what we can offer for BIG CORP.",
                    name: "Contact Us",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Digital free span assessments",
            productVariants: [
              {
                _key: "34ed972c8488",
                name: "Digital free span assessments",
                pricingPlans: null,
              },
            ],
          },
          {
            internalName: "Myhre",
            productVariants: [
              {
                _key: "9e0e91818afd",
                name: "Variant",
                pricingPlans: [
                  {
                    _key: "5144980c6e18",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "free plan",
                  },
                  {
                    _key: "49003986980f",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "pricing Plan 2",
                  },
                ],
              },
              {
                _key: "f540d4bd13a3",
                name: "Variant2",
                pricingPlans: [
                  {
                    _key: "91f5c7f6a5b5",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Test",
                  },
                  {
                    _key: "21cb9e93e5fd",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "oneTime",
                  },
                  {
                    _key: "1a5303e3291c",
                    _type: "subscriptionPlan",
                    addOnPricingPlans: [
                      {
                        _key: "0cd72d494c0f",
                        _type: "subscriptionAddOnPlan",
                        billingInterval: "year",
                        cancellationTermDays: 30,
                        inheritQuantity: false,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: "slug",
                          current: "acme-extension",
                        },
                        name: "Acme Extension",
                        paymentTerms: "30 days",
                        prices: [
                          {
                            _key: "c5ccc3d1a3a79aeb25c7c9162eaa773f",
                            _type: "price",
                            amount: 100,
                            currency: "EUR",
                          },
                          {
                            _key: "05f991659ed9",
                            _type: "price",
                            amount: 75,
                            currency: "GBP",
                          },
                        ],
                        quantity: 200,
                        quantityBlocks: [
                          {
                            _key: "84bbcb5520d79cbb0e4555447725a44b",
                            _type: "quantityBlock",
                            name: "1-5 users",
                            prices: [
                              {
                                _key: "8281554afe45dc67da1a94d8fca6c988",
                                _type: "price",
                                amount: 100,
                                currency: "EUR",
                              },
                            ],
                          },
                        ],
                        quantityPolicy: "fixed-quantity",
                        renewalNotificationDays: 60,
                        salesforceProduct: "APITEST-HEPP",
                        salesforceProduct2: "APITEST-HEPP",
                      },
                    ],
                    description: null,
                    name: "Annual subscription",
                  },
                ],
              },
            ],
          },
          {
            internalName: "Pre-Approval Screening Service",
            productVariants: [
              {
                _key: "c331035241f7",
                name: "Free access",
                pricingPlans: [
                  {
                    _key: "af17188507e0",
                    _type: "freePlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Free access",
                  },
                ],
              },
            ],
          },
          {
            internalName: "DUMMY: Test 01",
            productVariants: [
              {
                _key: "2b781dcf-2f16-4c55-8d58-b45e33de46d1",
                name: "Test",
                pricingPlans: [
                  {
                    _key: "5440c35bd986",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "The license can be activated at any time after purchase and is valid for one user only.",
                    name: null,
                  },
                  {
                    _key: "1c8b68189491",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.",
                    name: "7 days - 1 user - Network license",
                  },
                  {
                    _key: "5b12415c05be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.",
                    name: "7 days - 2 users - Network license",
                  },
                  {
                    _key: "d945733bf8e7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.",
                    name: "7 days - 3 users - Network license",
                  },
                  {
                    _key: "5641a52bbf62",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Need more than 3 users?",
                  },
                ],
              },
              {
                _key: "c14405dfbbfe60b62b6daa26399fd9fe",
                name: "Sesam for topside - 30 days",
                pricingPlans: [
                  {
                    _key: "5440c35bd986",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "The license can be activated at any time after purchase and is valid for one user only.",
                    name: "30 days - 1 user - Standalone",
                  },
                  {
                    _key: "1c8b68189491",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.",
                    name: "30 days - 1 user - Network license",
                  },
                  {
                    _key: "5b12415c05be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.",
                    name: "30 days - 2 users - Network license",
                  },
                  {
                    _key: "d945733bf8e7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.",
                    name: "30 days - 3 users - Network license",
                  },
                  {
                    _key: "5641a52bbf62",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Need more than 3 users?",
                  },
                ],
              },
              {
                _key: "66ae985002c0161d56b10281ca42d6fa",
                name: "Sesam for topside - 90 days",
                pricingPlans: [
                  {
                    _key: "5440c35bd986",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "The license can be activated at any time after purchase and is valid for one user only.",
                    name: "90 days - 1 user - Standalone",
                  },
                  {
                    _key: "1c8b68189491",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.",
                    name: "90 days - 1 user - Network license",
                  },
                  {
                    _key: "5b12415c05be",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.",
                    name: "90 days - 2 users - Network license",
                  },
                  {
                    _key: "d945733bf8e7",
                    _type: "oneTimePurchasePlan",
                    addOnPricingPlans: null,
                    description:
                      "We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.",
                    name: "90 days - 3 users - Network license",
                  },
                  {
                    _key: "5641a52bbf62",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description: null,
                    name: "Need more than 3 users?",
                  },
                ],
              },
              {
                _key: "bf015c76a734",
                name: "Need long term access?",
                pricingPlans: [
                  {
                    _key: "47331dd0513e",
                    _type: "leadGenPlan",
                    addOnPricingPlans: null,
                    description:
                      "Contact us to discuss your needs for long term access to Sesam for Topsides.",
                    name: "Need long term access?",
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  },
] as MockMethod[];
