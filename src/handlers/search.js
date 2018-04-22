'use strict';

module.exports = {
  get_search: function(req, res) {
    // console.log(req.params.id);
    // var producerId = req.params.id;

    return res.json([
      {
        'id': 66,
        'name': 'Bacon',
        'description': 'Great stuff.',
        'image': 'bacon.jpg',
        'pricePerUnit': 12,
        'unit': 'kg',
        'unitsPer': 1,
        'category': 'Meat',
        'subcategory': 'Pork',
        'producer': {
          'id': 10156726911823276,
          'name': 'Gardenzia Farms',
          'location': 'Virden',
          'province': 'MB',
          'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'email': 'email@email.com',
          'logoUrl': 'farm-logo-3.jpg',
          'longitude': 444,
          'latitude': 555,
          'firstName': 'Devon',
          'registrationDate': '2017-12-20T14:17:36.255Z',
          'status': 'active',
          'productList': [
            66,
            67
          ],
          'scheduleList': [
            666,
            667
          ]
        },
        'dateAdded': '2017-12-20T14:17:36.255Z',
        'qtyAvailable': 23,
        'qtyPending': 1,
        'qtyAccepted': 0,
        'qtyCompleted': 2,
        'isObsolete': false,
        'scheduleList': [
          {
            'id': 666,
            'producerId': 10156726911823276,
            'productList': [
              66,
              67
            ],
            'type': 'Door-to-door Delivery',
            'description': 'A description.',
            'startDateTime': '2017-12-28T01:00:00.000Z',
            'endDateTime': '2017-12-28T02:00:00.000Z',
            'hasFee': true,
            'fee': 10,
            'feeWaiver': 25,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Moosomin',
            'address': '555 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-28T00:00:00.000Z'
          },
          {
            'id': 667,
            'producerId': 10156726911823276,
            'productList': [
              66,
              67
            ],
            'type': 'On-farm Pickup',
            'description': 'A long description.',
            'startDateTime': '2017-12-27T01:00:00.000Z',
            'endDateTime': '2017-12-27T02:00:00.000Z',
            'hasFee': false,
            'fee': null,
            'feeWaiver': null,
            'latitude': 50.2615563,
            'longitude': -104.9720143,
            'city': 'Timbuktu',
            'address': '',
            'province': 'ON',
            'orderDeadline': '2017-12-27T00:00:00.000Z'
          }
        ]
      },
      {
        'id': 67,
        'name': 'Ground Beef',
        'description': 'Great beefy stuff.',
        'image': 'ground-beef.jpg',
        'pricePerUnit': 4,
        'unit': 'lb',
        'unitsPer': 1,
        'category': 'Meat',
        'subcategory': 'Beef',
        'producer': {
          'id': 10156726911823276,
          'name': 'Gardenzia Farms',
          'location': 'Virden',
          'province': 'MB',
          'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'email': 'email@email.com',
          'logoUrl': 'farm-logo-3.jpg',
          'longitude': 444,
          'latitude': 555,
          'firstName': 'Devon',
          'registrationDate': '2017-12-20T14:17:36.255Z',
          'status': 'active',
          'productList': [
            66,
            67
          ],
          'scheduleList': [
            666,
            667
          ]
        },
        'dateAdded': '2017-12-20T14:17:36.255Z',
        'qtyAvailable': 34,
        'qtyPending': 0,
        'qtyAccepted': 45,
        'qtyCompleted': 0,
        'isObsolete': false,
        'scheduleList': [
          {
            'id': 666,
            'producerId': 10156726911823276,
            'productList': [
              66,
              67
            ],
            'type': 'Door-to-door Delivery',
            'description': 'A description.',
            'startDateTime': '2017-12-28T01:00:00.000Z',
            'endDateTime': '2017-12-28T02:00:00.000Z',
            'hasFee': true,
            'fee': 10,
            'feeWaiver': 25,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Moosomin',
            'address': '555 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-28T00:00:00.000Z'
          },
          {
            'id': 667,
            'producerId': 10156726911823276,
            'productList': [
              66,
              67
            ],
            'type': 'On-farm Pickup',
            'description': 'A long description.',
            'startDateTime': '2017-12-27T01:00:00.000Z',
            'endDateTime': '2017-12-27T02:00:00.000Z',
            'hasFee': false,
            'fee': null,
            'feeWaiver': null,
            'latitude': 50.2615563,
            'longitude': -104.9720143,
            'city': 'Timbuktu',
            'address': '',
            'province': 'ON',
            'orderDeadline': '2017-12-27T00:00:00.000Z'
          }
        ]
      },
      {
        'id': 43,
        'name': 'Carrots',
        'description': 'Orange, cylindrical, delicious.',
        'image': 'carrots.jpg',
        'pricePerUnit': 4,
        'unit': 'lb',
        'unitsPer': 1,
        'category': 'Produce',
        'subcategory': 'Carrots',
        'producer': {
          'id': 13,
          'name': 'Gardenia Farms',
          'location': 'Virden',
          'province': 'MB',
          'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'email': 'email@email.com',
          'logoUrl': 'farm-logo-1.jpg',
          'longitude': 444,
          'latitude': 555,
          'firstName': 'Devon',
          'registrationDate': '2017-12-02T01:00:00.000Z',
          'status': 'active',
          'productList': [
            43,
            95
          ],
          'scheduleList': [
            444,
            445,
            789
          ]
        },
        'dateAdded': '2017-12-02T01:00:00.000Z',
        'qtyAvailable': 55,
        'qtyPending': 12,
        'qtyAccepted': 22,
        'qtyCompleted': 345,
        'isObsolete': false,
        'scheduleList': [
          {
            'id': 444,
            'producerId': 13,
            'productList': [
              43,
              95
            ],
            'type': 'Door-to-door Delivery',
            'description': 'We\'re gonna charge you this time.',
            'startDateTime': '2017-12-02T01:00:00.000Z',
            'endDateTime': '2017-12-02T02:00:00.000Z',
            'hasFee': true,
            'fee': 5,
            'feeWaiver': 35,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Wapella',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-02T00:00:00.000Z'
          },
          {
            'id': 445,
            'producerId': 13,
            'productList': [
              43
            ],
            'type': 'Door-to-door Delivery',
            'description': 'We\'re gonna charge you this time.',
            'startDateTime': '2017-12-03T00:00:00.000Z',
            'endDateTime': '2017-12-03T03:30:00.000Z',
            'hasFee': true,
            'fee': 5,
            'feeWaiver': 35,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Wapella',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-02T00:00:00.000Z'
          },
          {
            'id': 789,
            'producerId': 13,
            'productList': [
              43,
              95
            ],
            'type': 'Door-to-door Delivery',
            'description': 'Delivering to you for no charge.',
            'startDateTime': '2017-12-01T00:00:00.000Z',
            'endDateTime': '2017-12-01T02:00:00.000Z',
            'hasFee': false,
            'fee': null,
            'feeWaiver': null,
            'latitude': 50.1437782,
            'longitude': -101.6671873,
            'city': 'Moosomin',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-01T00:00:00.000Z'
          }
        ]
      },
      {
        'id': 95,
        'name': 'Potatoes - 3lb bag',
        'description': 'Red, roundish, delicious.',
        'image': 'potatoes2.jpg',
        'pricePerUnit': 4,
        'unit': 'lb',
        'unitsPer': 3,
        'category': 'Produce',
        'subcategory': 'Potatoes',
        'producer': {
          'id': 13,
          'name': 'Gardenia Farms',
          'location': 'Virden',
          'province': 'MB',
          'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'email': 'email@email.com',
          'logoUrl': 'farm-logo-1.jpg',
          'longitude': 444,
          'latitude': 555,
          'firstName': 'Devon',
          'registrationDate': '2017-12-02T01:00:00.000Z',
          'status': 'active',
          'productList': [
            43,
            95
          ],
          'scheduleList': [
            444,
            445,
            789
          ]
        },
        'dateAdded': '2017-12-02T01:00:00.000Z',
        'qtyAvailable': 324,
        'qtyPending': 12,
        'qtyAccepted': 22,
        'qtyCompleted': 345,
        'isObsolete': false,
        'scheduleList': [
          {
            'id': 444,
            'producerId': 13,
            'productList': [
              43,
              95
            ],
            'type': 'Door-to-door Delivery',
            'description': 'We\'re gonna charge you this time.',
            'startDateTime': '2017-12-02T01:00:00.000Z',
            'endDateTime': '2017-12-02T02:00:00.000Z',
            'hasFee': true,
            'fee': 5,
            'feeWaiver': 35,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Wapella',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-02T00:00:00.000Z'
          },
          {
            'id': 445,
            'producerId': 13,
            'productList': [
              43
            ],
            'type': 'Door-to-door Delivery',
            'description': 'We\'re gonna charge you this time.',
            'startDateTime': '2017-12-03T00:00:00.000Z',
            'endDateTime': '2017-12-03T03:30:00.000Z',
            'hasFee': true,
            'fee': 5,
            'feeWaiver': 35,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Wapella',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-02T00:00:00.000Z'
          },
          {
            'id': 789,
            'producerId': 13,
            'productList': [
              43,
              95
            ],
            'type': 'Door-to-door Delivery',
            'description': 'Delivering to you for no charge.',
            'startDateTime': '2017-12-01T00:00:00.000Z',
            'endDateTime': '2017-12-01T02:00:00.000Z',
            'hasFee': false,
            'fee': null,
            'feeWaiver': null,
            'latitude': 50.1437782,
            'longitude': -101.6671873,
            'city': 'Moosomin',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2017-12-01T00:00:00.000Z'
          }
        ]
      },
      {
        'id': 88,
        'name': 'Beets',
        'description': 'This is a description',
        'image': 'beet.png',
        'pricePerUnit': 5,
        'unit': 'pkg',
        'unitsPer': 2,
        'category': 'Produce',
        'subcategory': 'Beets',
        'producer': {
          'id': 18,
          'name': 'Different Farms',
          'location': 'Whitewood',
          'province': 'SK',
          'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'email': 'email@different.com',
          'logoUrl': 'farm-logo-2.png',
          'longitude': 333,
          'latitude': 555,
          'firstName': 'Bob',
          'registrationDate': '2017-12-02T01:00:00.000Z',
          'status': 'active',
          'productList': [
            88
          ],
          'scheduleList': [
            798,
            799
          ]
        },
        'dateAdded': '2017-12-02T01:00:00.000Z',
        'qtyAvailable': 0,
        'qtyPending': 0,
        'qtyAccepted': 0,
        'qtyCompleted': 345,
        'isObsolete': false,
        'scheduleList': [
          {
            'id': 798,
            'producerId': 18,
            'productList': [
              88
            ],
            'type': 'Door-to-door Delivery',
            'description': 'Delivering to you for no charge.',
            'startDateTime': '2018-05-01T00:00:00.000Z',
            'endDateTime': '2018-05-01T02:00:00.000Z',
            'hasFee': false,
            'fee': null,
            'feeWaiver': null,
            'latitude': 50.1437782,
            'longitude': -101.6671873,
            'city': 'Moosomin',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2018-04-01T00:00:00.000Z'
          },
          {
            'id': 799,
            'producerId': 18,
            'productList': [
              88
            ],
            'type': 'Farmgate Pickup',
            'description': 'Pickup at the Wapella farmers\' market.',
            'startDateTime': '2017-12-02T00:00:00.000Z',
            'endDateTime': '2017-12-02T03:30:00.000Z',
            'hasFee': false,
            'fee': null,
            'feeWaiver': null,
            'latitude': 50.2615563,
            'longitude': -101.9720143,
            'city': 'Wapella',
            'address': '123 Main St',
            'province': 'SK',
            'orderDeadline': '2018-04-02T00:00:00.000Z'
          }
        ]
      }
    ]);
  },
};
