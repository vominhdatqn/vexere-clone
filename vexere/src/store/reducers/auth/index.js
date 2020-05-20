import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';

export const authReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});
