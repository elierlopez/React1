import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onAdd } from "../actions/userActions";



class AddUser extends Component {
//   constructor(props){
//     super(props);
//     // this.onSubmit = this.onSubmit.bind(this);
//   }

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
                    <button>Add</button>

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
  
