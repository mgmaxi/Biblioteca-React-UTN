const estadoInicial = {
    listado: [],
  };
  function personaReducer(state = estadoInicial, action) {
    let nuevoState = JSON.parse(JSON.stringify(state));
    let index = 0;
    switch (action.type) {
      case "AGREGAR_LISTADO_LIBROS":
        nuevoState.listado = action.listado;
        return nuevoState;
    
      
        default:
        return state;
    }
  }
  
  export default personaReducer;