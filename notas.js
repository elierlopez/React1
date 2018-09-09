// el ejemplo del todo que no pude hacer funcionar
// https://redux.js.org/basics/actions

// tutorial largo de 8 etapas
// https://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/


// Hay que definir como es mi estado para poder definir mis reducers.
// Ejemplo de estado:
{
    users:[],    //un arreglo de objetos 
    visibilityFIlter: 'Actives' // una propiedad que define si hay que mostrar los activos o los inactivos
}

// Hay que tener en mente que el reducer recibe: 
//   state y action
// y responde un newState

// por esa razon hay que tener bien presente como esta compuesto el objeto state
// ya que el reducer tiene que regresarlo tal como es. Usando el state de arriba el redicer deberia regresar 
// algo como:
{
    users:[{name:'elier', lastName:'lopez'}],    //un arreglo de objetos 
    visibilityFIlter: 'Inactives' // una propiedad que define si hay que mostrar los activos o los inactivos
}