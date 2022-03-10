import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SetCounter} from "./components/SetCounter/SetCounter";

function App() {

	const [counter, setCounter] = useState(0);
	const [maxValue, setMaxValue] = useState(1);
	const [startValue, setStartValue] = useState(0);

	//setCounter mode

	const [minCounter, setMinCounter] = useState(0);
	const [maxCounter, setMaxCounter] = useState(1);
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		let startValue = localStorage.getItem("startValue");
		let localStartValue = JSON.parse(startValue ? startValue : "0");
		let maxValue = localStorage.getItem("maxValue");
		let localMaxValue = JSON.parse(maxValue ? maxValue : "5");
		setCounter(localStartValue);
		setStartValue(localStartValue);
		setMaxValue(localMaxValue);
		setMinCounter(localStartValue);
		setMaxCounter(localMaxValue);

	},[])

	const onClickIncBtn = () => {
		setCounter(counter + 1);
	}

	const onClickResetBtn = () => {
		setCounter(startValue);
	}

	// localStorage

	const onClickSetCounterValue = () => {
		localStorage.setItem('startValue', minCounter.toString());
		localStorage.setItem('maxValue', maxCounter.toString());
		setMaxValue(maxCounter);
		setStartValue(minCounter);
		setCounter(minCounter);
		setEditMode(false)
	}

	const onHandlerMaxCounter = (operator: string) => {
		setEditMode(true);
		if (operator === '+') {
			setMaxCounter(maxCounter + 1);
		} else {
			setMaxCounter(maxCounter - 1);
		}
	}
	const onHandlerMinCounter = (operator: string) => {
		setEditMode(true);
		if (operator === '+') {
			setMinCounter(minCounter + 1);
		} else {
			setMinCounter(minCounter - 1);
		}
	}



	return (
		<div className="App">
			<SetCounter
				minCounter={minCounter}
				maxCounter={maxCounter}
				editMode={editMode}
				onHandlerMaxCounter={onHandlerMaxCounter}
				onHandlerMinCounter={onHandlerMinCounter}
				onClickSetCounterValue={onClickSetCounterValue}
			/>
			<Counter
				counter={counter}
				maxValue={maxValue}
				startValue={startValue}
				onClickIncBtn={onClickIncBtn}
				onClickResetBtn={onClickResetBtn}/>
		</div>
	);
}

export default App;


