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

const defaultAvatar = "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=";
 export const onAdd = (name,lastname, avatar=defaultAvatar) => dispatch => {
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
      avatar:avatar
      })
    })
    .then(results => {
      return results.json();
    })
    .then(user => {
        user.first_name = name;
        user.last_name = lastname;
        user.avatar = avatar;
        dispatch({
          type: ADD_USER,
          payload: user
        });
      });   
  };

  export const onEditSubmit = (name, lastname, avatar, userId) => dispatch => {
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
          avatar:avatar
        })
      })
      .then(response => response.json())
      .then(user =>{
        user.id = userId;
        user.first_name = name;
        user.last_name = lastname;
        user.avatar = avatar;
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


