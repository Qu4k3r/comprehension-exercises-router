// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage = 'Hi There', id }) => {
  if (id) return <p> {greetingMessage}, User number { id } </p>;
  return (<div>
    <h2> Users </h2>
      <p> {greetingMessage}, this is my awesome Users component</p>
    </div>
  )
};

export default Users;

// import React, { Component } from 'react';

// class Users extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Users</h2>
//         <p> My awesome Users component </p>
//       </div>
//     );
//   }
// };

// export default Users;
