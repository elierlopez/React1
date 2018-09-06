import React, { Component } from 'react';
import UserItem from './UserItem';
import AddUser from './AddUser';

class AllUsersComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[] 
    };
  }

  componentWillMount(){
    this.getUsers();  
  }

  getUsers = (page=1) => {
    const url = 'https://reqres.in/api/users?page=' + page;
    fetch(url)
    .then(results => {
      return results.json();})
    .then(json =>{
      let users =[];      
      users = json.data.map(user =>{
        return {
            UserId: user.id,
            FirstName: user.first_name,
            LastName: user.last_name
        };
       });
       this.setState({users});
    },
    (error) => {
      console.log(error);
    });
    return this.state.users;
  }

  onAdd = (FirstName, LastName) =>  {
    const url = 'https://reqres.in/api/users';
    fetch(url,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    },
    {
      body: JSON.stringify({
      name: FirstName,
      job: LastName
      })
    })
    .then(results => {
      return results.json();
    })
    .then(json => {
      alert('UserId: ' + json.id + ' <--> CreatedAt: ' + json.createdAt);            
    }).catch( error => {
      console.log(error);
    });
   
    this.getUsers();
  }

  onDelete = userId => {
    const url = 'https://reqres.in/api/users/' + userId;
    fetch(url,
    {
      method: 'DELETE'
    })
    .then(response => {
      alert('Status Code:' + response.status);
      console.log(response);
    })
    .catch( error => {
      console.log(error);
    });
   
    this.getUsers();
  }

  onEditSubmit = (firstName, lastName, userId) => {
    const url = 'https://reqres.in/api/' + userId
    fetch(url,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: firstName,
          job: lastName,
        }),
      })
      .then(response => response.json())
      .then(json => {
        alert('Name: ' + json.name + ' <--> Job: ' + json.job + ' <--> UpdatedAt: ' + json.updatedAt);
      });

      this.getUsers();
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
                    key={user.UserId} 
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