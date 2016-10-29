import React from 'react';
import { Link } from 'react-router';
import {Header, Button, Segment, Divider} from 'stardust';

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <Header as='h3' color = 'brown' textAlign='center' dividing>
          A project management solution created by
          <Header sub>
            Lauren and Ahmed
          </ Header>
        </Header>
        <Segment padded>
          <Button color="blue" as={Link} to="/login" fluid>Log In</Button>
          <Divider horizontal>Or</Divider>
          <Button color="green" as={Link} to="/signup" fluid>Sign Up</Button>
        </Segment>
      </div>
    )
  }
}

Home.displayName = 'Home';
// <div className="ui horizontal center aligned divider">
//  Or
// </div>
