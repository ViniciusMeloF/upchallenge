import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 23%;
  height: 100%;
  color: #fff;

  h1,
  h3 {
    color: orange;
    margin-top: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    line-height: 2rem;
  }

  .tecla {
    align-content: center;
    background-color: #ddd;
    border-radius: 3px;
    color: #000;
    display: inline-flex;
    height: 30px;
    width: 30px;
    padding-left: 9px;
  }
  .tecla.esc {
    padding-left: 1px;
  }
`;
