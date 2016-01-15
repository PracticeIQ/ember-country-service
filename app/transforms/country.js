import DS from "ember-data";

export default DS.Transform.extend({
  countryService: Ember.inject.service('country-data'),

  serialize: function(value) {
    if (value) {
      return this.get('countryService').getISOCodeForCountry(value);
    } else {
      return null;
    }
  },

  deserialize: function(value) {
    if (value) {
      return this.get('countryService').getCountryNameByISO(value);
    } else {
      return null;
    }
  }
});
