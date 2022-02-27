import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SetCounter} from "./components/SetCounter/SetCounter";

function App() {

	const [counter, setCounter] = useState(0);
	const [maxValue, setMaxValue] = useState(1);
	const [startValue, setStartValue] = useState(0);

	// useEffect(() => {
	// 	let localStartValue = JSON.parse(localStorage.getItem("startValue"));
	// 	setCounter(localStartValue)
	// },[])

	const onClickIncBtn = () => {
		setCounter(counter + 1);
	}

	const onClickResetBtn = () => {
		setCounter(startValue);
	}

	const onClickSetCounterValue = (maxValue: number, startValue: number) => {
		localStorage.setItem('startValue', startValue.toString());
		localStorage.setItem('maxValue', maxValue.toString());
		setCounter(startValue);
		setMaxValue(maxValue);
		setStartValue(startValue);
	}

	return (
		<div className="App">
			<SetCounter
				onClickSetCounterValue={onClickSetCounterValue}
			/>
			<Counter
				counter={counter}
				onClickIncBtn={onClickIncBtn}
				onClickResetBtn={onClickResetBtn}/>
		</div>
	);
}

export default App;


