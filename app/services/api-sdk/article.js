import Ember from 'ember';
import ArticleAdapter from 'public-articles/adapters/article';
import ArtcileSerializer from 'public-articles/serializers/article';

export default Ember.Service.extend({

  articleAdapter: null,

  articleSerializer: null,

  init() {
    this._super(...arguments);
    this.set('articleAdapter', ArticleAdapter.create(Ember.getOwner(this).ownerInjection()));
    this.set('articleSerializer', ArtcileSerializer.create(Ember.getOwner(this).ownerInjection()));
  },

  getPublicArticles() {
    const service = this;
    const articleAdapter = service.get('articleAdapter');
    return new Ember.RSVP.Promise((resolve, reject) => {
      service.get('articleAdapter').getPublicArticles().then((articles) => {
        resolve(service.get('articleSerializer').serializePublicArticles(articles));
      }, (err) => {
        reject(err);
      });
    });
  }
});
