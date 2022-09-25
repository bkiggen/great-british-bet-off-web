import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "../../app/counterSlice";
import { addBook } from "../../app/booksSlice";
import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { ChangeButton } from "./button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const books = useSelector((state) => state.books.list);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <ChangeButton
          label="Increment value"
          handleClick={() => dispatch(incrementByAmount(3))}
        />
        <span>{count}</span>
        <ChangeButton
          label="decrement value"
          handleClick={() => dispatch(decrement(3))}
        />
      </Card>
      BOOKS: {books}
      <ChangeButton
        label="add book"
        handleClick={() => dispatch(addBook("Great Gatsby"))}
      />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
