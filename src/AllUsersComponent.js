import React, { Component } from 'react';
import UserItem from './UserItem';
import AddUser from './AddUser';

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
    FirstName: 'Alberto',
    LastName: 'Ceballos'
  },    
];
localStorage.setItem('users',JSON.stringify(users));

class AllUsersComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[] //JSON.parse(localStorage.getItem('users'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    this.getUsers();  
  }

  getUsers = () => {
    fetch('https://reqres.in/api/users')
    .then(results => {
      return results.json();
    }).then(json =>{
      let users =[];      
      users = json.data.map(user =>{
        return {
            FirstName: user.first_name,
            LastName: user.last_name
        };
       });
       this.setState({users});
    });
  }

  onAdd = (FirstName, LastName) =>  {
    const users = this.getUsers();
    users.push({FirstName,LastName});
    this.setState({users});
  }

  onDelete = FirstName => {
    const users = this.getUsers();
    const filteredUsers = users.filter(user => { 
      return user.FirstName !== FirstName;
    });

    this.setState({users:filteredUsers});
  }

  onEditSubmit = (FirstName, LastName, OriginalFirstName) => {
    let users = this.getUsers();
    users.map(user => {
      if(user.FirstName === OriginalFirstName){
        user.FirstName = FirstName;
        user.LastName = LastName;
      }
      return user;
    });

    this.setState({users});
  }  

  render() {
    return (
          <div>
            <AddUser
              onAdd={this.onAdd}
            />

            <div>
            <h3>User list</h3>
              {
                this.state.users.map(user=> {
                return (                
                  <UserItem 
                    key={user.FirstName} 
                    {...user}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}                    
                   />                                  
                );
                })
              }
            </div>
        </div>
      );
  }
}

export default AllUsersComponent;