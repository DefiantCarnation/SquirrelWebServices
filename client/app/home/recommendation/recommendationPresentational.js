import React from 'react';

const RecommendationPresentational = (props) => {
  console.log('IN RecommendationPresentational', props);
  const image = props.article.image || '/styles/img/flying-squirrel-grey.png';
  const divStyle = {
    backgroundImage: `url(${image})`,
  };
  return (

      <div className="recbox">
          <div style={divStyle} id="rec" className="recboxImg"/>
          <span className="recboxTitle">{props.article.title}</span>
      </div>

    );
};

export default RecommendationPresentational;