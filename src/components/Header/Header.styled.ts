import exp from "constants";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  children: ReactNode;
}

export const HeaderStyled = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  &.active {
    color: #ffffff33;
  }
`;

export const HeaderToggleContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

export const HeaderToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: -50%;
  transform: translateY(-50%);
`;
