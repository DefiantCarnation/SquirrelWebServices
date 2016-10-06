import React, { PropTypes } from 'react';

const SignUpPresentational = (props) => {
  return (
    <div>
      <div>
        <h3 className="header">Save Articles, Read Offline, Share with Friends</h3>
        <img className="bk-image" src="styles/img/background-wood.png"/>
      </div>

      <div className='buttoncontainer'>
        <h5 className="sub-head">Get started</h5>
        <br />
        <div className="loginBody">

          <div className="row center">
            <form style={{color: 'white'}} id='loginform' onSubmit={props.handleSubmit}>
                Username: <input onChange={props.getRefUsername} className='form-control' type='text' placeholder='Enter username'></input>
                Password: <input onChange={props.getRefPassword} className='form-control' type='text' placeholder='Enter password'></input>
                <h6 style={{color: 'white'}}>{props.message}</h6>
                <button type='submit' className='btn'>Submit</button>
            </form>
          </div>
          <div className="row center">
            <button className="downloadBtn">
              <h5>Download</h5>
              <h6>Squirrel beta 1.0</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUpPresentational;