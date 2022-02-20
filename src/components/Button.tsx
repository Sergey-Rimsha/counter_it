import React from "react";

type ButtonPropsType = {
	title: string
	style: string
	disabled: boolean
	callback: () => void

}

export const Button = (props: ButtonPropsType) => {

	return (
		<button
			disabled={props.disabled}
			className={props.style}
			onClick={() => props.callback()}>
			{props.title}
		</button>
	)
}