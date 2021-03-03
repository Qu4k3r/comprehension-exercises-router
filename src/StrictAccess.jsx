import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;
    if (username !== 'jaum' || password !== '1234') {
      alert('Access Denied!')
      return <Redirect to="/" />;
    }
    return (<><h2>User Area</h2><p>Welcome back, Mr. Jhon!</p></>);
    // console.log('hello world')
  }
}

export default StrictAccess;
