import TeamPlanner from "@/components/TeamPlanner/TeamPlanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Planner | PokéBuilder",
  description: "",
};

function Planner() {
  return <TeamPlanner/>
}

export default Planner