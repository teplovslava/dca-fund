import lang from "@/../lang.json";
import { Statistics, Dashboard as DashBoard } from "@features/StatisticsInfo";
import Icon from "@shared/ui/components/Icon";

function Dashboard() {
  return (
    <div className="element-background grid grid-cols-1 gap-[15px]">
      <div className="flex flex-row items-center gap-[10px]">
        <p className="font-[700] text-[#fff] text-[20px]">
          {lang.stacking.ru.balance}
        </p>
        <button>
          <Icon width={24} name="info" color="#6C7E8C" />
        </button>
      </div>
      <Statistics />
      <div className="flex flex-row items-center gap-[10px]">
        <p className="font-[700] text-[#fff] text-[20px]">
          {lang.stacking.ru.stacking}
        </p>
        <button>
          <Icon width={24} name="info" color="#6C7E8C" />
        </button>
      </div>
      <DashBoard />
    </div>
  );
}

export default Dashboard;
