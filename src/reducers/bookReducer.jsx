/** @format */

const estadoInicial = {
  libros: [],
};
function bookReducer(
  state = estadoInicial,
  action
) {
  const nuevoState = JSON.parse(
    JSON.stringify(state)
  );
  let index = 0;

  switch (action.type) {
    case "AGREGAR_LISTADO_LIBROS":
      nuevoState.libros = action.listado;
      return nuevoState;
    case "ELIMINAR_LIBRO":
      nuevoState.libros =
        nuevoState.libros.filter(
          (unLibro) =>
            unLibro.id !== action.idLibroARemover
        );

      return nuevoState;
    case "DEVOLVER_LIBRO":
      nuevoState.libros =
        nuevoState.libros.filter(
          (DevolverLibro) =>
            DevolverLibro.id !==
            action.idLibro1ADevolver
        );
      return nuevoState;
      
    case "MODIFICAR_LIBRO":
       index = nuevoState.libros.findIndex(
        (obj) =>
          obj.libro_id ===
          parseInt(action.payload[0])
      );
      nuevoState.libros[index].descripcion =
        action.payload[1];
      return nuevoState;


      case "PRESTAR_LIBRO":
        index = nuevoState.libros.findIndex(
            (obj) => obj.libro_id === parseInt(action.payload[0])
          );
          nuevoState.listado[index].personaid = action.payload[1];
          return nuevoState;


    default:
      return state;
  }
}

export default bookReducer;
