import React, { Component } from 'react';
const users = [
  {
    FirstName: 'Elier',
    LastName: 'Lopez'
  },
  {
    FirstName: 'Adriana',
    LastName: 'Elizabeth'
  },  
];
localStorage.setItem('products',JSON.stringify(users));
class AllUsersComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    };
  }
  componentWillMount(){
    const users = JSON.parse(localStorage.getItem('users'))
  }
  render() {
    return (
          <div>
          <h1 className="App-title">The user list</h1>
          <div>
            {
              this.state.users.map(user=> {
              return (
                <diV key={user.name}>
                  <span>{user.name}</span>
                </diV>
              );
              })
            }
          </div>
        </div>
      );
  }
}

export default AllUsersComponent;