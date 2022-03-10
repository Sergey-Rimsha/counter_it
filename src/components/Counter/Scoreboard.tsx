import React from "react";
import style from "./Counter.module.css";

type ScoreboardType = {
	counter: number
	maxValue: number
}


export const Scoreboard = (props:ScoreboardType) => {

	return (
		<div className={props.counter >= props.maxValue ? style.counterRed : style.counterTitle}>
			{props.counter}
		</div>
	)
}