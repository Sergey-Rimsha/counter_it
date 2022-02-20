import React from "react";
import style from "./Counter.module.css";

type ScoreboardType = {
	counter: number
}


export const Scoreboard = (props:ScoreboardType) => {

	return (
		<div className={props.counter > 4 ? style.counterRed : style.counterTitle}>
			{props.counter}
		</div>
	)
}