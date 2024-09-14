import Dashboard from "../../widgets/Dashboard";
import { GlobalStatistic } from '../../features/GlobalStatistic'
import Partners from "../../widgets/Partners";
import DashboardStatistics from "../../features/StatisticsInfo/ui/Dashboard";

function StackingPage() {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[15px]">
          <Dashboard />
          <div className="grid grid-cols-[2fr_1fr] gap-[15px] items-start max-[1440px]:grid-cols-1">
            <DashboardStatistics/>
            <GlobalStatistic />
            
          </div>
        </div>
        <Partners />
      </div>
    </>
  );
}

export default StackingPage;
