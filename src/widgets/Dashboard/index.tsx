import lang from "@/../lang.json";
import { Statistics, Dashboard as DashBoard } from "@features/StatisticsInfo";
import Icon from "@shared/ui/components/Icon";
import { useContext } from "react";
import { LangContext } from "@/app/context/LangaugeContext";

function Dashboard() {
  const { language } = useContext(LangContext);
  return (
    <div className="grid grid-cols-1 gap-[15px]">
      <Statistics />
      <DashBoard />
    </div>
  );
}

export default Dashboard;
