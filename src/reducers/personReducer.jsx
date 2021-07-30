/** @format */

const estadoInicial = {
  personas: [],
};
let index = 0;
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
        nuevoState.personas.findIndex(
          (obj) => obj.persona_id === action.payload[0].persona_id
        );
         nuevoState.personas[index] = action.payload[1];
         return nuevoState;
      
      
      
      
      case "ADD_PERSON":
            nuevoState.personas.push(action.payload);
            return nuevoState;

    default:
      return state;
  }
}

export default personaReducer;
