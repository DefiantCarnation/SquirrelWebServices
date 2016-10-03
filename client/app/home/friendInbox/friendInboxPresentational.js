import React from 'react';

const FriendInboxPresentational = (props) => {
  return (
    <div className='friendinbox'>
      <h5>Articles from Friends</h5>
      <div className='friendinboxarticles'>
        {props.children}
      </div>
    </div>
    );
};

export default FriendInboxPresentational;