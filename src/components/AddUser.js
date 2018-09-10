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
            // <form onSubmit={this.onSubmit}>                                               
            //     <h3>Add user</h3>
            //     <input placeholder="First Name"
            //         ref={firstName => this.FirstNameInput = firstName}
            //     />
            //     <input placeholder="Last Name"
            //         ref={lastName => this.LastNameInput = lastName}                
            //     />
            //     <Button bsStyle="info" type="submit" className="btn btn-primary">Add User</Button>

            //     <hr></hr>
            // </form>    
            <form onSubmit={this.onSubmit}>
                <div className="form-group row">
                    <label htmlFor="firstNameInput" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                            ref={firstName => this.FirstNameInput = firstName} 
                            className="form-control" 
                            id="firstNameInput"                          
                            placeholder="Enter First Name"/>                    
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lastNameInput" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text"
                            ref={lastName => this.LastNameInput = lastName} 
                            className="form-control" 
                            id="lastNameInput"                          
                            placeholder="Enter Last Name"/>                    
                    </div>
                </div>  
                <Button bsStyle="info" type="submit" className="btn btn-primary">SUBMIT</Button>
            </form>                              
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
  
