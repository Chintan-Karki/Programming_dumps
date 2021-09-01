import React from "react";

export default function FlexBox() {
	const buttonClass =
		"box-border p-9 border-1 bg-red-400 m-2 rounded-lg flex-grow ";

	return (
		<div className="max-w-2xl mx-auto  font-sans text-4xl text-yellow-50 justify-self-center flex flex-row flex-wrap">
			<button className={buttonClass}>1</button>
			<button className={buttonClass}>2</button>
			<button className={buttonClass}>3</button>
			<button className={buttonClass}>4</button>
			<button className={buttonClass}>5</button>
		</div>
	);
}
