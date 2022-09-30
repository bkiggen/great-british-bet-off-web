import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { GBBIcon } from "components/Icons/GBB";

const StyledLink = styled(Link)`
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-family: "Snell Roundhand";

  &:hover {
    color: yellow;
  }
`;

export function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Link to="/">
            <GBBIcon />
          </Link>
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <StyledLink to="/bakers">Bakers</StyledLink>
        </Typography>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <StyledLink to="/rankings">Rankings</StyledLink>
        </Typography>
        <StyledLink to="/login">Login</StyledLink>
      </Toolbar>
    </AppBar>
  );
}
