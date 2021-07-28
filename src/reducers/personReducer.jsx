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
    case "REMOVER_PERSONA":
      nuevoState.personas =
        nuevoState.personas.filter(
          (unaPersona) =>
            unaPersona.id !==
            action.idPersonaARemover
        );
      return nuevoState;

    default:
      return state;
  }
}

export default personaReducer;
