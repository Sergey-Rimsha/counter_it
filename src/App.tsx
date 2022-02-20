import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {

	const [counter, setCounter] = useState(0);

	const onClickIncBtn = () => {
		setCounter(counter + 1)
	}

	const onClickResetBtn = () => {
		setCounter(0)
	}

	return (
		<div className="App">
			<Counter
				counter={counter}
				onClickIncBtn={onClickIncBtn}
				onClickResetBtn={onClickResetBtn}/>
		</div>
	);
}

export default App;
