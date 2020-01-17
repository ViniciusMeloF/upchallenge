import React from "react";

import { Pista } from "./style";

import Details from "../Details/index";
import Car from "../Car/index";

export default function Game({ game, player, position }) {
  return (
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
  );
}
