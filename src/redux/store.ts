import {combineReducers, createStore} from "redux";
import {setCounterReducer} from "./setCounterReducer";
import {counterReducer} from "./counterReducer";


export type RootStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
	counter: counterReducer,
	setCounter: setCounterReducer
})


export const store = createStore(rootReducers);