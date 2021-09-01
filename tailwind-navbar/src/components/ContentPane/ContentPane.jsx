import React from "react";
import FlexBox from "../Flex/FlexBox";
import ListPeople from "../ListPeople/ListPeople";

export default function ContentPane() {
	return (
		<div>
			<ListPeople />
			<FlexBox />
		</div>
	);
}
