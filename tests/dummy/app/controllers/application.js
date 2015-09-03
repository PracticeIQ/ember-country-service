import Ember from "ember";

export default Ember.Controller.extend({
  _debug: function() {
    console.log("debug", this.get("country-data"));
  }.on("init")
});
