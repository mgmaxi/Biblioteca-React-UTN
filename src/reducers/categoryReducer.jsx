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
    case "ELIMINAR_CATEGORIA":
      nuevoState.categorias =
        nuevoState.categorias.filter(
          (unaCategoria) =>
            unaCategoria.id !==
            action.idCategoriaARemover
        );
      return nuevoState;
    case "MODIFICAR_CATEGORIA":
      const  index = nuevoState.listado.findIndex(
        (obj) =>
          obj.categoria_id ===
          parseInt(action.payload[0])
      );
      nuevoState.categorias[index].nombre = action.payload[1];
      return nuevoState;

    default:
      return state;
  }
}

export default categoryReducer;
