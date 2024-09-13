import lang from "@/../lang.json";
import { Statistics, } from "@features/StatisticsInfo";
import Icon from "@shared/ui/components/Icon";
import { WalletInfo } from "@/features/Wallet";

function Dashboard() {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-[15px]  max-[1440px]:grid-cols-1">
      <Statistics />
      <WalletInfo />
    </div>
  );
}

export default Dashboard;
