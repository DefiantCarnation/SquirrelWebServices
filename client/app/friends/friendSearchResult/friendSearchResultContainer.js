import React from 'react';
import FriendSearchResultPresentational from './friendSearchResultPresentational';
import axios from 'axios';

class FriendSearchResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //this.props.result is an array of search result users
    console.log('made it to SearchResult', this.props);
    return (
      <div style={{display:'flex', flexWrap: 'wrap'}}>
      {this.props.result.map((item, idx) => {
        return (
          <div>
          <FriendSearchResultPresentational key={idx} user={item} addFriend={this.props.addFriend}/>
          </div>
          );
      })}
      </div>
    );
  }

}

export default FriendSearchResultContainer;