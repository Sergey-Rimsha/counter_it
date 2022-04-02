
export type StateSetCounterType = {
	minCounter: number
	maxCounter: number
	btnActive: boolean
}

export type ActionCounterType = ReturnType<typeof setMinCounterAC>
	| ReturnType<typeof setMaxCounterAC>
	| ReturnType<typeof setActiveBtnAC>


const initialState: StateSetCounterType = {
	minCounter: 0,
	maxCounter: 5,
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
			stateCopy.minCounter = action.maxCounter;

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

