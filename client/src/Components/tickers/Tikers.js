import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTickerFollow,
  removeTickerFollow,
} from "../../redux/tickers/tickersActions";
import {
  tickersFollowListSelector,
  tickersListSelector,
} from "../../redux/tickers/tickersSelectors";
import Container from "../container/Container";
import Section from "../section/Section";
import TickersFollowList from "./tickersFollowList/TickersFollowList";
import TickersSimpleList from "./tickersSimpleList/TickersSimpleList";

const Tickers = () => {
  const dispatch = useDispatch();

  const allTickers = useSelector(tickersListSelector);
  const followTickers = useSelector(tickersFollowListSelector);

  const isPriceUp = () => {
    return Math.random() > 0.5 ? true : false;
  };

  const onAddFollowClick = (ticker) => {
    dispatch(addTickerFollow(ticker));
  };

  const onRemoveFollowClick = (ticker) => {
    dispatch(removeTickerFollow(ticker));
  };

  return (
    <>
      <Container>
        <Section title="Tickers">
          {allTickers.length > 0 ? (
            <TickersSimpleList
              tickers={allTickers}
              onAddFollowClick={onAddFollowClick}
            />
          ) : (
            <p>Sorry, there's nothing more to track..</p>
          )}
        </Section>
        {followTickers.length > 0 && (
          <Section title="Detailed information">
            <TickersFollowList
              tickers={followTickers}
              isPriceUp={isPriceUp}
              onRemoveFollowClick={onRemoveFollowClick}
            />
          </Section>
        )}
      </Container>
    </>
  );
};

export default Tickers;
