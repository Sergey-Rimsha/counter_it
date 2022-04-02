import {RootStateType} from "./store";

export type StateSetCounterType = {
	minCounter: number
	maxCounter: number
	btnActive: boolean
}

export type ActionCounterType = ReturnType<typeof setMinCounterAC>
	| ReturnType<typeof setMaxCounterAC>
	| ReturnType<typeof setActiveBtnAC>


const initialState: StateSetCounterType = {
	maxCounter: 5,
	minCounter: 0,
	btnActive: true,

}

export const setCounterReducer = (state: StateSetCounterType = initialState , action: ActionCounterType) => {
	switch (action.type) {
		case "SET_MIN_COUNTER": {
			const stateCopy = {...state};
			stateCopy.minCounter = action.minCounter;

			return stateCopy;
		}
		case "SET_MAX_COUNTER": {
			const stateCopy = {...state};
			stateCopy.maxCounter = action.maxCounter;

			return stateCopy;
		}
		case "SET_ACTIVE_BTN": {
			const stateCopy = {...state};
			stateCopy.btnActive = action.active;

			return stateCopy;
		}

		default: {
			return state;
		}
	}
}


/// action

export const setMinCounterAC = (minCounter: number) => {
	return {
		type: 'SET_MIN_COUNTER',
		minCounter
	} as const
};

export const setMaxCounterAC = (maxCounter: number) => {
	return {
		type: 'SET_MAX_COUNTER',
		maxCounter
	} as const
};
export const setActiveBtnAC = (active: boolean) => {
	return {
		type: 'SET_ACTIVE_BTN',
		active
	} as const
};

export const selectorSetCounterState = (store: RootStateType) => store.setCounter

