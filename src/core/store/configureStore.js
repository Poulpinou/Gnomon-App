import { createStore, combineReducers } from 'redux';

import userReducer from './reducers/userReducer'

const store = createStore(
    combineReducers(
        {
            userReducer
        }
    )
)

export default store;