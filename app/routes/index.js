import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
  });
},
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      rental.set(key,params[key]);
    }
  });
  rental.save();
  this.transitionTo('index');
},

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
