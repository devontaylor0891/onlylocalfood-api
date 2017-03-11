'use strict';

module.exports = {

  getUsers: function(req, res) {
    return res.json({
		title: 'Your Dashboard',
		orders: [
			{
				firstName: 'Bob',
				city: 'Moosomin'
			}, {
				firstName: 'Betty',
				city: 'Wapella'
			}
		]
	});
  },

  postUsers: function(req, res) {
    return res.json({'dude': 'we can post'});
  },

};
