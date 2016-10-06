import React, { PropTypes } from 'react';
import NavBarPresentational from './NavBarPresentational';
import NavBarPresentationalLoggedOut from './NavBarPresentationalLoggedOut';
import NavBarPresentationalSignUp from './NavBarPresentationalSignUp';

import axios from 'axios';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      whichNavBar: 'login',
    };
  }

  // in the future this needs to be deleted and the redux state tree should update once only on log out and log in.
  componentDidMount(){

    console.log('what is the end point? ', this.props);

    axios.get('/checkAuth')
    .then((user) => {
      if(user.data === "") {
        this.setState({
          isLoggedIn: false
        });
      } else {
        this.setState({
          isLoggedIn: true
        });
      }
    })
    .catch((err) => {
      console.log('navbar auth error');
    })
  }

  componentWillReceiveProps(nextProps){
    const pathname = nextProps.location.pathname
    if(pathname === '/signup'){
      this.setState({whichNavBar: 'signup'});
    }
    if(pathname === '/home'){
      this.setState({isLoggedIn: true});
    }
    if(pathname === '/'){
      this.setState({whichNavBar: 'login'});
    }
  }

  render() {
    const whichNavBar = this.state.isLoggedIn ? (<NavBarPresentational />) : this.state.whichNavBar === 'login' ? (<NavBarPresentationalLoggedOut />) : (<NavBarPresentationalSignUp/>);
    return (
    <div id='navbar'>
      <div className='navbar class="card-panel'>
        {whichNavBar}
      </div>
      <div className='navbarchildren valign-wrapper'>
        {this.props.children}
      </div>
    </div>
    );
  }
}

NavBarContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NavBarContainer;
