import React from "react";

import { Container } from "./style";

export default function Manual() {
  return (
    <Container>
      <h1>How To Play</h1>
      <p>To start enter a name and click "Start Race"</p>
      <h3>Hotkeys:</h3>
      <ul>
        <li>
          <span className="tecla">A</span>: Move to left
        </li>
        <li>
          <span className="tecla">S</span>: Move to center
        </li>
        <li>
          <span className="tecla">D</span>: Move to right
        </li>
        <li>
          <span className="tecla">&larr;</span>: Move to left
        </li>
        <li>
          <span className="tecla">&darr;</span>: Move to center
        </li>
        <li>
          <span className="tecla">&rarr;</span>: Move to right
        </li>
        <li>
          <span className="tecla">T</span>: Turbo
        </li>
        <li>
          <span className="tecla esc">Esc</span>: Pause
        </li>
      </ul>
    </Container>
  );
}
