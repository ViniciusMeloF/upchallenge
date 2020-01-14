import { useState } from "react";

export const useGame = () => {
  const [game, setGame] = useState({
    started: false,
    pause: false
  });

  const upStarted = ({ started }) =>
    setGame(prev => ({
      ...prev,
      started: started ? started : prev.started
    }));

  const upPause = ({ pause }) =>
    setGame(prev => ({
      ...prev,
      pause: prev.pause ? false : true
    }));

  return [game, upStarted, upPause];
};
