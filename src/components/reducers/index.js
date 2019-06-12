import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../Login/reducer/loginReducer';

export default combineReducers({
  login: loginReducer,
  form: formReducer,
});
