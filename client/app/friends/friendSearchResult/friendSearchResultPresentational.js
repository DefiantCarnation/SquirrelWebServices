import React from 'react';

const friendStyle = {
  position: 'relative',
  marginBottom: '10px',
  backgroundColor: '#ececec',
  width: '225px',
  height: '200px',
  borderRadius: '3px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
  }

const friendHeaderStyle = {
  flexWrap: 'wrap',
  height: '2%',
  borderTopRightRadius: '3px',
  borderTopLeftRadius: '3px',
  width: '100%',
  background: 'rrgb(202, 202, 202)',
}

const friendSearchResultBody = {
  width: '225px',
  display: 'flex',
  height: '95%',
  position: 'relative',
}

const friendFooterStyle = {
  position: 'absolute',
  height: '3%',
  width: '100%',
  bottom: '0',
  background: 'linear-gradient(-90deg, #18ffff, #a7ffeb)',
  borderBottomRightRadius: '3px',
  borderBottomLeftRadius: '3px',
}

const h6style = {
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 'bold',
  color: 'gray',
  top: '10px',
  width: '225px',
  height: '30px',
  position: 'relative',
  textAlign: 'center',
  fontSize: '30px',
}

const FriendSearchResultPresentational = (props) => {
  console.log('i am in FriendSearchResultPresentational', props.user);
    return (
            <div className='foundfriends' style={friendStyle} onClick={() => props.addFriend(props.user)}>
              <div style={friendHeaderStyle}></div>
                <div style={{friendSearchResultBody}}>
                  <h6 style={h6style}>{props.user.fbid}</h6>
                </div>
                <div style={friendFooterStyle}></div>
            </div>
      );
};

export default FriendSearchResultPresentational;