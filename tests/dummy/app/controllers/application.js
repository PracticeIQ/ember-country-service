import Ember from "ember";

export default Ember.Controller.extend({
  _debug: function() {
    let countryData = this.get("country-data");
    let countries = countryData.get("countries");
    console.log("countries", countries);

    let isoCode = countryData.getISOCodeForCountry("Australia");

    console.log("iso for Australia", isoCode);

    let diallingCode = countryData.getDiallingCodeForCountry("Lebanon");

    console.log("diallingCode for Lebanon", diallingCode);

    let nameFromISO = countryData.getCountryNameByISO("mz");

    console.log("name of country for mz", nameFromISO);

    let countryFromProperty = countryData.getCountryByProperty("code", "lb");

    console.log("country by property for lb", countryFromProperty);

    let fuzzyMatch = countryData.getCountryByFuzzyName("lebanon");

    console.log("Fuzzy match for leb", fuzzyMatch);
  }.on("init")
});
