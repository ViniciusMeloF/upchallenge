import React from "react";

import { Form, Tittle } from "./style";

export default function Initial({ game, fcUpPlayer, fcUpCount }) {
  const startRace = async e => {
    e.preventDefault();

    const name = e.target[0].value;

    fcUpPlayer({ name });
    fcUpCount({ count: true });
  };

  return (
    <>
      {game.count ? (
        <h1>{game.countdown >= 0 ? parseInt(game.countdown / 1000) : "Run"}</h1>
      ) : (
        <>
          <Tittle>UpChallenge</Tittle>
          <Form onSubmit={startRace}>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Start Race</button>
          </Form>
        </>
      )}
    </>
  );
}
