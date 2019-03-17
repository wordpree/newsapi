import React from 'react';
import './News.scss';

const News =({articleInfo})=>(
  <div className="card-container">
    <div className="card-image" style={{backgroundImage:`url(${articleInfo.urlToImage})`}}>
      <div className="card-body">
        <h5 className="card-title">{articleInfo.title}</h5>
        <button className="btn">
          <a href={articleInfo.url} >Full Article</a>
        </button>
      </div>
    </div>
  </div>
);

export default News;
