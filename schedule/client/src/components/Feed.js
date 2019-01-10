import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};

const Feed = ({ ramsFeed }) => (

  <div>
    <ul>
      {ramsFeed.map(ramFeed => (
        <li key={ramFeed.id} id="sidebar-wrapper">
          <div><img src={`${ramFeed.bigphoto}`} width={500} height={350} style={style.image} /></div>
          <div>
            {ramFeed.title}
            {' '}
          </div>
          <div>
author:
            {' '}
            {ramFeed.author}
            {' '}
            <img src={`${ramFeed.authorphoto}`} />
          </div>
          <p>
Updates:
            {' '}
            {ramFeed.newsfeed}
            <br />
            {ramFeed.timestamp}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default Feed;
