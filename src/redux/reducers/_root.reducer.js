import { combineReducers } from 'redux';
import login from './login.reducer';
import group from './group.reducer';
import gList from './gList.reducer';



// rootReducer is the primary reducer for project
// It bundles up all of the other reducers so project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  login, // stores current login information
  group, // stores current group selected
  gList, //stores list of groups for dropdown
});

export default rootReducer;