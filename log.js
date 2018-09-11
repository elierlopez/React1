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


  // para copiar un objeto con el spread operator
   const newObj = {...originalObj};
  // Para copiar un arreglo 
   const newArr = [...originalObj];
  // Para obtener una copia moficada del objeto
   const newObj = {...originalObj, PropToModify : 'Modified Value'};
  // Para sacar una copia de un arreglo y agregare un elemento al arreglo 
  const newArray = [...originalArray,
                                      {
                                        id: newId,
                                        value: 'Some value',                                         
                                      }
                   ]

// EL <Button> de react-boostrap no hace el submit de una forma como lo hace el <button/> normal

// para bajar un branch remoto que no tengo localmente
// $ git checkout --track origin/newBranch
// Va a crear un branch local que se llama igual al remoto "NewBranch"