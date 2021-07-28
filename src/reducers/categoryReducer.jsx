/** @format */

const estadoInicial = {
  categorias: [],
};
function categoryReducer(
  state = estadoInicial,
  action
) {
  const nuevoState = JSON.parse(
    JSON.stringify(state)
  );
  switch (action.type) {
    case "AGREGAR_LISTADO_CATEGORIAS":
      nuevoState.categorias = action.listado;
      return nuevoState;
    case "REMOVER_CATEGORIA":
      nuevoState.categorias =
        nuevoState.categorias.filter(
          (unaCategoria) =>
            unaCategoria.id !==
            action.idCategoriaARemover
        );
      return nuevoState;

    default:
      return state;
  }
}

export default categoryReducer;
