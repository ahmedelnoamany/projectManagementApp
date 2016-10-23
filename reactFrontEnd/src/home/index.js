import React from 'react';
import { Link } from 'react-router';
import {Divider, Button} from 'stardust';

export default class Home extends React.Component{
  render(){
    return(
      <div className="ui two column middle aligned relaxed fitted stackable grid">
  <div className="column">
    <div className="ui form segment">
      <div className="field">
        <label>Username</label>
        <div className="ui left icon input">
          <input type="text" placeholder="Username" />
          <i className="user icon"></i>
        </div>
      </div>
      <div className="field">
        <label>Password</label>
        <div className="ui left icon input">
          <input type="password" />
          <i className="lock icon"></i>
        </div>
      </div>
      <div className="ui blue submit button">Login</div>
    </div>
  </div>
  <div className="ui vertical divider" align: "Center">
    Or
  </div>
  <div className="center aligned column">
      <Button primary as={Link} to="/signup">Sign Up</Button>
  </div>
</div>
    )
  }
}

Home.displayName = 'Home';
