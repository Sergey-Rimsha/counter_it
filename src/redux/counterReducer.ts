
export type StateType = {
	counter: number
	maxValue: number
	startValue: number
	editMode: boolean
	incorrectValue: boolean
}

export type ActionCounterType = ReturnType<typeof incCounterAC>
	| ReturnType<typeof resetCounterAC>
	| ReturnType<typeof setCounterValue>

const initialState: StateType = {
	counter: 0,
	maxValue: 5,
	startValue: 0,
	editMode: false,
	incorrectValue: false,

}

export const counterReducer = (state: StateType = initialState , action: ActionCounterType) => {
	switch (action.type) {
		case "INC_COUNTER": {
			const stateCopy = {...state};
			stateCopy.counter = stateCopy.counter + 1

			return stateCopy;
		}
		case "RESET_COUNTER": {
			const stateCopy = {...state};
			stateCopy.counter = stateCopy.startValue

			return stateCopy;
		}
		case "SET_COUNTER_VALUE": {
			const stateCopy = {...state};
			stateCopy.startValue = action.minCounter;
			stateCopy.maxValue = action.maxCounter;
			stateCopy.counter = action.minCounter;
			stateCopy.editMode = false;

			return stateCopy;
		}

		default: {
			return state;
		}
	}
}


/// action

export const incCounterAC = () => {
	return {
		type: 'INC_COUNTER',
	} as const
};

export const resetCounterAC = () => {
	return {
		type: 'RESET_COUNTER'
	} as const
}

export const setCounterValue = (minCounter: number, maxCounter: number) => {
	return {
		type: 'SET_COUNTER_VALUE',
		minCounter,
		maxCounter,
	} as  const
}