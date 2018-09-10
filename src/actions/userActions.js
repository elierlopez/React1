import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from "./types";


export const getUsers = (page=1) => dispatch => {
    const url = 'https://reqres.in/api/users?page=' + page;
    fetch(url)
    .then(results => {
      return results.json();})
    .then(users =>
        dispatch({
            type: GET_USERS,
            payload: users
          })
    );
  };


 export const onAdd = (name,lastname) => dispatch => {
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
      name: name,            
      lastname: lastname,
      })
    })
    .then(results => {
      return results.json();
    })
    .then(user => {
        user.first_name = name;
        user.last_name = lastname;
        dispatch({
          type: ADD_USER,
          payload: user
        });
      });   
  };

  export const onEditSubmit = (name, lastname, userId) => dispatch => {
    const url = 'https://reqres.in/api/' + userId
    fetch(url,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          lastname: lastname,
        })
      })
      .then(response => response.json())
      .then(user =>{
        user.id = userId;
        user.first_name = name;
        user.last_name = lastname;
        dispatch({
          type: UPDATE_USER,
          payload: user
        });
      });
  };    

  export const onDelete = userId => dispatch => {
    const url = 'https://reqres.in/api/users/' + userId;
    fetch(url,
    {
      method: 'DELETE'
    })
    .then(() =>
        dispatch({
            type: DELETE_USER,
            payload: userId
        })
    );
  };


