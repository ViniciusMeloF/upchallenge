import { useState } from "react";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    name: null,
    score: 0,
    speed: 0,
    turbo: false,
    laps: 0
  });

  const upPlayer = ({ name }) =>
    setPlayer(prev => ({
      ...prev,
      name: name
    }));

  const upScore = () =>
    setPlayer(prev => ({
      ...prev,
      score: prev.score + 1
    }));

  const upSpeed = () =>
    setPlayer(prev =>
      prev.speed <= 140
        ? {
            ...prev,
            speed: prev.speed + 0.1
          }
        : prev
    );

  const upTurbo = ({ turbo }) =>
    setPlayer(prev => ({
      ...prev,
      turbo: turbo ? turbo : prev.turbo
    }));
  // const upTurbo = ({ turbo }) =>
  //   setPlayer(prev =>
  //     turbo ? {
  //       ...prev,
  //       speed: prev.speed = 140 ? prev.speed + 0.1,
  //     }
  //       ? {
  //           ...prev,
  //           speed: prev.speed + 0.1
  //         }
  //       : prev
  //   );

  return [player, upPlayer, upScore, upSpeed, upTurbo];
};
