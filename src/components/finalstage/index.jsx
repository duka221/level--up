import { BottomCarousel } from "../cashgames/bottomcarousel";
import { BottomInfo } from "../cashgames/bottominfo";
import { FestMalta } from "./festivalmalta";
import { FinalTournaments } from "./finaltournaments";
import { MystKey } from "./mysticalkey";
export const FinalStage = () => {
  return (
    <>
      <FestMalta />
      <FinalTournaments/>
      <MystKey/>
      <BottomInfo />
      <BottomCarousel />
    </>
  );
};
