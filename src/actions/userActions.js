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


 export const onAdd = (name, job) => dispatch => {
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
      job: job
      })
    })
    .then(results => {
      return results.json();
    })
    .then(user => {
        user.name = name;
        user.job = job;
        dispatch({
          type: ADD_USER,
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

  export const onEditSubmit = (firstName, job, userId) => dispatch => {
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
          job: job,
        }),
      })
      .then(response => response.json())
      .then(user =>
            dispatch({
                type: UPDATE_USER,
                payload: user
            })
        );
  };    

