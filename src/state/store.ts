import { combineReducers, createStore,  applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import ImageReducer from './image-reducer'

const reducers = combineReducers({
	images: ImageReducer,
	form: formReducer,
});

type RootReducerType = typeof reducers

export type AppStateType = ReturnType<RootReducerType>
const store = createStore(reducers, applyMiddleware(thunk))

export default store;
