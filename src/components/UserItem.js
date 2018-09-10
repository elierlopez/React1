import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Image } from 'react-bootstrap';
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

  onEditSubmit= (first_name, last_name, avatar) => {
    this.props.onEditSubmit(first_name, last_name,avatar, this.props.id);
    this.setState({isEdit:false});
}
 
simpleRow = (first_name, last_name, avatar) => {
    return (
            <tr >
                <td className="photo"> <Image src={avatar} circle responsive /> </td>
                <td className="names">{first_name}</td>
                <td className="names">{last_name}</td>                         
                <td className="actions"> <Button onClick={this.onEdit} bsStyle="warning" >EDIT</Button> </td>
                <td className="actions"> <Button onClick={this.onDelete} bsStyle="danger" >DELETE</Button> </td>                
            </tr>         
    );
}

actionsRow = (first_name, last_name, avatar) => {
        return (
            <tr>
                <td className="photo"> <Image src={avatar} circle responsive /> </td>

                <td className="names">
                    <input 
                        placeholder="First Name"
                        ref={FirstNameInput => this.FirstNameInput = FirstNameInput}
                        defaultValue={first_name}
                    />                    
                </td>

                <td className="names">
                    <input 
                        placeholder="Last Name"
                        ref={LastNameInput => this.LastNameInput = LastNameInput}                
                        defaultValue={last_name}
                    />                    
                </td>                                            
                <td className="actions"> <Button bsStyle="info" 
                        onClick={() =>  this.onEditSubmit(this.FirstNameInput.value, this.LastNameInput.value, avatar) }>
                        SAVE
                    </Button> 
                </td>            
                <td className="actions"> </td>
            </tr>
        );
    }
    
  render() {
    const {first_name, last_name, avatar} = this.props;
    return  this.state.isEdit 
            ? this.actionsRow(first_name, last_name, avatar)
            : this.simpleRow(first_name, last_name, avatar);
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
  