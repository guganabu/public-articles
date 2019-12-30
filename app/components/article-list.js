import Ember from 'ember';
// import lodash from 'lodash';

export default Ember.Component.extend({

  articleService: Ember.inject.service('api-sdk/article'),

  didInsertElement() {
    this.loadPublicArticles();
  },

  articles: Ember.A([]),

  totalArticles: 0,

  loadPublicArticles() {
    const component = this;
    component.get('articleService').getPublicArticles().then((publicArticles) => {
      console.log('publicArticles', publicArticles)
      component.set('articles', publicArticles.get('articles'));
      component.set('totalArticles', publicArticles.get('totalArticles'));
    });
  }
});
