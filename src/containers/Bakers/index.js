import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, incrementByAmount } from "../../redux/counterSlice";
// import { addBook } from "../../redux/booksSlice";

// import Box from "@mui/material/Box";
import styled from "@emotion/styled";

import { useGetBakersQuery } from "../../services/api";

export function Bakers() {
  // const count = useSelector((state) => state.counter.value);
  // const books = useSelector((state) => state.books.list);
  // const dispatch = useDispatch();
  const { data, error, isLoading } = useGetBakersQuery();

  const Container = styled.div`
    display: flex;
    padding: 40px;
    flex-wrap: wrap;
  `;

  const Card = styled.div`
    width: 500px;
    background: #9ae2ff;
    padding: 30px 20px;
    margin: 12px;
    border-radius: 4px;
  `;

  const Title = styled.h3`
    color: white;
  `;

  const Age = styled.h3`
    color: white;
  `;

  const Paragraph = styled.h3`
    color: white;
  `;

  return (
    <Container>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((baker) => {
          return (
            <Card variant="outlined">
              <Title>{baker.name}</Title>
              <Age>{baker.age}</Age>
              <Paragraph>{baker.bio}</Paragraph>
            </Card>
          );
        })
      ) : null}
    </Container>
  );
}
