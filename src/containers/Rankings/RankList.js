import { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card.js";
import { pick } from "lodash";

import { useGetBakersQuery, useUpdateUsersBakersMutation } from "services/api";

const style = {
  width: 400,
};

export const RankList = () => {
  const { data, error } = useGetBakersQuery();
  const [updateUsersBakers, { isError }] = useUpdateUsersBakersMutation();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (data && !error) {
      const out = data.map((d) => pick(d, ["id", "name"]));
      setCards(out);
    }
  }, [data, error, setCards]);

  useEffect(() => {
    if (cards.length > 0) {
      // updateUsersBakers({ user_id: 1, bakers: cards }); // MOCK DATA
    }
  }, [cards, updateUsersBakers]);

  useEffect(() => {
    if (isError) {
      console.log("crap", isError);
    }
  }, [isError]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <>
      <div style={style}>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            index={i}
            id={card.id}
            text={card.name}
            moveCard={moveCard}
          />
        ))}
      </div>
    </>
  );
};
