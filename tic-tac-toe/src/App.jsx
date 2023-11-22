import { useState } from 'react';

import { WINNING_COMBINATIONS } from '@/winning_combinations';
import GameBoard from '@/components/GameBoard';
import Player from '@/components/Player';
import Log from '@/components/Log';
import GameOver from '@/components/GameOver';

const INITIAL_GAMEBOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
};

function deriveActivePlayer(gameTurns) {
    return gameTurns.length && gameTurns[0]?.player === 'X' ? 'O' : 'X';
}

function deriveWinner(gameBoard, players) {
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAMEBOARD.map(inner => [...inner])];

    for (const turn of gameTurns) {
        const {
            square: { row, col },
            player,
        } = turn;
        gameBoard[row][col] = player;
    }

    return gameBoard;
}

function App() {
    const [players, setPlayers] = useState({ ...PLAYERS });
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(row, col) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                { square: { row, col }, player: currentPlayer },
                ...prevTurns,
            ];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
        setPlayers({
            X: 'Player 1',
            O: 'Player 2',
        });
    }

    function handlePlayerNameChange(newName, symbol) {
        console.log(symbol, newName);
        setPlayers(prevPlayers => ({
            ...prevPlayers,
            [symbol]: newName,
        }));
    }

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <Player
                        key={players.X}
                        initialName={players.X}
                        symbol='X'
                        isActive={activePlayer === 'X'}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        key={players.O}
                        initialName={players.O}
                        symbol='O'
                        isActive={activePlayer === 'O'}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
            </div>
            <GameBoard
                onSelectSquare={handleSelectSquare}
                activePlayerSymbol={activePlayer}
                board={gameBoard}
            />
            {(winner || hasDraw) && (
                <GameOver winner={winner} onRestart={handleRestart} />
            )}
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
