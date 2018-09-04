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
  {
    FirstName: 'Albeeto',
    LastName: 'Ceballos'
  },    
];
localStorage.setItem('users',JSON.stringify(users));
class AllUsersComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    };
  }
  componentWillMount(){
    const users = JSON.parse(localStorage.getItem('users'));
    this.setState({users});
  }
  render() {
    return (
          <div>
          <h1 className="App-title">The user list</h1>
          <div>
            {
              this.state.users.map(user=> {
              return (
                <div key={user.FirstName}>
                  <span>{user.FirstName}</span>|
                  <span>{user.LastName}</span>
                </div>
              );
              })
            }
          </div>
        </div>
      );
  }
}

export default AllUsersComponent;