import React, {useEffect, useState} from "react";
import style from "./SetCounter.module.css"
import {Button} from "../Button";

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
	}, [maxValue, minValue])


	let styleBtn = error ? style.setButton : style.btnDisabled;


	return (
		<div className={style.counter}>
			<div className={style.setCounter}>
				<div className={style.box}>
					<div>max value:</div>
					<div className={style.setInput}>
						<span>{maxValue}</span>
						<div className={style.wrapBtn}>
							<button onClick={() => setMaxValue(maxValue + 1)}>+</button>
							<button onClick={() => setMaxValue(maxValue - 1)}>-</button>
						</div>
					</div>
				</div>
				<div className={style.box}>
					<div>min value:</div>
					<div className={style.setInput}>
						<span>{minValue}</span>
						<div className={style.wrapBtn}>
							<button onClick={() => setMinValue(minValue + 1)}>+</button>
							<button onClick={() => setMinValue(minValue - 1)}>-</button>
						</div>
					</div>
				</div>
			</div>

			<div>
				<Button
					title={"set"}
					style={styleBtn}
					disabled={false}
					callback={onClickSetCounter}/>
			</div>
		</div>
	)
}