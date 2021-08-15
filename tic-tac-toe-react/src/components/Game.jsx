import { useState } from "react";
import { Button } from "semantic-ui-react";
import { calculateWinner } from "../helper/calculate";
import Board from "./Board";

const Game = () => {
	// Initialise states
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xInNext, setXInNext] = useState(true);

	// Checking winners
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardTemp = [...board];
		if (winner || boardTemp[i]) return;
		boardTemp[i] = xInNext ? "X" : "O";
		setBoard(boardTemp);
		setXInNext(!xInNext);
	};

	const renderMoves = () => {
		return (
			<Button
				className="resetBtn"
				onClick={() => setBoard(Array(9).fill(null))}
			>
				Reset the game
			</Button>
		);
	};
	return (
		<>
			<h1>Tic-Tac-Toe</h1>
			<Board squares={board} onClick={handleClick} />
			<div className="container">
				<p className="info">
					{winner ? (
						<p className="Winner">
							🎉 Congratulations! The winner is {winner} 👏
						</p>
					) : (
						<p>Next Player is {xInNext ? "X " : "O "}</p>
					)}
				</p>
				{renderMoves()}
			</div>
		</>
	);
};

export default Game;
