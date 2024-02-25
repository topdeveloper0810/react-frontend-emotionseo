import {combineReducers} from 'redux';

import memberinfo from './memberinfo';
import auth from './auth';

const reducers = combineReducers({
    memberinfo,
    auth
});

export default reducers;