import Ember from "ember";
import countrySet from "../data/country-set";

export default Ember.Service.extend({
  countries: function() {
    return countrySet;
  }.property("countrySet"),
  getCountryByFuzzyName: function(fuzzyName) {
    let results = [];
    let matchingCountries = this.get("countries").filter((country) => {
      let matchExists = false;
      let possibleMatches = country.matches.split(" ");
      possibleMatches.forEach((match) => {
        if (match.toLowerCase().indexOf(fuzzyName.toLowerCase()) > -1) return matchExists = true;
      });
      return matchExists;
    });
    return matchingCountries;
  },
  getCountryByProperty: function(property, value) {
    let results = this.get("countries").filter((country) => {
      return country[property] === value;
    });
    if (Ember.isArray(results) && results.length > 0) return results.objectAt(0);
    return results;
  },
  getISOCodeForCountry: function(name, uppercase) {
    let result = null;
    let fuzzyMatch = this.getCountryByFuzzyName(name);
    if (!fuzzyMatch) return;

    fuzzyMatch = fuzzyMatch.objectAt(0);
    result = fuzzyMatch.code;

    if (uppercase) {
      result = result.toUpperCase();
    }

    return result;
  },
  getDiallingCodeForCountry: function(name) {
    let result = null;
    let fuzzyMatch = this.getCountryByFuzzyName(name);
    if (!fuzzyMatch) return;

    fuzzyMatch = fuzzyMatch.objectAt(0);
    result = fuzzyMatch.phoneCode;

    return result;
  },
  getCountryNameByISO: function(isoCode) {
    let matchingCountry = this.get("countries").filter((country) => {
      return country.code === isoCode.toLowerCase();
    });
    if (Ember.isArray(matchingCountry)) return matchingCountry.objectAt(0)["real-value"];
    return matchingCountry["real-value"];
  }

});
