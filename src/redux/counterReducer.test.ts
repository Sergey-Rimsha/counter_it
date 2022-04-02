import {counterReducer, incCounterAC, resetCounterAC, setCounterValue, StateType} from "./counterReducer";

let startState: StateType

beforeEach( () => {
	startState = {
		counter: 2,
		maxValue: 5,
		startValue: 0,
		editMode: false,
		incorrectMode: false,
	};
})

test('test counter correct icn', () => {

	const action = incCounterAC();
	const endState = counterReducer(startState, action);

	expect(endState.counter).toBe(1);


});
test('test reset correct counter', () => {

	const action = resetCounterAC();
	const endState = counterReducer(startState, action);

	expect(endState.counter).toBe(endState.startValue);


});
test('test set new value correct counter', () => {

	const startValue = 1;
	const maxValue = 5;

	const action = setCounterValue(startValue, maxValue, false);
	const endState = counterReducer(startState, action);

	expect(endState.counter).toBe(startValue);
	expect(endState.startValue).toBe(startValue);
	expect(endState.maxValue).toBe(maxValue);
	expect(endState.editMode).toBe(false);


});