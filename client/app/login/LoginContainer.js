import React, { PropTypes } from 'react';
import LoginPresentational from './LoginPresentational';
import LoginTrendingPresentational from './LoginTrendingPresentational';
import axios from 'axios';
import Modal from 'react-modal';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: 'please enter username and password', 
      articles: [],
      modalIsOpen: false
    };
    this.getLandingArticles = this.getLandingArticles.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    this.getLandingArticles();
  }
  handleSubmit(e) {
    //are we getting here?
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log(username, 'mike');
    console.log(password, 'mike');

    // this.username.value = '';
    // this.password.value = '';
    axios.post('/login2', {username: username, password: password})
    .then((data) => {
      console.log(data.data, 'data.data, should be pushing user to main page with this.context.router');
      this.context.router.push('/home');
    })
    .catch((err) => {
      console.log(err, 'error');
      this.setState({message: 'Incorrect username or password'});
    });
    document.getElementById('loginform').reset();
  }
  getRefUsername(e) {
    this.setState({username: e.target.value});
    console.log(e.target.value);
  }
  getRefPassword(e) {
    this.setState({password: e.target.value});
  }
  getLandingArticles() {
    //get most recent 20 articles from redis
    console.log('in getLandingArticles over!');
    axios.get('/getMostRecent')
      .then((res) => {
        this.setState({
          articles: res.data
        });
      })
      .catch((err) => {
        console.log('There is an error getting landing page articles, it\'s a sad day! D=');
      });
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    console.log('what is this.state.articles in login>>>>>>', this.state.articles);
    var mappedArticles = this.state.articles.map((item, index) => {
      if (item !== null) {
        return (<LoginTrendingPresentational article={item} key={index} index={index} modalIsOpen={this.state.modalIsOpen}/>);
      }
    });
    return (
      <div>
          <div className='slogan'>To get started, click on any article below</div>
          <div onClick={this.openModal}>
            <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
              <div className="col s12 m6 parallax" className='landing-container'>
                {mappedArticles}
              </div>
            </div>
          </div>
          <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div style={{marginBottom: '25px'}} className="col s12 center-align">
                <h5 className="footer-text"><span className="footer-header">Squirrel</span></h5>
              </div>
              <div className="col s4 footer-icon">
                <h5 className="footer-text">Save</h5>
                <ul>
                  <li><i className="material-icons md-48 white600">archive</i></li>
                </ul>
                <p>Stash your articles for later with Squirrel. Squirrel will save all your reading material for later. The best part is, we'll have them locally stored for you to read when you have no internet! Never be out of reading content again!</p>
              </div>
              <div className="col s4 footer-icon">
                <h5 className="footer-text">Read</h5>
                <ul>
                  <li><i className="material-icons md-48 white600">portable_wifi_off</i></li>
                </ul>
                <p>Stay up to date on all your favorite topics. Squirrel will help you keep track of those articles that you hope to read in the future. We'll also recommend you articles based on other users with similar interests!</p>
              </div>
              <div className="col s4 footer-icon">
                <h5 className="footer-text">Share</h5>
                <ul>
                  <li><i className="material-icons md-48 white600">face</i></li>
                </ul>
                <p>Share awesome content with others! You can recommend articles to your friends and vice versa. It's always nice to have unexpected reading content recommended by people you actually know! We'll stash a few of those away locally just in case the internet cuts out ;)</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright Squirrel
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} className="npm-modal-default">
          <div className="popup">
            <div className="row container">
            <p className="exit" onClick={this.closeModal}>Close</p>
              <h2 className="squirrel-header">Squirrel</h2>
              <p className="squirrel-subhead">Save, Read, Share</p>
              <LoginPresentational message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default LoginContainer;