import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

export interface Product {
  internalName: string;
  productVariants: any[];
}

const Random = Mock.Random;
export default [
  {
    url: '/api/users',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        data: Mock.mock({
          'list|1-10': [
            {
              'id|+1': 1,
              'name|+1': [
                'Peter',
                'John',
                'Linda',
                'Simon',
                'Diego',
                'Silva',
                'Adam',
                'Davis',
                'Wilson',
                'Karida',
                'Michaela',
                'Lindsay',
                'Mabel',
                'Lisa',
                'Madge',
                'Cora',
                'Marcia',
                'Nicole',
              ],
              'gender|+1': ['male', 'female'],
            },
          ],
        }),
      };
    },
  },
  {
    url: RegExp('/api/user' + '.*'),
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: Mock.mock({
          'id|+1': 1,
          'name|+1': [
            'Peter',
            'John',
            'Linda',
            'Simon',
            'Diego',
            'Silva',
            'Adam',
            'Davis',
            'Wilson',
            'Karida',
            'Michaela',
            'Lindsay',
            'Mabel',
            'Lisa',
            'Madge',
            'Cora',
            'Marcia',
            'Nicole',
          ],
          'gender|+1': ['male', 'female'],
          'age|1-50': 0,
          'city|+1': ['Oslo', 'Shanghai'],
        }),
      };
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: {
      code: 200,
      data: {
        login: true,
      },
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
  {
    url: '/api/products',
    method: 'get',
    response: () => {
      return {
        ms: 135,
        query:
          "*[_type=='productHead']{\n   internalName,\n  _id,\n   productVariants[]{\n    _key,\n    name,\n    pricingPlans[]{\n      _key,\n      _type,\n      name,\n      description,\n      addOnPricingPlans[]{...}\n    }\n  }\n}",
        result: [
          {
            _id: '025a5011-d880-446b-a592-a1f6afb9113a',
            internalName: 'Smart Cable Guard',
            productVariants: [],
          },
          {
            _id: '032f4ed3-e332-4f5e-88fe-320601f0006d',
            internalName: 'T-REX for Energy Project Finance',
            productVariants: [
              {
                _key: 'd081cb8b5d54',
                name: 'T-REX for Energy Project Finance',
                pricingPlans: [
                  {
                    _key: '00c974a151bc',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Pricing plan',
                  },
                ],
              },
            ],
          },
          {
            _id: '049d7465-8216-4d60-a096-3af50497c733',
            internalName: 'INSTATRUST™',
            productVariants: [
              {
                _key: '845ea512930a',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: 'c05820237bc5',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: '0539a68d-861a-4590-9c67-a16393fa10b3',
            internalName: 'Free Product for Additional Fields',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: '124a6eb9-73d8-48ae-8674-b45dd6175117',
            internalName:
              'Automation Test Product with Invalid ServiceID (Purchase) ',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Plans',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                ],
              },
            ],
          },
          {
            _id: '16571ac3-bbe5-43bc-85ac-0ac9a5e68a28',
            internalName: 'Phast (short-term access)',
            productVariants: [
              {
                _key: '6864effd6527',
                name: 'Rental 1 day',
                pricingPlans: [
                  {
                    _key: '24febc945472',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We aim to provide access 1 working day after purchase.',
                    name: 'Phast 1 Day Rental',
                  },
                ],
              },
              {
                _key: '4b78880d673c',
                name: 'Rental 7 days',
                pricingPlans: [
                  {
                    _key: 'd61811773b5c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We aim to provide access 1 working day after purchase.',
                    name: 'Phast 7 days Rental',
                  },
                ],
              },
              {
                _key: '10ed109d2b83',
                name: 'Rental 1 Month',
                pricingPlans: [
                  {
                    _key: '5869163e94ad',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We aim to provide access 1 working day after purchase.',
                    name: 'Phast 30 days rental',
                  },
                ],
              },
            ],
          },
          {
            _id: '17ac3138-be5c-4e93-a2e4-2b5d7c1d7f1d',
            internalName: 'Product for Demo-timtest',
            productVariants: [
              {
                _key: '53bc2d67b86e',
                name: 'Brantest',
                pricingPlans: [
                  {
                    _key: '3a7909af5ff5',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime',
                  },
                ],
              },
            ],
          },
          {
            _id: '180e9c15-b915-46a5-8a8f-1c4598c2dac2',
            internalName: 'Automation Test Product with Additional Fields',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout No Custom Section',
                  },
                  {
                    _key: 'c6cd12ab49e8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout With Custom Section',
                  },
                ],
              },
              {
                _key: 'fd56398a3b79',
                name: 'Purchase',
                pricingPlans: [
                  {
                    _key: '021aa15e722f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout No Custom Section',
                  },
                  {
                    _key: '5c31437da8d8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout With Custom Section',
                  },
                ],
              },
            ],
          },
          {
            _id: '19c1a174-8c7b-44da-867f-fcfdf34fa32c',
            internalName: 'LeCAS - Legal Compliance Assurance System - timtest',
            productVariants: [
              {
                _key: '3b6b0608f081',
                name: 'Contact us',
                pricingPlans: [
                  {
                    _key: '33f5b61a82ad',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'aa',
                  },
                ],
              },
            ],
          },
          {
            _id: '1d61fe40-a9a5-41bc-bd59-122af9ca0c51',
            internalName: 'Pricing plan style - 1 plan - single mode',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Basic Multi Currency',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Currency display',
                  },
                ],
              },
            ],
          },
          {
            _id: '1d9a9ea2-64e5-448a-a71a-15fa417c41e0',
            internalName: 'Test product for copy and move variant',
            productVariants: null,
          },
          {
            _id: '1e330ef8-baa6-404a-98f6-a8aa975fbe05',
            internalName: 'Wellmaster',
            productVariants: null,
          },
          {
            _id: '1e6e0c17-4df1-407d-bb25-6b53f65def4f',
            internalName: 'Forecaster',
            productVariants: [
              {
                _key: 'cbc72e50ceae',
                name: "MVP configuration - DON'T TOUCH",
                pricingPlans: [
                  {
                    _key: '2bf620643409',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'testlalala',
                  },
                ],
              },
            ],
          },
          {
            _id: '1fd8f385-385a-4bcf-9c86-54e2277ca980',
            internalName: 'Shipweight',
            productVariants: [
              {
                _key: '54142e2f3e93',
                name: 'Shipweight',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '1hDsu5PXGFKtVBwaWaFzyA',
            internalName: 'Automation Test Product with Trial',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Variant One',
                pricingPlans: [
                  {
                    _key: 'f7491eccc865',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec - No Trial',
                  },
                  {
                    _key: 'bfab51ca1589',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec - Trial 7 days',
                  },
                  {
                    _key: 'b5ac82fdd2a3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec - Trial 14 days',
                  },
                  {
                    _key: '5f5a5d731fc0',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'This is plan description to explain your plan.',
                    name: 'Metered - Trial 1 month - MultiLicense',
                  },
                  {
                    _key: 'faeea70bff00',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered - Trial 3 months',
                  },
                  {
                    _key: 'e788486aeadb',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered - Trial 6 Months',
                  },
                ],
              },
            ],
          },
          {
            _id: '1hDsu5PXGFKtVBwaWaGmQl',
            internalName: 'Automation Test Product 5 (Free data set)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Free data set',
                pricingPlans: [
                  {
                    _key: 'fdbc6aa54d9b',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'freedatset',
                  },
                ],
              },
            ],
          },
          {
            _id: '203e9cc5-9d8a-40be-b7fa-662060c11c69',
            internalName: 'Rig',
            productVariants: [
              {
                _key: 'f70939bac26c',
                name: 'Rig',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '23907f3e-5800-4606-801f-567a18567291',
            internalName: 'Test Product 4_2',
            productVariants: [
              {
                _key: '802da4930997',
                name: 'V4',
                pricingPlans: [
                  {
                    _key: '158faa4ef99a',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'd349697ee9ef',
                        _type: 'freeAddOnPlan',
                        description:
                          'You can call us in anytime in a day. We will support you anywhere and anytime.',
                        key: {
                          _type: 'slug',
                          current: '24-support',
                        },
                        name: '24 support',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'e662b92adebb',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'week',
                        accessDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'global-support',
                        },
                        name: 'Global support',
                        prices: [
                          {
                            _key: '7aa2604fe44a',
                            _type: 'price',
                            amount: 3,
                            currency: 'EUR',
                          },
                          {
                            _key: 'd2c5e67a7620',
                            _type: 'price',
                            amount: 4,
                            currency: 'GBP',
                          },
                          {
                            _key: '1ca313a1a132',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-a1',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: "Free plan!!! Last 5 days, don't miss the last chance",
                  },
                  {
                    _key: 'fec9a4ff71ae',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free2',
                  },
                ],
              },
              {
                _key: 'c9844e0b36d8',
                name: 'V5',
                pricingPlans: [
                  {
                    _key: 'e690efe1cf7e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'f378a82c5463',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon',
                        },
                        name: 'Rec addon',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'db8a77b559c7',
                            _type: 'price',
                            amount: 399,
                            currency: 'EUR',
                          },
                          {
                            _key: '5baa94b7fa92',
                            _type: 'price',
                            amount: 499,
                            currency: 'GBP',
                          },
                          {
                            _key: '3e56588a674d',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-sser',
                      },
                      {
                        _key: '9b69f8d14330',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'metered-addon',
                        },
                        name: 'Metered-Addon',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'fc642523958b',
                            _type: 'price',
                            amount: 1,
                            currency: 'EUR',
                          },
                          {
                            _key: 'c5f889422193',
                            _type: 'price',
                            amount: 2,
                            currency: 'GBP',
                          },
                          {
                            _key: 'd55a24b9ed39',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-11',
                      },
                      {
                        _key: '87be7a0a744e',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-year',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'one-time-extension',
                        },
                        name: 'one-time extension',
                        prices: [
                          {
                            _key: 'a3c69f2ff5cd762940d9e60a64116d9c',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: '21ab4dcca111',
                            _type: 'price',
                            amount: 40,
                            currency: 'GBP',
                          },
                          {
                            _key: '855b9da29172',
                            _type: 'price',
                            amount: 1000,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'dddd',
                        slaDuration: 'year',
                      },
                    ],
                    description: 'short desc',
                    name: 'Rec Plan',
                  },
                  {
                    _key: '36034ad0d389',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '1 MB',
                  },
                  {
                    _key: '42c7c09afadc82279df372c377f36e31',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2 MB',
                  },
                  {
                    _key: '2fad6292d614c31946733ccc518af2e3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3 MB',
                  },
                  {
                    _key: 'faf87449bb9be2136734a230ebd7eaec',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '4 MB',
                  },
                  {
                    _key: '7edadbb5771a3cb43027d142e9390abc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '5 MB',
                  },
                  {
                    _key: '4576451ec1730e72869ebbc9085ee43b',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '6 MB',
                  },
                  {
                    _key: '958cc03d9cfc',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '7 MB',
                  },
                  {
                    _key: 'dddc5980c1937fc3d39651c474b48f20',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '8 MB',
                  },
                  {
                    _key: 'ed7053fae4def565b6132910e7315375',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '9 MB',
                  },
                  {
                    _key: 'f177b213f75b93e204d3ea0b0b1a308f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '10 MB',
                  },
                ],
              },
              {
                _key: 'efca5d477dec',
                name: 'V6',
                pricingPlans: [
                  {
                    _key: '00421008ced2',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: '0229c085354b',
                        _type: 'freeAddOnPlan',
                        description: "I'm Free",
                        key: {
                          _type: 'slug',
                          current: 'free-ao',
                        },
                        name: 'Free-AO',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                    ],
                    description: 'This is freeplan',
                    name: 'FreePlan1',
                  },
                  {
                    _key: 'a7962b72fcd1',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '715132484b33',
                        _type: 'freeAddOnPlan',
                        description: 'Free addon 1',
                        key: {
                          _type: 'slug',
                          current: 'f-addon1',
                        },
                        name: 'F-Addon1',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: '88de5d650ca3',
                        _type: 'freeAddOnPlan',
                        description: 'This is free addon2',
                        key: {
                          _type: 'slug',
                          current: 'f-addon2',
                        },
                        name: 'F-Addon2',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'e52ed974525d',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'paid-addon1',
                        },
                        name: 'Paid-Addon1',
                        prices: [
                          {
                            _key: 'bc59206d1a57',
                            _type: 'price',
                            amount: 1,
                            currency: 'EUR',
                          },
                          {
                            _key: '5c8e49e6cde3',
                            _type: 'price',
                            amount: 1010,
                            currency: 'GBP',
                          },
                          {
                            _key: '5ead0546a9a6',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEst-111',
                        slaDuration: 'yearly-recurring',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: 'This is paid plan',
                    name: 'Paid Plan1',
                  },
                  {
                    _key: '1a6df0911b15',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'Pick me!',
                    name: 'Free De Ya',
                  },
                  {
                    _key: '678a96eb47de',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTIme',
                  },
                  {
                    _key: '682748afa5ea',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '138d58ed946f',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: '24-support2',
                        },
                        name: '24 support',
                        prices: [
                          {
                            _key: 'df941f7fa9d8',
                            _type: 'price',
                            amount: 1,
                            currency: 'EUR',
                          },
                          {
                            _key: 'd89cad2b3a16',
                            _type: 'price',
                            amount: 2,
                            currency: 'GBP',
                          },
                          {
                            _key: '950fb8425c5b',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-222',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: 'Meter base plan',
                  },
                  {
                    _key: '606f2732-ebe9-45bc-bbc5-f2d6e7f272e0',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '6a56e4a15498',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeeaddon3',
                        },
                        name: 'FreeeAddon3',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'd1ae3d7f71e6',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'month',
                        accessDuration2: {
                          _ref: 'duration-month',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon3',
                        },
                        name: 'OneTimeAddon3',
                        prices: [
                          {
                            _key: '73bacd3f9d6a',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '611eefb585ff',
                            _type: 'price',
                            amount: 68,
                            currency: 'NOK',
                          },
                          {
                            _key: 'da86e418ad3c',
                            _type: 'price',
                            amount: 1,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon3',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'b4ac17d943d1',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon3',
                        },
                        name: 'RecAddon3',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '353f9c694384',
                            _type: 'price',
                            amount: 10,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eeb27c020c70',
                            _type: 'price',
                            amount: 81,
                            currency: 'NOK',
                          },
                          {
                            _key: 'cbf936b8227f',
                            _type: 'price',
                            amount: 1,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon3',
                      },
                      {
                        _key: '8fdfb10796d2',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon3',
                        },
                        name: 'MetAddon3 This is a quite long add on price plan name you know',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '509e672db264',
                            _type: 'price',
                            amount: 20,
                            currency: 'EUR',
                          },
                          {
                            _key: 'f37d9a6f0b8f',
                            _type: 'price',
                            amount: 222,
                            currency: 'NOK',
                          },
                          {
                            _key: '565addc69076',
                            _type: 'price',
                            amount: 1,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon3',
                      },
                    ],
                    description: 'This is recurring plan',
                    name: 'RecBase This is a quite long base price plan name you know that right-copy-from-another-product',
                  },
                  {
                    _key: '441938a7a551',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '1 vessel',
                  },
                  {
                    _key: 'e31dedd739c7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2 vessel',
                  },
                  {
                    _key: '41bd1f78f209',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3 vessel',
                  },
                  {
                    _key: '82e5bcc862f7fdd2805bd423463ddf22',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '4 vessel',
                  },
                  {
                    _key: '7a72e5c96b3a5fdf6fcdc44b62078b35',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '5 vessel',
                  },
                  {
                    _key: 'cbb7dc9841ccaf4516144c1330fd3517',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '6 vessel',
                  },
                  {
                    _key: 'a0b9b8232d9639acf2fd945bdf42fe30',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '7 vessel',
                  },
                  {
                    _key: 'b7bed7d88c708cf3f52e49a4954551b6',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '8 vessel',
                  },
                  {
                    _key: '768743edb3d975da8c3be03745c5d03c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '9 vessel',
                  },
                  {
                    _key: 'fe3efc11741153035b9f834a564bf3af',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '10 vessel',
                  },
                  {
                    _key: '414da7540895ea3468cd92c2637376ce',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '11 vessel',
                  },
                  {
                    _key: '38dd8475eec3029d1b11bf86ea19d7b6',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '12 vessel',
                  },
                  {
                    _key: 'cde9fe6bf3e0b5f9fd8b188de5795dfd',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '13 vessel',
                  },
                ],
              },
            ],
          },
          {
            _id: '2535bf0e-96b0-4e6b-ab9a-05bc09267568',
            internalName: 'Data Management Advisory Service',
            productVariants: [
              {
                _key: '756e49b49d6e',
                name: 'Data Management Advisory Service',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '26548cab-527a-4207-9e2d-69b91c1f4f89',
            internalName:
              'Automation Test Product 4 (NewPurchase) for Invoice Vetting with User Mgm Disabled',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '9b61182c0698',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_3users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'FullProv-Pending_Interim-Active',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '24ec42cac201',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_Unlimited',
                  },
                ],
              },
              {
                _key: '363269d86606',
                name: 'FullProv-None_Interim-Pending',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'f11221981c24',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3Users',
                  },
                ],
              },
            ],
          },
          {
            _id: '2674be7d-8398-4711-8810-85855e778e13',
            internalName: 'Test Product 4 Purchase',
            productVariants: [
              {
                _key: '7e149cae18f5',
                name: 'FullProv-Active-Interim-None(mixed short name)',
                pricingPlans: [
                  {
                    _key: '39b59c208fdf',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free base(no short name)',
                  },
                  {
                    _key: 'd4409cb72eaa',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'One time base(has short name)',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'FullProv-Pending_Interim-Active(all no short name)',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '24ec42cac201',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_Unlimited',
                  },
                ],
              },
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None(all has short name)',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single_greg',
                  },
                  {
                    _key: '9b61182c0698',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_3users',
                  },
                ],
              },
            ],
          },
          {
            _id: '26bdc57f-2ef8-4fdd-932b-c4b14d92bfcc',
            internalName: 'Premium Access - Alternative Fuels Insight (AFI)',
            productVariants: [
              {
                _key: 'd9995d74cad6',
                name: 'AFI Premium',
                pricingPlans: [
                  {
                    _key: 'e325155f7d22',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Single license - Scrubber',
                  },
                  {
                    _key: 'fd6287810f02',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Single license - Battery',
                  },
                  {
                    _key: 'a2516bd8d6c5',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Single license - LNG',
                  },
                  {
                    _key: '1408ce0365c5',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-20 licenses - Scrubber',
                  },
                  {
                    _key: 'd817e6469bbe',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-20 licenses - LNG',
                  },
                  {
                    _key: 'ec583e43556d',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-20 licenses - Battery',
                  },
                ],
              },
            ],
          },
          {
            _id: '2BqmmaZAtkpWX5gaPoEJQg',
            internalName: 'Automation Test Product 8 (Hidden Product)',
            productVariants: [
              {
                _key: '078d53687d15',
                name: 'Variant 1',
                pricingPlans: [
                  {
                    _key: '14e4ac17dae2',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '2c49251c-38ad-4d69-b283-2f1f9ddf3fcb',
            internalName: 'TCarta Bathymetry',
            productVariants: [
              {
                _key: '226ee6f65869',
                name: 'TCarta Bathymetry',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '2d9f3bcf-1ef5-4fe7-accf-f34e989ffbe8',
            internalName: 'Port Arrival Prediction (ETA)',
            productVariants: [
              {
                _key: '2c97d0afe977',
                name: 'Port Arrival Prediction (ETA)',
                pricingPlans: [
                  {
                    _key: '11c3b121f322',
                    _type: 'trialPlan',
                    addOnPricingPlans: null,
                    description: 'Test out our software for free for one month',
                    name: 'Free trial',
                  },
                  {
                    _key: '62087058978c',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Unlimited access, monthly subscription',
                    name: 'One user',
                  },
                  {
                    _key: '0c2b5a32ee19',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Unlimited access, yearly subscription',
                    name: 'One user',
                  },
                ],
              },
            ],
          },
          {
            _id: '2deb0869-f86f-4e5b-b268-f35da804ef0d',
            internalName: 'In:Range',
            productVariants: [
              {
                _key: '053169a8efad',
                name: 'In:Range',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '2e244347-716e-4210-9d3c-766bbdf102c7',
            internalName: 'Product for currency testing',
            productVariants: [
              {
                _key: 'feeb803cec0e',
                name: 'V1',
                pricingPlans: [
                  {
                    _key: 'dd880ae6cc15',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Multiple stakeholders involved on a Paint application project will benefit from a Collaborative reporting system. Whether it’s Ongoing paint maintenance, Tank coating, Dry-docking or a Paint survey; the ‘Digital Paint Report’ helps you document all required performance parameters & photos on a collaborative platform.',
                    name: 'onetime',
                  },
                  {
                    _key: 'e611679bcee6',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Short desc for this plan',
                    name: 'Metere',
                  },
                  {
                    _key: '0e91ea22da8a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'onetime2',
                  },
                  {
                    _key: 'd1a3a02ee33e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec2',
                  },
                  {
                    _key: 'a9bb15518387',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '2fd6dff9-e692-4ef4-a696-556402801d10',
            internalName: 'Synnes additional fields',
            productVariants: [
              {
                _key: 'd6dab0a36f62',
                name: 'First example',
                pricingPlans: [
                  {
                    _key: 'b085e8833771',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '310fce44-7b56-400e-b9a6-73bba136d25b',
            internalName: 'Data Quality as a Service',
            productVariants: [
              {
                _key: '3ac017870c91',
                name: 'Data Quality as a Service',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '3303vbe0eqTT4Xsg70140w',
            internalName: 'Automation Test Product 9 (Inactive Product)',
            productVariants: [
              {
                _key: 'ad5b63f3b1e4',
                name: 'variant1',
                pricingPlans: [
                  {
                    _key: 'dd703b20468a',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'free',
                  },
                ],
              },
            ],
          },
          {
            _id: '331fce80-75dc-4b03-99ad-56de9577ae8d',
            internalName: 'test Data Fabric 1',
            productVariants: [
              {
                _key: 'ec2c12496027',
                name: 'Data Fabric Data Management',
                pricingPlans: [
                  {
                    _key: '0aec3cec1e70',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'For large scale data storage and sharing.  A company account in test will be set up for you to manage. Invite users to collaborate on or manage data containers. *',
                    name: 'Data Management Plus',
                  },
                  {
                    _key: '9683483212f9',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'desc',
                    name: 'TestOneTime',
                  },
                  {
                    _key: '4d8e617eb0bc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test',
                    name: 'TestRecurring',
                  },
                  {
                    _key: '30a50ae56591',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'TEST',
                  },
                ],
              },
              {
                _key: '2386e67c231e',
                name: 'Data fabric "buy" trial month',
                pricingPlans: [
                  {
                    _key: '3184c08c7b08',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free 30 days trial',
                  },
                ],
              },
            ],
          },
          {
            _id: '3828619e-243c-46ef-bcef-20b2bc04f50c',
            internalName: 'Automation Blue Product(Purchase)',
            productVariants: [
              {
                _key: 'cdcea0dd5559',
                name: 'Buy Variant',
                pricingPlans: [
                  {
                    _key: 'f5b59b5ea006',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime',
                  },
                  {
                    _key: 'ccbfa1b128a8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime2',
                  },
                ],
              },
            ],
          },
          {
            _id: '383efacb-ea5f-4cba-a37c-d4075538655c',
            internalName:
              'Automation Test Product 5 (Purchase data set) for Invoice Vetting',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'One Dataset',
                pricingPlans: [
                  {
                    _key: '710a74e22efb',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '4b8cc26a3438',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_3users',
                  },
                ],
              },
            ],
          },
          {
            _id: '38bfac18-b2e2-44fe-af8e-e29f387b2690',
            internalName: 'Sesam Insight',
            productVariants: [
              {
                _key: '6ed835c982df',
                name: 'Sesam Insight',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '3c0939e3-d4fb-4a0d-ba12-b103f39a4776',
            internalName: 'Pressure Safety Valve Manager',
            productVariants: [
              {
                _key: '4de02d832a76',
                name: 'Pressure Safety Valve Manager',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '41022f30-a04c-4944-9dc4-4ac830ac47da',
            internalName: 'Safety Will™',
            productVariants: [
              {
                _key: 'ecbe8c79b383',
                name: 'Safety Will',
                pricingPlans: [
                  {
                    _key: 'b5e1d3a2f32a',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'test',
                  },
                ],
              },
            ],
          },
          {
            _id: '41f829df-0893-4127-813e-2efae5ee03e0',
            internalName:
              'Automation Test Product 10 (Group Variant - Single Column)',
            productVariants: [
              {
                _key: '8be5d7b2bf4c',
                name: 'Battery',
                pricingPlans: [
                  {
                    _key: '1a50ba139599',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - 1 user',
                  },
                  {
                    _key: '3d28f79fc7d63bf58521e29271d448e0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - 2-3 users',
                  },
                  {
                    _key: '4cf9021772517075eb6f571be94db6a3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - Enterprise',
                  },
                ],
              },
              {
                _key: '47c194c44effdc6d749981224d20a424',
                name: 'Scrubber',
                pricingPlans: [
                  {
                    _key: '1a50ba139599',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - 1 user',
                  },
                  {
                    _key: '3d28f79fc7d63bf58521e29271d448e0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - 2-3 users',
                  },
                  {
                    _key: '4cf9021772517075eb6f571be94db6a3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - Enterprise',
                  },
                ],
              },
              {
                _key: 'b478cfb0ff0c',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '1841a85315e3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '45134edb-467a-47d4-b18a-34c34901bca0',
            internalName: 'SurfLoad – Pipeline Surface Loading Calculator',
            productVariants: [
              {
                _key: '894640d9ee01',
                name: 'Pipeline Surface Loading Calculator',
                pricingPlans: [
                  {
                    _key: 'd48c6e37dfe3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Get Access',
                  },
                ],
              },
            ],
          },
          {
            _id: '457282f8-279c-48ec-ac79-37050494bf5f',
            internalName: 'Ship implementation plan',
            productVariants: [
              {
                _key: 'ab4e81233cb6',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '03b57099caf8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: '45806c12-25bc-485d-8109-a1741d5d81f4',
            internalName: 'Turbine Technology Reviews',
            productVariants: null,
          },
          {
            _id: '4a3fe9cd-95e0-4f1e-b1d5-32c31fd47ebc',
            internalName:
              'Automation Test Product with Invalid ServiceID (ApplyFor)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Apply-for',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: '4e193833-e90d-4437-b91c-ad195be15d75',
            internalName: 'Camo Analytics',
            productVariants: [
              {
                _key: '8117e8d8182c',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '51309e7b-ca19-471a-aa3f-c4d8ea37f6dc',
            internalName: 'Assets Monitoring from Space',
            productVariants: [
              {
                _key: 'cbe337319526',
                name: "MVP configuration - DON'T TOUCH",
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '5426c958-5c1b-4ea7-ac10-f2b873b82564',
            internalName: 'Renewables GeoPlatform',
            productVariants: [
              {
                _key: '780f049d0016',
                name: 'Renewables GeoPlatform',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '5627d67c-5e94-4bd5-b156-6199dd7f4ce3',
            internalName: 'Spottitt Environment',
            productVariants: [
              {
                _key: '77b8c96375e6',
                name: 'Spottitt Environment',
                pricingPlans: [
                  {
                    _key: '064ea1642bd3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Use your credit card to pay for what you use when you use it.',
                    name: ' Pay as you go',
                  },
                  {
                    _key: 'c9a00a6c7d61',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Bronze allows you to purchase the imagery and analyses necessary for for up to 3000 square km of analysis.',
                    name: 'Bronze',
                  },
                  {
                    _key: '82438fdc4d0d',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Silver rewards you with 20% more analysis credits and 5% more data credits to make your investment go even further.',
                    name: 'Silver',
                  },
                  {
                    _key: 'e84de603dc83',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Gold rewards you with 45% more analysis credits and 10% more data credits than Bronze. Focus on your work knowing that you are getting the best price on the market.',
                    name: 'Gold',
                  },
                ],
              },
            ],
          },
          {
            _id: '562d1b4e-521b-4472-90a5-ee300f9495e6',
            internalName: 'Integrated Biodiversity Assessment Tool - IBAT',
            productVariants: [
              {
                _key: '1c165c8d6ca2',
                name: 'IBAT',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '570880c4-5376-4fdb-8a25-327028878659',
            internalName:
              'TESTGL Oil and gas standards and recommended practices',
            productVariants: [
              {
                _key: 'fd4c655073db',
                name: 'Access to all documents',
                pricingPlans: [
                  {
                    _key: '550fdfe912ed',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: 'One user',
                  },
                  {
                    _key: '6b80089e6ebd',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: '2 - 5 users',
                  },
                  {
                    _key: 'fa177471f251',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: '6 - 20 users',
                  },
                  {
                    _key: 'f6b6cc8e8f56',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: 'Unlimited users',
                  },
                ],
              },
              {
                _key: 'ba4aa77b0cb9',
                name: 'Discount for academic institutions (access to all documents)',
                pricingPlans: [
                  {
                    _key: '2cdecfedfe17',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Unlimited users',
                    name: 'Unlimited users',
                  },
                  {
                    _key: '2a6b9f3a5bb9',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'One user',
                  },
                ],
              },
              {
                _key: '252f98244de6',
                name: 'Access to one specific document',
                pricingPlans: [
                  {
                    _key: 'bc5aa885c513',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'TESTGL Noble Denton Marine services',
                  },
                  {
                    _key: '99b7864d2c16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Single document for one user, revision not included',
                    name: 'Retail sale of TESTGL Oil and Gas standards and RPs ',
                  },
                ],
              },
            ],
          },
          {
            _id: '57313834-0c77-4175-9324-2e133c301c95',
            internalName: 'Analytic Innovation Centre – Analytic Services',
            productVariants: [
              {
                _key: '07cd79b6b326',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: null,
              },
              {
                _key: 'dd752e42-b096-4ebb-b55e-0efcdb2763b7',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: [],
              },
            ],
          },
          {
            _id: '579b18a7-fb63-442c-849c-307bb301023c',
            internalName: 'CUI Manager',
            productVariants: [
              {
                _key: 'a20b222ed830',
                name: 'CUI Manager',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '59487690-8b7d-4570-9ca7-3da893db6f92',
            internalName: 'Bluester',
            productVariants: null,
          },
          {
            _id: '5a67cbda-22a5-4a9e-8012-8f27cf15a913',
            internalName:
              'Automation Test Product 10 (Group Variant - Side By Side)',
            productVariants: [
              {
                _key: '8be5d7b2bf4c',
                name: 'Battery',
                pricingPlans: [
                  {
                    _key: '1a50ba139599',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - 1 user',
                  },
                  {
                    _key: '3d28f79fc7d63bf58521e29271d448e0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - 2-3 users',
                  },
                  {
                    _key: '4cf9021772517075eb6f571be94db6a3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - Enterprise',
                  },
                ],
              },
              {
                _key: '47c194c44effdc6d749981224d20a424',
                name: 'Scrubber',
                pricingPlans: [
                  {
                    _key: '1a50ba139599',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - 1 user',
                  },
                  {
                    _key: '3d28f79fc7d63bf58521e29271d448e0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - 2-3 users',
                  },
                  {
                    _key: '4cf9021772517075eb6f571be94db6a3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - Enterprise',
                  },
                ],
              },
              {
                _key: 'b478cfb0ff0c',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '1841a85315e3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '5b5c6648-e4c8-48e6-9e26-3749350c469f',
            internalName: 'MyCDA – the Competent Design Authority Service',
            productVariants: [
              {
                _key: 'd9390bea8905',
                name: 'MyCDA – the Competent Design Authority Service',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '5d76c935-77aa-4c6e-8803-5a15b0a52468',
            internalName: 'Organizational Maturity Assessment',
            productVariants: [
              {
                _key: '250a09d44106',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '5f7ea54c-072c-4e67-a12c-f53d080378c1',
            internalName: 'Energy Laboratory Services Portal',
            productVariants: [
              {
                _key: '5fb02aa5a83e',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '18991299fadd',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: '6003e7d5-e744-4c43-875d-702b2a276765',
            internalName: 'Ballast Water Management Plan (BWMP) Generator',
            productVariants: [
              {
                _key: 'f9de8c5bb839',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '5a53d8d0a8b6',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: '600b1274-6cbf-4e5a-b1ae-335765f7907c',
            internalName: 'Container certification',
            productVariants: [
              {
                _key: '52cc2d24de5b',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '989573de7d1c',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: '6120e6eb-6ccf-48d8-a03c-46f41817c459',
            internalName: 'Hybrid Sensor Technology',
            productVariants: [],
          },
          {
            _id: '61cbcb1c-ac9a-4530-a077-33a93825a954',
            internalName:
              'Automation Test Product 4 (NewPurchase) for User Mgm Disabled',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '9b61182c0698',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_3users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'FullProv-Pending_Interim-Active',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '24ec42cac201',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_Unlimited',
                  },
                ],
              },
              {
                _key: '363269d86606',
                name: 'FullProv-None_Interim-Pending',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'f11221981c24',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3Users',
                  },
                ],
              },
            ],
          },
          {
            _id: '6222d082-ca65-44ea-8e78-ec4091aed0ae',
            internalName: 'IGS – IHM Green Server',
            productVariants: [
              {
                _key: 'df2f106e078c',
                name: 'IGS – IHM Green Server',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '62c39ca2-ec3b-4a24-a843-2081beb9914f',
            internalName: 'Automation Red Product(Free)',
            productVariants: [
              {
                _key: 'cdcea0dd5559',
                name: 'FREE Variant',
                pricingPlans: [
                  {
                    _key: '253bfc5f6d61',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FREE as in FREE BEER',
                  },
                ],
              },
            ],
          },
          {
            _id: '6340f437-a3d6-4ae6-996e-b33f75bcf647',
            internalName:
              'Automation Test Product 4 (NewPurchase) for Invoice Vetting',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [],
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '9b61182c0698',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_3users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'FullProv-Pending_Interim-Active',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '24ec42cac201',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_Unlimited',
                  },
                ],
              },
              {
                _key: '363269d86606',
                name: 'FullProv-None_Interim-Pending',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'f11221981c24',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3Users',
                  },
                ],
              },
              {
                _key: 'b1f67161b29a',
                name: 'NoProv',
                pricingPlans: [
                  {
                    _key: '8dae844aafdb',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'eb9fdffbaae1',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_2users',
                  },
                ],
              },
            ],
          },
          {
            _id: '646f9aed-f8d1-43d1-8ce5-7a047d59ca60',
            internalName: '[DEMO] Alternative Fuels Insight (AFI)',
            productVariants: [
              {
                _key: 'a73d5fbe87ac',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '455cb25d620e',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      'Free access, but with limited functionalities.',
                    name: 'Free access',
                  },
                ],
              },
              {
                _key: 'feeb75e15b3e',
                name: 'Battery',
                pricingPlans: [
                  {
                    _key: '4223e2171bee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'More detailed reports and insights on alternative fuel data.',
                    name: 'Battery',
                  },
                  {
                    _key: 'c88511c91e7552ba82577ad4193f9fcd',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'More detailed reports and insights on alternative fuel data.',
                    name: 'Battery Other Plan',
                  },
                ],
              },
              {
                _key: 'c50fd6d18f71883e64a6f2ecfa2ed852',
                name: 'LNG',
                pricingPlans: [
                  {
                    _key: '4223e2171bee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'LNG',
                  },
                ],
              },
              {
                _key: '1324d45075ccc064061f960513a9dcd2',
                name: 'Scrubber',
                pricingPlans: [
                  {
                    _key: '4223e2171bee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber',
                  },
                ],
              },
              {
                _key: '8794d6f95b69bb98c2b181f97a22e2fc',
                name: 'Methanol, Ammonia, Hydrogen, LPG',
                pricingPlans: [
                  {
                    _key: '4223e2171bee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Methanol, Ammonia, Hydrogen, LPG',
                  },
                ],
              },
              {
                _key: '70f0fd64bcdc3729cabe0ed5222d500e',
                name: 'Multipack',
                pricingPlans: [
                  {
                    _key: '4223e2171bee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Multipack',
                  },
                ],
              },
            ],
          },
          {
            _id: '6a4736a8-835b-4dde-98c1-05d6ab85ca0c',
            internalName: 'Digital paint report (DPR)',
            productVariants: [
              {
                _key: '127b83337507',
                name: "MVP configuration - DON'T TOUCH",
                pricingPlans: [
                  {
                    _key: 'df6b3a5c6fd9',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'placeholder',
                  },
                ],
              },
            ],
          },
          {
            _id: '6bcf33fd-9175-4971-97ff-a10606a08cc7',
            internalName: 'Cisco Kinetic',
            productVariants: [
              {
                _key: 'e558408e15cb',
                name: 'Cisco Kinetic',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '6f252e86-e2a6-4d29-a542-f58c7b4ab31c',
            internalName: 'API TEST FOR VRM RP-O501',
            productVariants: [],
          },
          {
            _id: '733942f3-4702-4f0c-b595-8ddcf944f5ae',
            internalName: 'RED Product (with BLUE and WHITE contexts)',
            productVariants: [
              {
                _key: 'cdcea0dd5559',
                name: 'FREE Variant',
                pricingPlans: [
                  {
                    _key: '253bfc5f6d61',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FREE as in FREE BEER',
                  },
                ],
              },
            ],
          },
          {
            _id: '773d05c6-118f-4566-a1cf-43947007e379',
            internalName: 'Arundo Maritime Suite powered by test',
            productVariants: [
              {
                _key: '642978722b94',
                name: 'Arundo Maritime Suite powered by test',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '77c39923-94a1-4966-9134-7cb398183eff',
            internalName: 'AGR Software',
            productVariants: [
              {
                _key: '8c57a04b8511',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: [],
              },
            ],
          },
          {
            _id: '798db96f-7c17-4b3d-bf02-7142b2db6e49',
            internalName: 'Test Product with Additional Fields',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout No Custom Section',
                  },
                  {
                    _key: 'c6cd12ab49e8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout With Custom Section',
                  },
                ],
              },
              {
                _key: 'fd56398a3b79',
                name: 'Purchase',
                pricingPlans: [
                  {
                    _key: '021aa15e722f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout No Custom Section',
                  },
                  {
                    _key: '5c31437da8d8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout With Custom Section',
                  },
                  {
                    _key: '29ca5223bae3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase checkout with additional fields - 7 days trial',
                  },
                ],
              },
              {
                _key: '1b951a90017f',
                name: 'purchase need approval with additional fields',
                pricingPlans: [
                  {
                    _key: 'db4764c5432c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'purchase need approval with additional fields',
                  },
                ],
              },
            ],
          },
          {
            _id: '79b3610c-ba43-4e2a-8859-295b1168a7a8',
            internalName: 'Product for Demo',
            productVariants: [
              {
                _key: '53bc2d67b86e',
                name: 'Brantest',
                pricingPlans: [
                  {
                    _key: '3a7909af5ff5',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime',
                  },
                ],
              },
            ],
          },
          {
            _id: '7bf29dd6-6fe4-442f-9d2b-310aa8bebfb1',
            internalName: 'Data Usage Risk Assessment',
            productVariants: [
              {
                _key: '5c6a47875a11',
                name: 'Data Usage Risk Assessment',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '7ed26805-9cfd-4e34-b7d0-af0da0a34aac',
            internalName: 'Pricing plan style - 2 plan - complex mode',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Basic Multi Currency',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Currency display',
                  },
                  {
                    _key: '9140cdc4fedb',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '7ee9c132-7817-4a2e-99a5-13f88436c46d',
            internalName: 'Eason Practice Process3',
            productVariants: [
              {
                _key: '232451eac1f1',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '8e4a0e16a33d',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free to access',
                  },
                ],
              },
              {
                _key: '57e82d9941da',
                name: 'Self-subscription apply-for',
                pricingPlans: [
                  {
                    _key: 'f7977fccd5e4',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: '7fac8958-1e6f-4e29-9757-6dd6cf22cf76',
            internalName: 'Eason Practice Purchase flow',
            productVariants: [
              {
                _key: '8b9eee197f8d',
                name: 'E-Purchase Plan',
                pricingPlans: [
                  {
                    _key: '0475898bbe3e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '>10',
                  },
                  {
                    _key: '7f472cb23d15',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '50',
                  },
                  {
                    _key: 'c6725d4f3364',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '100 users',
                  },
                ],
              },
              {
                _key: '07cd93fc13e8',
                name: 'E-plan2',
                pricingPlans: [
                  {
                    _key: '82794b6e41ce',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered Buy',
                  },
                ],
              },
              {
                _key: '59181bccc0e6',
                name: 'E-Plan3',
                pricingPlans: [
                  {
                    _key: 'b5842ec07d42',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'One-time buy 2',
                  },
                ],
              },
              {
                _key: '8837dfa6f1c5',
                name: 'E-plan4',
                pricingPlans: [
                  {
                    _key: 'd8b5a7c37e70',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'free pran',
                  },
                ],
              },
            ],
          },
          {
            _id: '8054258e-de29-480f-8bc0-12064df900f1',
            internalName: 'Synergi Life',
            productVariants: [
              {
                _key: '3f335636d4f3',
                name: 'Synergi Life',
                pricingPlans: [
                  {
                    _key: '2fadaace7369',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: '8146e779-d7a6-4983-badc-448cf4ce953a',
            internalName: 'Renewables benchmarking',
            productVariants: [
              {
                _key: '3807e04bbcdb',
                name: 'Renewables benchmarking',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '820cbcd6-06c3-433e-a193-5b39cdae3c22',
            internalName:
              'TESTGL Noble Denton marine services warranty standard',
            productVariants: [
              {
                _key: '3355b821efb2',
                name: 'Variant A',
                pricingPlans: [
                  {
                    _key: 'e81175677a95',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '2db36609167b',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        description:
                          'Verification of vessel configuration, verifucation of the runs and report created by the customer. This does not include calculation of wind, current and wave drift coefficients(with CFD or other methods) and calculations of thruster-hull interactions. Includes a maximum of 6 runs/cases.',
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'cyber-security',
                        },
                        name: 'Cyber security',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'e4ef4f845dbb',
                            _type: 'price',
                            amount: 80,
                            currency: 'EUR',
                          },
                          {
                            _key: '5bcd1b1c2ed0',
                            _type: 'price',
                            amount: 666,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-cyber-security',
                      },
                      {
                        _key: '78dc1d4b40dd',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-half-year',
                          _type: 'reference',
                        },
                        description:
                          'Module with more than 150 language translateions.',
                        key: {
                          _type: 'slug',
                          current: 'language-support',
                        },
                        name: 'Language support',
                        prices: [
                          {
                            _key: '5e705b505e0a',
                            _type: 'price',
                            amount: 88,
                            currency: 'EUR',
                          },
                          {
                            _key: 'ba82c8db4e1d',
                            _type: 'price',
                            amount: 678,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-cyber-security',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'f879ec9d1195',
                        _type: 'freeAddOnPlan',
                        description: 'Supporting free storage of 5 GB',
                        key: {
                          _type: 'slug',
                          current: 'free-storage',
                        },
                        name: 'Free storage',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'a3c67b4ef623',
                        _type: 'meteredAddOnPlan',
                        billingInterval: 'quarter',
                        cancellationTermDays: 30,
                        description: 'With 7*24 hours support',
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'extention-plus',
                        },
                        name: 'Extention plus',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'bafdb05713cc',
                            _type: 'price',
                            amount: 86,
                            currency: 'EUR',
                          },
                          {
                            _key: '1596cc43b160',
                            _type: 'price',
                            amount: 888,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'VER',
                      },
                    ],
                    description:
                      '15 GB storage available. Engage your core team.',
                    name: '5 users',
                  },
                  {
                    _key: 'f31ea79cae8d',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'd31c89da8c64',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '90-days',
                        accessDuration2: {
                          _ref: 'duration-90-days',
                          _type: 'reference',
                        },
                        description: '1 Tera storage full software',
                        key: {
                          _type: 'slug',
                          current: 'extention-advanced',
                        },
                        name: 'Extention advanced',
                        prices: [
                          {
                            _key: '9ee281c59d45',
                            _type: 'price',
                            amount: 129,
                            currency: 'EUR',
                          },
                          {
                            _key: '7eae11e6732e',
                            _type: 'price',
                            amount: 890,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'VER',
                        slaDuration: 'month',
                        slaDuration2: {
                          _ref: 'duration-month',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: '15 GB storage available.',
                    name: 'Basic free',
                  },
                ],
              },
              {
                _key: '3fbf301ed908',
                name: 'Varaint B',
                pricingPlans: [
                  {
                    _key: '40da0d86baf8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      "Calculation of current and wave drift coefficients is not included. Wind coefficients can be calculated with Blendermann's method or others",
                    name: 'Third party verifications - vassel configuration created by customer in Web app',
                  },
                  {
                    _key: '25cf72c2b756',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      "Calculation of the current and wave drift coefficients is not included. Wind coefficients can be calculated with Blendermann's method or others",
                    name: 'Free vessel',
                  },
                ],
              },
              {
                _key: '822b1b26999468c549cf4d724c03f95a',
                name: 'Variant C',
                pricingPlans: [
                  {
                    _key: '40da0d86baf8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      "Calculation of current and wave drift coefficients is not included. Wind coefficients can be calculated with Blendermann's method or others",
                    name: 'Third party verifications - vassel configuration created by customer in Web app',
                  },
                  {
                    _key: '25cf72c2b756',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      "Calculation of the current and wave drift coefficients is not included. Wind coefficients can be calculated with Blendermann's method or others",
                    name: 'Free vessel',
                  },
                ],
              },
              {
                _key: '77caf4cfd255',
                name: 'Variant D',
                pricingPlans: [
                  {
                    _key: 'bfbc88d18004',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [],
                    description: null,
                    name: 'One user',
                  },
                  {
                    _key: '827079e03750',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-4 users',
                  },
                ],
              },
              {
                _key: 'e12b21b4d3c47dde7dd473cf9b84c236',
                name: 'Variant E',
                pricingPlans: [
                  {
                    _key: 'bfbc88d18004',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [],
                    description: null,
                    name: 'One user',
                  },
                  {
                    _key: '827079e03750',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-4 users',
                  },
                ],
              },
            ],
          },
          {
            _id: '830c08d7-ec26-4999-bff2-36279f8465cb',
            internalName: 'HACyberLogix',
            productVariants: [
              {
                _key: '43e4b4cb5b86',
                name: 'HACyberLogix',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '83b4f407-0f4d-4ebc-a9b0-ee7bfda85bcd',
            internalName: 'Phast 3D explosions (short-term access)',
            productVariants: [
              {
                _key: '37c0bd897f04',
                name: 'Rental 1 day',
                pricingPlans: [
                  {
                    _key: 'cb020f9c9d55',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase. This is an add-on module and requires an active version of Phast 7.0 or newer.',
                    name: 'Phast 3D-explosions - 1 day access',
                  },
                ],
              },
              {
                _key: '57e31fe4f807',
                name: 'Rental 1 week',
                pricingPlans: [
                  {
                    _key: '2730b3714f7e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase. This is an add-on module and requires an active version of Phast 7.0 or newer.',
                    name: 'Phast 3D-explosions - 7 days access',
                  },
                ],
              },
              {
                _key: 'a90e8b73503e',
                name: 'Rental 1 Month',
                pricingPlans: [
                  {
                    _key: 'd67f3f96ed0a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase. This is an add-on module and requires an active version of Phast 7.0 or newer.',
                    name: 'Phast 3D-explosions - 30 days access',
                  },
                ],
              },
            ],
          },
          {
            _id: '871abc23-acbb-46c5-b355-7899632880f0',
            internalName: 'Automation Test Product with Invalid Dataset (Free)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Free data set',
                pricingPlans: [
                  {
                    _key: 'fdbc6aa54d9b',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'freedatset',
                  },
                ],
              },
            ],
          },
          {
            _id: '87dba861-bbe6-46f0-84c2-c2621d07bca0',
            internalName: 'test Deep Search',
            productVariants: [
              {
                _key: 'a9cb0af02ff9',
                name: 'test Deep Search',
                pricingPlans: [
                  {
                    _key: '87ceeeaf9c27',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free plan A',
                  },
                ],
              },
            ],
          },
          {
            _id: '87f63482-cd04-4080-8a6d-3725915c685f',
            internalName: 'Maindeck',
            productVariants: [
              {
                _key: '2e5c0314b5a7',
                name: 'Maindeck',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '894aec1b-64af-448f-bf91-87489f9ff009',
            internalName: 'Fleet status',
            productVariants: [
              {
                _key: '3bfd41d7d21e',
                name: 'Free',
                pricingPlans: [
                  {
                    _key: 'c6d1aa76059f',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Apply for access',
                  },
                ],
              },
            ],
          },
          {
            _id: '8a614b16-3b46-4caa-bd9a-6e0281bebc52',
            internalName: 'Phast Web Services',
            productVariants: null,
          },
          {
            _id: '8abff997-f192-4345-ba24-dfab7ee37e90',
            internalName: 'Pricing plan style - 3 plan - complex mode',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Basic Multi Currency',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Currency display',
                  },
                  {
                    _key: '9140cdc4fedb',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '623d6ca96bf3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free2',
                  },
                ],
              },
            ],
          },
          {
            _id: '8cb6dd23-63f8-47a7-829a-98a6f1aa7043',
            internalName: 'Oreda@Cloud',
            productVariants: [
              {
                _key: 'ce42bb01f283',
                name: 'Oreda@Cloud',
                pricingPlans: [
                  {
                    _key: '0673f5a8643a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '1',
                  },
                  {
                    _key: '5b931bd26759b85a4a933dbb2ba54ef6',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2',
                  },
                  {
                    _key: 'bdbd4a0c4667120511cbcdf253d438c3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3',
                  },
                  {
                    _key: '31fa07d335376a1a68c2b6e47d1476c5',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '4',
                  },
                ],
              },
            ],
          },
          {
            _id: '8e00e1ad-a53c-43f0-bc5d-225b9d3705cc',
            internalName:
              'EU Energy Efficiency Directive Article 8 compliance plan',
            productVariants: [
              {
                _key: 'e38ffda6eb65',
                name: 'EU Energy Efficiency Directive Article 8 compliance plan',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: '8f39a74f-7b7f-4f96-a5f7-ddfcc7289320',
            internalName:
              'BJØRN TEST: Product page and checkout regression testing',
            productVariants: [
              {
                _key: 'e0e9078681ce',
                name: '2. One-time purchase',
                pricingPlans: [
                  {
                    _key: '9bbe93938ccb',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2.1 QTY=1 One time',
                  },
                  {
                    _key: 'cde77464e76a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '7b69a49d365a',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'extender',
                        },
                        name: 'Extender',
                        prices: [
                          {
                            _key: 'b8d335386bb6d46959053e7e99ddbc91',
                            _type: 'price',
                            amount: 50,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: '84adc8ff31095dff2810281d258d6d7e',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '5bd9a1981050d2cb82a3106ad5e65454',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'VER-MWWVAR',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: '2.2 Block Pricing One-time',
                  },
                ],
              },
              {
                _key: 'e4e6f10c28e8',
                name: '3. Subscription',
                pricingPlans: [
                  {
                    _key: '89ded1c6d392',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3.1. QTY=1 subscription',
                  },
                  {
                    _key: '68669d7cba9a',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3.3 Unlimited Subscription',
                  },
                  {
                    _key: '76028d1696f0',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'b8e0082e5a24',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: '3-2-2-one-time-extension',
                        },
                        name: '3.2 One-time Extension 1',
                        prices: [
                          {
                            _key: '56ef78ef72a8a9b04d231796381a29ac',
                            _type: 'price',
                            amount: 101,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: '6626f7b7157d19479e5367190ef2e21d',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '9c8157b22b21ee286bbf65de8118e625',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'VER-SRPUNL3',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '9769f8b0036349a3511a43f3c14ba2f4',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: '3-2-2-one-time-extension-2',
                        },
                        name: '3.2 One-time Extension 2',
                        prices: [
                          {
                            _key: '56ef78ef72a8a9b04d231796381a29ac',
                            _type: 'price',
                            amount: 102,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: '6626f7b7157d19479e5367190ef2e21d',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '9c8157b22b21ee286bbf65de8118e625',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'VER-SRP1UP2TO5',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '45d787836555',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        key: {
                          _type: 'slug',
                          current: '3-2-3-subscription-extension-1',
                        },
                        name: '3.2 Subscription Extension 1',
                        prices: [
                          {
                            _key: '266dad9230372759925e0b9cea52aff9',
                            _type: 'price',
                            amount: 103,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: '0fcadf7850fc3dea647938cf55e2ad12',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '92621d96092ffc6a7a31714734ea4068',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'VER-SRPIHS',
                      },
                      {
                        _key: '703d6bbf766ab07aed28cc182fc59abc',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        key: {
                          _type: 'slug',
                          current: '3-2-3-subscription-extension-2',
                        },
                        name: '3.2 Subscription Extension 2',
                        prices: [
                          {
                            _key: '266dad9230372759925e0b9cea52aff9',
                            _type: 'price',
                            amount: 104,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: '0fcadf7850fc3dea647938cf55e2ad12',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '92621d96092ffc6a7a31714734ea4068',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'VER-SRP2TO5UPUNL',
                      },
                    ],
                    description: null,
                    name: '3.2 Block pricing Subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: '96414a35-a1b8-40ed-b234-1564355fd659',
            internalName: 'WindGEMINI',
            productVariants: null,
          },
          {
            _id: '9ae876c6-3a96-459e-acab-8b13e5e76856',
            internalName: 'Test Product For debug new currency',
            productVariants: [
              {
                _key: '350d1cb8c30a',
                name: 'Test_Recurring',
                pricingPlans: [
                  {
                    _key: 'a2cbcf3dac45',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test description',
                    name: 'Recurring plan',
                  },
                ],
              },
            ],
          },
          {
            _id: '9cfa49e8-c59a-4792-b964-41712a8474ec',
            internalName: 'MyCertificate',
            productVariants: [
              {
                _key: '0741bfa2af3b',
                name: 'MyCertificate',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'TUcXu4emx4zcR0tVxrXA8t',
            internalName: 'Automation Test Product 1 (Process 3)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: 'a4388766-4657-437a-9a96-454899851b8c',
            internalName: 'Tidetech Metocean Data',
            productVariants: [
              {
                _key: 'deeb3bdea500',
                name: 'Tidetech Metocean Data',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'a99689d2-8860-4018-8f3f-bd3e5d931cb2',
            internalName: 'Test Product for group variants',
            productVariants: [
              {
                _key: '4365ac4d4435',
                name: 'Core license',
                pricingPlans: [
                  {
                    _key: '99443fb1cdd3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'ea38742cf6f8',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'month',
                        accessDuration2: {
                          _ref: 'duration-year',
                          _type: 'reference',
                        },
                        consumptionUnits: [
                          {
                            _key: 'c8aab6de3f64',
                            _type: 'consumptionUnit',
                            includedAmount: 1,
                            unit: 'million API calls',
                          },
                        ],
                        description:
                          'this is short description field of extension Protection module this is short description field of extension Protection module this is short description field of extension Protection module this is short description field of extension Protection module',
                        key: {
                          _type: 'slug',
                          current: 'protection-module',
                        },
                        name: 'Protection module',
                        prices: [
                          {
                            _key: '026f1851e553ef067fa13e2f947eb6af',
                            _type: 'price',
                            amount: 4250,
                            currency: 'EUR',
                          },
                          {
                            _key: '4f150acac07a',
                            _type: 'price',
                            amount: 3625,
                            currency: 'GBP',
                          },
                          {
                            _key: '46658eabc4b2',
                            _type: 'price',
                            amount: 4120,
                            currency: 'USD',
                          },
                          {
                            _key: '12f33c9c3b58',
                            _type: 'price',
                            amount: 5555,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://store.test.com/phast',
                        salesforceProduct: 'APITEST-PROTE1YE1U',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-year',
                          _type: 'reference',
                        },
                      },
                    ],
                    description:
                      'A service level agreement is included for the term of the lease to provide access to technical support and the latest software versions.',
                    name: 'Annual lease - 1 user ',
                  },
                  {
                    _key: '82aefd5a571e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '2087836fd5f9',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-half-year',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'protection-module-6mo',
                        },
                        name: 'Protection module',
                        prices: [
                          {
                            _key: '1b7fc5e251d6d3b7b37d71260ba91d59',
                            _type: 'price',
                            amount: 1675,
                            currency: 'EUR',
                          },
                          {
                            _key: '0986fb5eb221',
                            _type: 'price',
                            amount: 2060,
                            currency: 'USD',
                          },
                          {
                            _key: '6c5105fc1eaf',
                            _type: 'price',
                            amount: 1430,
                            currency: 'GBP',
                          },
                          {
                            _key: '01236396235d',
                            _type: 'price',
                            amount: 68994,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-PROTE6MO1U',
                        slaDuration: 'half-year',
                        slaDuration2: {
                          _ref: 'duration-half-year',
                          _type: 'reference',
                        },
                      },
                    ],
                    description:
                      'A service level agreement is included for the term of the lease to provide access to technical support and the latest software versions.',
                    name: '6 months lease - 1 user',
                  },
                  {
                    _key: '7c755e55bda0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '5efb7aa6ab13',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'quarter',
                        accessDuration2: {
                          _ref: 'duration-quarter',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'protection-module-3mo',
                        },
                        name: 'Protection module',
                        prices: [
                          {
                            _key: 'b410301f6e1402fd3561cefc797bec47',
                            _type: 'price',
                            amount: 1075,
                            currency: 'EUR',
                          },
                          {
                            _key: 'b70165907df5',
                            _type: 'price',
                            amount: 1320,
                            currency: 'USD',
                          },
                          {
                            _key: '09ba686fe78c',
                            _type: 'price',
                            amount: 915,
                            currency: 'GBP',
                          },
                          {
                            _key: '2135fabe7ddf',
                            _type: 'price',
                            amount: 6841,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-PROTE3MO1U',
                        slaDuration: 'quarter',
                        slaDuration2: {
                          _ref: 'duration-quarter',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: '3 months lease - 1 user',
                  },
                ],
              },
              {
                _key: '7502645662aa',
                name: 'Multiple users & training',
                pricingPlans: [
                  {
                    _key: '27c26a21ad2f',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: 'Need more users? Contact us to get a quote.',
                    name: 'Multiple users',
                  },
                  {
                    _key: '8307526974a4',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description:
                      'The subscription provides unlimited access to both live online and recorded training',
                    name: 'Synergi Electric online training subscription',
                  },
                ],
              },
              {
                _key: '3474ebb554b0',
                name: 'Access to all documents',
                pricingPlans: [
                  {
                    _key: 'c6d058152632',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'One personal user',
                  },
                  {
                    _key: '207c4752e0b7',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: '2 - 5 personal users',
                  },
                  {
                    _key: '4782b20538f5',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: '6 - 20 personal users',
                  },
                  {
                    _key: '92c8cf89ef9a',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'd43c396814ad',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-year',
                          _type: 'reference',
                        },
                        consumptionUnits: [
                          {
                            _key: '5be727206ef0',
                            _type: 'consumptionUnit',
                            includedAmount: 356,
                            unit: 'some unit name',
                            unitPrice: 366,
                          },
                        ],
                        key: {
                          _type: 'slug',
                          current: 'an-extension-add-on',
                        },
                        name: 'an extension add on ',
                        prices: [
                          {
                            _key: '22e2afe293d737c24539ccc5d1ead793',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: 'd67ae7c63981',
                            _type: 'price',
                            amount: 200,
                            currency: 'GBP',
                          },
                          {
                            _key: 'a391c83d30a9',
                            _type: 'price',
                            amount: 300,
                            currency: 'USD',
                          },
                          {
                            _key: '58e63baa0fee',
                            _type: 'price',
                            amount: 45345,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 30,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-23589',
                        slaDuration: '90-days',
                      },
                    ],
                    description: 'Access to all documents',
                    name: '20-25 personal users',
                  },
                  {
                    _key: '3b12cd151673',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'where this short description display',
                    name: '25 - 30 personal users what if the name is longer and longer and longer and longer',
                  },
                  {
                    _key: 'fdc6d81b5560',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Access to all documents',
                    name: 'Unlimited users',
                  },
                ],
              },
              {
                _key: '7e2974a97958',
                name: 'Discount for academic institutions (access to all documents)',
                pricingPlans: [
                  {
                    _key: '85c8301facd2',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Unlimited users',
                    name: 'Academic institutions',
                  },
                ],
              },
              {
                _key: 'b8c409b05b84',
                name: '111',
                pricingPlans: [
                  {
                    _key: '8dc211e44fd8',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recuring',
                  },
                  {
                    _key: 'a20bcb31-25bb-4508-9a23-96821150ddb2',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      'A commercial business email address is required for free trials.',
                    name: '14 days free trial',
                  },
                ],
              },
              {
                _key: '7ca0660d5fa3',
                name: 'Free trial with a long name that can be truncated',
                pricingPlans: [
                  {
                    _key: 'c7f0da4bb764',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      'A commercial business email address is required for free trials.',
                    name: '14 days free trial',
                  },
                ],
              },
            ],
          },
          {
            _id: 'aa48b17c-8e32-479a-b915-dc16ef02ab98',
            internalName: 'EEDI Calculator',
            productVariants: [
              {
                _key: 'ef5f92726ab0',
                name: 'EEDI Calculator',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'adcc4f1d-faaa-4bcb-87b0-bdf7ae0869a6',
            internalName: 'Eason Practice Process4',
            productVariants: [
              {
                _key: '447920529728',
                name: 'AF',
                pricingPlans: [
                  {
                    _key: '0de58a34dbd2',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeOnly',
                  },
                ],
              },
            ],
          },
          {
            _id: 'af8ecee7-4582-4bc0-b563-a10278d67737',
            internalName: 'Safeti Compute',
            productVariants: [
              {
                _key: 'fefa70e09c6d',
                name: 'Safeti Compute',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'b3b6b81b-71e2-4bd4-a5f9-8e2513bb207c',
            internalName: 'test Adapter for Power BI (VAP)',
            productVariants: [
              {
                _key: '14eb0f3845cd',
                name: 'test Adapter for Power BI (VAP)',
                pricingPlans: [
                  {
                    _key: 'e68b6fe6b392',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'test',
                  },
                ],
              },
            ],
          },
          {
            _id: 'b463cd6d-a451-4b59-a2a0-8072d4a7ba89',
            internalName: 'Arundo Analytics',
            productVariants: [
              {
                _key: '9179a4c82add',
                name: 'Arundo Analytics',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'b53f887b-2595-47fe-b1d0-187cac79c371',
            internalName: 'ExplEnergy',
            productVariants: [
              {
                _key: 'd859eb0e6ec5',
                name: 'Free Beta access ',
                pricingPlans: [
                  {
                    _key: '3c1292b65fff',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Beta access',
                  },
                ],
              },
              {
                _key: '307d0d425dc0',
                name: 'Full version',
                pricingPlans: [
                  {
                    _key: '543475505a18',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Full version',
                  },
                ],
              },
            ],
          },
          {
            _id: 'b64108d0-e0a9-4a62-a8b2-eebb3e9313f3',
            internalName: 'Thomas Testing Prices',
            productVariants: [
              {
                _key: '6140c280c460',
                name: 'Model A',
                pricingPlans: [
                  {
                    _key: '414586b06928',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '2b74714cd3fc',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'If you want to support us',
                    name: 'Paid',
                  },
                ],
              },
              {
                _key: '88dafd556ec8',
                name: 'Model B',
                pricingPlans: [
                  {
                    _key: 'b7d4ca4c11de',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recurrrr',
                  },
                ],
              },
            ],
          },
          {
            _id: 'b78c386f-34f6-43ea-b1b9-207507379318',
            internalName: 'Energy Transition Outlook',
            productVariants: [
              {
                _key: '81429cdea901',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '5829c63aa470',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'b9511d2f-ba49-41a1-b438-bd6fa022bc2b',
            internalName: 'GPM Horizon',
            productVariants: [
              {
                _key: '3e78fea52b4c',
                name: 'GPM Horizon',
                pricingPlans: [
                  {
                    _key: '29afd3ed8e1c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'afadfadf',
                  },
                ],
              },
            ],
          },
          {
            _id: 'bb826de9-6493-4ab7-a835-e43b0bff4d3a',
            internalName: 'DP Capability Assessment',
            productVariants: [
              {
                _key: '60ea4325dbdb',
                name: 'Basic',
                pricingPlans: [
                  {
                    _key: '1950b3556133',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Basic',
                  },
                ],
              },
              {
                _key: '2f8f406d904d',
                name: 'Basic Consultant',
                pricingPlans: [
                  {
                    _key: 'b092a5864f84',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs for one week. Access to level 1 Basic Consultant features.',
                    name: 'Basic Consultant - 1 week',
                  },
                  {
                    _key: 'd01e0c552963',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs. Access to level 1 Basic Consultant features. 2 hours of support per year included. ',
                    name: 'Basic Consultant - 1 year',
                  },
                ],
              },
              {
                _key: 'ab6fdef093b8',
                name: 'Premium',
                pricingPlans: [
                  {
                    _key: '163555e2397f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs for one week. Access to Premium features.',
                    name: 'Premium unlimited - 1 week',
                  },
                  {
                    _key: 'd0b1c3f945e2',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs. Access to Premium features. 4 hours of support per year included.',
                    name: 'Premium unlimited - 1 year',
                  },
                  {
                    _key: 'b4436c89cea9',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Access to Premium features. 400 calculation headings included. 4 hours of support per year included.',
                    name: 'Premium pay-per-run - 1 year',
                  },
                ],
              },
            ],
          },
          {
            _id: 'bd1305a7-ebe9-4fda-a550-ff0639fe0dbd',
            internalName: 'DATE for CMC',
            productVariants: [
              {
                _key: '88914540a3af',
                name: 'Subscription',
                pricingPlans: [
                  {
                    _key: 'e38753b0eb51',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      '1 - 3 users that can post questions. Try it out - 3 months free trial',
                    name: 'Subscription',
                  },
                  {
                    _key: 'ec0f683415fe',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      '4 - 10 users that can post questions. Try it out - 3 months free trial',
                    name: 'Subscription',
                  },
                  {
                    _key: '621d20ef3700',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited users can post questions. Try it out - 3 months free trial',
                    name: 'Subscription',
                  },
                ],
              },
              {
                _key: '5ec51bc2ac97',
                name: 'On demand',
                pricingPlans: [
                  {
                    _key: '583717c9ab07',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'Pay per question',
                    name: 'On demand',
                  },
                ],
              },
            ],
          },
          {
            _id: 'bd770229-a6f4-4fe7-a000-069b3acf31d2',
            internalName: 'Automation Test Product Require Company Id',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: 'c6cd12ab49e8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout',
                  },
                ],
              },
              {
                _key: 'fd56398a3b79',
                name: 'Purchase',
                pricingPlans: [
                  {
                    _key: '021aa15e722f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime Require Account Id',
                  },
                ],
              },
            ],
          },
          {
            _id: 'bd8545a8-0ca0-40cd-925e-9f02857b4c57',
            internalName: 'ECOSYSTEMS TESTING - Sesam world jacket design',
            productVariants: [
              {
                _key: '84b000d1357d',
                name: 'ECOSYSTEMS TESTING - Sesam world jacket design purchase testing',
                pricingPlans: [
                  {
                    _key: '6b07f44e159a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase.',
                    name: '7 days ',
                  },
                  {
                    _key: 'c147eb65c47b',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase.',
                    name: '30 days',
                  },
                  {
                    _key: '682c683cac57',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase.',
                    name: '90 days',
                  },
                ],
              },
            ],
          },
          {
            _id: 'be8333ea-7ab6-49d7-9188-2fc7b4a953e7',
            internalName: 'Resource Panorama',
            productVariants: [
              {
                _key: '4182f046ccbe',
                name: 'Resource Panorama',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'bea0c0c7-cb1d-4909-830c-8152fa1e4df1',
            internalName: 'Automation Test Product with Multi Currency',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Basic Multi Currency',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Currency display',
                  },
                ],
              },
              {
                _key: 'ec39cd0dfa2c',
                name: 'Test for Threshold',
                pricingPlans: [
                  {
                    _key: 'cd081b9f6df0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Less 5',
                  },
                  {
                    _key: '22dbdcdaf8e5',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Equal 5',
                  },
                  {
                    _key: '5f3e40df5adc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Less 10',
                  },
                  {
                    _key: '895ef0d51c1c',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Equal 10',
                  },
                  {
                    _key: '2d9bed55d207',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Greater 10',
                  },
                ],
              },
            ],
          },
          {
            _id: 'c2464add-e3e9-4baa-bb85-8094455e313e',
            internalName:
              'Test product of pending request for Engineering team',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'apply-for',
                pricingPlans: [
                  {
                    _key: '11d4e0951964',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: 'c35b53a3-c785-4848-8510-cf5605a2ac55',
            internalName: 'Spottitt Energy',
            productVariants: [
              {
                _key: '8a7461447c40',
                name: 'Spottitt Energy',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'c52bfb11-e76c-488c-93c8-ffc462fa69c3',
            internalName: 'Automation Test Product 4(Add-on)',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '76b76ad13b17',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: '6ed3696ceb46',
                        _type: 'freeAddOnPlan',
                        description: 'Free add-on',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon1',
                        },
                        name: 'FreeAddon1',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: '1cdd89747f4a',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-unlimited',
                          _type: 'reference',
                        },
                        description: 'This is one-time payment addon',
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon1',
                        },
                        name: 'OneTimeAddon1',
                        prices: [
                          {
                            _key: 'd00599c50d79',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fc19b6e11a7f',
                            _type: 'price',
                            amount: 60,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 11,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl:
                          'https://storetest.test.com/automation-test-product-4-add-on',
                        salesforceProduct: 'APITEST-onetime-addon1',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'f0f2c4867b64',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        description: 'This is recurring add on',
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon1',
                        },
                        name: 'RecAddon1',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: 'ec9c1207de5d',
                            _type: 'price',
                            amount: 25,
                            currency: 'EUR',
                          },
                          {
                            _key: '4857aeedffaa',
                            _type: 'price',
                            amount: 300,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.google.com',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITTEST-rec-addon1',
                      },
                      {
                        _key: 'd2c45898d89b',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'quarter',
                        cancellationTermDays: 30,
                        description: 'This is Metered Add-on',
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon1',
                        },
                        name: 'MetAddon1',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '780aceef834a',
                            _type: 'price',
                            amount: 30,
                            currency: 'EUR',
                          },
                          {
                            _key: '979605073187',
                            _type: 'price',
                            amount: 350,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'http://www.baidu.com',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon1',
                      },
                    ],
                    description: 'This is a free plan',
                    name: 'FreeBase',
                  },
                  {
                    _key: '33f932aad5e8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'bbec5c4a8767',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon2',
                        },
                        name: 'FreeAddon2',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu.com',
                      },
                      {
                        _key: '3ffb7336f295',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon2',
                        },
                        name: 'OneTimeAddon2 This is very long sentence has two lines',
                        prices: [
                          {
                            _key: '0ac92beb6994',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '2a065a7ef7ed',
                            _type: 'price',
                            amount: 66,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu2.com',
                        salesforceProduct: 'APITEST-onetime-addon2',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '311ba5ae93e6',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'quarter',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon2',
                        },
                        name: 'RecAddon2 this is on long name has two lines.',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'd6c4f9fa2b97',
                            _type: 'price',
                            amount: 12,
                            currency: 'EUR',
                          },
                          {
                            _key: '1f6ef339cedc',
                            _type: 'price',
                            amount: 34,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 11,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon2',
                      },
                      {
                        _key: 'd38ace6f56ad',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon2',
                        },
                        name: 'MetAddon2 this is on long name has two lines.',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'ec26523ef5e4',
                            _type: 'price',
                            amount: 22,
                            currency: 'EUR',
                          },
                          {
                            _key: '11108ade1f3d',
                            _type: 'price',
                            amount: 87,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu3.com',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon2',
                      },
                    ],
                    description: 'This is one-time base plan',
                    name: 'OneTimeBase',
                  },
                  {
                    _key: 'a7dd288d4d4e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '6a56e4a15498',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeeaddon3',
                        },
                        name: 'FreeAddon3',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'd1ae3d7f71e6',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'month',
                        accessDuration2: {
                          _ref: 'duration-month',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon3',
                        },
                        name: 'OneTimeAddon3',
                        prices: [
                          {
                            _key: '73bacd3f9d6a',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '611eefb585ff',
                            _type: 'price',
                            amount: 68,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon3',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'b4ac17d943d1',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon3',
                        },
                        name: 'RecAddon3',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '353f9c694384',
                            _type: 'price',
                            amount: 10,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eeb27c020c70',
                            _type: 'price',
                            amount: 81,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon3',
                      },
                      {
                        _key: '8fdfb10796d2',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon3',
                        },
                        name: 'MetAddon3',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '509e672db264',
                            _type: 'price',
                            amount: 20,
                            currency: 'EUR',
                          },
                          {
                            _key: 'f37d9a6f0b8f',
                            _type: 'price',
                            amount: 222,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon3',
                      },
                    ],
                    description: 'This is recurring plan',
                    name: 'RecBase',
                  },
                  {
                    _key: 'e16dcfe66e93',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'a646effafbcc',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon4',
                        },
                        name: 'FreeAddon4',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'ccbafc83bef3',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon4',
                        },
                        name: 'OneTimeAddon4',
                        prices: [
                          {
                            _key: '023fcbc34aa6',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '9ce976da0db5',
                            _type: 'price',
                            amount: 76,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon4',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '99eb2b1f6f2e',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4',
                        },
                        name: 'RecAddon4',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ab21b35cbb88',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon4',
                        },
                        name: 'MetAddon4',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '101cf9e27e10',
                            _type: 'price',
                            amount: 33,
                            currency: 'EUR',
                          },
                          {
                            _key: '7e67e40ae8c4',
                            _type: 'price',
                            amount: 99,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon4',
                      },
                    ],
                    description: 'This is a metered base plan',
                    name: 'MeteredBase',
                  },
                ],
              },
            ],
          },
          {
            _id: 'c83ee42c-8e06-4604-b7bd-195badcc5a10',
            internalName:
              'Automation Test 11 Block Pricing - Side by Side - Variant Group/Extension ',
            productVariants: [
              {
                _key: 'b43cbe2149c9',
                name: 'Test 11-4 Block Pricing Side by Side Var1',
                pricingPlans: [
                  {
                    _key: 'e6d6b871c167',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'This is a free plan under Var1',
                    name: 'Plan 1 - Block pricing Side by Side with Group - Free',
                  },
                  {
                    _key: '43f9ff64d99e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is a One time purchase plan under Var1',
                    name: 'Plan 2 - Block Pricing Side by Side with Group - OneTime',
                  },
                ],
              },
              {
                _key: 'e8bdf607e8ef',
                name: 'Test 11-4 Block Pricing Side by Side Var2',
                pricingPlans: [
                  {
                    _key: 'f5fa8b39e7f7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is a One time purchase plan under Var2',
                    name: 'Plan 3 - Block Pricing Side by Side with Group - OneTime',
                  },
                  {
                    _key: 'e7c028f9dd13',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: 'This is a Lead generation plan under Var2',
                    name: 'Plan 4 - Block Pricing Side by Side with Group - Lead ',
                  },
                  {
                    _key: '773a12edc3d2',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'This is the Recurring subscription plan under Var2',
                    name: 'Plan 5 - Block Pricing Side by Side with Group - OneTime',
                  },
                ],
              },
              {
                _key: '3a52535e4872',
                name: 'Test 11-3 Block Pricing Side by Side Var3',
                pricingPlans: [
                  {
                    _key: '50cf47b3a4d5',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'This is a free plan under Var3',
                    name: 'Plan 6 - Block Pricing Side by Side with Group - Free',
                  },
                  {
                    _key: '673917795bab',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '182fa6a41246',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        description: 'This is an extension for plan 7',
                        key: {
                          _type: 'slug',
                          current: 'extension-1-for-plan-7',
                        },
                        name: 'Extension 1 for Plan 7',
                        prices: [
                          {
                            _key: 'fe6fc87b98097b2cc3af3ece5e47cd27',
                            _type: 'price',
                            amount: 29,
                            currency: 'EUR',
                          },
                          {
                            _key: 'd31f9727c778',
                            _type: 'price',
                            amount: 290,
                            currency: 'NOK',
                          },
                        ],
                        quantityBlocks: [
                          {
                            _key: '500e94671d8893d010722f6af615c2ba',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'ff361034cdabeffd1f67957551105f76',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'unlimited',
                        salesforceProduct: 'extension-1-for-plan-7',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'ad96f0b32deb',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'extension-2-for-plan-7',
                        },
                        name: 'Extension 2 for Plan 7',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                    ],
                    description: 'This is a One time purchase plan under Var3',
                    name: 'Plan 7 - Block Pricing Side by Side with Group - OneTime',
                  },
                ],
              },
              {
                _key: '17df302597e9',
                name: 'Test 11-4 Block Pricing Side by Side Var4',
                pricingPlans: [
                  {
                    _key: 'eb47673114bf',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 8 - Block Pricing Side by Side - Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'c89bf8fe-db4d-4a1e-b750-873e15f7d27a',
            internalName: 'Energy Transition Outlook (ETO) Premium',
            productVariants: [
              {
                _key: '8516f8d30b87',
                name: 'ETO Premium',
                pricingPlans: [
                  {
                    _key: '8e590891ca6f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The subscription gives access to ETO 2019 premium analytics services from the date of purchase.',
                    name: 'ETO Premium purchase plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'c99e55e1-6752-449e-b4cb-36a04e6a0f2c',
            internalName: 'Resource Compass',
            productVariants: [
              {
                _key: '6f3ea2553252',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: 'ed1d1709945e',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'c9f7abb3-70be-4893-a77d-a08afcc3205c',
            internalName:
              'Automation Test Product with Invalid ServiceID (Free)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: 'cdb50584-b590-46e1-a271-c48636452f4a',
            internalName: 'Automation Test Product 5 (Purchase data set)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'One Dataset',
                pricingPlans: [
                  {
                    _key: '710a74e22efb',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '4b8cc26a3438',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_3users',
                  },
                ],
              },
              {
                _key: 'ff1dd4ac7aac',
                name: 'Two Datasets',
                pricingPlans: [
                  {
                    _key: '5dfe5bd37987',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'ca19793590ee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3users',
                  },
                ],
              },
            ],
          },
          {
            _id: 'cdbbd737-4237-456a-88ef-9934577c4069',
            internalName: 'Product without T&C',
            productVariants: [
              {
                _key: '3deeb748ef66',
                name: 'product without terms',
                pricingPlans: [
                  {
                    _key: '8fd141a57e94',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'for product without tc',
                  },
                ],
              },
            ],
          },
          {
            _id: 'cf7fd00b-c1d0-4f78-b9ff-e01db47ace83',
            internalName: 'NEW: Synergi Pipeline Simulator short term lease',
            productVariants: [
              {
                _key: 'b9ba1ae3bdd7',
                name: 'Standard performance',
                pricingPlans: [
                  {
                    _key: '094ce844f1e5',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Offline analysis to simulate transient flow of your natural gas or liquid transmission system pre-installed on and including a standard virtual machine for 7 days.',
                    name: 'Standard - 7 days access',
                  },
                  {
                    _key: 'f839d360c9b7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Offline analysis to simulate transient flow of your natural gas or liquid transmission system pre-installed on and including a high performance virtual machine for 30 days.',
                    name: 'Standard - 30 days access',
                  },
                ],
              },
              {
                _key: '3458f07e88ec',
                name: 'High performance',
                pricingPlans: [
                  {
                    _key: '23b615d042d1',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Offline analysis to simulate transient flow of your natural gas or liquid transmission system pre-installed on and including a high performance virtual machine for 30 days.',
                    name: 'High performance - 7 days access',
                  },
                  {
                    _key: '2cdc5a790d4e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Offline analysis to simulate transient flow of your natural gas or liquid transmission system pre-installed on and including a high performance virtual machine for 30 days.',
                    name: 'High performance - 30 days access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'cfdf9ba1-ee8b-4ee4-96ee-4ed99a923269',
            internalName: 'Test Product For debug',
            productVariants: [
              {
                _key: '363269d86606',
                name: 'Eas_FullProv_None',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_Single',
                  },
                  {
                    _key: 'b37108b6dfae',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_3Users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'Eas_FullProv_Pending',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                ],
              },
              {
                _key: '413878139a67',
                name: 'Eas_FullProv_Active',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'onetime_single',
                  },
                ],
              },
              {
                _key: 'b9901a876842',
                name: 'BranTest',
                pricingPlans: [
                  {
                    _key: '7492cf526fbd',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeExtra',
                  },
                  {
                    _key: '8f2efcbeae20',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'one time payment',
                    name: 'Test_OneTime',
                  },
                  {
                    _key: 'e9818d35a67b',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'This is a test product for recurring payment',
                    name: 'Bran_Recurring',
                  },
                ],
              },
              {
                _key: '350d1cb8c30a',
                name: 'Test_Recurring',
                pricingPlans: [
                  {
                    _key: 'a2cbcf3dac45',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test description',
                    name: 'Recurring plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'cffb5023-8d40-45fd-8075-2ad7698acb25',
            internalName: 'MyQRA',
            productVariants: [
              {
                _key: '8c7e5eafc755',
                name: 'MyQRA',
                pricingPlans: [
                  {
                    _key: '4e663c3c12d2',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Place holder',
                  },
                ],
              },
            ],
          },
          {
            _id: 'd10cc7c9-ca42-4035-9233-3479c0e6d03d',
            internalName: 'Onix Work',
            productVariants: [
              {
                _key: '718a2f8b4b22',
                name: 'Onix Work',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'd2b737ce-f1b6-403b-a48b-03e1c30e9ffd',
            internalName: 'ioCurrents MarineInsight',
            productVariants: [
              {
                _key: '7351423ebee9',
                name: 'ioCurrents MarineInsight',
                pricingPlans: [
                  {
                    _key: '4d252e296744',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'placeholder',
                  },
                ],
              },
            ],
          },
          {
            _id: 'd6f423c6-1f80-4680-9759-31385a6538e6',
            internalName: 'ECO Insight',
            productVariants: [
              {
                _key: '2ffe82e2fa70',
                name: 'ECO Insight',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'd78709b3-8a72-4840-a1b8-bc40f7de609f',
            internalName: 'Test Product 4(Add-on)',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '76b76ad13b17',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: '6ed3696ceb46',
                        _type: 'freeAddOnPlan',
                        description: 'Free add-on',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon1',
                        },
                        name: 'FreeAddon1',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: '1cdd89747f4a',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-unlimited',
                          _type: 'reference',
                        },
                        description: 'This is one-time payment addon',
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon1',
                        },
                        name: 'OneTimeAddon1',
                        prices: [
                          {
                            _key: 'd00599c50d79',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fc19b6e11a7f',
                            _type: 'price',
                            amount: 60,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 99999,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl:
                          'https://storetest.test.com/automation-test-product-4-add-on',
                        salesforceProduct: 'APITEST-onetime-addon1',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: 'This is a free plan',
                    name: 'FreeBase',
                  },
                  {
                    _key: '33f932aad5e8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'bbec5c4a8767',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon2',
                        },
                        name: 'FreeAddon2',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu.com',
                      },
                      {
                        _key: '3ffb7336f295',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon2',
                        },
                        name: 'OneTimeAddon2 This is very long sentence has two lines This is very long sentence has two lines',
                        prices: [
                          {
                            _key: '0ac92beb6994',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '2a065a7ef7ed',
                            _type: 'price',
                            amount: 66,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu2.com',
                        salesforceProduct: 'APITEST-onetime-addon2',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '311ba5ae93e6',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'quarter',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon2',
                        },
                        name: 'RecAddon2 This is very long sentence has two lines This is very long sentence has two lines',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'd6c4f9fa2b97',
                            _type: 'price',
                            amount: 12,
                            currency: 'EUR',
                          },
                          {
                            _key: '1f6ef339cedc',
                            _type: 'price',
                            amount: 34,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 99999,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon2',
                      },
                      {
                        _key: 'd38ace6f56ad',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon2',
                        },
                        name: 'MetAddon2 This is very long sentence has two lines This is very long sentence has two lines',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'ec26523ef5e4',
                            _type: 'price',
                            amount: 22,
                            currency: 'EUR',
                          },
                          {
                            _key: '11108ade1f3d',
                            _type: 'price',
                            amount: 87,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu3.com',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon2',
                      },
                    ],
                    description: 'This is one-time base plan',
                    name: "OneTimeBase I'd like to extend the name of this one-time purchase plan to make it fit for testing",
                  },
                  {
                    _key: 'a7dd288d4d4e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '6a56e4a15498',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeeaddon3',
                        },
                        name: 'FreeeAddon3',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'd1ae3d7f71e6',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'month',
                        accessDuration2: {
                          _ref: 'duration-month',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon3',
                        },
                        name: 'OneTimeAddon3',
                        prices: [
                          {
                            _key: '73bacd3f9d6a',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '611eefb585ff',
                            _type: 'price',
                            amount: 68,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon3',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'b4ac17d943d1',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon3',
                        },
                        name: 'RecAddon3',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '353f9c694384',
                            _type: 'price',
                            amount: 10,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eeb27c020c70',
                            _type: 'price',
                            amount: 81,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon3',
                      },
                      {
                        _key: '8fdfb10796d2',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon3',
                        },
                        name: 'MetAddon3 This is a quite long add on price plan name you know',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '509e672db264',
                            _type: 'price',
                            amount: 20,
                            currency: 'EUR',
                          },
                          {
                            _key: 'f37d9a6f0b8f',
                            _type: 'price',
                            amount: 222,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon3',
                      },
                    ],
                    description: 'This is recurring plan',
                    name: 'RecBase This is a quite long base price plan name you know that right',
                  },
                  {
                    _key: 'e16dcfe66e93',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'a646effafbcc',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon4',
                        },
                        name: 'FreeAddon4',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'ccbafc83bef3',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon4',
                        },
                        name: 'OneTimeAddon4',
                        prices: [
                          {
                            _key: '023fcbc34aa6',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '9ce976da0db5',
                            _type: 'price',
                            amount: 76,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon4',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '99eb2b1f6f2e',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4',
                        },
                        name: 'RecAddon4 extension price plan name is over 1 line is it enough',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ab21b35cbb88',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon4',
                        },
                        name: 'MetAddon4',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '101cf9e27e10',
                            _type: 'price',
                            amount: 33,
                            currency: 'EUR',
                          },
                          {
                            _key: '7e67e40ae8c4',
                            _type: 'price',
                            amount: 99,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon4',
                      },
                    ],
                    description: 'This is a metered base plan',
                    name: 'MeteredBase',
                  },
                ],
              },
              {
                _key: 'b25354be5fbd',
                name: 'a new variant for test copy from PA',
                pricingPlans: [
                  {
                    _key: '36e8dc870849',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'free one',
                  },
                  {
                    _key: '39eb5062-c12a-4f7d-8ed9-292ffab66066',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'a646effafbcc',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon4-copy',
                        },
                        name: 'FreeAddon4',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'ccbafc83bef3',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon4-copy',
                        },
                        name: 'OneTimeAddon4',
                        prices: [
                          {
                            _key: '023fcbc34aa6',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '9ce976da0db5',
                            _type: 'price',
                            amount: 76,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon4',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '99eb2b1f6f2e',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4-copy',
                        },
                        name: 'RecAddon4 extension price plan name is over 1 line is it enough',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ad45cbe90a1f972404b59fdb73999131',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4-copy-within-same-plan',
                        },
                        name: 'RecAddon4 extension price plan name is over 1 line is it enough-within-same-plan',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ab21b35cbb88',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon4-copy',
                        },
                        name: 'MetAddon4',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '101cf9e27e10',
                            _type: 'price',
                            amount: 33,
                            currency: 'EUR',
                          },
                          {
                            _key: '7e67e40ae8c4',
                            _type: 'price',
                            amount: 99,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon4',
                      },
                    ],
                    description: 'This is a metered base plan',
                    name: 'MeteredBase',
                  },
                ],
              },
            ],
          },
          {
            _id: 'd7eab56c-1c3b-446b-9713-db9822ac3b71',
            internalName: 'Automation Test 11 Block Pricing Side by Side',
            productVariants: [
              {
                _key: '336b012a42db',
                name: 'Test 11 Block Pricing Side by Side Var1',
                pricingPlans: [
                  {
                    _key: '79363ff68222',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is plan 1',
                    name: 'Plan 1 One - time purchase',
                  },
                  {
                    _key: 'c8cf0ab5f4bc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'This is Plan 2',
                    name: 'Plan 2 Recurring sub',
                  },
                ],
              },
              {
                _key: '083706f9ebeb',
                name: 'Test 11 Block Pricing Side by Side Var2',
                pricingPlans: [
                  {
                    _key: '2737c107c9d3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 3 One - time purchase',
                  },
                ],
              },
            ],
          },
          {
            _id: 'd8d48a03-fde7-460d-994c-8fe49f9428d9',
            internalName: 'Eason Practice',
            productVariants: [
              {
                _key: 'dbf64b44f0a0',
                name: 'FreeAccess',
                pricingPlans: [
                  {
                    _key: '96a09f9ab6b3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeAccess',
                  },
                ],
              },
            ],
          },
          {
            _id: 'dac03152-b174-475d-9bf9-0ef959603e1d',
            internalName: 'Temasys Skylink',
            productVariants: [
              {
                _key: '080f9e5ec55e',
                name: 'Temasys Skylink',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'de9355ac-b522-407c-98b3-4c29640798ff',
            internalName: 'Pricing plan style - 1 plan - complex mode',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Basic Multi Currency',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Currency display',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.01811ca0-113a-4d20-ba9b-17b7f65a9ce5',
            internalName:
              'Self-assessment of Digital Twin organizational maturity',
            productVariants: null,
          },
          {
            _id: 'drafts.025a5011-d880-446b-a592-a1f6afb9113a',
            internalName: 'Smart Cable Guadata',
            productVariants: [],
          },
          {
            _id: 'drafts.032f4ed3-e332-4f5e-88fe-320601f0006d',
            internalName: 'T-REX for Energy Project Finance',
            productVariants: [
              {
                _key: 'd081cb8b5d54',
                name: 'T-REX for Energy Project Finance',
                pricingPlans: [
                  {
                    _key: '00c974a151bc',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Pricing plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.124a6eb9-73d8-48ae-8674-b45dd6175117',
            internalName:
              'Automation Test Product with Invalid ServiceID (Purchase) ',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Plans',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.16571ac3-bbe5-43bc-85ac-0ac9a5e68a28',
            internalName: 'Phast (short-term access)',
            productVariants: [
              {
                _key: '6864effd6527',
                name: 'Rental 1 day',
                pricingPlans: [
                  {
                    _key: '24febc945472',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We aim to provide access 1 working day after purchase.',
                    name: 'Phast 1 Day Rental',
                  },
                ],
              },
              {
                _key: '4b78880d673c',
                name: 'Rental 7 days',
                pricingPlans: [
                  {
                    _key: 'd61811773b5c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We aim to provide access 1 working day after purchase.',
                    name: 'Phast 7 days Rental',
                  },
                ],
              },
              {
                _key: '10ed109d2b83',
                name: 'Rental 1 Month',
                pricingPlans: [
                  {
                    _key: '5869163e94ad',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We aim to provide access 1 working day after purchase.',
                    name: 'Phast 30 days rental',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.180e9c15-b915-46a5-8a8f-1c4598c2dac2',
            internalName: 'Automation Test Product with Additional Fields',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout No Custom Section',
                  },
                  {
                    _key: 'c6cd12ab49e8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout With Custom Section',
                  },
                ],
              },
              {
                _key: 'fd56398a3b79',
                name: 'Purchase',
                pricingPlans: [
                  {
                    _key: '021aa15e722f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout No Custom Section',
                  },
                  {
                    _key: '5c31437da8d8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout With Custom Section',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.1d9a9ea2-64e5-448a-a71a-15fa417c41e0',
            internalName: 'Test product for copy and move variant',
            productVariants: [
              {
                _key: '75a4ef28-f714-4b99-8aab-25c312ae82f8',
                name: 'Eas_FullProv_None',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_Single',
                  },
                  {
                    _key: 'b37108b6dfae',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_3Users',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.1e6e0c17-4df1-407d-bb25-6b53f65def4f',
            internalName: 'Forecaster',
            productVariants: [
              {
                _key: 'cbc72e50ceae',
                name: "MVP configuration - DON'T TOUCH",
                pricingPlans: [
                  {
                    _key: '2bf620643409',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'testlalala',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.1fd8f385-385a-4bcf-9c86-54e2277ca980',
            internalName: 'Shipweight',
            productVariants: [
              {
                _key: '54142e2f3e93',
                name: 'Shipweight',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.1hDsu5PXGFKtVBwaWaFzyA',
            internalName: 'Automation Test Product with Trial',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Variant One',
                pricingPlans: [
                  {
                    _key: 'f7491eccc865',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec - No Trial',
                  },
                  {
                    _key: 'bfab51ca1589',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec - Trial 7 days',
                  },
                  {
                    _key: 'b5ac82fdd2a3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec - Trial 14 days',
                  },
                  {
                    _key: '5f5a5d731fc0',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'This is plan description to explain your plan.',
                    name: 'Metered - Trial 1 month - MultiLicense',
                  },
                  {
                    _key: 'faeea70bff00',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered - Trial 3 months',
                  },
                  {
                    _key: 'e788486aeadb',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered - Trial 6 Months',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.1hDsu5PXGFKtVBwaWaGmQl',
            internalName: 'Automation Test Product 5 (Free data set)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Free data set',
                pricingPlans: [
                  {
                    _key: 'fdbc6aa54d9b',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'freedatset',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.203e9cc5-9d8a-40be-b7fa-662060c11c69',
            internalName: 'Rig',
            productVariants: [
              {
                _key: 'f70939bac26c',
                name: 'Rig',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.23907f3e-5800-4606-801f-567a18567291',
            internalName: 'Test Product 4_2',
            productVariants: [
              {
                _key: '802da4930997',
                name: 'V4',
                pricingPlans: [
                  {
                    _key: '158faa4ef99a',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'd349697ee9ef',
                        _type: 'freeAddOnPlan',
                        description:
                          'You can call us in anytime in a day. We will support you anywhere and anytime.',
                        key: {
                          _type: 'slug',
                          current: '24-support',
                        },
                        name: '24 support',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'e662b92adebb',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'week',
                        accessDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'global-support',
                        },
                        name: 'Global support',
                        prices: [
                          {
                            _key: '7aa2604fe44a',
                            _type: 'price',
                            amount: 3,
                            currency: 'EUR',
                          },
                          {
                            _key: 'd2c5e67a7620',
                            _type: 'price',
                            amount: 4,
                            currency: 'GBP',
                          },
                          {
                            _key: '1ca313a1a132',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-a1',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: "Free plan!!! Last 5 days, don't miss the last chance",
                  },
                  {
                    _key: 'fec9a4ff71ae',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free2',
                  },
                ],
              },
              {
                _key: 'c9844e0b36d8',
                name: 'V5',
                pricingPlans: [
                  {
                    _key: 'e690efe1cf7e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'f378a82c5463',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon',
                        },
                        name: 'Rec addon',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'db8a77b559c7',
                            _type: 'price',
                            amount: 399,
                            currency: 'EUR',
                          },
                          {
                            _key: '5baa94b7fa92',
                            _type: 'price',
                            amount: 499,
                            currency: 'GBP',
                          },
                          {
                            _key: '3e56588a674d',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-sser',
                      },
                      {
                        _key: '9b69f8d14330',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'metered-addon',
                        },
                        name: 'Metered-Addon',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'fc642523958b',
                            _type: 'price',
                            amount: 1,
                            currency: 'EUR',
                          },
                          {
                            _key: 'c5f889422193',
                            _type: 'price',
                            amount: 2,
                            currency: 'GBP',
                          },
                          {
                            _key: 'd55a24b9ed39',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-11',
                      },
                      {
                        _key: '87be7a0a744e',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-year',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'one-time-extension',
                        },
                        name: 'one-time extension',
                        prices: [
                          {
                            _key: 'a3c69f2ff5cd762940d9e60a64116d9c',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: '21ab4dcca111',
                            _type: 'price',
                            amount: 40,
                            currency: 'GBP',
                          },
                          {
                            _key: '855b9da29172',
                            _type: 'price',
                            amount: 1000,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'dddd',
                        slaDuration: 'year',
                      },
                    ],
                    description: 'short desc',
                    name: 'Rec Plan',
                  },
                  {
                    _key: '36034ad0d389',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '1 MB',
                  },
                  {
                    _key: '42c7c09afadc82279df372c377f36e31',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2 MB',
                  },
                  {
                    _key: '2fad6292d614c31946733ccc518af2e3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3 MB',
                  },
                  {
                    _key: 'faf87449bb9be2136734a230ebd7eaec',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '4 MB',
                  },
                  {
                    _key: '7edadbb5771a3cb43027d142e9390abc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '5 MB',
                  },
                  {
                    _key: '4576451ec1730e72869ebbc9085ee43b',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '6 MB',
                  },
                  {
                    _key: '958cc03d9cfc',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '7 MB',
                  },
                  {
                    _key: 'dddc5980c1937fc3d39651c474b48f20',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '8 MB',
                  },
                  {
                    _key: 'ed7053fae4def565b6132910e7315375',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '9 MB',
                  },
                  {
                    _key: 'f177b213f75b93e204d3ea0b0b1a308f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '10 MB',
                  },
                ],
              },
              {
                _key: 'efca5d477dec',
                name: 'V6',
                pricingPlans: [
                  {
                    _key: '00421008ced2',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: '0229c085354b',
                        _type: 'freeAddOnPlan',
                        description: "I'm Free",
                        key: {
                          _type: 'slug',
                          current: 'free-ao',
                        },
                        name: 'Free-AO',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                    ],
                    description: 'This is freeplan',
                    name: 'FreePlan1',
                  },
                  {
                    _key: 'a7962b72fcd1',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '715132484b33',
                        _type: 'freeAddOnPlan',
                        description: 'Free addon 1',
                        key: {
                          _type: 'slug',
                          current: 'f-addon1',
                        },
                        name: 'F-Addon1',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: '88de5d650ca3',
                        _type: 'freeAddOnPlan',
                        description: 'This is free addon2',
                        key: {
                          _type: 'slug',
                          current: 'f-addon2',
                        },
                        name: 'F-Addon2',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'e52ed974525d',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'paid-addon1',
                        },
                        name: 'Paid-Addon1',
                        prices: [
                          {
                            _key: 'bc59206d1a57',
                            _type: 'price',
                            amount: 1,
                            currency: 'EUR',
                          },
                          {
                            _key: '5c8e49e6cde3',
                            _type: 'price',
                            amount: 1010,
                            currency: 'GBP',
                          },
                          {
                            _key: '5ead0546a9a6',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEst-111',
                        slaDuration: 'yearly-recurring',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: 'This is paid plan',
                    name: 'Paid Plan1',
                  },
                  {
                    _key: '1a6df0911b15',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'Pick me!',
                    name: 'Free De Ya',
                  },
                  {
                    _key: '678a96eb47de',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTIme',
                  },
                  {
                    _key: '682748afa5ea',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '138d58ed946f',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: '24-support2',
                        },
                        name: '24 support',
                        prices: [
                          {
                            _key: 'df941f7fa9d8',
                            _type: 'price',
                            amount: 1,
                            currency: 'EUR',
                          },
                          {
                            _key: 'd89cad2b3a16',
                            _type: 'price',
                            amount: 2,
                            currency: 'GBP',
                          },
                          {
                            _key: '950fb8425c5b',
                            _type: 'price',
                            amount: 1,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-222',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: 'Meter base plan',
                  },
                  {
                    _key: '606f2732-ebe9-45bc-bbc5-f2d6e7f272e0',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '6a56e4a15498',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeeaddon3',
                        },
                        name: 'FreeeAddon3',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'd1ae3d7f71e6',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'month',
                        accessDuration2: {
                          _ref: 'duration-month',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon3',
                        },
                        name: 'OneTimeAddon3',
                        prices: [
                          {
                            _key: '73bacd3f9d6a',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '611eefb585ff',
                            _type: 'price',
                            amount: 68,
                            currency: 'NOK',
                          },
                          {
                            _key: 'da86e418ad3c',
                            _type: 'price',
                            amount: 1,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon3',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'b4ac17d943d1',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon3',
                        },
                        name: 'RecAddon3',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '353f9c694384',
                            _type: 'price',
                            amount: 10,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eeb27c020c70',
                            _type: 'price',
                            amount: 81,
                            currency: 'NOK',
                          },
                          {
                            _key: 'cbf936b8227f',
                            _type: 'price',
                            amount: 1,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon3',
                      },
                      {
                        _key: '8fdfb10796d2',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon3',
                        },
                        name: 'MetAddon3 This is a quite long add on price plan name you know',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '509e672db264',
                            _type: 'price',
                            amount: 20,
                            currency: 'EUR',
                          },
                          {
                            _key: 'f37d9a6f0b8f',
                            _type: 'price',
                            amount: 222,
                            currency: 'NOK',
                          },
                          {
                            _key: '565addc69076',
                            _type: 'price',
                            amount: 1,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon3',
                      },
                    ],
                    description: 'This is recurring plan',
                    name: 'RecBase This is a quite long base price plan name you know that right-copy-from-another-product',
                  },
                  {
                    _key: '441938a7a551',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '1 vessel',
                  },
                  {
                    _key: 'e31dedd739c7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2 vessel',
                  },
                  {
                    _key: '41bd1f78f209',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '3 vessel',
                  },
                  {
                    _key: '82e5bcc862f7fdd2805bd423463ddf22',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '4 vessel',
                  },
                  {
                    _key: '7a72e5c96b3a5fdf6fcdc44b62078b35',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '5 vessel',
                  },
                  {
                    _key: 'cbb7dc9841ccaf4516144c1330fd3517',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '6 vessel',
                  },
                  {
                    _key: 'a0b9b8232d9639acf2fd945bdf42fe30',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '7 vessel',
                  },
                  {
                    _key: 'b7bed7d88c708cf3f52e49a4954551b6',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '8 vessel',
                  },
                  {
                    _key: '768743edb3d975da8c3be03745c5d03c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '9 vessel',
                  },
                  {
                    _key: 'fe3efc11741153035b9f834a564bf3af',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '10 vessel',
                  },
                  {
                    _key: '414da7540895ea3468cd92c2637376ce',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '11 vessel',
                  },
                  {
                    _key: '38dd8475eec3029d1b11bf86ea19d7b6',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '12 vessel',
                  },
                  {
                    _key: 'cde9fe6bf3e0b5f9fd8b188de5795dfd',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '13 vessel',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.24b5451b-f29e-415d-bda0-bf9cd5db02b1',
            internalName: 'aaaa',
            productVariants: [
              {
                _key: 'caa75eea9889',
                name: '1111',
                pricingPlans: [
                  {
                    _key: '5726b098dd4d',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '111',
                  },
                  {
                    _key: '93bfc823faf7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'abcd',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.2535bf0e-96b0-4e6b-ab9a-05bc09267568',
            internalName: 'Data Management Advisory Service',
            productVariants: [
              {
                _key: '756e49b49d6e',
                name: 'Data Management Advisory Service',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.26bdc57f-2ef8-4fdd-932b-c4b14d92bfcc',
            internalName: 'Premium Access - Alternative Fuels Insight (AFI)',
            productVariants: [
              {
                _key: 'd9995d74cad6',
                name: 'AFI Premium',
                pricingPlans: [
                  {
                    _key: 'e325155f7d22',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Single license - Scrubber',
                  },
                  {
                    _key: 'fd6287810f02',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Single license - Battery',
                  },
                  {
                    _key: 'a2516bd8d6c5',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Single license - LNG',
                  },
                  {
                    _key: '1408ce0365c5',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-20 licenses - Scrubber',
                  },
                  {
                    _key: 'd817e6469bbe',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-20 licenses - LNG',
                  },
                  {
                    _key: 'ec583e43556d',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: '2-20 licenses - Battery',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.2BqmmaZAtkpWX5gaPoEJQg',
            internalName: 'Automation Test Product 8 (Hidden Product)',
            productVariants: [
              {
                _key: '078d53687d15',
                name: 'Variant 1',
                pricingPlans: [
                  {
                    _key: '14e4ac17dae2',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.2c49251c-38ad-4d69-b283-2f1f9ddf3fcb',
            internalName: 'TCarta Bathymetry',
            productVariants: [
              {
                _key: '226ee6f65869',
                name: 'TCarta Bathymetry',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.2deb0869-f86f-4e5b-b268-f35da804ef0d',
            internalName: 'In:Range™',
            productVariants: [
              {
                _key: '053169a8efad',
                name: 'In:Range',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.2e244347-716e-4210-9d3c-766bbdf102c7',
            internalName: 'Product for currency testing',
            productVariants: [
              {
                _key: 'feeb803cec0e',
                name: 'V1',
                pricingPlans: [
                  {
                    _key: 'dd880ae6cc15',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Multiple stakeholders involved on a Paint application project will benefit from a Collaborative reporting system. Whether it’s Ongoing paint maintenance, Tank coating, Dry-docking or a Paint survey; the ‘Digital Paint Report’ helps you document all required performance parameters & photos on a collaborative platform.',
                    name: 'onetime',
                  },
                  {
                    _key: 'e611679bcee6',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Short desc for this plan',
                    name: 'Metere',
                  },
                  {
                    _key: '0e91ea22da8a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'onetime2',
                  },
                  {
                    _key: 'd1a3a02ee33e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Rec2',
                  },
                  {
                    _key: 'a9bb15518387',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.2fd6dff9-e692-4ef4-a696-556402801d10',
            internalName: 'Synnes additional fields',
            productVariants: [
              {
                _key: 'd6dab0a36f62',
                name: 'First example',
                pricingPlans: [
                  {
                    _key: 'b085e8833771',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.310fce44-7b56-400e-b9a6-73bba136d25b',
            internalName: 'Data Quality as a Service',
            productVariants: [
              {
                _key: '3ac017870c91',
                name: 'Data Quality as a Service',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.3303vbe0eqTT4Xsg70140w',
            internalName: 'Automation Test Product 9 (Inactive Product)',
            productVariants: [
              {
                _key: 'ad5b63f3b1e4',
                name: 'variant1',
                pricingPlans: [
                  {
                    _key: 'dd703b20468a',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.331fce80-75dc-4b03-99ad-56de9577ae8d',
            internalName: 'test Data Fabric 1',
            productVariants: [
              {
                _key: 'ec2c12496027',
                name: 'Data Fabric Data Management',
                pricingPlans: [
                  {
                    _key: '0aec3cec1e70',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'For large scale data storage and sharing.  A company account in test will be set up for you to manage. Invite users to collaborate on or manage data containers. *',
                    name: 'Data Management Plus',
                  },
                  {
                    _key: '9683483212f9',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'desc',
                    name: 'TestOneTime',
                  },
                  {
                    _key: '4d8e617eb0bc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test',
                    name: 'TestRecurring',
                  },
                  {
                    _key: '30a50ae56591',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'TEST',
                  },
                ],
              },
              {
                _key: '2386e67c231e',
                name: 'Data fabric "buy" trial month',
                pricingPlans: [
                  {
                    _key: '3184c08c7b08',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free 30 days trial',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.38bfac18-b2e2-44fe-af8e-e29f387b2690',
            internalName: 'Sesam Insight',
            productVariants: [
              {
                _key: '6ed835c982df',
                name: 'Sesam Insight',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.41f829df-0893-4127-813e-2efae5ee03e0',
            internalName:
              'Automation Test Product 10 (Group Variant - Single Column)',
            productVariants: [
              {
                _key: '8be5d7b2bf4c',
                name: 'Battery',
                pricingPlans: [
                  {
                    _key: '1a50ba139599',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - 1 user',
                  },
                  {
                    _key: '3d28f79fc7d63bf58521e29271d448e0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - 2-3 users',
                  },
                  {
                    _key: '4cf9021772517075eb6f571be94db6a3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Battery - Enterprise',
                  },
                ],
              },
              {
                _key: '47c194c44effdc6d749981224d20a424',
                name: 'Scrubber',
                pricingPlans: [
                  {
                    _key: '1a50ba139599',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - 1 user',
                  },
                  {
                    _key: '3d28f79fc7d63bf58521e29271d448e0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - 2-3 users',
                  },
                  {
                    _key: '4cf9021772517075eb6f571be94db6a3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Scrubber - Enterprise',
                  },
                ],
              },
              {
                _key: 'b478cfb0ff0c',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '1841a85315e3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.45134edb-467a-47d4-b18a-34c34901bca0',
            internalName: 'SurfLoad – Pipeline Surface Loading Calculator',
            productVariants: [
              {
                _key: '894640d9ee01',
                name: 'Pipeline Surface Loading Calculator',
                pricingPlans: [
                  {
                    _key: 'd48c6e37dfe3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Get Access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.457282f8-279c-48ec-ac79-37050494bf5f',
            internalName: 'Ship implementation plan',
            productVariants: [
              {
                _key: 'ab4e81233cb6',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '03b57099caf8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.4a3fe9cd-95e0-4f1e-b1d5-32c31fd47ebc',
            internalName:
              'Automation Test Product with Invalid ServiceID (ApplyFor)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Apply-for',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.4e193833-e90d-4437-b91c-ad195be15d75',
            internalName: 'Camo Analytics',
            productVariants: [
              {
                _key: '8117e8d8182c',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.51309e7b-ca19-471a-aa3f-c4d8ea37f6dc',
            internalName: 'Assets Monitoring from Space',
            productVariants: [
              {
                _key: 'cbe337319526',
                name: "MVP configuration - DON'T TOUCH",
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.5426c958-5c1b-4ea7-ac10-f2b873b82564',
            internalName: 'Renewables GeoPlatform',
            productVariants: [
              {
                _key: '780f049d0016',
                name: 'Renewables GeoPlatform',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.5627d67c-5e94-4bd5-b156-6199dd7f4ce3',
            internalName: 'Spottitt Environment',
            productVariants: [
              {
                _key: '77b8c96375e6',
                name: 'Spottitt Environment',
                pricingPlans: [
                  {
                    _key: '064ea1642bd3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Use your credit card to pay for what you use when you use it.',
                    name: ' Pay as you go',
                  },
                  {
                    _key: 'c9a00a6c7d61',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Bronze allows you to purchase the imagery and analyses necessary for for up to 3000 square km of analysis.',
                    name: 'Bronze',
                  },
                  {
                    _key: '82438fdc4d0d',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Silver rewards you with 20% more analysis credits and 5% more data credits to make your investment go even further.',
                    name: 'Silver',
                  },
                  {
                    _key: 'e84de603dc83',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Gold rewards you with 45% more analysis credits and 10% more data credits than Bronze. Focus on your work knowing that you are getting the best price on the market.',
                    name: 'Gold',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.57313834-0c77-4175-9324-2e133c301c95',
            internalName: 'Analytic Innovation Centre – Analytic Services',
            productVariants: [
              {
                _key: '07cd79b6b326',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: null,
              },
              {
                _key: 'dd752e42-b096-4ebb-b55e-0efcdb2763b7',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: [],
              },
            ],
          },
          {
            _id: 'drafts.579b18a7-fb63-442c-849c-307bb301023c',
            internalName: 'CUI Manager',
            productVariants: [
              {
                _key: 'a20b222ed830',
                name: 'CUI Manager',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.5881dad9-2201-4893-ade8-0bd5f92bdde4',
            internalName: 'Product with no T&C',
            productVariants: [
              {
                _key: 'cb818f192496',
                name: null,
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.5f7ea54c-072c-4e67-a12c-f53d080378c1',
            internalName: 'Energy Laboratory Services Portal',
            productVariants: [
              {
                _key: '5fb02aa5a83e',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '18991299fadd',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.6003e7d5-e744-4c43-875d-702b2a276765',
            internalName: 'Ballast Water Management Plan (BWMP) Generator',
            productVariants: [
              {
                _key: 'f9de8c5bb839',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '5a53d8d0a8b6',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.600b1274-6cbf-4e5a-b1ae-335765f7907c',
            internalName: 'Container certification',
            productVariants: [
              {
                _key: '52cc2d24de5b',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '989573de7d1c',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.6120e6eb-6ccf-48d8-a03c-46f41817c459',
            internalName: 'Hybrid Sensor Technology',
            productVariants: [],
          },
          {
            _id: 'drafts.6222d082-ca65-44ea-8e78-ec4091aed0ae',
            internalName: 'IGS – IHM Green Server',
            productVariants: [
              {
                _key: 'df2f106e078c',
                name: 'IGS – IHM Green Server',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.62c39ca2-ec3b-4a24-a843-2081beb9914f',
            internalName: 'Automation Red Product(Free)',
            productVariants: [
              {
                _key: 'cdcea0dd5559',
                name: 'FREE Variant',
                pricingPlans: [
                  {
                    _key: '253bfc5f6d61',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FREE as in FREE BEER',
                  },
                ],
              },
              {
                _key: '2ef9d4e3-6ef8-4589-9fe2-9d8dbb3bbff3',
                name: "MVP configuration - DON'T TOUCH",
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.62dfab8e-fb66-4f8c-9bf8-bb531b88e3e7',
            internalName: null,
            productVariants: null,
          },
          {
            _id: 'drafts.6340f437-a3d6-4ae6-996e-b33f75bcf647',
            internalName:
              'Automation Test Product 4 (NewPurchase) for Invoice Vetting',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [],
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '9b61182c0698',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_3users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'FullProv-Pending_Interim-Active',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '24ec42cac201',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_Unlimited',
                  },
                ],
              },
              {
                _key: '363269d86606',
                name: 'FullProv-None_Interim-Pending',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'f11221981c24',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3Users',
                  },
                ],
              },
              {
                _key: 'b1f67161b29a',
                name: 'NoProv',
                pricingPlans: [
                  {
                    _key: '8dae844aafdb',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'eb9fdffbaae1',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_2users',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.6bcf33fd-9175-4971-97ff-a10606a08cc7',
            internalName: 'Cisco Kinetic',
            productVariants: [
              {
                _key: 'e558408e15cb',
                name: 'Cisco Kinetic',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.773d05c6-118f-4566-a1cf-43947007e379',
            internalName: 'Arundo Maritime Suite powered by test',
            productVariants: [
              {
                _key: '642978722b94',
                name: 'Arundo Maritime Suite powered by test',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.77c39923-94a1-4966-9134-7cb398183eff',
            internalName: 'AGR Software',
            productVariants: [
              {
                _key: '8c57a04b8511',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: [],
              },
              {
                _key: 'f1686438-4e1f-484a-aed9-14f34d03d701',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '9ac36f2ce232',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.798db96f-7c17-4b3d-bf02-7142b2db6e49',
            internalName: 'Test Product with Additional Fields',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout No Custom Section',
                  },
                  {
                    _key: 'c6cd12ab49e8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout With Custom Section',
                  },
                ],
              },
              {
                _key: 'fd56398a3b79',
                name: 'Purchase',
                pricingPlans: [
                  {
                    _key: '021aa15e722f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout No Custom Section',
                  },
                  {
                    _key: '5c31437da8d8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase Checkout With Custom Section',
                  },
                  {
                    _key: '29ca5223bae3',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Purchase checkout with additional fields - 7 days trial',
                  },
                ],
              },
              {
                _key: '1b951a90017f',
                name: 'purchase need approval with additional fields',
                pricingPlans: [
                  {
                    _key: 'db4764c5432c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'purchase need approval with additional fields',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.7bf29dd6-6fe4-442f-9d2b-310aa8bebfb1',
            internalName: 'Data Usage Risk Assessment',
            productVariants: [
              {
                _key: '5c6a47875a11',
                name: 'Data Usage Risk Assessment',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.7ee9c132-7817-4a2e-99a5-13f88436c46d',
            internalName: 'Eason Practice Process3',
            productVariants: [
              {
                _key: '232451eac1f1',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '8e4a0e16a33d',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free to access',
                  },
                ],
              },
              {
                _key: '57e82d9941da',
                name: 'Self-subscription apply-for',
                pricingPlans: [
                  {
                    _key: 'f7977fccd5e4',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.830c08d7-ec26-4999-bff2-36279f8465cb',
            internalName: 'HACyberLogix',
            productVariants: [
              {
                _key: '43e4b4cb5b86',
                name: 'HACyberLogix',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.83b4f407-0f4d-4ebc-a9b0-ee7bfda85bcd',
            internalName: 'Phast 3D explosions (short-term access)',
            productVariants: [
              {
                _key: '37c0bd897f04',
                name: 'Rental 1 day',
                pricingPlans: [
                  {
                    _key: 'cb020f9c9d55',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase. This is an add-on module and requires an active version of Phast 7.0 or newer.',
                    name: 'Phast 3D-explosions - 1 day access',
                  },
                ],
              },
              {
                _key: '57e31fe4f807',
                name: 'Rental 1 week',
                pricingPlans: [
                  {
                    _key: '2730b3714f7e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase. This is an add-on module and requires an active version of Phast 7.0 or newer.',
                    name: 'Phast 3D-explosions - 7 days access',
                  },
                ],
              },
              {
                _key: 'a90e8b73503e',
                name: 'Rental 1 Month',
                pricingPlans: [
                  {
                    _key: 'd67f3f96ed0a',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license is activated and sent immediately after purchase. This is an add-on module and requires an active version of Phast 7.0 or newer.',
                    name: 'Phast 3D-explosions - 30 days access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.871abc23-acbb-46c5-b355-7899632880f0',
            internalName: 'Automation Test Product with Invalid Dataset (Free)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Free data set',
                pricingPlans: [
                  {
                    _key: 'fdbc6aa54d9b',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'freedatset',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.873a1335-0b88-4165-adbd-0a33817602ec',
            internalName: 'Practise Test',
            productVariants: null,
          },
          {
            _id: 'drafts.87dba861-bbe6-46f0-84c2-c2621d07bca0',
            internalName: 'test Deep Search',
            productVariants: [
              {
                _key: 'a9cb0af02ff9',
                name: 'test Deep Search',
                pricingPlans: [
                  {
                    _key: '87ceeeaf9c27',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free plan A',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.8a614b16-3b46-4caa-bd9a-6e0281bebc52',
            internalName: 'Phast Web Services',
            productVariants: null,
          },
          {
            _id: 'drafts.8e00e1ad-a53c-43f0-bc5d-225b9d3705cc',
            internalName:
              'EU Energy Efficiency Directive Article 8 compliance plan',
            productVariants: [
              {
                _key: 'e38ffda6eb65',
                name: 'EU Energy Efficiency Directive Article 8 compliance plan',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.8eb3e74c-c771-4a33-b3a6-5c547aae11bf',
            internalName: 'Test Product For debug',
            productVariants: [
              {
                _key: '363269d86606',
                name: 'Eas_FullProv_None',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_Single',
                  },
                  {
                    _key: 'b37108b6dfae',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_3Users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'Eas_FullProv_Pending',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                ],
              },
              {
                _key: '413878139a67',
                name: 'Eas_FullProv_Active',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'onetime_single',
                  },
                ],
              },
              {
                _key: 'b9901a876842',
                name: 'BranTest',
                pricingPlans: [
                  {
                    _key: '7492cf526fbd',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeExtra',
                  },
                  {
                    _key: '8f2efcbeae20',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'one time payment',
                    name: 'Test_OneTime',
                  },
                  {
                    _key: 'e9818d35a67b',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'This is a test product for recurring payment',
                    name: 'Bran_Recurring',
                  },
                ],
              },
              {
                _key: '350d1cb8c30a',
                name: 'Test_Recurring',
                pricingPlans: [
                  {
                    _key: 'a2cbcf3dac45',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test description',
                    name: 'Recurring plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.9ae876c6-3a96-459e-acab-8b13e5e76856',
            internalName: 'Test Product For debug new currency',
            productVariants: [
              {
                _key: '350d1cb8c30a',
                name: 'Test_Recurring',
                pricingPlans: [
                  {
                    _key: 'a2cbcf3dac45',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test description',
                    name: 'Recurring plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.TUcXu4emx4zcR0tVxrXA8t',
            internalName: 'Automation Test Product 1 (Process 3)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.a4388766-4657-437a-9a96-454899851b8c',
            internalName: 'Tidetech Metocean Data',
            productVariants: [
              {
                _key: 'deeb3bdea500',
                name: 'Tidetech Metocean Data',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.a5f62fa1-447a-4049-899e-43eadc093989',
            internalName: 'EVOLVE Digital Suite',
            productVariants: null,
          },
          {
            _id: 'drafts.aa48b17c-8e32-479a-b915-dc16ef02ab98',
            internalName: 'EEDI Calculator',
            productVariants: [
              {
                _key: 'ef5f92726ab0',
                name: 'EEDI Calculator',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.adcc4f1d-faaa-4bcb-87b0-bdf7ae0869a6',
            internalName: 'Eason Practice Process4',
            productVariants: [
              {
                _key: '447920529728',
                name: 'AF',
                pricingPlans: [
                  {
                    _key: '0de58a34dbd2',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeOnly',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.af8ecee7-4582-4bc0-b563-a10278d67737',
            internalName: 'Safeti Compute',
            productVariants: [
              {
                _key: 'fefa70e09c6d',
                name: 'Safeti Compute',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.b3b6b81b-71e2-4bd4-a5f9-8e2513bb207c',
            internalName: 'test Adapter for Power BI (VAP)',
            productVariants: [
              {
                _key: '14eb0f3845cd',
                name: 'test Adapter for Power BI (VAP)',
                pricingPlans: [
                  {
                    _key: 'e68b6fe6b392',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'test',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.b463cd6d-a451-4b59-a2a0-8072d4a7ba89',
            internalName: 'Arundo Analytics',
            productVariants: [
              {
                _key: '9179a4c82add',
                name: 'Arundo Analytics',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.b53f887b-2595-47fe-b1d0-187cac79c371',
            internalName: 'ExplEnergy',
            productVariants: [
              {
                _key: 'd859eb0e6ec5',
                name: 'Free Beta access ',
                pricingPlans: [
                  {
                    _key: '3c1292b65fff',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Beta access',
                  },
                ],
              },
              {
                _key: '307d0d425dc0',
                name: 'Full version',
                pricingPlans: [
                  {
                    _key: '543475505a18',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Full version',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.b64108d0-e0a9-4a62-a8b2-eebb3e9313f3',
            internalName: 'Thomas Testing Prices',
            productVariants: [
              {
                _key: '6140c280c460',
                name: 'Model A',
                pricingPlans: [
                  {
                    _key: '414586b06928',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '2b74714cd3fc',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'If you want to support us',
                    name: 'Paid',
                  },
                ],
              },
              {
                _key: '88dafd556ec8',
                name: 'Model B',
                pricingPlans: [
                  {
                    _key: 'b7d4ca4c11de',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recurrrr',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.b78c386f-34f6-43ea-b1b9-207507379318',
            internalName: 'Energy Transition Outlook',
            productVariants: [
              {
                _key: '81429cdea901',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '5829c63aa470',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.b9511d2f-ba49-41a1-b438-bd6fa022bc2b',
            internalName: 'GPM Horizon',
            productVariants: [
              {
                _key: '3e78fea52b4c',
                name: 'GPM Horizon',
                pricingPlans: [
                  {
                    _key: '29afd3ed8e1c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'afadfadf',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.bb826de9-6493-4ab7-a835-e43b0bff4d3a',
            internalName: 'DP Capability Assessment',
            productVariants: [
              {
                _key: '60ea4325dbdb',
                name: 'Basic',
                pricingPlans: [
                  {
                    _key: '1950b3556133',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Basic',
                  },
                ],
              },
              {
                _key: '2f8f406d904d',
                name: 'Basic Consultant',
                pricingPlans: [
                  {
                    _key: 'b092a5864f84',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs for one week. Access to level 1 Basic Consultant features.',
                    name: 'Basic Consultant - 1 week',
                  },
                  {
                    _key: 'd01e0c552963',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs. Access to level 1 Basic Consultant features. 2 hours of support per year included. ',
                    name: 'Basic Consultant - 1 year',
                  },
                ],
              },
              {
                _key: 'ab6fdef093b8',
                name: 'Premium',
                pricingPlans: [
                  {
                    _key: '163555e2397f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs for one week. Access to Premium features.',
                    name: 'Premium unlimited - 1 week',
                  },
                  {
                    _key: 'd0b1c3f945e2',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited runs. Access to Premium features. 4 hours of support per year included.',
                    name: 'Premium unlimited - 1 year',
                  },
                  {
                    _key: 'b4436c89cea9',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Access to Premium features. 400 calculation headings included. 4 hours of support per year included.',
                    name: 'Premium pay-per-run - 1 year',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.bd1305a7-ebe9-4fda-a550-ff0639fe0dbd',
            internalName: 'DATE for CMC',
            productVariants: [
              {
                _key: '88914540a3af',
                name: 'Subscription',
                pricingPlans: [
                  {
                    _key: 'e38753b0eb51',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      '1 - 3 users that can post questions. Try it out - 3 months free trial',
                    name: 'Subscription',
                  },
                  {
                    _key: 'ec0f683415fe',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      '4 - 10 users that can post questions. Try it out - 3 months free trial',
                    name: 'Subscription',
                  },
                  {
                    _key: '621d20ef3700',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Unlimited users can post questions. Try it out - 3 months free trial',
                    name: 'Subscription',
                  },
                ],
              },
              {
                _key: '5ec51bc2ac97',
                name: 'On demand',
                pricingPlans: [
                  {
                    _key: '583717c9ab07',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'Pay per question',
                    name: 'On demand',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.bd770229-a6f4-4fe7-a000-069b3acf31d2',
            internalName: 'Automation Test Product Require Company Id',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: 'c6cd12ab49e8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free Checkout',
                  },
                ],
              },
              {
                _key: 'fd56398a3b79',
                name: 'Purchase',
                pricingPlans: [
                  {
                    _key: '021aa15e722f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime Require Account Id',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.be8333ea-7ab6-49d7-9188-2fc7b4a953e7',
            internalName: 'Resource Panorama',
            productVariants: [
              {
                _key: '4182f046ccbe',
                name: 'Resource Panorama',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.bea0c0c7-cb1d-4909-830c-8152fa1e4df1',
            internalName: 'Automation Test Product with Multi Currency',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'Basic Multi Currency',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Currency display',
                  },
                ],
              },
              {
                _key: 'ec39cd0dfa2c',
                name: 'Test for Threshold',
                pricingPlans: [
                  {
                    _key: 'cd081b9f6df0',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Less 5',
                  },
                  {
                    _key: '22dbdcdaf8e5',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Equal 5',
                  },
                  {
                    _key: '5f3e40df5adc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Less 10',
                  },
                  {
                    _key: '895ef0d51c1c',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Equal 10',
                  },
                  {
                    _key: '2d9bed55d207',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Greater 10',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.c2464add-e3e9-4baa-bb85-8094455e313e',
            internalName:
              'Test product of pending request for Engineering team',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'apply-for',
                pricingPlans: [
                  {
                    _key: '11d4e0951964',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.c35b53a3-c785-4848-8510-cf5605a2ac55',
            internalName: 'Spottitt Energy',
            productVariants: [
              {
                _key: '8a7461447c40',
                name: 'Spottitt Energy',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.c89bf8fe-db4d-4a1e-b750-873e15f7d27a',
            internalName: 'Energy Transition Outlook (ETO) Premium',
            productVariants: [
              {
                _key: '8516f8d30b87',
                name: 'ETO Premium',
                pricingPlans: [
                  {
                    _key: '8e590891ca6f',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The subscription gives access to ETO 2019 premium analytics services from the date of purchase.',
                    name: 'ETO Premium purchase plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.c99e55e1-6752-449e-b4cb-36a04e6a0f2c',
            internalName: 'Resource Compass',
            productVariants: [
              {
                _key: '6f3ea2553252',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: 'ed1d1709945e',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.c9f7abb3-70be-4893-a77d-a08afcc3205c',
            internalName:
              'Automation Test Product with Invalid ServiceID (Free)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.cdb50584-b590-46e1-a271-c48636452f4a',
            internalName: 'Automation Test Product 5 (Purchase data set)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'One Dataset',
                pricingPlans: [
                  {
                    _key: '710a74e22efb',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '4b8cc26a3438',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_3users',
                  },
                ],
              },
              {
                _key: 'ff1dd4ac7aac',
                name: 'Two Datasets',
                pricingPlans: [
                  {
                    _key: '5dfe5bd37987',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'ca19793590ee',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3users',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.cfdf9ba1-ee8b-4ee4-96ee-4ed99a923269',
            internalName: 'Test Product For debug',
            productVariants: [
              {
                _key: '363269d86606',
                name: 'Eas_FullProv_None',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_Single',
                  },
                  {
                    _key: 'b37108b6dfae',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'OneTime_3Users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'Eas_FullProv_Pending',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                ],
              },
              {
                _key: '413878139a67',
                name: 'Eas_FullProv_Active',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'onetime_single',
                  },
                ],
              },
              {
                _key: 'b9901a876842',
                name: 'BranTest',
                pricingPlans: [
                  {
                    _key: '7492cf526fbd',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeExtra',
                  },
                  {
                    _key: '8f2efcbeae20',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'one time payment',
                    name: 'Test_OneTime',
                  },
                  {
                    _key: 'e9818d35a67b',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'This is a test product for recurring payment',
                    name: 'Bran_Recurring',
                  },
                ],
              },
              {
                _key: '350d1cb8c30a',
                name: 'Test_Recurring',
                pricingPlans: [
                  {
                    _key: 'a2cbcf3dac45',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test description',
                    name: 'Recurring plan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.d5d618d6-7672-4450-8c72-3e4525acc3d6',
            internalName: 'Meteomatics',
            productVariants: [
              {
                _key: '60eb3f668f9c',
                name: null,
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.d6f423c6-1f80-4680-9759-31385a6538e6',
            internalName: 'ECO Insight',
            productVariants: [
              {
                _key: '2ffe82e2fa70',
                name: 'ECO Insight',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.d78709b3-8a72-4840-a1b8-bc40f7de609f',
            internalName: 'Test Product 4(Add-on)',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '76b76ad13b17',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: '6ed3696ceb46',
                        _type: 'freeAddOnPlan',
                        description: 'Free add-on',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon1',
                        },
                        name: 'FreeAddon1',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: '1cdd89747f4a',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'unlimited',
                        accessDuration2: {
                          _ref: 'duration-unlimited',
                          _type: 'reference',
                        },
                        description: 'This is one-time payment addon',
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon1',
                        },
                        name: 'OneTimeAddon1',
                        prices: [
                          {
                            _key: 'd00599c50d79',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fc19b6e11a7f',
                            _type: 'price',
                            amount: 60,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 99999,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl:
                          'https://storetest.test.com/automation-test-product-4-add-on',
                        salesforceProduct: 'APITEST-onetime-addon1',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: 'This is a free plan',
                    name: 'FreeBase',
                  },
                  {
                    _key: '33f932aad5e8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'bbec5c4a8767',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon2',
                        },
                        name: 'FreeAddon2',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu.com',
                      },
                      {
                        _key: '3ffb7336f295',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon2',
                        },
                        name: 'OneTimeAddon2 This is very long sentence has two lines This is very long sentence has two lines',
                        prices: [
                          {
                            _key: '0ac92beb6994',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '2a065a7ef7ed',
                            _type: 'price',
                            amount: 66,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu2.com',
                        salesforceProduct: 'APITEST-onetime-addon2',
                        slaDuration: 'day',
                        slaDuration2: {
                          _ref: 'duration-day',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '311ba5ae93e6',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'quarter',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon2',
                        },
                        name: 'RecAddon2 This is very long sentence has two lines This is very long sentence has two lines',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'd6c4f9fa2b97',
                            _type: 'price',
                            amount: 12,
                            currency: 'EUR',
                          },
                          {
                            _key: '1f6ef339cedc',
                            _type: 'price',
                            amount: 34,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 99999,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon2',
                      },
                      {
                        _key: 'd38ace6f56ad',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon2',
                        },
                        name: 'MetAddon2 This is very long sentence has two lines This is very long sentence has two lines',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: 'ec26523ef5e4',
                            _type: 'price',
                            amount: 22,
                            currency: 'EUR',
                          },
                          {
                            _key: '11108ade1f3d',
                            _type: 'price',
                            amount: 87,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://www.baidu3.com',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon2',
                      },
                    ],
                    description: 'This is one-time base plan',
                    name: "OneTimeBase I'd like to extend the name of this one-time purchase plan to make it fit for testing",
                  },
                  {
                    _key: 'a7dd288d4d4e',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: '6a56e4a15498',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeeaddon3',
                        },
                        name: 'FreeeAddon3',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'd1ae3d7f71e6',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'month',
                        accessDuration2: {
                          _ref: 'duration-month',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon3',
                        },
                        name: 'OneTimeAddon3',
                        prices: [
                          {
                            _key: '73bacd3f9d6a',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '611eefb585ff',
                            _type: 'price',
                            amount: 68,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon3',
                        slaDuration: '30-days',
                        slaDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'b4ac17d943d1',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon3',
                        },
                        name: 'RecAddon3',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '353f9c694384',
                            _type: 'price',
                            amount: 10,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eeb27c020c70',
                            _type: 'price',
                            amount: 81,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-rec-addon3',
                      },
                      {
                        _key: '8fdfb10796d2',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'half-year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon3',
                        },
                        name: 'MetAddon3 This is a quite long add on price plan name you know',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '509e672db264',
                            _type: 'price',
                            amount: 20,
                            currency: 'EUR',
                          },
                          {
                            _key: 'f37d9a6f0b8f',
                            _type: 'price',
                            amount: 222,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon3',
                      },
                    ],
                    description: 'This is recurring plan',
                    name: 'RecBase This is a quite long base price plan name you know that right',
                  },
                  {
                    _key: 'e16dcfe66e93',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'a646effafbcc',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon4',
                        },
                        name: 'FreeAddon4',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'ccbafc83bef3',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon4',
                        },
                        name: 'OneTimeAddon4',
                        prices: [
                          {
                            _key: '023fcbc34aa6',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '9ce976da0db5',
                            _type: 'price',
                            amount: 76,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon4',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '99eb2b1f6f2e',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4',
                        },
                        name: 'RecAddon4 extension price plan name is over 1 line is it enough',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ab21b35cbb88',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon4',
                        },
                        name: 'MetAddon4',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '101cf9e27e10',
                            _type: 'price',
                            amount: 33,
                            currency: 'EUR',
                          },
                          {
                            _key: '7e67e40ae8c4',
                            _type: 'price',
                            amount: 99,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon4',
                      },
                    ],
                    description: 'This is a metered base plan',
                    name: 'MeteredBase',
                  },
                ],
              },
              {
                _key: 'b25354be5fbd',
                name: 'a new variant for test copy from PA',
                pricingPlans: [
                  {
                    _key: '36e8dc870849',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'free one',
                  },
                  {
                    _key: '39eb5062-c12a-4f7d-8ed9-292ffab66066',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: [
                      {
                        _key: 'a646effafbcc',
                        _type: 'freeAddOnPlan',
                        key: {
                          _type: 'slug',
                          current: 'freeaddon4-copy',
                        },
                        name: 'FreeAddon4',
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                      },
                      {
                        _key: 'ccbafc83bef3',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '30-days',
                        accessDuration2: {
                          _ref: 'duration-30-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'onetime-addon4-copy',
                        },
                        name: 'OneTimeAddon4',
                        prices: [
                          {
                            _key: '023fcbc34aa6',
                            _type: 'price',
                            amount: 5,
                            currency: 'EUR',
                          },
                          {
                            _key: '9ce976da0db5',
                            _type: 'price',
                            amount: 76,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'APITEST-onetime-addon4',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-week',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '99eb2b1f6f2e',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4-copy',
                        },
                        name: 'RecAddon4 extension price plan name is over 1 line is it enough',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ad45cbe90a1f972404b59fdb73999131',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'month',
                        cancellationTermDays: 14,
                        invoiceAdvanceDays: 14,
                        key: {
                          _type: 'slug',
                          current: 'rec-addon4-copy-within-same-plan',
                        },
                        name: 'RecAddon4 extension price plan name is over 1 line is it enough-within-same-plan',
                        paymentTerms: '14 days',
                        prices: [
                          {
                            _key: '23a710b89929',
                            _type: 'price',
                            amount: 11,
                            currency: 'EUR',
                          },
                          {
                            _key: '8b9bf8db1418',
                            _type: 'price',
                            amount: 85,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 30,
                        salesforceProduct: 'APITEST-rec-addon4',
                      },
                      {
                        _key: 'ab21b35cbb88',
                        _type: 'subscriptionAddOnPlan',
                        billingInterval: 'year',
                        cancellationTermDays: 30,
                        invoiceAdvanceDays: 30,
                        key: {
                          _type: 'slug',
                          current: 'met-addon4-copy',
                        },
                        name: 'MetAddon4',
                        paymentTerms: '30 days',
                        prices: [
                          {
                            _key: '101cf9e27e10',
                            _type: 'price',
                            amount: 33,
                            currency: 'EUR',
                          },
                          {
                            _key: '7e67e40ae8c4',
                            _type: 'price',
                            amount: 99,
                            currency: 'NOK',
                          },
                        ],
                        quantity: 1,
                        quantityPolicy: 'fixed-quantity',
                        renewalNotificationDays: 60,
                        salesforceProduct: 'APITEST-met-addon4',
                      },
                    ],
                    description: 'This is a metered base plan',
                    name: 'MeteredBase',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.d7eab56c-1c3b-446b-9713-db9822ac3b71',
            internalName: 'Automation Test 11 Block Pricing Side by Side',
            productVariants: [
              {
                _key: '336b012a42db',
                name: 'Test 11 Block Pricing Side by Side Var1',
                pricingPlans: [
                  {
                    _key: '79363ff68222',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is plan 1',
                    name: 'Plan 1 One - time purchase',
                  },
                  {
                    _key: 'c8cf0ab5f4bc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'This is Plan 2',
                    name: 'Plan 2 Recurring sub',
                  },
                ],
              },
              {
                _key: '083706f9ebeb',
                name: 'Test 11 Block Pricing Side by Side Var2',
                pricingPlans: [
                  {
                    _key: '2737c107c9d3',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 3 One - time purchase',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.d8d48a03-fde7-460d-994c-8fe49f9428d9',
            internalName: 'Eason Practice',
            productVariants: [
              {
                _key: 'dbf64b44f0a0',
                name: 'FreeAccess',
                pricingPlans: [
                  {
                    _key: '96a09f9ab6b3',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'FreeAccess',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.dac03152-b174-475d-9bf9-0ef959603e1d',
            internalName: 'Temasys Skylink',
            productVariants: [
              {
                _key: '080f9e5ec55e',
                name: 'Temasys Skylink',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.e0635feb-1c39-4f76-aada-19b6022775d4',
            internalName: 'Alternative Fuels Insight platform (AFI)',
            productVariants: [
              {
                _key: '3e8fde6b86fb',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '9ac36f2ce232',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.e1965ffd-6b18-42fa-8d03-5f28fb36eb24',
            internalName: 'BranTestIssuePricingPlanMess',
            productVariants: [
              {
                _key: '2b781dcf-2f16-4c55-8d58-b45e33de46d1',
                name: 'Sesam for topside - 7 days',
                pricingPlans: [
                  {
                    _key: '5440c35bd986',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license can be activated at any time after purchase and is valid for one user only.',
                    name: '7 days - 1 user - Standalone',
                  },
                  {
                    _key: '1c8b68189491',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.',
                    name: '7 days - 1 user - Network license',
                  },
                  {
                    _key: '5b12415c05be',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.',
                    name: '7 days - 2 users - Network license',
                  },
                  {
                    _key: 'd945733bf8e7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.',
                    name: '7 days - 3 users - Network license',
                  },
                  {
                    _key: '5641a52bbf62',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Need more than 3 users?',
                  },
                ],
              },
              {
                _key: 'c14405dfbbfe60b62b6daa26399fd9fe',
                name: 'Sesam for topside - 30 days',
                pricingPlans: [
                  {
                    _key: '5440c35bd986',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license can be activated at any time after purchase and is valid for one user only.',
                    name: '30 days - 1 user - Standalone',
                  },
                  {
                    _key: '1c8b68189491',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.',
                    name: '30 days - 1 user - Network license',
                  },
                  {
                    _key: '5b12415c05be',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.',
                    name: '30 days - 2 users - Network license',
                  },
                  {
                    _key: 'd945733bf8e7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.',
                    name: '30 days - 3 users - Network license',
                  },
                  {
                    _key: '5641a52bbf62',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Need more than 3 users?',
                  },
                ],
              },
              {
                _key: '66ae985002c0161d56b10281ca42d6fa',
                name: 'Sesam for topside - 90 days',
                pricingPlans: [
                  {
                    _key: '5440c35bd986',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license can be activated at any time after purchase and is valid for one user only.',
                    name: '90 days - 1 user - Standalone',
                  },
                  {
                    _key: '1c8b68189491',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.',
                    name: '90 days - 1 user - Network license',
                  },
                  {
                    _key: '5b12415c05be',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.',
                    name: '90 days - 2 users - Network license',
                  },
                  {
                    _key: 'd945733bf8e7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.',
                    name: '90 days - 3 users - Network license',
                  },
                  {
                    _key: '5641a52bbf62',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Need more than 3 users?',
                  },
                ],
              },
              {
                _key: 'bf015c76a734',
                name: 'Need long term access?',
                pricingPlans: [
                  {
                    _key: '47331dd0513e',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description:
                      'Contact us to discuss your needs for long term access to Sesam for Topsides.',
                    name: 'Need long term access?',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.e83cdca2-3b7f-4315-94bf-2b63f73f4633',
            internalName: 'Thomas testing things',
            productVariants: [
              {
                _key: '5741c538cb08',
                name: 'Free',
                pricingPlans: [
                  {
                    _key: '292510f32ef4',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.e955d1ad-924e-4f6e-a707-a45811206320',
            internalName: 'Data management maturity self-assessment',
            productVariants: [
              {
                _key: '37b5f1dcee6c',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '3b077e96c006',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.ecbac74f-674b-4c36-bb0b-338f403da610',
            internalName: 'Data Quality Assessment',
            productVariants: [
              {
                _key: '78d5908f2577',
                name: 'Data Quality Assessment',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'drafts.f0e0e60f-e9d1-439e-8398-694efa1dc992',
            internalName: 'Free Product for Additional Fields2',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f1637367-7877-4df3-9575-a9f0a5afe25e',
            internalName:
              'Automation Test 11 Block Pricing - Single Column - Variant Group/Extension ',
            productVariants: [
              {
                _key: '700fea74b1dc',
                name: 'Test 11-3 Block Pricing Single Column Var1',
                pricingPlans: [
                  {
                    _key: 'f87301f29a0a',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'This is a free plan under Var1',
                    name: 'Plan 1 - Block pricing with Group - Free',
                  },
                  {
                    _key: '00db14a0761e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is a One time purchase plan under Var1',
                    name: 'Plan 2 - Block Pricing with Group - OneTime',
                  },
                ],
              },
              {
                _key: 'd4dd57ac0f21',
                name: 'Test 11-3 Block Pricing Single Column Var2',
                pricingPlans: [
                  {
                    _key: '1b8b5b814962',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is a One time purchase plan under Var2',
                    name: 'Plan 3 - Block Pricing with Group - OneTime',
                  },
                  {
                    _key: '048b8af3bf74',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: 'This is a Lead generation plan under Var2',
                    name: 'Plan 4 - Block Pricing with Group - Lead ',
                  },
                  {
                    _key: '50c00138ad5d',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'This is the Recurring subscription plan under Var2',
                    name: 'Plan 5 - Block Pricing with Group - OneTime',
                  },
                ],
              },
              {
                _key: '1201fad60fbe',
                name: 'Test 11-3 Block Pricing Single Column Var3',
                pricingPlans: [
                  {
                    _key: '5036b369a1db',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'This is a free plan under Var3',
                    name: 'Plan 6 - Block Pricing with Group - Free',
                  },
                  {
                    _key: 'ae0dfbdb99b8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'bf4169d1c975',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '90-days',
                        accessDuration2: {
                          _ref: 'duration-90-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'extension-1-for-plan-7',
                        },
                        name: 'Extension 1 for Plan 7',
                        prices: [
                          {
                            _key: '1275d39b8cab674d7b4f7a3aac4e733b',
                            _type: 'price',
                            amount: 300,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eae98c104c86',
                            _type: 'price',
                            amount: 337,
                            currency: 'USD',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: 'e8dfcbc87cd667d7f79604cd0f4a0838',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'e58292e435e1c3ae10837a5fb6eb43b1',
                                _type: 'price',
                                amount: 129,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                            salesforceProduct: 'extension1-5users',
                          },
                          {
                            _key: 'ec7ee10cca1c',
                            _type: 'quantityBlock',
                            name: '>5 users',
                            prices: [
                              {
                                _key: '90e3091ec24462d9304353c974ff47bb',
                                _type: 'price',
                                amount: 209,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 10,
                            salesforceProduct: 'extension1-6users',
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'extension-1-for-plan-7',
                        slaDuration: '90-days',
                        slaDuration2: {
                          _ref: 'duration-90-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '626c7fce311b',
                        _type: 'freeAddOnPlan',
                        description: 'Extension 2 ',
                        key: {
                          _type: 'slug',
                          current: 'extension-2-free-extension-for-plan-7',
                        },
                        name: 'Extension 2 - Free extension for plan 7',
                        quantity: 99,
                        quantityPolicy: 'fixed-quantity',
                      },
                    ],
                    description: 'This is a One time purchase plan under Var3',
                    name: 'Plan 7 - Block Pricing with Group - OneTime',
                  },
                ],
              },
              {
                _key: '194b048fd042',
                name: 'Test 11-3 Block Pricing Single Column Var4',
                pricingPlans: [
                  {
                    _key: '05035a270a1f',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 8 - Block Pricing - Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f30eff0a-ee9e-4f06-8526-81ca403183d8',
            internalName: 'Bran Test Quantity Varants changes',
            productVariants: [
              {
                _key: 'ded39b2d674b',
                name: 'Test 11-2 Block Pricing Single Column Var1',
                pricingPlans: [
                  {
                    _key: 'a88339a4df2e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '82eb1f56c98f',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'pinocchio-3d',
                        },
                        name: 'Pinocchio 3D',
                        prices: [
                          {
                            _key: '11b48f29a6ec6e1fdf51fa31e94ffe28',
                            _type: 'price',
                            amount: 15,
                            currency: 'EUR',
                          },
                          {
                            _key: 'a7fdddaafccf',
                            _type: 'price',
                            amount: 66,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: 'f817855accde4b1ccc57a20f8a5252ef',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'c98c2d244f45edf57bc36290eae53174',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: '33333',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'afd6ff49fde7',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-3-years',
                          _type: 'reference',
                        },
                        description: 'tt',
                        internalName: 'brantest',
                        key: {
                          _type: 'slug',
                          current: 'test',
                        },
                        name: 'test',
                        prices: [
                          {
                            _key: '0fedb17bd8c94960423b4c88f20282d9',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fa2db38614ae',
                            _type: 'price',
                            amount: 122,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 22,
                        quantityBlocks: [
                          {
                            _key: '02ba5c2c9072d0abe9fee29c35ed87df',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'e8b0d1be213118060bd405b85eace4fa',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'apitest-1',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-quarter',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '8e9ad8e8cec68d4046c9f43c522a163a',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-3-years',
                          _type: 'reference',
                        },
                        description: 'tt',
                        internalName: 'brantest2',
                        key: {
                          _type: 'slug',
                          current: 'test2',
                        },
                        name: 'test2',
                        prices: [
                          {
                            _key: '0fedb17bd8c94960423b4c88f20282d9',
                            _type: 'price',
                            amount: 102,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fa2db38614ae',
                            _type: 'price',
                            amount: 124,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 22,
                        quantityBlocks: [
                          {
                            _key: '02ba5c2c9072d0abe9fee29c35ed87df',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'e8b0d1be213118060bd405b85eace4fa',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'apitest-1',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-quarter',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: 'Plan 1 - Single Column - OneTime',
                  },
                  {
                    _key: 'ddc1e9c60cc8',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 2 - Single Column - Recurring',
                  },
                  {
                    _key: '143118b9a924',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '94d0cd6fdbbc',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'margherita-lenguage',
                        },
                        name: 'Margherita Lenguage',
                        prices: [
                          {
                            _key: '5c3afcfeb125afc9643dd29950a9d053',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: 'cfff00733c0e',
                            _type: 'price',
                            amount: 444,
                            currency: 'GBP',
                          },
                        ],
                        quantityBlocks: [
                          {
                            _key: 'cb69ec72537a45ab45b50d43569bc251',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '37e1fc5bc51d10356b869ad35bf3d91c',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'unlimited',
                        salesforceProduct: '43656356',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: 'cool',
                    name: 'plan - unlimited',
                  },
                  {
                    _key: '5040143732a5',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: null,
                  },
                ],
              },
              {
                _key: '884592c817ed',
                name: 'Test 11-2 Block Pricing Single Column Var2',
                pricingPlans: [
                  {
                    _key: '81f436a58746',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'This is a special short test description for plan 3',
                    name: 'Plan 3 - Single Column - OneTime 2',
                  },
                ],
              },
              {
                _key: 'b5689ca25fc251dd503300932c29c6a6',
                name: 'Test 11-2 Block Pricing Single Column Var3333',
                pricingPlans: [
                  {
                    _key: '81f436a58746',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'This is a special short test description for plan 3',
                    name: 'Plan 3 - Single Column - OneTime 3',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f4krrpk67EL142daIhmFVy',
            internalName: 'Automation Test Product 2 (Process 4)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'apply-for',
                pricingPlans: [
                  {
                    _key: '11d4e0951964',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f4krrpk67EL142daIhqU10',
            internalName: 'Automation Test Product 6 (Request only)',
            productVariants: [
              {
                _key: '7fa935e3b4e8',
                name: 'Variant1',
                pricingPlans: [
                  {
                    _key: '200a25115be5',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '5470d9c1385b',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Texts in CustomizeBtn_PricePlan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f513618f-138a-4287-8a0f-ebe1940da84e',
            internalName: 'EETA online',
            productVariants: [
              {
                _key: '58306021dea2',
                name: 'EETA Online licence',
                pricingPlans: [
                  {
                    _key: 'ca3853a4073f',
                    _type: 'trialPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free 3 day trial',
                  },
                  {
                    _key: 'a7fb5d3262ff',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Complete access for an unlimited amount of users',
                    name: 'Full license',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f5930783-a253-48de-bfd7-dd8a20222e6a',
            internalName:
              'RSCS+ Route specific container stowage route calculation',
            productVariants: [
              {
                _key: '08d8c42520f9',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: 'c2f0b5e50cc8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.f64c40ac-4a38-4ab8-8334-3251f0014a42',
            internalName: 'SDG Lens',
            productVariants: [
              {
                _key: '9e2b7b8a75fb',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '7501b4fcc366',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'drafts.fb88a59b-ffa0-4d7c-aed8-01c244869924',
            internalName: 'Digital free span assessments',
            productVariants: [
              {
                _key: '34ed972c8488',
                name: 'Digital free span assessments',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'e0635feb-1c39-4f76-aada-19b6022775d4',
            internalName: 'Alternative Fuels Insight platform (AFI)',
            productVariants: [
              {
                _key: 'aba87403-e6a1-4e00-9e7a-2b3e2c49825a',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: [],
              },
              {
                _key: 'fd7679e1-0f69-460c-8b3c-c15f15734d6d',
                name: "MVP config - DON'T TOUCH",
                pricingPlans: [],
              },
            ],
          },
          {
            _id: 'e118de9a-bec6-4ed5-9148-a1053c90aa32',
            internalName: 'Automation Test Product 4 (NewPurchase)',
            productVariants: [
              {
                _key: '413878139a67',
                name: 'FullProv-Active_Interim-None',
                pricingPlans: [
                  {
                    _key: '5054a1ce9b80',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '9b61182c0698',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_3users',
                  },
                ],
              },
              {
                _key: '84fffbd43e76',
                name: 'FullProv-Pending_Interim-Active',
                pricingPlans: [
                  {
                    _key: '36d38ad03c0c',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: '24ec42cac201',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Recur_Unlimited',
                  },
                ],
              },
              {
                _key: '363269d86606',
                name: 'FullProv-None_Interim-Pending',
                pricingPlans: [
                  {
                    _key: '480a1b8a5d16',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'f11221981c24',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Metered_3Users',
                  },
                ],
              },
              {
                _key: 'e1f085bc5115',
                name: 'NoProv',
                pricingPlans: [
                  {
                    _key: '6b695bfacb65',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_Single',
                  },
                  {
                    _key: 'e9cc171b1130',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Onetime_2users',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e1878296-d680-4b7b-8531-f665c5f42436',
            internalName: 'Pydome',
            productVariants: [
              {
                _key: '7ba7201702f5',
                name: 'PyDome',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'e18fede5-81b4-4643-9b00-59cb9c7c0089',
            internalName: 'Synnes test of multiple price models',
            productVariants: [
              {
                _key: '4a23d5ad9e86',
                name: 'Basic',
                pricingPlans: [
                  {
                    _key: 'c22c39bacf0b',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Basic - Free',
                  },
                ],
              },
              {
                _key: '979f01b187a7',
                name: 'Basic consultant',
                pricingPlans: [
                  {
                    _key: '8dc9b71ee2a7',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'Basic consultant',
                    name: 'Basic consultant',
                  },
                  {
                    _key: 'adf1e84bbed8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'One-time with SLA',
                  },
                ],
              },
              {
                _key: '10ea0e352694',
                name: 'Premium',
                pricingPlans: [
                  {
                    _key: '7eab67ede441',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Premium',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e1965ffd-6b18-42fa-8d03-5f28fb36eb24',
            internalName: 'BranTestIssuePricingPlanMess',
            productVariants: [
              {
                _key: '2b781dcf-2f16-4c55-8d58-b45e33de46d1',
                name: 'Sesam for topside - 7 days',
                pricingPlans: [
                  {
                    _key: '5440c35bd986',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license can be activated at any time after purchase and is valid for one user only.',
                    name: '7 days - 1 user - Standalone',
                  },
                  {
                    _key: '1c8b68189491',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.',
                    name: '7 days - 1 user - Network license',
                  },
                  {
                    _key: '5b12415c05be',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.',
                    name: '7 days - 2 users - Network license',
                  },
                  {
                    _key: 'd945733bf8e7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.',
                    name: '7 days - 3 users - Network license',
                  },
                  {
                    _key: '5641a52bbf62',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Need more than 3 users?',
                  },
                ],
              },
              {
                _key: 'c14405dfbbfe60b62b6daa26399fd9fe',
                name: 'Sesam for topside - 30 days',
                pricingPlans: [
                  {
                    _key: '5440c35bd986',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license can be activated at any time after purchase and is valid for one user only.',
                    name: '30 days - 1 user - Standalone',
                  },
                  {
                    _key: '1c8b68189491',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.',
                    name: '30 days - 1 user - Network license',
                  },
                  {
                    _key: '5b12415c05be',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.',
                    name: '30 days - 2 users - Network license',
                  },
                  {
                    _key: 'd945733bf8e7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.',
                    name: '30 days - 3 users - Network license',
                  },
                  {
                    _key: '5641a52bbf62',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Need more than 3 users?',
                  },
                ],
              },
              {
                _key: '66ae985002c0161d56b10281ca42d6fa',
                name: 'Sesam for topside - 90 days',
                pricingPlans: [
                  {
                    _key: '5440c35bd986',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'The license can be activated at any time after purchase and is valid for one user only.',
                    name: '90 days - 1 user - Standalone',
                  },
                  {
                    _key: '1c8b68189491',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 1 user within 1 working day of receiving the configuration.',
                    name: '90 days - 1 user - Network license',
                  },
                  {
                    _key: '5b12415c05be',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 2 users within 1 working day of receiving the configuration.',
                    name: '90 days - 2 users - Network license',
                  },
                  {
                    _key: 'd945733bf8e7',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'We will contact you to get your network server configuration and will issue the network license for 3 users within 1 working day of receiving the configuration.',
                    name: '90 days - 3 users - Network license',
                  },
                  {
                    _key: '5641a52bbf62',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Need more than 3 users?',
                  },
                ],
              },
              {
                _key: 'bf015c76a734',
                name: 'Need long term access?',
                pricingPlans: [
                  {
                    _key: '47331dd0513e',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description:
                      'Contact us to discuss your needs for long term access to Sesam for Topsides.',
                    name: 'Need long term access?',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e2250c96-2f81-43f5-beae-48db8a769738',
            internalName: 'Open Data - Ocean Space',
            productVariants: [
              {
                _key: 'b7e894f12025',
                name: 'Open Data - Ocean Space',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'e398a984-8729-428f-a65f-2beac6af17fe',
            internalName: 'Automation Test 11 Block Pricing Single Column',
            productVariants: [
              {
                _key: 'ded39b2d674b',
                name: 'Test 11-2 Block Pricing Single Column Var1',
                pricingPlans: [
                  {
                    _key: 'a88339a4df2e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '82eb1f56c98f',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        description:
                          'This is a 3D software plug in that will help you make good pinoccho drawings',
                        key: {
                          _type: 'slug',
                          current: 'pinocchio-3d',
                        },
                        name: 'Pinocchio 3D',
                        prices: [
                          {
                            _key: '11b48f29a6ec6e1fdf51fa31e94ffe28',
                            _type: 'price',
                            amount: 15,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 2,
                        quantityBlocks: [
                          {
                            _key: 'f817855accde4b1ccc57a20f8a5252ef',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'c98c2d244f45edf57bc36290eae53174',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        readmoreurl: 'https://en.wikipedia.org/wiki/Pinocchio',
                        salesforceProduct: '33333',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: 'Plan 1 - Single Column - OneTime',
                  },
                  {
                    _key: 'ddc1e9c60cc8',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 2 - Single Column - Recurring',
                  },
                ],
              },
              {
                _key: '884592c817ed',
                name: 'Test 11-2 Block Pricing Single Column Var2',
                pricingPlans: [
                  {
                    _key: '81f436a58746',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'This is a special short test description for plan 3',
                    name: 'Plan 3 - Single Column - OneTime 2',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e83cdca2-3b7f-4315-94bf-2b63f73f4633',
            internalName: 'Thomas testing things',
            productVariants: [
              {
                _key: '5741c538cb08',
                name: 'Free',
                pricingPlans: [
                  {
                    _key: '292510f32ef4',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e87bf419-26aa-418b-b19f-fb3c036e8f7c',
            internalName: 'Trying to crash marketplace with this product',
            productVariants: [
              {
                _key: 'a73d5fbe87ac',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '455cb25d620e',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      'Free access, but with limited functionalities.',
                    name: 'Free access',
                  },
                  {
                    _key: '6fa011f1d5437f079769a80db870f543',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description:
                      'Free access, but with limited functionalities.',
                    name: 'Free access',
                  },
                  {
                    _key: '59bfda02ff51',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Paid',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e955d1ad-924e-4f6e-a707-a45811206320',
            internalName: 'Data management maturity self-assessment',
            productVariants: [
              {
                _key: '37b5f1dcee6c',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '3b077e96c006',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'e973fb2b-1162-4f9f-8740-87747b9cd51f',
            internalName: 'Automation Test Jan 11 Block Pricing Single Column',
            productVariants: [
              {
                _key: 'ded39b2d674b',
                name: 'Test 11-2 Block Pricing Single Column Var1',
                pricingPlans: [
                  {
                    _key: 'a88339a4df2e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 1 - Single Column - OneTime',
                  },
                  {
                    _key: 'ddc1e9c60cc8',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 2 - Single Column - Recurring',
                  },
                ],
              },
              {
                _key: '884592c817ed',
                name: 'Test 11-2 Block Pricing Single Column Var2',
                pricingPlans: [
                  {
                    _key: '81f436a58746',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'This is a special short test description for plan 3',
                    name: 'Plan 3 - Single Column - OneTime 2',
                  },
                ],
              },
              {
                _key: '7bb2930bf3e6',
                name: 'Free version of this product',
                pricingPlans: [
                  {
                    _key: 'e6aa620572c8',
                    _type: 'freePlan',
                    addOnPricingPlans: [
                      {
                        _key: '9d2daea421a0',
                        _type: 'freeAddOnPlan',
                        description: 'One test for free',
                        internalName: 'MyFree Extention 1 internal name',
                        key: {
                          _type: 'slug',
                          current: 'free-test-1',
                        },
                        name: 'MyFree Extension 1',
                        quantity: 5,
                        quantityPolicy: 'unlimited',
                      },
                      {
                        _key: '2e9572dc45a3',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '90-days',
                        accessDuration2: {
                          _ref: 'duration-3-years',
                          _type: 'reference',
                        },
                        internalName: 'One Time Purshase ext',
                        key: {
                          _type: 'slug',
                          current: 'one-time-purshase-ext',
                        },
                        name: 'One Time Purshase ext',
                        prices: [
                          {
                            _key: 'b267cc3617f44b7e72d5415731626f5a',
                            _type: 'price',
                            amount: 50,
                            currency: 'EUR',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: '9c0973279ef1e5450fb356a2e0e799a7',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '7fb391bd96c5183b3adb01c44767ca6c',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'unlimited',
                        salesforceProduct: '123',
                        slaDuration: '30-days',
                      },
                    ],
                    description: null,
                    name: 'Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'ecbac74f-674b-4c36-bb0b-338f403da610',
            internalName: 'Data Quality Assessment',
            productVariants: [
              {
                _key: '78d5908f2577',
                name: 'Data Quality Assessment',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'f0e0e60f-e9d1-439e-8398-694efa1dc992',
            internalName: 'Free Product for Additional Fields2',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'Self-subscription',
                pricingPlans: [
                  {
                    _key: '1274ec40a033',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Self-subscription',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f1637367-7877-4df3-9575-a9f0a5afe25e',
            internalName:
              'Automation Test 11 Block Pricing - Single Column - Variant Group/Extension ',
            productVariants: [
              {
                _key: '700fea74b1dc',
                name: 'Test 11-3 Block Pricing Single Column Var1',
                pricingPlans: [
                  {
                    _key: 'f87301f29a0a',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'This is a free plan under Var1',
                    name: 'Plan 1 - Block pricing with Group - Free',
                  },
                  {
                    _key: '00db14a0761e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is a One time purchase plan under Var1',
                    name: 'Plan 2 - Block Pricing with Group - OneTime',
                  },
                ],
              },
              {
                _key: 'd4dd57ac0f21',
                name: 'Test 11-3 Block Pricing Single Column Var2',
                pricingPlans: [
                  {
                    _key: '1b8b5b814962',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'This is a One time purchase plan under Var2',
                    name: 'Plan 3 - Block Pricing with Group - OneTime',
                  },
                  {
                    _key: '048b8af3bf74',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: 'This is a Lead generation plan under Var2',
                    name: 'Plan 4 - Block Pricing with Group - Lead ',
                  },
                  {
                    _key: '50c00138ad5d',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'This is the Recurring subscription plan under Var2',
                    name: 'Plan 5 - Block Pricing with Group - OneTime',
                  },
                ],
              },
              {
                _key: '1201fad60fbe',
                name: 'Test 11-3 Block Pricing Single Column Var3',
                pricingPlans: [
                  {
                    _key: '5036b369a1db',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: 'This is a free plan under Var3',
                    name: 'Plan 6 - Block Pricing with Group - Free',
                  },
                  {
                    _key: 'ae0dfbdb99b8',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: 'bf4169d1c975',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: '90-days',
                        accessDuration2: {
                          _ref: 'duration-90-days',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'extension-1-for-plan-7',
                        },
                        name: 'Extension 1 for Plan 7',
                        prices: [
                          {
                            _key: '1275d39b8cab674d7b4f7a3aac4e733b',
                            _type: 'price',
                            amount: 300,
                            currency: 'EUR',
                          },
                          {
                            _key: 'eae98c104c86',
                            _type: 'price',
                            amount: 337,
                            currency: 'USD',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: 'e8dfcbc87cd667d7f79604cd0f4a0838',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'e58292e435e1c3ae10837a5fb6eb43b1',
                                _type: 'price',
                                amount: 129,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                            salesforceProduct: 'extension1-5users',
                          },
                          {
                            _key: 'ec7ee10cca1c',
                            _type: 'quantityBlock',
                            name: '>5 users',
                            prices: [
                              {
                                _key: '90e3091ec24462d9304353c974ff47bb',
                                _type: 'price',
                                amount: 209,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 10,
                            salesforceProduct: 'extension1-6users',
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'extension-1-for-plan-7',
                        slaDuration: '90-days',
                        slaDuration2: {
                          _ref: 'duration-90-days',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '626c7fce311b',
                        _type: 'freeAddOnPlan',
                        description: 'Extension 2 ',
                        key: {
                          _type: 'slug',
                          current: 'extension-2-free-extension-for-plan-7',
                        },
                        name: 'Extension 2 - Free extension for plan 7',
                        quantity: 99,
                        quantityPolicy: 'fixed-quantity',
                      },
                    ],
                    description: 'This is a One time purchase plan under Var3',
                    name: 'Plan 7 - Block Pricing with Group - OneTime',
                  },
                ],
              },
              {
                _key: '194b048fd042',
                name: 'Test 11-3 Block Pricing Single Column Var4',
                pricingPlans: [
                  {
                    _key: '05035a270a1f',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 8 - Block Pricing - Free',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f30eff0a-ee9e-4f06-8526-81ca403183d8',
            internalName: 'Bran Test Quantity Varants changes',
            productVariants: [
              {
                _key: 'ded39b2d674b',
                name: 'Test 11-2 Block Pricing Single Column Var1',
                pricingPlans: [
                  {
                    _key: 'a88339a4df2e',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '82eb1f56c98f',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'pinocchio-3d',
                        },
                        name: 'Pinocchio 3D',
                        prices: [
                          {
                            _key: '11b48f29a6ec6e1fdf51fa31e94ffe28',
                            _type: 'price',
                            amount: 15,
                            currency: 'EUR',
                          },
                          {
                            _key: 'a7fdddaafccf',
                            _type: 'price',
                            amount: 66,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 1,
                        quantityBlocks: [
                          {
                            _key: 'f817855accde4b1ccc57a20f8a5252ef',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'c98c2d244f45edf57bc36290eae53174',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: '33333',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: 'afd6ff49fde7',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-3-years',
                          _type: 'reference',
                        },
                        description: 'tt',
                        internalName: 'brantest',
                        key: {
                          _type: 'slug',
                          current: 'test',
                        },
                        name: 'test',
                        prices: [
                          {
                            _key: '0fedb17bd8c94960423b4c88f20282d9',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fa2db38614ae',
                            _type: 'price',
                            amount: 122,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 22,
                        quantityBlocks: [
                          {
                            _key: '02ba5c2c9072d0abe9fee29c35ed87df',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'e8b0d1be213118060bd405b85eace4fa',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'apitest-1',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-quarter',
                          _type: 'reference',
                        },
                      },
                      {
                        _key: '8e9ad8e8cec68d4046c9f43c522a163a',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'half-year',
                        accessDuration2: {
                          _ref: 'duration-3-years',
                          _type: 'reference',
                        },
                        description: 'tt',
                        internalName: 'brantest2',
                        key: {
                          _type: 'slug',
                          current: 'test2',
                        },
                        name: 'test2',
                        prices: [
                          {
                            _key: '0fedb17bd8c94960423b4c88f20282d9',
                            _type: 'price',
                            amount: 102,
                            currency: 'EUR',
                          },
                          {
                            _key: 'fa2db38614ae',
                            _type: 'price',
                            amount: 124,
                            currency: 'GBP',
                          },
                        ],
                        quantity: 22,
                        quantityBlocks: [
                          {
                            _key: '02ba5c2c9072d0abe9fee29c35ed87df',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: 'e8b0d1be213118060bd405b85eace4fa',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'fixed-quantity',
                        salesforceProduct: 'apitest-1',
                        slaDuration: 'week',
                        slaDuration2: {
                          _ref: 'duration-quarter',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: null,
                    name: 'Plan 1 - Single Column - OneTime',
                  },
                  {
                    _key: 'ddc1e9c60cc8',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Plan 2 - Single Column - Recurring',
                  },
                  {
                    _key: '143118b9a924',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: [
                      {
                        _key: '94d0cd6fdbbc',
                        _type: 'oneTimePurchaseAddOnPlan',
                        accessDuration: 'none',
                        accessDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                        key: {
                          _type: 'slug',
                          current: 'margherita-lenguage',
                        },
                        name: 'Margherita Lenguage',
                        prices: [
                          {
                            _key: '5c3afcfeb125afc9643dd29950a9d053',
                            _type: 'price',
                            amount: 100,
                            currency: 'EUR',
                          },
                          {
                            _key: 'cfff00733c0e',
                            _type: 'price',
                            amount: 444,
                            currency: 'GBP',
                          },
                        ],
                        quantityBlocks: [
                          {
                            _key: 'cb69ec72537a45ab45b50d43569bc251',
                            _type: 'quantityBlock',
                            name: '1-5 users',
                            prices: [
                              {
                                _key: '37e1fc5bc51d10356b869ad35bf3d91c',
                                _type: 'price',
                                amount: 100,
                                currency: 'EUR',
                              },
                            ],
                            quantity: 5,
                          },
                        ],
                        quantityPolicy: 'unlimited',
                        salesforceProduct: '43656356',
                        slaDuration: 'none',
                        slaDuration2: {
                          _ref: 'duration-none',
                          _type: 'reference',
                        },
                      },
                    ],
                    description: 'cool',
                    name: 'plan - unlimited',
                  },
                ],
              },
              {
                _key: '884592c817ed',
                name: 'Test 11-2 Block Pricing Single Column Var2',
                pricingPlans: [
                  {
                    _key: '81f436a58746',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'This is a special short test description for plan 3',
                    name: 'Plan 3 - Single Column - OneTime 2',
                  },
                ],
              },
              {
                _key: 'b5689ca25fc251dd503300932c29c6a6',
                name: 'Test 11-2 Block Pricing Single Column Var3333',
                pricingPlans: [
                  {
                    _key: '81f436a58746',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description:
                      'This is a special short test description for plan 3',
                    name: 'Plan 3 - Single Column - OneTime 3',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f3f6a07c-098c-450b-a0c7-9ed1e79b2d6a',
            internalName: 'MRV Monitoring Plan Generator',
            productVariants: [
              {
                _key: '5b859d3ac6c8',
                name: 'MRV Monitoring Plan Generator',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'f4krrpk67EL142daIhmFVy',
            internalName: 'Automation Test Product 2 (Process 4)',
            productVariants: [
              {
                _key: '1d931dfba355',
                name: 'apply-for',
                pricingPlans: [
                  {
                    _key: '11d4e0951964',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'apply-for',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f4krrpk67EL142daIhqU10',
            internalName: 'Automation Test Product 6 (Request only)',
            productVariants: [
              {
                _key: '7fa935e3b4e8',
                name: 'Variant1',
                pricingPlans: [
                  {
                    _key: '200a25115be5',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '5470d9c1385b',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Texts in CustomizeBtn_PricePlan',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f513618f-138a-4287-8a0f-ebe1940da84e',
            internalName: 'EETA online',
            productVariants: [
              {
                _key: '58306021dea2',
                name: 'EETA Online licence',
                pricingPlans: [
                  {
                    _key: 'ca3853a4073f',
                    _type: 'trialPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free 3 day trial',
                  },
                  {
                    _key: 'a7fb5d3262ff',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'Complete access for an unlimited amount of users',
                    name: 'Full license',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f541b113-b4ec-4d06-944f-d27e7b960f4a',
            internalName: 'Test product - Hannah test ',
            productVariants: [
              {
                _key: 'd6d6ad3a5701',
                name: 'Variant name 1',
                pricingPlans: [
                  {
                    _key: '48941e357650',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '5fa54b08b2ba',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'one-time plan 1',
                  },
                ],
              },
              {
                _key: '7efb35662964',
                name: 'Variant name 2',
                pricingPlans: [
                  {
                    _key: '8637fa2c0a38',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free',
                  },
                  {
                    _key: '83b844a463a4',
                    _type: 'leadGenPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Lead',
                  },
                ],
              },
              {
                _key: '644810fd228a',
                name: 'variant name 3',
                pricingPlans: [
                  {
                    _key: 'cfb72859a990',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'one time 3',
                  },
                ],
              },
              {
                _key: '3e7d61e2fb73',
                name: 'variant name 4',
                pricingPlans: [
                  {
                    _key: '26540348e6a5',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'recurring plan',
                  },
                  {
                    _key: '2645e4902001',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'one time 4',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f5930783-a253-48de-bfd7-dd8a20222e6a',
            internalName:
              'RSCS+ Route specific container stowage route calculation',
            productVariants: [
              {
                _key: '08d8c42520f9',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: 'c2f0b5e50cc8',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f64c40ac-4a38-4ab8-8334-3251f0014a42',
            internalName: 'SDG Lens',
            productVariants: [
              {
                _key: '9e2b7b8a75fb',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: '7501b4fcc366',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f7a5dceb-0a19-4fbd-aece-b50a0af47749',
            internalName: 'PSC Planner',
            productVariants: [
              {
                _key: '30cf401b28f5',
                name: 'Free Service',
                pricingPlans: [
                  {
                    _key: 'f70e49b4b57a',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
                  },
                ],
              },
            ],
          },
          {
            _id: 'f8f9b0da-c95b-4aa7-a233-9b01b9339a31',
            internalName: 'TEST',
            productVariants: [
              {
                _key: '79559549-1ef2-459f-98f4-6da148e65e45',
                name: 'Data Fabric Data Management',
                pricingPlans: [
                  {
                    _key: '0aec3cec1e70',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description:
                      'For large scale data storage and sharing.  A company account in test will be set up for you to manage. Invite users to collaborate on or manage data containers. *',
                    name: 'Data Management Plus',
                  },
                  {
                    _key: '9683483212f9',
                    _type: 'oneTimePurchasePlan',
                    addOnPricingPlans: null,
                    description: 'desc',
                    name: 'TestOneTime',
                  },
                  {
                    _key: '4d8e617eb0bc',
                    _type: 'subscriptionPlan',
                    addOnPricingPlans: null,
                    description: 'test',
                    name: 'TestRecurring',
                  },
                ],
              },
            ],
          },
          {
            _id: 'fb88a59b-ffa0-4d7c-aed8-01c244869924',
            internalName: 'Digital free span assessments',
            productVariants: [
              {
                _key: '34ed972c8488',
                name: 'Digital free span assessments',
                pricingPlans: null,
              },
            ],
          },
          {
            _id: 'fb948669-4018-4638-b3c4-92f38b06adfd',
            internalName: 'MyTVAS',
            productVariants: [
              {
                _key: '8b19c3f52d91',
                name: 'MyTVAS public list',
                pricingPlans: [],
              },
            ],
          },
          {
            _id: 'fcff75a2-aba4-4f63-a590-0c9d5655163c',
            internalName: 'Pre-Approval Screening Service',
            productVariants: [
              {
                _key: 'c331035241f7',
                name: 'Free access',
                pricingPlans: [
                  {
                    _key: 'af17188507e0',
                    _type: 'freePlan',
                    addOnPricingPlans: null,
                    description: null,
                    name: 'Free access',
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
