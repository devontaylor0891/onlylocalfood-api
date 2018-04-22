// this is how the /orders/{id} response will look.
// obsolete, using /users/{id}/orders

// if we were to use this endpoint here is the query
/*
connection.query(
	`SELECT o.*,
	pr.id AS product_name,
	d.name AS delivery_name,
	u.id AS user_name
	FROM orders o
		LEFT JOIN products pr
		ON o.product_id = pr.id
		LEFT JOIN delivery d
		ON o.delivery_id = d.id
		LEFT JOIN users u
		ON o.user_id = u.id
	WHERE o.id = ${orderId}`,
*/

var get_response = {
  orderID: '123456',
  firstName: 'Devon',
  email: 'devon@email.com',
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
};
