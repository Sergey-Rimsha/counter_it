import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SetCounter} from "./components/SetCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {
	incCounterAC,
	resetCounterAC,
	setCounterValue,
	setEditModeAC,
	setIncorrectModeAC, StateType
} from "./redux/counterReducer";
import {RootStateType} from "./redux/store";

function App() {

	const dispatch = useDispatch()

	let {
		counter,
		maxValue,
		startValue,
		editMode,
		incorrectMode,
	} = useSelector<RootStateType, StateType>(state => state.counter);



	// localStorage
	// useEffect(() => {
	// 	localStorage.setItem('startValue', startValue.toString());
	// 	localStorage.setItem('maxValue', maxValue.toString());
	// },[startValue, maxValue]);

	useEffect(() => {
		let startValue = localStorage.getItem("startValue");
		let localStartValue = JSON.parse(startValue ? startValue : "0");
		let maxValue = localStorage.getItem("maxValue");
		let localMaxValue = JSON.parse(maxValue ? maxValue : "5");

		dispatch(setCounterValue(localStartValue, localMaxValue, false))
	},[])

	const onClickIncBtn = () => {
		dispatch(incCounterAC())
	}

	const onClickResetBtn = () => {
		dispatch(resetCounterAC());
	}

	const onClickSetCounterValue = (minCounter: number, maxCounter: number) => {
		dispatch(setCounterValue(minCounter, maxCounter, false));
	}

	const setEditMode = (editMode: boolean) => {
		dispatch(setEditModeAC(editMode));
	}

	const setIncorrectValue = (incorrectMode: boolean) => {
		dispatch(setIncorrectModeAC(incorrectMode));
	}

	return (
		<div className="App">
			<SetCounter
				editMode={editMode}
				setEditMode={setEditMode}
				onClickSetCounterValue={onClickSetCounterValue}
				setIncorrectValue={setIncorrectValue}
			/>
			<Counter
				counter={counter}
				maxValue={maxValue}
				startValue={startValue}
				editMode={editMode}
				incorrectValue={incorrectMode}
				onClickIncBtn={onClickIncBtn}
				onClickResetBtn={onClickResetBtn}/>
		</div>
	);
}

export default App;


