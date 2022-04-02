import {combineReducers, createStore} from "redux";
import {setCounterReducer} from "./setCounterReducer";


export type RootStateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
	counter: combineReducers,
	setCounter: setCounterReducer,
})


export const store = createStore(rootReducers);