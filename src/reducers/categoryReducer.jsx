const estadoInicial = {
    listado: [],
  };
  function categoryReducer(state = estadoInicial, action) {
    let nuevoState = JSON.parse(JSON.stringify(state));
    
    switch (action.type) {
      case "AGREGAR_LISTADO_CATEGORIAS":
        nuevoState.listado = action.listado;
        return nuevoState;
    
      
        default:
        return state;
    }
  }
  
  export default categoryReducer;