import { createStore, combineReducers, applyMiddleware } from 'redux';
import URLReducer from './reducers/URLReducer';
import thunk from 'redux-thunk';

/**
 * Bind the reducers to the store so that they are accessible from any component they're needed in.
 */
const reducers = combineReducers({
  URLReducer: URLReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store