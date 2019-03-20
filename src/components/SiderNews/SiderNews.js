import React from 'react';
import './SiderNews.scss';

const SideNews =({sourceInfo})=>(
  <div className="news-container">
    <a href={sourceInfo.url}>
      <div className='title'>
        <h3>{sourceInfo.name}</h3>
      </div>
      <div className='description'>
        <p>{sourceInfo.description}</p>
      </div>
    </a>
  </div>
);

export default SideNews;
