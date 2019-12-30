import Ember from 'ember';

export default Ember.Object.extend({

  getPublicArticles() {
    const RESTAPI_ENDPOINT =  `https://newsapi.org/v2/top-headlines?apiKey=345486ad05ac4128830b4253d6df94d9&country=us`;
    return Ember.$.ajax(RESTAPI_ENDPOINT);
  }
});
