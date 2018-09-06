import React, { Component } from 'react';

class UserItem extends Component {
  constructor(props){
    super(props);
    this.state={isEdit:false};

    this.onDelete = this.onDelete.bind(this);    
    this.onEdit = this.onEdit.bind(this); 
    this.onEditSubmit = this.onEditSubmit.bind(this);      
  }
 
  onDelete = () => {
    const{onDelete, UserId}= this.props;
    onDelete(UserId);
    // this.props.onDelete(this.props.FirstName); // with no destructuring
  }

  onEdit = () => {
    this.setState({isEdit:true});
  }

  onEditSubmit= event => {
    event.preventDefault();
    this.props.onEditSubmit(this.FirstNameInput.value, this.LastNameInput.value, this.props.UserId);
    this.setState({isEdit:false});
}
 

  render() {
    const {FirstName, LastName} = this.props;
    return ( 
        <div>
            {
                this.state.isEdit ?
                (
                    <form onSubmit={this.onEditSubmit}>                
                        <input 
                            placeholder="First Name"
                            ref={FirstNameInput => this.FirstNameInput = FirstNameInput}
                            defaultValue={FirstName}
                        />
                        <input 
                            placeholder="Last Name"
                            ref={LastNameInput => this.LastNameInput = LastNameInput}                
                            defaultValue={LastName}
                        />
                        <button>Save</button>    
                    </form>
                ):
                (
                <div>
                    <span>{FirstName}</span>
                    {` | `}
                    <span>{LastName}</span>
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

export default UserItem;