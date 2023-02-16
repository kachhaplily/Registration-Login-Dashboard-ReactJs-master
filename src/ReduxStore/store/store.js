import {applyMiddleware, combineReducers, createStore} from 'redux';
import loginReducer from '../reducer/loginReducer';
import thunk from 'redux-thunk';
import regiReducer from '../reducer/regiReducer';

const rootReducer = combineReducers({
    login : loginReducer,
    regi : regiReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;