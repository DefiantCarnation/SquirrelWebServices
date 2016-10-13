import React, { PropTypes } from 'react';

const FriendSearchBarPresentational = (props) => {
  return (
      <div className="row">
        <div className=" small-12 columns">
          <div className="row collapse">
            <div className="small-12 large-12  columns ">
              <div className=" keyword">
              </div>
                <form className='inputfield inputfield2' onSubmit={props.onSubmit}>
                <input style={{fontSize: '20px', paddingLeft: '5%'}} id='inputClear' onChange={props.onChange} type="text" className="search-field" placeholder="Search for friends here"/>
                <button className="stashBtn" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendSearchBarPresentational;
