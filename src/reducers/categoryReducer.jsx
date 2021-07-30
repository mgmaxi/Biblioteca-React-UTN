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
    case "ADD_CATEGORY_LIST":
      nuevoState.categorias = action.listado;
      return nuevoState;
    case "DELETE_CATEGORY":
      nuevoState.categorias =
        nuevoState.categorias.filter(
          (unaCategoria) =>
            unaCategoria.id !==
            action.idCategoriaARemover
        );
      return nuevoState;
    case "MODIFY_CATEGORY":
      const  index = nuevoState.listado.findIndex(
        (obj) =>
          obj.categoria_id ===
          parseInt(action.payload[0])
      );
      nuevoState.categorias[index].nombre = action.payload[1];
      return nuevoState;
      case "ADD_CATEGORY":
        nuevoState.categorias.push(action.payload);
        return nuevoState;
    default:
      return state;
  }
}

export default categoryReducer;
