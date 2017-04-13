//this is how the /orders/{id} response will look.

var get_response = {
	orderID: 123456,
	userId: 1,
	firstName: 'Devon',
	userEmail: 'devon@email.com',
	orderStatus: 'pending',
	producerId: 2,
	producerName: 'Garden Farms',
	products: [
		{
			orderQty: 2,
			productId: 1,
			productName: 'Product1',
			productImage: '/images/product.jpg',
			productPrice: '9.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55'
		}, {
			orderQty: 2,
			productId: 2,
			productName: 'Product2',
			productImage: '/images/product.jpg',
			productPrice: '9.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55'
		}, {
			orderQty: 3,
			productId: 3,
			productName: 'Product3',
			productImage: '/images/product.jpg',
			productPrice: '9.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55'
		}, {
			orderQty: 6,
			productId: 4,
			productName: 'Product4',
			productImage: '/images/product.jpg',
			productPrice: '9.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55'
		}, {
			orderQty: 2,
			productId: 5,
			productName: 'Product5',
			productImage: '/images/product.jpg',
			productPrice: '9.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55'
		}, {
			orderQty: 1,
			productId: 6,
			productName: 'Product6',
			productImage: '/images/product.jpg',
			productPrice: '9.99',
			productUnit: 'lb',
			productUnitsPer: '1',
			productDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			productCategory: 'Meat',
			productSubcategory: 'Beef',
			qtyAvailable: '15',
			qtyPending: '3',
			qtySold: '55'
		}
	],
	schedule: {
		schedulesId: 1,
		schedulesType: 'Door-to-door Delivery',
		schedulesDate: 'July 3',
		schedulesLocation: 'Moosomin',
		startTime: '12 pm',
		endTime: '2 pm',
		schedulesDescription: 'This is the description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
		DeliveryFee: '10',
		DeliveryFeeWaiver: '45'
	}
};
