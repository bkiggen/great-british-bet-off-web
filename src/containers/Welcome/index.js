import React from "react";
import styled from "@emotion/styled";

export function Welcome() {
  const ThemeImage = styled.img`
    width: 80vh;
  `;

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
  `;

  return (
    <Container>
      <ThemeImage src="/theme_image.png" alt="theme" />
    </Container>
  );
}
