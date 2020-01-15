import { useState } from "react";

export const useGame = () => {
  const [game, setGame] = useState({
    started: false,
    pause: false,
    count: false,
    countdown: 4000
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

  const upCount = ({ count }) =>
    setGame(prev => ({
      ...prev,
      count: count
    }));

  const upCountdown = () =>
    setGame(prev => ({
      ...prev,
      countdown: prev.countdown - 0.8
    }));

  const resetCountdown = () =>
    setGame(prev => ({
      ...prev,
      countdown: 4000
    }));

  return [game, upStarted, upPause, upCount, upCountdown, resetCountdown];
};
