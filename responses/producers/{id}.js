//this is how the /producers/{id} response will look.

var get_response = 
  {
    producerId: '123456',
    producerName: 'Garden Farms1',
    producerLogo: '/images/product.jpg',
    producerLocation: 'Moosomin',
    producerEmail: 'garden@farms.com',
    producerPhone: '3065555555',
    producerDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    producerProducts: [
      {
        productId: 1,
        productName: 'Product1',
        productImage: '/images/product.jpg',
        productPrice: '4.99',
        productUnit: 'lb',
        productUnitsPer: '1',
        productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		productCategory: 'Meat',
		productSubcategory: 'Beef',
		qtyAvailable: '15',
		qtyPending: '3',
		qtySold: '55',
		productStatus: 'active'
      }, {
        productId: 2,
        productName: 'Product2',
        productImage: '/images/product.jpg',
        productPrice: 'XX.xx',
        productUnit: 'unit',
        productUnitsPer: '1',
        productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		productCategory: 'Meat',
		productSubcategory: 'Beef',
		qtyAvailable: '15',
		qtyPending: '3',
		qtySold: '55',
		productStatus: 'active'
      }, {
        productId: 3,
        productName: 'Product3',
        productImage: '/images/product.jpg',
        productPrice: 'XX.xx',
        productUnit: 'unit',
        productUnitsPer: '1',
        productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		productCategory: 'Meat',
		productSubcategory: 'Beef',
		qtyAvailable: '15',
		qtyPending: '3',
		qtySold: '55',
		productStatus: 'active'
      }, {
        productId: 4,
        productName: 'Product4',
        productImage: '/images/product.jpg',
        productPrice: 'XX.xx',
        productUnit: 'unit',
        productUnitsPer: '1',
        productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		productCategory: 'Meat',
		productSubcategory: 'Beef',
		qtyAvailable: '15',
		qtyPending: '3',
		qtySold: '55',
		productStatus: 'active'
      }, {
        productId: 5,
        productName: 'Product5',
        productImage: '/images/product.jpg',
        productPrice: 'XX.xx',
        productUnit: 'unit',
        productUnitsPer: '1',
        productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		productCategory: 'Meat',
		productSubcategory: 'Beef',
		qtyAvailable: '15',
		qtyPending: '3',
		qtySold: '55',
		productStatus: 'active'
      }, {
        productId: 6,
        productName: 'Product6',
        productImage: '/images/product.jpg',
        productPrice: 'XX.xx',
        productUnit: 'unit',
        productUnitsPer: '1',
        productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		productCategory: 'Meat',
		productSubcategory: 'Beef',
		qtyAvailable: '15',
		qtyPending: '3',
		qtySold: '55',
		productStatus: 'active'
      }
    ],
    producerSchedule: [
      {
        scheduleId: 1,
        scheduleType: 'Door-to-door Delivery',
        scheduleDate: 'July 3',
        scheduleLocation: 'Moosomin',
        startTime: '12 pm',
        endTime: '2 pm',
        scheduleDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		scheduleFee: 10,
		scheduleFeeWaiver: 45
      }, {
        scheduleId: 2,
        scheduleType: 'Off-farm Pickup',
        scheduleDate: 'July 5',
        scheduleLocation: 'Moosomin',
        startTime: '12 pm',
        endTime: '2 pm',
        scheduleDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		scheduleFee: null,
		scheduleFeeWaiver: null
      }
    ]
  };
