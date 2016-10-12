import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search');
  this.route('user-list');
  this.route('user-updates');

  this.route('knowledge', function() {
    this.route('whois');
    this.route('whatis');
  });
});

export default Router;
