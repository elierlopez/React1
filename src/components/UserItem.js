import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onEditSubmit, onDelete } from "../actions/userActions";

class UserItem extends Component {
  constructor(props){
    super(props);
    this.state={isEdit:false};      
  }
 
  onDelete = () => {
    const{onDelete, UserId}= this.props;
    onDelete(UserId);
  }

  onEdit = () => {
    this.setState({isEdit:true});
  }

  onEditSubmit= event => {
    event.preventDefault();
    this.props.onEditSubmit(this.FirstNameInput.value, this.LastNameInput.value, this.props.id);
    this.setState({isEdit:false});
}
 

  render() {
    const {first_name, last_name} = this.props;
    return ( 
        <div>
            {
                this.state.isEdit ?
                (
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
                ):
                (
                <div>
                    <span>{first_name}</span>
                    {` | `}
                    <span>{last_name}</span>
                    {` | `}
                    <button onClick={this.onEdit}>Edit</button>
                    {` | `}
                    <button onClick={this.onDelete}>Delete</button>                
                </div>
                )
            }
        </div>          
      );
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
  