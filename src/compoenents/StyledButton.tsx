import React, { Children } from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 120px;
  padding: 5px;
  background-color: blue;
  font-size: 22px;
  border-radius: 5px;
  outline: none;
  border: none;
`;
type Props = {
  children: string;
  type?: "button" | "submit" | "reset";
};
export default function StyledButton({ children, type }: Props) {
  return <StyledBtn type={type}>{children}</StyledBtn>;
}
