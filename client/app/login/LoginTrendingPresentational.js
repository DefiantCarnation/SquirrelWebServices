import React, { PropTypes } from 'react';

const LoginTrendingPresentational = (props) => {
  // console.log('what is props in LoginTrendingPresentational>>>>>>>>>>', props);
  var image = props.article.image || './styles/img/flying-squirrel-grey.png';
  var divStyle = {
    backgroundImage: 'url(' + image + ')',
  };
  var afterClass = props.modalIsOpen ? '' : 'after';

  return (
    <div>
      <div className="landingWrapper">
        <div className="shadowDepth1">
          <div className="card__image border-tlr-radius">
            <div style={divStyle} className='landingImage'/>
          </div>
        </div>
        <div className={afterClass}>
          <span>{props.article.title}</span>
        </div>
      </div>
    </div>
  );
};

export default LoginTrendingPresentational;