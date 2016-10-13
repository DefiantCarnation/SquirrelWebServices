import React, { PropTypes } from 'react';
import SignUpPresentational from './SignupPresentational';
import axios from 'axios';


class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      message: 'please choose a username and password',
    };
  }
 
  handleSubmit(e) {
    console.log('signup submit');
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    if (this.state.password === this.state.confirmPassword) {
      axios.post('/signup', {username: username, password: password})
      .then((data) => {
        console.log('WHAT DO YOU GET AFTER IMMEDIATE SIGN UP?', data);
        //(do the signing in for the client);
      axios.post('/login2', {username: data.data.fbid, password: data.data.fbname})
        .then((data) => {
            console.log(data.data, 'data.data after sign up should be pushing user to /home');
            this.context.router.push('/home');
          });
      })
      .catch((err) => {
        console.log(err, 'error');
        this.setState({message: 'Username already in use. Please try a different one.'});
      });

      document.getElementById('loginform').reset();    
    } else {
      this.setState({message: 'Password does not match'});
    }
  }

  getRefUsername(e) {
    this.setState({username: e.target.value});
    console.log(e.target.value);
  }

  getRefPassword(e) {
    this.setState({password: e.target.value});
  }

  getRefConfirmPassword(e) {
    this.setState({confirmPassword: e.target.value});
  }

  render() {
    console.log(this.state.message);
    return (
    <SignUpPresentational message={this.state.message} getRefUsername={this.getRefUsername.bind(this)} getRefPassword={this.getRefPassword.bind(this)} getRefConfirmPassword={this.getRefConfirmPassword.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
    );
  }
}

SignUpContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SignUpContainer;