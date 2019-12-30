import JSONAPISerializer from '@ember-data/serializer/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend({

  serializePublicArticles(publicArticles) {
    const serializer = this;
    const serializedArticles = Ember.Object.create({
      totalArticles: publicArticles.totalResults || 0,
      articles: Ember.A([])
    });
    if (publicArticles.articles) {
      const articlesList = publicArticles.articles;
      serializedArticles.articles = articlesList.map( (articleData) => {
        return serializer.serializeArticleData(articleData)
      })
    }
    console.log('serializedArticles', serializedArticles)
    return serializedArticles;
  },

  serializeArticleData(article) {
    return Ember.Object.create({
      author: article.author,
      content: article.content,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source ? article.source.name : '',
      title: article.title,
      url: article.url,
      imageUrl: article.urlToImage
    });
  }
});
