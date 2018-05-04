export default {
  name: "country-data",
  after: "ember-data",
  initialize: function(application) {
    application.inject('route', 'country-data', 'service:country-data');
    application.inject('router:main', 'country-data', 'service:country-data');
    application.inject('controller', 'country-data', 'service:country-data');
    application.inject('component', 'country-data', 'service:country-data');
  }
};
