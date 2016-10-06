import React, { PropTypes } from 'react';
import SignUpPresentational from './SignupPresentational';
import axios from 'axios';


class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: 'please choose a username and password',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    // this.username.value = '';
    // this.password.value = '';
    axios.post('http://localhost:8888/signup', {username: username, password: password})
    .then((data) => {
      console.log('WHAT DO YOU GET AFTER IMMEDIATE SIGN UP?', data);
      //(do the signing in for the client);
      axios.post('http://localhost:3010/login2', {username: data.data.fbid, password: data.data.fbname})
        .then((data) => {
            console.log(data.data, 'data.data');
            this.context.router.push('/home');
        })
    })
    .catch((err) => {
      console.log(err, 'error')
      this.setState({message: 'Username already in use. Please try a different one.'})
    })

    document.getElementById('loginform').reset();
  }

  getRefUsername(e) {
    this.setState({username: e.target.value});
    console.log(e.target.value);
  }

  getRefPassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
    <SignUpPresentational message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
    );
  }
}

SignUpContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignUpContainer;