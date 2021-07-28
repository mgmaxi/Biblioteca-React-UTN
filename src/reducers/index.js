import bookReducer from './bookReducer';
import personReducer from './personReducer';
import categoryReducer from './categoryReducer';
import {combineReducers} from "redux";


export default combineReducers({
  bookReducer, personReducer, categoryReducer
})