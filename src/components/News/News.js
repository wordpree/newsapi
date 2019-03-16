import React from 'react';

const News =({articleInfo})=>(
  <div className="col-3">
    <div className="card" style={ {width: '18rem'} }>
      <img className="card-img-top" src={articleInfo.urlToImage} alt={articleInfo.title} />
      <div className="card-body">
        <h5 class="card-title">{articleInfo.title}</h5>
        <p className="card-text">{articleInfo.description}</p>
        <a href={articleInfo.url} className="btn btn-primary">Full Article</a>
      </div>
    </div>
  </div>
);


export default News;
