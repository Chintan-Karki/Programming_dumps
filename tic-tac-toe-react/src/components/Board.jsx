import Square from "./Square";

const onClick = (value) => {
	//...
};

const Board = ({ squares, onClick }) => (
	<div className="Squares">
		<Square handleOnClick={() => onClick("dummy")} value="1" />
		<Square handleOnClick={() => onClick("dummy")} value="2" />
		<Square handleOnClick={() => onClick("dummy")} value="3" />
		<Square handleOnClick={() => onClick("dummy")} value="4" />
		<Square handleOnClick={() => onClick("dummy")} value="5" />
		<Square handleOnClick={() => onClick("dummy")} value="6" />
		<Square handleOnClick={() => onClick("dummy")} value="7" />
		<Square handleOnClick={() => onClick("dummy")} value="8" />
		<Square handleOnClick={() => onClick("dummy")} value="9" />
	</div>
);

export default Board;
