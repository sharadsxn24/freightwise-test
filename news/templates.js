/**
 * HTML Template to show the news top headlines in the card format
 */
const newsTemplates = {
  newsList(items) {
    return (`
      <h1>Top Headlines</h1>
      ${items.articles.map(item => this.newsCard(item)).join('')}
    `);
  },
  newsCard(news) {
    return (`
      <div class="news-card">
        <figure class="news-card__figure">
          <img src=${news.urlToImage} alt="${news.title}"/>
        </figure>
        <div class="news-card__info">
          <a href="${news.url}" target="_blank"><h3>${news.title}</h3></a>
          <small>${news.publishedAt} - ${news.author}</small>
          <p>${news.description}</p>
          <small>Source: ${news.source?.name}</small>
        </div>
      </div>
    `);
  }
}