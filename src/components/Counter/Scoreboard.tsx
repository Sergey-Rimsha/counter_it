import React from "react";
import style from "./Counter.module.css";

type ScoreboardType = {
	counter: number
	maxValue: number
	editMode: boolean
	incorrectValue: boolean
}



export const Scoreboard = (props:ScoreboardType) => {

	const showScoreboard = () => {

		if (props.incorrectValue) {
			return <span>Incorrect value</span>

		} else if (props.editMode) {
			return <span>set counter</span>
		}

	}

	return (
		<div className={props.counter >= props.maxValue ? style.counterRed : style.counterTitle}>
			{props.editMode ? showScoreboard() : props.counter}
		</div>
	)
}