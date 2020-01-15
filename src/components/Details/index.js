import React from "react";
import { Container } from "./style";

export default function Details({ player }) {
  return (
    <>
      <Container>
        <h2>{`Score: ${player.score}`}</h2>
        <h2>{`Name: ${player.name}`}</h2>
        <h2>{`Speed: ${parseInt(player.speed)} Km/h`}</h2>
      </Container>
    </>
  );
}
