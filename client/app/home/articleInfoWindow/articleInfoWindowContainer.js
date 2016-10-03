import React, { PropTypes } from 'react';
import ArticleInfoWindowPresentational from './articleInfoWindowPresentational';
import ArticleInfoFromFriendPresentational from './articleInfoFromFriendPresentational';
import he from 'he';
import axios from 'axios';


class ArticleInfoWindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      excerpt: '',
      isFromFriend: false,
      author: '',
    };
    this.getUrlInfo = this.getUrlInfo.bind(this);
    this.checkIfFromFriend = this.checkIfFromFriend.bind(this);
  }

  componentDidMount() {
    this.getUrlInfo(this.props.url);
    this.checkIfFromFriend();
  }

  getUrlInfo(url) {
    var context = this;
    $.ajax({
      method: 'POST',
      url: '/getUrlInfo',
      data: {
        url: url
      },
      success: function(data) {
        var parsedData = JSON.parse(data.body);
        var author = parsedData.author === null ? 'Squirrely' : parsedData.author === undefined ? 'Squirrely' : parsedData.author.split(',')[0];
        var decodedExcerpt = he.decode(parsedData.excerpt);
        // console.log('this is in getUrlInfo====>>>>>', parsedData.excerpt, decodedExcerpt);
        context.setState({
          title: parsedData.title,
          image: parsedData.lead_image_url,
          excerpt: decodedExcerpt,
          assigneeInfo: '', //<=== what is this for?
          author: author,
        });
      },
      error: function(err) {
        console.log('there is an error in ArticleInfoWindowContainer, it\'s a sad day! D=', err);
      }
    });
  }

  checkIfFromFriend() {
    if (this.props.assignee) {
      return (<ArticleInfoFromFriendPresentational title={this.state.title} author={this.state.author} image={this.state.image} excerpt={this.state.excerpt} assignee={this.props.assignee} createdAt={this.props.createdAt} url={this.props.url}/>);
    } else {
      return (
        <ArticleInfoWindowPresentational onSocialClick={this.onSocialClick} title={this.state.title} author={this.state.author} image={this.state.image} excerpt={this.state.excerpt} url={this.props.url}/>
        );
    }
  }

  /* -- strictly style... click social button -- */
  onSocialClick(e) {
    e.preventDefault();
    $(e.target).parent().find( 'div' ).toggleClass( 'card__social--active' );
    $(e.target).toggleClass('share-expanded');
  }

  /*--- need some way to grab friends names ----- */
  // getAssignee() {
  //   //get Assignee name
  // }

  render() {
    // console.log('i am in ArticleInfoWindowContainer this.state>>>>>>>>>>>>>>>>>>>>>', this.state);
    return (
    <div>{this.checkIfFromFriend()}</div>
    );
  }
}

export default ArticleInfoWindowContainer;