//this is how the /producers/{id} response will look.
/*

var get_response = 
  {
    id: '123456',
    name: 'Garden Farms1',
    logo: '/images/product.jpg',
    city: 'Moosomin',
    email: 'garden@farms.com',
    phone: '3065555555',
    description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// return ALL products even expried
    products: [
      {
        id: 1,
        name: 'Product1',
        image: '/images/product.jpg',
        price: '4.99',
        unit: 'lb',
        unitsPer: '1',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 2,
        name: 'Product2',
        image: '/images/product.jpg',
        price: 'XX.xx',
        unit: 'unit',
        unitsPer: '1',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 3,
        name: 'Product3',
        image: '/images/product.jpg',
        price: 'XX.xx',
        unit: 'unit',
        unitsPer: '1',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 4,
        name: 'Product4',
        image: '/images/product.jpg',
        price: 'XX.xx',
        unit: 'unit',
        unitsPer: '1',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 5,
        name: 'Product5',
        image: '/images/product.jpg',
        price: 'XX.xx',
        unit: 'unit',
        unitsPer: '1',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        id: 6,
        name: 'Product6',
        image: '/images/product.jpg',
        price: 'XX.xx',
        unit: 'unit',
        unitsPer: '1',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ],
    deliveries: [
      {
        id: 1,
        type: 'Door-to-door Delivery',
        date: 'July 3',
        location: 'Moosomin',
        startTime: '12 pm',
        endTime: '2 pm',
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        fee: 10,
        feeWaiver: 45
      }, {
        id: 2,
        type: 'Off-farm Pickup',
        date: 'July 5',
        location: 'Moosomin',
        startTime: '12 pm',
        endTime: '2 pm',
        scheduleDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        scheduleFee: null,
        scheduleFeeWaiver: null
        description: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        fee: null,
        feeWaiver: null
      }
    ]
  };
*/