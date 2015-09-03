import Ember from "ember";

export default Ember.Route.extend({
  _debug: function() {
    console.log("debug", this.get("country-data"));
  }.on("init")
});
