import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
}

export default GameGrid;