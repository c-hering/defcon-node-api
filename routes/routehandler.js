module.exports = app => {
  var controller = require('../controllers/controller');

  app.route('/parseurl/:urlAddition?')
    .get(controller.geturl);

};
