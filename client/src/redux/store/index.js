import { createStore, combineReducers } from 'redux';

import ClientReducer from '~/redux/reducers/client';

const rootReducer = combineReducers({ clients: ClientReducer });

const store = createStore(rootReducer);

export default store;
