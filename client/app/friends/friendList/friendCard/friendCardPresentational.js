import React, { PropTypes } from 'react';

const dummyphoto = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgXAAAAJGQ2MDIyODY3LTU2ODktNGRmMS1iNGVkLTY3YjQwM2VkMGEwMw.jpg';

const friendStyle = {
  position: 'relative',
  marginBottom: '10px',
  backgroundColor: '#ececec',
  width: '90%',
  height: '70px',
  borderRadius: '3px',
  boxShadow: '5px 5px 5px rgba(0,0,0,0.3)',
  }

const friendHeaderStyle = {
  height: '20%',
  borderTopRightRadius: '3px',
  borderTopLeftRadius: '3px',
  width: '100%',
  background: 'white',
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
  fonWeight: 'bold',
  paddingLeft: '30px',
  overflow: 'hidden',
  fontSize: '20px',
  top: '15px',
  position: 'absolute',
  fontWeight: 'bold',
  color:'#9e9e9e',
}

const FriendCardPresentational = (props) => {
  return (
          <div className='friendlistunit'>
            <div className='friendheaderstyle'></div>
              <div className='friendlistcardbody'>
                <h6>{props.name}</h6>
              </div>
              <div className='friendfooterstyle'></div>
          </div>
    );
};

export default FriendCardPresentational;
