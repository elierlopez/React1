import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

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
                        ref={FirstNameInput => this.FirstNameInput = FirstNameInput}
                    />
                    <input placeholder="Last Name"
                        ref={LastNameInput => this.LastNameInput = LastNameInput}                
                    />
                    <button>Add</button>

                    <hr></hr>
                </form>
            </div>           
      );
  }
}

export default AddUser;