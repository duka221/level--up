import { BottomCarousel } from "./bottomcarousel";
import { CashGamesTop20 } from "./cashgamestop20/cashGamesTop20";
import { BottomInfo } from "./bottominfo";
import { CashGames12Side } from "./cashgames12side";
import React from 'react';

export const CashGames = () => {
  return (
    <>
        <CashGamesTop20 />
        <CashGames12Side/>
      <BottomInfo />
      <BottomCarousel />
    </>
  );
};
