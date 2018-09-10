import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { onEditSubmit, onDelete } from "../actions/userActions";

class UserItem extends Component {
  constructor(props){
    super(props);
    this.state={isEdit:false};      
  }
 
  onDelete = () => {
    const{onDelete, id}= this.props;
    onDelete(id);
  }

  onEdit = () => {
    this.setState({isEdit:true});
  }

  onEditSubmit= event => {
    event.preventDefault();
    this.props.onEditSubmit(this.FirstNameInput.value, this.LastNameInput.value, this.props.id);
    this.setState({isEdit:false});
}
 
simpleRow = (first_name, last_name) => {
    return (
            <tr>
                <td>{first_name}</td>
                <td>{last_name}</td>                         
                <td> <Button onClick={this.onEdit} bsStyle="warning" >Edit</Button> </td>
                <td> <Button onClick={this.onDelete} bsStyle="danger" >Delete</Button> </td>                
            </tr>         
    );
}

actionsRow = (first_name, last_name) => {
    return (
        <tr>
            <td colSpan="4">

                <form onSubmit={this.onEditSubmit}>                    
                    <input 
                        placeholder="First Name"
                        ref={FirstNameInput => this.FirstNameInput = FirstNameInput}
                        defaultValue={first_name}
                    />                    
                                                
                    <input 
                        placeholder="Last Name"
                        ref={LastNameInput => this.LastNameInput = LastNameInput}                
                        defaultValue={last_name}
                    />
                
                    <button>Save</button>                     
                </form>

            </td>
        </tr>
    );
}

  render() {
    const {first_name, last_name} = this.props;
    return  this.state.isEdit 
            ? this.actionsRow(first_name, last_name)
            : this.simpleRow(first_name, last_name);
  }
}

UserItem.propTypes = {
    onEditSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { onEditSubmit, onDelete }
  )(UserItem);
  