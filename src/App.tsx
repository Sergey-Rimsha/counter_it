import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SetCounter} from "./components/SetCounter/SetCounter";

function App() {

	const [counter, setCounter] = useState(0);
	const [maxValue, setMaxValue] = useState(1);
	const [startValue, setStartValue] = useState(0);

	//setCounter mode
	const [editMode, setEditMode] = useState(false);
	const [incorrectValue, setIncorrectValue] = useState(false);

	// localStorage
	useEffect(() => {
		localStorage.setItem('startValue', startValue.toString());
		localStorage.setItem('maxValue', maxValue.toString());
	},[startValue, maxValue]);

	useEffect(() => {
		let startValue = localStorage.getItem("startValue");
		let localStartValue = JSON.parse(startValue ? startValue : "0");
		let maxValue = localStorage.getItem("maxValue");
		let localMaxValue = JSON.parse(maxValue ? maxValue : "5");
		setCounter(localStartValue);
		setStartValue(localStartValue);
		setMaxValue(localMaxValue);
	},[])

	const onClickIncBtn = () => {
		setCounter(counter + 1);
	}

	const onClickResetBtn = () => {
		setCounter(startValue);
	}

	const onClickSetCounterValue = (minCounter: number, maxCounter: number) => {
		setMaxValue(maxCounter);
		setStartValue(minCounter);
		setCounter(minCounter);
		setEditMode(false);
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
				incorrectValue={incorrectValue}
				onClickIncBtn={onClickIncBtn}
				onClickResetBtn={onClickResetBtn}/>
		</div>
	);
}

export default App;


