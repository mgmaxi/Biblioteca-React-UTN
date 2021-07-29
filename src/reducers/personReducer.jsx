/** @format */

const estadoInicial = {
  personas: [],
};
function personaReducer(
  state = estadoInicial,
  action
) {
  const nuevoState = JSON.parse(
    JSON.stringify(state)
  );
  switch (action.type) {
    case "AGREGAR_LISTADO_PERSONAS":
      nuevoState.personas = action.listado;
      return nuevoState;
    case "ELIMINAR_PERSONA":
      nuevoState.personas =
        nuevoState.personas.filter(
          (unaPersona) =>
            unaPersona.id !==
            action.idPersonaARemover
        );
      return nuevoState;
      case "MODIFICAR_PERSONA":
      const  index = nuevoState.listado.findIndex(
        (obj) =>
          obj.categoria_id ===
          parseInt(action.payload[0])
      );
      nuevoState.personas[index] = action.payload[0];
      return nuevoState;

    default:
      return state;
  }
}

export default personaReducer;
