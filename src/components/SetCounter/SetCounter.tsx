import React, {useEffect, useState} from "react";
import style from "./SetCounter.module.css"
import {Button} from "../Button";

export type SetCounterPropsType = {
	minCounter: number
	maxCounter: number
	editMode: boolean
	onHandlerMaxCounter: (operator: string) => void
	onHandlerMinCounter: (operator: string) => void
	onClickSetCounterValue: () => void
}

export const SetCounter = (props: SetCounterPropsType) => {

	const [error, setError] = useState(false);

	const onClickSetCounter = () => {
		props.onClickSetCounterValue();
	}

	useEffect(() => {

		if (props.maxCounter > props.minCounter) {
			setError(true);
			console.log('dasd');
		} else {
			setError(false);
		}
	}, [props.maxCounter, props.minCounter])


	let styleBtn = error ? style.setButton : style.btnDisabled;


	const onClickHandlerMaxCounter = (operator: string) => {
		props.onHandlerMaxCounter(operator)
	}
	const onClickHandlerMinCounter = (operator: string) => {
		props.onHandlerMinCounter(operator)
	}

	const editModeShow = () => {
		if (props.editMode) {
			return (
				<div>
					<span>plz sev settings counter</span>
				</div>
			)
		}
	}


	return (
		<div className={style.counter}>
			<div className={style.setCounter}>
				<div className={style.box}>
					<div>max value:</div>
					<div className={style.setInput}>
						<span>{props.maxCounter}</span>
						<div className={style.wrapBtn}>
							<button onClick={() => onClickHandlerMaxCounter('+')}>+</button>
							<button onClick={() => onClickHandlerMaxCounter('-')}>-</button>
						</div>
					</div>
				</div>
				<div className={style.box}>
					<div>min value:</div>
					<div className={style.setInput}>
						<span>{props.minCounter}</span>
						<div className={style.wrapBtn}>
							<button onClick={() => onClickHandlerMinCounter('+')}>+</button>
							<button onClick={() => onClickHandlerMinCounter('-')}>-</button>
						</div>
					</div>
				</div>
			</div>
			{
				props.editMode ? <div>sev settings counter</div> : <div></div>
			}
			{editModeShow}
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