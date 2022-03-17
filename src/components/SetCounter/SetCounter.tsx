import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./SetCounter.module.css"
import {Button} from "../Button";

export type SetCounterPropsType = {
	editMode: boolean
	setEditMode: (editeMode: boolean) => void
	onClickSetCounterValue: (maxCounter: number, minCounter: number) => void
	setIncorrectValue:(edit: boolean) => void
}

export const SetCounter = (props: SetCounterPropsType) => {


	const [maxCounter, setMaxCounter] = useState(1);
	const [minCounter, setMinCounter] = useState(0);

	const [btnActive, setBtnActive] = useState(true);

	const onClickSetCounter = () => {
		if (maxCounter > minCounter && maxCounter > -1  && minCounter > -1) {
			props.onClickSetCounterValue(minCounter, maxCounter);
			setBtnActive(false);
		} else {
			setBtnActive(true);
		}

		console.log('onClickSetCounter');
	}


	useEffect(() => {
		if (maxCounter > minCounter && maxCounter > -1  && minCounter > -1) {
			// setBtnActive(false);
			props.setIncorrectValue(false);
		} else {
			props.setIncorrectValue(true);
			// setBtnActive(true);
		}
	},[maxCounter, minCounter])


	useEffect(() => {
		let startValue = localStorage.getItem("startValue");
		let localStartValue = JSON.parse(startValue ? startValue : "0");
		let maxValue = localStorage.getItem("maxValue");
		let localMaxValue = JSON.parse(maxValue ? maxValue : "5");
		setMinCounter(localStartValue);
		setMaxCounter(localMaxValue);

	},[])


	const onClickHandlerMaxCounter = (e: ChangeEvent<HTMLInputElement>) => {
		props.setEditMode(true);
		setBtnActive(false);
		setMaxCounter(Number(e.currentTarget.value));
	}

	const onClickHandlerMinCounter = (e: ChangeEvent<HTMLInputElement>) => {
		props.setEditMode(true);
		setBtnActive(false);
		setMinCounter(Number(e.currentTarget.value));
	}


	return (
		<div className={style.counter}>
			<div className={style.setCounter}>
				<div className={style.box}>
					<div>max value:</div>
					<div className={style.setInput}>
						<input type={'number'} value={maxCounter} onChange={onClickHandlerMaxCounter} />
					</div>
				</div>
				<div className={style.box}>
					<div>min value:</div>
					<div className={style.setInput}>
						<input type={'number'} value={minCounter} onChange={onClickHandlerMinCounter} />
					</div>
				</div>
			</div>
			<div>
				<Button
					title={"set"}
					style={style.setButton}
					disabled={btnActive}
					callback={onClickSetCounter}/>
			</div>
		</div>
	)
}