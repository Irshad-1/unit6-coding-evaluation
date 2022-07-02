import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  background: pink;
  color: white;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: red;
`;

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/bookings">Bookings</StyledLink>
    </NavbarWrapper>
  );
};
