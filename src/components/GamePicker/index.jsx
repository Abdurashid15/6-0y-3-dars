import { useState } from 'react';
import './index.css'
const GamePicker = () => {
  const gameNames = [
    'Minecraft',
    'Fortnite',
    'League of Legends',
    'Grand Theft Auto V',
    'Valorant',
    'Apex Legends',
    'Call of Duty: Warzone',
    'Dota 2',
    'Animal Crossing: New Horizons',
    'Red Dead Redemption 2'
  ];

  const [selectedGame, setSelectedGame] = useState(null);

  const pickRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * gameNames.length);
    setSelectedGame(gameNames[randomIndex]);
  };

  return (
    <div className='Game-Picker'>
      <h2>Game Picker</h2>
      {selectedGame ? (
        <p>The randomly selected game is: {selectedGame}</p>
      ) : (
        <p>Click the button to select a random game.</p>
      )}
      <button onClick={pickRandomGame}>Pick Game</button>
    </div>
  );
};

export default GamePicker;