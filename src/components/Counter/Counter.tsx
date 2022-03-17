import React from "react";
import style from './Counter.module.css'
import {Scoreboard} from "./Scoreboard";
// import {Buttons} from "./Buttons";
import {Button} from "../Button";

type CounterPropsType = {
	counter: number
	maxValue: number
	startValue: number
	editMode: boolean
	incorrectValue:boolean
	onClickIncBtn: () => void
	onClickResetBtn: () => void
}

export const Counter = (props: CounterPropsType) => {

	/// Increment Style and Disabled
	let styleInc = props.counter >= props.maxValue ? style.btnDisabled : style.btnActive;
	let disabledIcn = props.counter >= props.maxValue;

	/// Reset Style and Disabled
	let styleReset = props.counter === props.startValue ? style.btnDisabled : style.btnActive;
	let disabledReset = props.counter === props.startValue;

	return (
		<div className={style.counter}>
			<Scoreboard
				counter={props.counter}
				maxValue={props.maxValue}
				editMode={props.editMode}
				incorrectValue={props.incorrectValue}
			/>
			<div className={style.buttonWrap}>
				<Button
					title={'inc'}
					style={styleInc}
					disabled={props.editMode || disabledIcn}
					callback={props.onClickIncBtn}
				/>
				<Button
					title={'reset'}
					style={styleReset}
					disabled={props.editMode || disabledReset}
					callback={props.onClickResetBtn}
				/>
			</div>

		</div>
	)
}