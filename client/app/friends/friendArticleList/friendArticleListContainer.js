import React, { PropTypes } from 'react'
import FriendArticleListPresentational from './friendArticleListPresentational'

class FriendArticleListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <FriendArticleListPresentational />
      )
  }
}

export default FriendArticleListContainer