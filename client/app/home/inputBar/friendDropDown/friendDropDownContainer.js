import React, { PropTypes } from 'react'
import Select from 'react-select';

class FriendDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      selected: {},
    }
  }

  componentDidMount(){
    this.setState({selected: this.props.friends[0]});
  }

  select(item) {
      const name = item.label;
      const id = item.value;
      this.setState({selected: {name: name, id: id}});
      this.props.setOwner(id);
  }

  renderListItems() {
    const test = [];
    this.props.friends.forEach((friend) => {
      test.push({label: friend.fbname, value: friend.fbid});
    })
    return (
      <Select
        name="form-field-name"
        value="Friend"
        options={test}
        onChange={this.select.bind(this)}
        placeholder={"friends"}
      />
    );
  }

  render() {
    return (
      <div className='react-select'>
        {this.renderListItems()}
      </div>
    );
  }
}

export default FriendDropDown;