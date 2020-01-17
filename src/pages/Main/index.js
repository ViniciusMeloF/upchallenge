import React, { useEffect } from "react";

import { ContainerGame, Container } from "./style";

import Manual from "../../components/Manual/index";
import Game from "../../components/Game/index";
import Initial from "../../components/Initial/index";

import { usePosition } from "../../hooks/usePosition";
import { useGame } from "../../hooks/useGame";
import { usePlayer } from "../../hooks/usePlayer";

export default function Main() {
  const [position, upPosition] = usePosition();
  const [game, upStarted, upPause, upCount, upCountdown] = useGame();
  const [player, upPlayer, upScore, upSpeed, upTurbo] = usePlayer();

  //Verificar qual tecla foi pressionada
  const switchcase = (cases, defaultCase, key) =>
    key in cases ? cases[key]() : defaultCase;

  const switchcaseF = (cases, defaultCase, key) =>
    switchcase(cases, defaultCase, key);

  //Evento para trocar a posicao de acordo com a tecla pressionada
  const keyPress = event => {
    const positions = {
      right: "10%",
      left: "75%",
      center: "45%"
    };

    switchcaseF(
      {
        a: () => upPosition({ pos: positions.left }),
        s: () => upPosition({ pos: positions.center }),
        d: () => upPosition({ pos: positions.right }),
        arrowleft: () => upPosition({ pos: positions.left }),
        arrowdown: () => upPosition({ pos: positions.center }),
        arrowright: () => upPosition({ pos: positions.right }),
        t: () => upTurbo({ turbo: true }),
        escape: () => upPause()
      },
      null,
      event.key.toLowerCase()
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);

    if (game.count) {
      setInterval(() => {
        if (game.countdown >= 0) {
          upCountdown();
        } else {
          upCount({ count: false });
          upStarted({ started: true });
          upScore();
          upSpeed();
        }
      }, 100);
    }

    return () => {
      clearInterval();
      window.removeEventListener("keydown", keyPress);
    };
  });

  return (
    <>
      <Container>
        <ContainerGame>
          {game.started ? (
            <Game game={game} player={player} position={position} />
          ) : (
            <Initial game={game} fcUpPlayer={upPlayer} fcUpCount={upCount} />
          )}
        </ContainerGame>
        <Manual />
      </Container>
    </>
  );
}
