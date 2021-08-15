import Square from "./Square";

const onClick = (value) => {
	//...
};

const Board = ({ squares, onClick }) => (
	<div className="Squares">
		{squares.map((square, i) => (
			<Square key={i} handleOnClick={() => onClick("dummy")} value={square} />
		))}
	</div>
);

export default Board;
