import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import { onAdd } from "../actions/userActions";


class AddUser extends Component {

    onSubmit = event => {
        event.preventDefault();
        this.props.onAdd(this.FirstNameInput.value , this.LastNameInput.value);
        this.FirstNameInput.value = '';
        this.LastNameInput.value ='';
    }
    
  render() {     
    return (
            <div>
                <h3>Add user</h3>        
                <form onSubmit={this.onSubmit}>    

               
                            
                    <input placeholder="First Name"
                        ref={firstName => this.FirstNameInput = firstName}
                    />
                    <input placeholder="Last Name"
                        ref={lastName => this.LastNameInput = lastName}                
                    />
                    <Button bsStyle="info" type="submit" className="btn btn-primary">Add</Button>

                    <hr></hr>
                </form>
            </div>           
      );
  }
}

AddUser.propTypes = {
    onAdd: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { onAdd }
  )(AddUser);
  
