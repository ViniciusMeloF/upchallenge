import React from "react";

import carImg from "../../assets/images/carro.png";
import carImgT from "../../assets/images/carro_t.png";
import carImgT2 from "../../assets/images/carro_t2.png";

import CarMov from "./style";

export default function Car({ pos, turbo }) {
  return (
    <>
      <CarMov position={{ pos }}>
        <img src={turbo ? carImgT2 : carImg} alt="Fusca Azul" />
      </CarMov>
    </>
  );
}
