import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    firstName : PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired 
};

const defaultProps = {
    firstName:"Juan",
    lastName:"Perez"
}

class EditUserComponent extends Component {
constructor(props){
    super(props);
    this.state = {
        firstName:props.firstName,
        lastName:props.lastName
    };
}

onChangeFirstName = event =>  {
    this.setState({firstName: event.target.value});
};
onChangeLastName = event =>  {
    this.setState({lastName: event.target.value});
};

saveChanges = () => {
    alert('Name: ' + this.state.firstName + ' <-> Last Name: ' + this.state.lastName);
};

  render() {
    return (
        <div>
            <h1 className="App-title">Edit User</h1>           
            <input type="text" 
                value={this.state.firstName} 
                placeholder="First Name" 
                onChange={this.onChangeFirstName} />
            
            <br/><br/>
            
            <input type="text" 
                value={this.state.lastName}
                placeholder="Last Name" 
                onChange={this.onChangeLastName} />

            <br/><br/>

            <button onClick={this.saveChanges} >
                SAVE CHANGES
            </button>
        </div>
      );
  }
}

EditUserComponent.propTypes = propTypes;
EditUserComponent.defaultProps = defaultProps;
export default EditUserComponent;