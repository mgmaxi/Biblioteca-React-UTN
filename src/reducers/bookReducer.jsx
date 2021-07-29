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
    case "ADD_BOOK_LIST":
      nuevoState.libros = action.listado;
      return nuevoState;
    case "DELETE_BOOK":
      nuevoState.libros =
        nuevoState.libros.filter(
          (unLibro) =>
            unLibro.id !== action.idLibroARemover
        );

      return nuevoState;
    case "RETURN_BOOK":
      nuevoState.libros =
        nuevoState.libros.filter(
          (DevolverLibro) =>
            DevolverLibro.id !==
            action.idLibro1ADevolver
        );
      return nuevoState;
      
    case "MODIFY_BOOK":
       index = nuevoState.libros.findIndex(
        (obj) =>
          obj.libro_id ===
          parseInt(action.payload[0])
      );
      nuevoState.libros[index].descripcion =
        action.payload[1];
      return nuevoState;


      case "BORROW_BOOK":
        index = nuevoState.libros.findIndex(
            (obj) => obj.libro_id === parseInt(action.payload.id)
          );
          nuevoState.listado[index].personaid = action.payload.persona;
          return nuevoState;

          case "ADD_BOOK":
            nuevoState.listado.push(action.payload);
            return nuevoState;


    default:
      return state;
  }
}

export default bookReducer;
