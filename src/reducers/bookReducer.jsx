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

  switch (action.type) {
    case "AGREGAR_LISTADO_LIBROS":
      nuevoState.libros = action.listado;
      return nuevoState;
    case "AGREGAR_LISTADO_CATEGORIAS":
      nuevoState.categorias = action.listado;
      return nuevoState;
    case "REMOVER_LIBRO":
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

    default:
      return state;
  }
}

export default bookReducer;
