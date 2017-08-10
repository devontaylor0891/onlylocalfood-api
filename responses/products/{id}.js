//this is how the /products/{id} response will look.
// could add schedule here (the top 4 schedules that that producer has WITH that product in it)
// OR Devon will use schedules?prodcutId=14

//I decide

// these don't care about location but are the first 4 delivers of this product

// #1

var get_response = {
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
  qtySold: '55',
  productStatus: 'active',
  producerId: 13,
  producerName: 'name',
};
