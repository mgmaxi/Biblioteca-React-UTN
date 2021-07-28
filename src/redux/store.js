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
    case "AGREGAR_LISTADO_CATEGORIAS":
        nuevoState.categorias = action.listado;
        return nuevoState;
    case "AGREGAR_LISTADO_PERSONAS":
        nuevoState.personas = action.listado;
        return nuevoState;
    case "REMOVER_LIBRO":
      nuevoState.lisbros = nuevoState.libros.filter((unLibro) => unLibro.id !== action.idLibroARemover);
      return nuevoState;
    case "REMOVER_CATEGORIA":
      nuevoState.categorias = nuevoState.categorias.filter((unaCategoria) => unaCategoria.id !== action.idCategoriaARemover);
      return nuevoState;
    case "REMOVER_PERSONA":
      nuevoState.personas = nuevoState.personas.filter((unaPersona) => unaPersona.id !== action.idPersonaARemover);
      return nuevoState;
      default:
        return state;
    }
  }


export default createStore(reducer);