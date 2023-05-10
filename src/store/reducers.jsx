import { default as authReducer } from './auth/authSlice';
import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
