import React from 'react';
import StarRate from '../StarRate/StarRate';
import './News.scss';

const News =({articleInfo})=>(
  <div className='card-entry'>
      <div className="card-container">
        <div className="card-image" style={{backgroundImage:`url(${articleInfo.urlToImage})`}}>
          <div className="card-body">
            <a href={articleInfo.url} target='_blanket' >
              <h5 className="card-title">{articleInfo.title}</h5>
              <button className="btn">Full Article</button>
            </a>
          </div>
        </div>
      </div>
      <StarRate num={5}/>
  </div>
);

export default News;
