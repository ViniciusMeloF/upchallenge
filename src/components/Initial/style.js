import styled from "styled-components";

export const Form = styled.form`
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: 0;
  }

  button {
    border-radius: 3px;
    padding: 0 20px;
    margin-left: 5px;
    height: 55px;
    font-weight: bold;
    color: #444;
    font-size: 18px;
    border-radius: 3px;
    border: 0;
    background-color: #c24200;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #e64f00;
      color: #fff;
    }
  }
`;

export const Tittle = styled.h1`
  display: block;
  margin-block-end: 1em;
`;
