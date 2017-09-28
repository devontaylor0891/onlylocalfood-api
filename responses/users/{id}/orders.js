//this is how the /users/{id}/orders response will look.
var get_response = [
  {
    orderID: '123456',
	  producerName: 'Garden Farms',
    products: [
      {
        productID: 1,
		    quantityOrdered: 3,
        productName: 'Product1',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 2,
		    quantityOrdered: 3,
        productName: 'Product2',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 3,
		    quantityOrdered: 3,
        productName: 'Product3',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 4,
		    quantityOrdered: 3,
        productName: 'Product4',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 5,
		    quantityOrdered: 3,
        productName: 'Product5',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 6,
	    	quantityOrdered: 3,
        productName: 'Product6',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ],
    delivery: {
        type: 'Door-to-door Delivery',
        date: 'July 3',
        location: 'Moosomin',
        startTime: '12 pm',
        endTime: '2 pm',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        fee: 10,
        feeWaiver: 45
    }
  }, {
    orderID: '223456',
    producerName: 'NotGarden Farms',
    products: [
      {
        productID: 1,
		quantityOrdered: 5,
        productName: 'Product1',
        image: '/images/product.jpg',
        price: 5.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 2,
		quantityOrdered: 5,
        productName: 'Product2',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 3,
		quantityOrdered: 5,
        productName: 'Product3',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 4,
		quantityOrdered: 5,
        productName: 'Product4',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 5,
		quantityOrdered: 5,
        productName: 'Product5',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 6,
		quantityOrdered: 5,
        productName: 'Product6',
        image: '/images/product.jpg',
        price: 4.99,
        unit: 'lb',
        unitsPer: 1,
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ],
    delivery: {
        type: 'Off-farm Pickup',
        date: 'July 3',
        location: 'Moosomin',
        startTime: '12 pm',
        endTime: '2 pm',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		fee: null,
		feeWaiver: null
    }
  }
];