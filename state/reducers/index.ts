import { combineReducers } from "@reduxjs/toolkit";

import authReducer, { authSlice } from "./auth/authReducer";
import dashboardReducer, { dashboardSlice } from "./dashboard/dashboardReducer";
import commonReducer, { commonSlice } from "./common/commonReducer";

export default combineReducers({
  [authSlice.name]: authReducer,
  [dashboardSlice.name]: dashboardReducer,
  [commonSlice.name]: commonReducer,
});
