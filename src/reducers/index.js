import { reducerSession } from './reducerSession';
import { reducer as form } from 'redux-form';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	reducerSession,
	form
});

export default rootReducer;
