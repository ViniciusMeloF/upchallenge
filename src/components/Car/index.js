import React from "react";

import carImg from "../../assets/images/carro.png";

import CarMov from "./style";

export default function Car({ pos }) {
  return (
    <>
      <CarMov position={{ pos }}>
        <img src={carImg} alt="Fusca Azul" />
      </CarMov>
    </>
  );
}
