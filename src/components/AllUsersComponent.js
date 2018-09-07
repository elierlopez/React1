import { connect } from "react-redux";
import React, { Component } from 'react';
import PropTypes from "prop-types";
import { getUsers } from "../actions/userActions";
import UserItem from './UserItem';
import AddUser from './AddUser';

class AllUsersComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[] 
    };
  }

  componentDidMount(){
    this.props.getUsers();
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
                this.props.users.map(user=> {
                return (     
                  <UserItem 
                    key={user.id} 
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

AllUsersComponent.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  onAdd: PropTypes.object,
  onDelete: PropTypes.number,
  onEditSubmit: PropTypes.object
};

const mapStateToProps = state => ({
  users: state.users.items,
  onAdd: state.users.onAdd,
  onDelete: state.users.onDelete,
  onEditSubmit: state.users.onEditSubmit
});

export default connect(
  mapStateToProps,
  { getUsers }
)(AllUsersComponent);