import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RankList } from "./RankList";
import styled from "@emotion/styled";

export function Rankings() {
  const Container = styled.div`
    display: flex;
    padding: 40px;
    flex-wrap: wrap;
  `;

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <RankList />
      </Container>
    </DndProvider>
  );
}
