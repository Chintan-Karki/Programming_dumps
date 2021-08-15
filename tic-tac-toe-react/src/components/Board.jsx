import Square from "./Square";

const Board = ({ squares, onClick }) => (
	<div className="Squares">
		{squares.map((square, i) => (
			<Square key={i} onClick={() => onClick(i)} value={square} />
		))}
	</div>
);

export default Board;
