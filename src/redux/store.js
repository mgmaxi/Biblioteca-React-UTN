import { createStore } from "redux";

const initialState = {
    libros: [],
    categorias: [],
    personas: []
};

function reducer(state = initialState, action) {
    const nuevoState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case "AGREGAR_LISTADO_LIBROS":
        nuevoState.libros = action.listado;
        return nuevoState;
    case "AGREGAR_LISTA_CATEGORIAS":
        nuevoState.categorias = action.listado;
        return nuevoState;
    case "AGREGAR_LISTA_PERSONAS":
        nuevoState.personas = action.listado;
        return nuevoState;
      default:
        return state;
    }
  }


export default createStore(reducer);