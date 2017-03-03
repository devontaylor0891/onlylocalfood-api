'use strict';

module.exports = {

  getUsers: function(req, res) {
    return res.json({'foo': 'bar'});
  },

  postUsers: function(req, res) {
    return res.json({'dude': 'we can post'});
  },

};
