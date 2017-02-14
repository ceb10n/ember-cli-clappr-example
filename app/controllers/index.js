import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    onPlay() {
      console.log('playing');
    },
    onReady() {
      console.log('ready');
    },
    onError(e) {
      console.log(e);
    },
    onPause() {
      console.log('pause');
    }
  }
});
