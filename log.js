// Falta terminar el delete
//una de las cosas que arregle fue que el estado estaba definido doferente en el container component
// y en el reducer y al momento de responder el componente no podia entendia el estado porque venia con propiedades 
// diferentes ej: en AllUsers.js tenia
const mapStateToProps = state => ({
    users: state.users.items,
    onAdd: state.users.onAdd,
    onDelete: state.users.onDelete,
    onEditSubmit: state.users.onEditSubmit
  });

//   y en el reducer tenia un initial state 
// (que aunque se modifica con las funciones del reducer, algunas propiedades se regresaban como estaban por default)
const initialState = {
    items: [],
    newUser: null, //el error estaba aqui
    onDelete: null,
    onEditSubmit: null
  };
