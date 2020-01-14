import React, { useEffect } from "react";

import { Pista, Form, ContainerGame, Tittle } from "./style";

import Car from "../../components/Car/index";

import { usePosition } from "../../hooks/usePosition";
import { useGame } from "../../hooks/useGame";

export default function Main() {
  const [position, upPosition] = usePosition();
  const [game, upStarted, upPause] = useGame();

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
        escape: () => upPause({ pause: true })
      },
      null,
      event.key.toLowerCase()
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPress);

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  });

  const startRace = async e => {
    e.preventDefault();

    upStarted({ started: true });
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
                <Pista />
                <Car pos={position.pos} />
              </>
            )}
          </>
        ) : (
          <>
            <Tittle>UpChallenge</Tittle>
            <Form onSubmit={startRace}>
              <input type="text" placeholder="Digite seu nome" />
              <button type="submit">Iniciar Corrida</button>
            </Form>
          </>
        )}
      </ContainerGame>
    </>
  );
}
