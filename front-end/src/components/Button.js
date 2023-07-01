// The styling of Modal (backdrop) buttons (add to cart, continue shopping)

import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.1rem;
  font-family: Calibri;
  background: transparent;
  border: 0.05rem solid var( --mainRed);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var( --mainRed)"};
  color: var(--lightBlue);
  color: ${props => (props.cart ? "var(--mainYellow)" : "var( --mainRed)")};
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--mainLightPink)"};
    color: var(--mainRed);
  }
  &:focus {
    outline: none;
  }
`;
