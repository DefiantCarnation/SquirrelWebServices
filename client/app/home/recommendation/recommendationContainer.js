import React, { PropTypes } from 'react';
import RecommendationPresentational from './recommendationPresentational';
import axios from 'axios';

class RecommendationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftScroll: [],
      rightScroll: []
    };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    // this.getRecommended = this.getRecommended.bind(this);
  }

  componentWillMount() {
    //set articles state
    console.log('in componentWillMount', this.props);

    // this.setState({
    //   rightScroll: [1,2,3,4,5,6,7,8,9,10]
    // });
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  }

  handleLeft() {
    console.log('even here???');
    if (this.state.leftScroll.length !== 0) {
      var right = this.state.rightScroll;
      var left = this.state.leftScroll;
      var shift = left.pop();
      right.unshift(shift);
      console.log("handleLeft",right, left);
      this.setState({
        rightScroll: right,
        leftScroll: left,
      });
    }
  }

  handleRight() {

    if (this.state.rightScroll.length > Math.floor(screen.width * 0.8 / 200)) {
      var right = this.state.rightScroll;
      var left = this.state.leftScroll;
      var shift = right.shift();
      left.push(shift);
      this.setState({
        rightScroll: right,
        leftScroll: left,
      });    
    }
  }

  render() {
    // var recArray = [];
    console.log('i am in RecommendationContainer', this.props.recArticles);
    // for (var i = 0; i < this.state.rightScroll.length; i++) {
    //   recArray.push(<RecommendationPresentational key={i} index={this.state.rightScroll[i]}/>);
    // }
    var mappedArticles = this.props.recArticles.map((item, index) => {
      return (<RecommendationPresentational article={item} key={index}/>);
    });
    return (
      <div className="slideContainer">
        <div className="arrowContainer" onClick={this.handleLeft}>
          <i className="material-icons md-48 orange600">keyboard_arrow_left</i>
        </div>
        <div className="recContainer">
          {mappedArticles}
        </div>
        <div className="arrowContainer" onClick={this.handleRight}>
          <i className="material-icons md-48 orange600">keyboard_arrow_right</i>
        </div>
      </div>
      );
  }
}

export default RecommendationContainer;
