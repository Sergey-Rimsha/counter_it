export type StateType = {
	counter: number
	maxValue: number
	startValue: number
	editMode: boolean
	incorrectMode: boolean
}

export type ActionCounterType = ReturnType<typeof incCounterAC>
	| ReturnType<typeof resetCounterAC>
	| ReturnType<typeof setCounterValue>
	| ReturnType<typeof setEditModeAC>
	| ReturnType<typeof setIncorrectModeAC>

const initialState: StateType = {
	counter: 0,
	maxValue: 7,
	startValue: 0,
	editMode: false,
	incorrectMode: false,

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
			stateCopy.editMode = action.editMode;

			return stateCopy;
		}
		case "SET_EDIT_MODE": {
			const stateCopy = {...state};
			stateCopy.editMode = action.editMode;

			return stateCopy;
		}
		case "SET_INCORRECT_MODE": {
			const stateCopy = {...state};
			stateCopy.incorrectMode = action.incorrectMode;

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

export const setCounterValue = (minCounter: number, maxCounter: number, editMode: boolean) => {
	return {
		type: 'SET_COUNTER_VALUE',
		minCounter,
		maxCounter,
		editMode,
	} as  const
}

export const setEditModeAC = (editMode: boolean) => {
	return {
		type: 'SET_EDIT_MODE',
		editMode
	} as const
}
export const setIncorrectModeAC = (incorrectMode: boolean) => {
	return {
		type: 'SET_INCORRECT_MODE',
		incorrectMode
	} as const
}
