import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		toggleMessage(type) {
			this.controller.set('showMessage', type === 'OPEN');
		}
	}
});
