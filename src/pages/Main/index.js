import React, { useEffect } from "react";

import { Pista, Form, ContainerGame, Tittle } from "./style";

import Car from "../../components/Car/index";
import Details from "../../components/Details/index";

import { usePosition } from "../../hooks/usePosition";
import { useGame } from "../../hooks/useGame";
import { usePlayer } from "../../hooks/usePlayer";

export default function Main() {
  const [position, upPosition] = usePosition();
  const [
    game,
    upStarted,
    upPause,
    upCount,
    upCountdown,
    resetCountdown
  ] = useGame();
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
        escape: () => upPause({ pause: true })
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

  const startRace = async e => {
    e.preventDefault();

    const name = e.target[0].value;

    upPlayer({ name });
    upCount({ count: true });
  };

  return (
    <>
      <ContainerGame>
        {game.started ? (
          <>
            {game.pause ? (
              <>
                <h1>PAUSE</h1>
                <h2>Press 'ESC' to Unpause</h2>
              </>
            ) : (
              <>
                <Details player={player} />
                <Pista />
                <Car pos={position.pos} turbo={player.turbo} />
              </>
            )}
          </>
        ) : (
          <>
            {game.count ? (
              <h1>
                {game.countdown >= 0 ? parseInt(game.countdown / 1000) : "Run"}
              </h1>
            ) : (
              <>
                <Tittle>UpChallenge</Tittle>
                <Form onSubmit={startRace}>
                  <input type="text" placeholder="Digite seu nome" />
                  <button type="submit">Iniciar Corrida</button>
                </Form>
              </>
            )}
          </>
        )}
      </ContainerGame>
    </>
  );
}
