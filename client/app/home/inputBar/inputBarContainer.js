import React, { Proptypes } from 'react';
import InputBarPresentational from './InputBarPresentational';
import axios from 'axios';

class InputBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      owner: '',
      assignee: '',
      userId: '',
    }
  }
  componentWillReceiveProps(props){
    if(props.userId){
     this.setState({
      userId: props.userId.fbid,
      assignee: props.userId.fbid,
      owner: props.userId.fbid,
     })
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    var inputUrl = this.state.input;
    var input = document.getElementById('inputClear').value = '';
    this.setState({input: ''});

    this.props.handleUpdateInbox(inputUrl, this.state.owner, this.state.userId);
    // axios.put(`http://localhost:8888/links/friends/${this.state.owner}/${this.state.userId}`, {link: inputUrl})
    // .then(function(data){
    //   console.log(data);
    // })
    // .catch(function(err){
    //   console.log('error in inputBarContainer handleSubmit', err);
    // })
  }

  render() {
    return (
      <InputBarPresentational onSubmit={this.handleSubmit.bind(this)} onChange={this.handleInputChange.bind(this)}/>
    )
  }
}

export default InputBarContainer;
