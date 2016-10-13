import React, { PropTypes } from 'react';

const FriendArticleListPresentational = (props) => {
  return (
    <div>
      <h5 style={{ color: '#969696', 'fontFamily': '"Roboto", sans-serif', fontWeight: 'bold'}}>{props.friend.fbid}'s stashed articles</h5>
      <div className='friendarticle'>
        {props.children}
      </div>
    </div>
    );
};

export default FriendArticleListPresentational;