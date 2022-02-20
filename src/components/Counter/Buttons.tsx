import React from "react";
import style from './Counter/Counter.module.css'


type ButtonsPropsType = {
	counter: number
	onClickIncBtn: () => void
	onClickResetBtn: () => void
}

export const Buttons = (props: ButtonsPropsType) => {


	return (
		<div className={style.buttonWrap}>
			<button
				disabled={props.counter > 4}
				onClick={() => props.onClickIncBtn()}
				className={props.counter > 4 ? style.btnDisabled : style.btnActive}>
				inc
			</button>
			<button
				disabled={props.counter === 0}
				onClick={() => props.onClickResetBtn()}
				className={props.counter === 0 ? style.btnDisabled : style.btnActive}>
				reset
			</button>
		</div>
	)
}