export default function GameBoard({ board, onSelectSquare }) {
    return (
        <ol id='game-board'>
            {board.map((row, rowIdx) => (
                <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx) => (
                            <li key={colIdx}>
                                <button
                                    disabled={!!playerSymbol}
                                    onClick={onSelectSquare.bind(
                                        null,
                                        rowIdx,
                                        colIdx
                                    )}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
