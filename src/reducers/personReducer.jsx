/** @format */

const estadoInicial = {
  listado: [],
};
function personaReducer(
  state = estadoInicial,
  action
) {
  let nuevoState = JSON.parse(
    JSON.stringify(state)
  );
  switch (action.type) {
    case "AGREGAR_PERSONA":
      nuevoState.listado.push(action.payload);
      return nuevoState;
    case "AGREGAR_LISTADO_PERSONAS":
      nuevoState.listado = action.listado;
      return nuevoState;

    default:
      return state;
  }
}

export default personaReducer;
