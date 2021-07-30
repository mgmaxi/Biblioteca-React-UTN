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
    case "ADD_PERSON_LIST":
      nuevoState.personas = action.listado;
      return nuevoState;
    case "DELETE_PERSON":
      nuevoState.personas =
        nuevoState.personas.filter(
          (unaPersona) =>
            unaPersona.id !==
            action.idPersonaARemover
        );
      return nuevoState;
      case "MODIFY_PERSON":
      const  index = nuevoState.listado.findIndex(
        (obj) =>
          obj.categoria_id ===
          parseInt(action.payload[0])
      );
      nuevoState.personas[index] = action.payload[0];
      return nuevoState;
      
      case "ADD_PERSON":
            nuevoState.personas.push(action.payload);
            return nuevoState;

    default:
      return state;
  }
}

export default personaReducer;
