import React, { PropTypes } from 'react';
import HomePresentational from './HomePresentational';
import FriendInboxContainer from './friendInbox/friendInboxContainer';
import UserInboxContainer from './userInbox/userInboxContainer';
import InputBarContainer from './inputBar/inputBarContainer';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      articles: '',
      userArticles: [],
      userFriendsList: [],
      articlesFromFriends: [],
    };
  }

  componentDidMount() {
  //get user name and id
    axios.get('/checkAuth')
    .then((user)=>{
      this.setState({user: user.data})
      return axios.get('http://wwww.localhost:8888/links/' + user.data.fbid)
    })
    .then((links) => {
      console.log(this.state.user, 'working here?');
      console.log(links, 'links links links');
      this.setState({articles: links.data[0]}, ()=>{
        this.sortArticles();
      });
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  shouldComponentUpdate(state, props){
    // console.log(state, props);
    return true;
  }

  sortArticles() {
    console.log(this.state.articles, 'testing this once');

    const userArticles = this.state.articles.filter((link) => {
        return link.assignee === this.state.user.fbid;
      }).map((item) => {
        return {url: item.url, createdAt: item.createdAt};
      });

    const articlesFromFriends = this.state.articles.filter((link) => {
        return link.assignee !== this.state.user.fbid;
      }).map((item) => {
        return {assignee: item.assignee, url: item.url, createdAt: item.createdAt};
      });
      console.log(userArticles, articlesFromFriends, 'im here');
    this.setState({
      userArticles: userArticles,
      articlesFromFriends: articlesFromFriends, 
    });
  }

  handleUpdateInbox(url, owner, assignee) {
    axios.put(`http://localhost:8888/links/friends/${owner}/${assignee}`, {link: url})
    .then((data) => {
      if(owner === this.state.user.fbid) {
        console.log('updating yolo')
        axios.get('http://wwww.localhost:8888/links/' + this.state.user.fbid)
        .then((links) => {
          this.setState({articles: links.data[0]}, ()=>{
            this.sortArticles();
          });
        })
        .catch((err)=> {
          console.log(err)
        });
      }
    })
    .catch((err) => {
      console.log('error in inputBarContainer handleSubmit', err);
    })
  }

  render() {
    console.log(this.state.userArticles, 'hello world');
    return (
    <div style={{'height': '100%', 'width': '100%'}}>
      <HomePresentational >
        <InputBarContainer handleUpdateInbox={this.handleUpdateInbox.bind(this)} userId={this.state.user}/>
        <div className='row inboxmain'>
          <div className='col s8 grey lighten-5'>
            <Scrollbars style={{ height: 600 }}>
              <UserInboxContainer user={this.state.user} articles={this.state.userArticles}/>
            </Scrollbars>
          </div>
          <div className='col s4 grey lighten-3'>
            <Scrollbars style={{ height: 600 }}>
              <FriendInboxContainer user={this.state.user} articles={this.state.articlesFromFriends} />
            </Scrollbars>
          </div>
        </div>
      </HomePresentational>
    </div>
    );
  }
}

export default HomeContainer;
