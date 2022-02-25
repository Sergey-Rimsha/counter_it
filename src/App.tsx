import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import style from "./components/Counter/Counter.module.css";
import {Button} from "./components/Button";

function App() {

	const [counter, setCounter] = useState(0);
	const [maxValue, setMaxValue] = useState(1);
	const [startValue, setStartValue] = useState(0);

	const onClickIncBtn = () => {
		setCounter(counter + 1)
	}

	const onClickResetBtn = () => {
		setCounter(0)
	}

	const onClickSetCounterValue = (maxValue: number, startValue: number) => {
		setCounter(startValue);
		setMaxValue(maxValue);
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


export type SetCounterPropsType = {
	onClickSetCounterValue: (maxValue: number, setMaxValue: number) => void
}

export const SetCounter = (props: SetCounterPropsType) => {

	const [maxValue, setMaxValue] = useState(1);
	const [minValue, setMinValue] = useState(0);

	const [error, setError] = useState(false);

	const onClickSetCounter = () => {
		props.onClickSetCounterValue(maxValue, minValue);
	}

	useEffect(() => {

		if (maxValue > minValue) {
			setError(true);
			console.log('dasd');
		} else {
			setError(false);
		}
	},[maxValue, minValue])


	let styleBtn = error ? style.setButton: style.btnDisabled;


	return (
		<div className={style.counter}>
			<div>
				<div>max value:</div>
				<div>
					<span>{maxValue}</span>
					<div>
						<button onClick={() => setMaxValue(maxValue + 1)}>+</button>
						<button onClick={() => setMaxValue(maxValue - 1)}>-</button>
					</div>
				</div>
			</div>
			<div>
				<div>min value:</div>
				<div>
					<span>{minValue}</span>
					<div>
						<button onClick={()=> setMinValue( minValue + 1)}>+</button>
						<button onClick={()=> setMinValue( minValue - 1)}>-</button>
					</div>
				</div>
			</div>
			<div>
				<Button
					title={"set"}
					style={styleBtn}
					disabled={error}
					callback={onClickSetCounter}/>
			</div>
		</div>
	)
}