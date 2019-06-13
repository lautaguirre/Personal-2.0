import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../LoginScreen/reducer/loginReducer';

export default combineReducers({
  login: loginReducer,
  form: formReducer,
});
