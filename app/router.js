import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('routable-component');
  this.route('test');
  this.route('detail', {path: '/detail/:house_id'});
});

export default Router;
