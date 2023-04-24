import { BottomCarousel } from "../cashgames/bottomcarousel";
import { BottomInfo } from "../cashgames/bottominfo";
import { Tournaments } from "./tournaments";
import { Leaderboard } from "./leaderboard";
import { CashGames12Side } from "../cashgames/cashgames12side";
import { TournSatellities } from "./tournamentsAndSatellites";
export const SpringSeries = () => {
  return (
    <>
      <Tournaments />
      <Leaderboard />
      <TournSatellities/>
      <CashGames12Side/>
      <BottomInfo />
      <BottomCarousel />
    </>
  );
};
