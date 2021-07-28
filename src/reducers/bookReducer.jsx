const estadoInicial = {
  listado: [],
};
function bookReducer(state = estadoInicial, action) {
  let nuevoState = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
    case "AGREGAR_LISTADO_LIBROS":
      nuevoState.listado = action.listado;
      return nuevoState;
  
    
      default:
      return state;
  }
}

export default bookReducer;
