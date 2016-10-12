import Ember from 'ember';
import config from 'app-test/config/environment';
const { knowledgeUrl } = config;
const {
	isEmpty,
	Object: OBJ,
	Route
} = Ember;
export default Route.extend({
	setupController(controller) {
		this._super(...arguments);
		controller.set('searchKeyword', ''); 
		controller.set('searchResult', 
			OBJ.create({
				question: '', // person's name
				answer: '' // person's description
			})
		);
	},
	actions: {
		toggleMessage(type) {
			this.controller.set('showMessage', type === 'OPEN');
		},
		searchPerson(question) {
			if(isEmpty(question.trim())) {
				return;
			}
			// call an API
			// update search result: searchResult
			let url = `${knowledgeUrl}/api/v1/ask-question?q=${question.trim()}`,
				type = 'GET',
				adapter = this.container.lookup('adapter:application');
			adapter.ajax(url, type)
			.then(result => {
				this.controller.get('searchResult').setProperties(result);
			}, e => {
				console.log('error', e);
				this.controller.get('searchResult').setProperties({
					question,
					answer: 'I currently do not know that!'
				});
			});
		}
	}
});
