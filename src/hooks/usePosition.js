import { useState } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState({
    pos: "45%"
  });

  const upPosition = ({ pos }) =>
    setPosition(prev => ({
      ...prev,
      pos: pos ? pos : prev.pos
    }));

  return [position, upPosition];
};
