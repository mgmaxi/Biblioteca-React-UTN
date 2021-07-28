const estadoInicial = {
  listado: [],
};
function bookReducer(state = estadoInicial, action) {
  let nuevoState = JSON.parse(JSON.stringify(state));
  let index = 0;
  switch (action.type) {
    case "AGREGAR_LISTADO_LIBROS":
      nuevoState.listado = action.listado;
      return nuevoState;
    case "ELIMINAR_LIBRO":
      nuevoState.listado = nuevoState.listado.filter(
        (unLibro) => unLibro.libro_id !== action.payload
      );
      return nuevoState;
    case "DEVOLVER_LIBRO":
      index = nuevoState.listado.findIndex(
        (obj) => obj.libro_id === action.payload
      );
      nuevoState.listado[index].persona_id = null;
      return nuevoState;
    
    default:
      return state;
  }
}

export default bookReducer;
