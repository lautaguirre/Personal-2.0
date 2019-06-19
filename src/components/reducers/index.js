import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../LoginScreen/reducer/loginReducer';
import dashboardReducer from '../DashboardScreen/reducer/dashboardReducer';

export default combineReducers({
  login: loginReducer,
  form: formReducer,
  dashboard: dashboardReducer,
});
