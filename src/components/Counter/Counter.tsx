import React from "react";
import style from './Counter.module.css'
import {Scoreboard} from "./Scoreboard";
// import {Buttons} from "./Buttons";
import {Button} from "../Button";

type CounterPropsType = {
	counter: number
	onClickIncBtn: () => void
	onClickResetBtn: () => void
}

export const Counter = (props: CounterPropsType) => {

	/// Increment Style and Disabled
	let styleInc = props.counter > 4 ? style.btnDisabled : style.btnActive;
	let disabledIcn = props.counter > 4;

	/// Reset Style and Disabled
	let styleReset = props.counter === 0 ? style.btnDisabled : style.btnActive;
	let disabledReset = props.counter === 0;

	return (
		<div className={style.counter}>
			<Scoreboard counter={props.counter}/>
			{/*<Buttons*/}
			{/*	counter={props.counter}*/}
			{/*	onClickIncBtn={props.onClickIncBtn}*/}
			{/*	onClickResetBtn={props.onClickResetBtn}/>*/}
			<div className={style.buttonWrap}>
				<Button
					title={'inc'}
					style={styleInc}
					disabled={disabledIcn}
					callback={props.onClickIncBtn}
				/>
				<Button
					title={'reset'}
					style={styleReset}
					disabled={disabledReset}
					callback={props.onClickResetBtn}
				/>
			</div>

		</div>
	)
}