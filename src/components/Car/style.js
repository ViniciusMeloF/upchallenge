import styled from "styled-components";

const CarMov = styled.div`
  bottom: 1%;
  position: absolute;
  transition: all 0.3s linear;
  width: 20vh;
  right: ${props => props.position.pos};

  img {
    width: 100%;
  }
`;

export default CarMov;
