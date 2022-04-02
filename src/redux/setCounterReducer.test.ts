import {counterReducer, incCounterAC, resetCounterAC, setCounterValue, StateType} from "./counterReducer";
import {setCounterReducer, setMinCounterAC, StateSetCounterType} from "./setCounterReducer";

let startState: StateSetCounterType

beforeEach( () => {
	startState = {
		minCounter: 0,
		maxCounter: 5,
		btnActive: true,
	};
})

test('test setCounter correct minValue', () => {

	const minCounter = 1;

	const action = setMinCounterAC(minCounter);
	const endState = setCounterReducer(startState, action);

	expect(endState.minCounter).toBe(1);


});