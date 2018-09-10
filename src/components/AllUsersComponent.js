import { connect } from "react-redux";
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
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

     UsersTable = () => { 
     return (     
          <Table striped bordered condensed hover>
          <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th></th>
                <th></th>
              </tr>
          </thead>
          <tbody>
            {this.renderUserItems()}
          </tbody>
        </Table>     
    );
  }
  
  renderUserItems = () => {
    return this.props.users.map(user=> {
      return (                         
          <UserItem 
            key={user.id} 
            {...user}
            onDelete={this.onDelete}
            onEditSubmit={this.onEditSubmit}                    
          />                           
      );
      });
                         
  }

  render() {
    return (
          <div>
            <AddUser onAdd={this.onAdd}  />                                  
            <hr/>            
            {this.UsersTable()}            
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