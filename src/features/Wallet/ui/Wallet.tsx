import lang from "@/../lang.json";
import MetaMaskImage from "@shared/ui/images/metamask.png";
import Icon from "@shared/ui/components/Icon";
import Button from "@shared/ui/components/Button";

function Wallet() {
  return (
    <div className="element-background flex flex-col gap-[15px] items-center">
      <div className="bg-gradient-to-tr from-[#FFFFFF]/0 to-[#FDDF96] p-[1px] w-[94px] h-[94px] rounded-full relative">
        <div className="bg-[#272B34] h-full w-full rounded-full flex flex-row items-center justify-center">
          <img src={MetaMaskImage} alt="" />
        </div>
        <div className="w-[24px] h-[24px] bg-[#73D053] rounded-full flex flex-row items-center justify-center absolute bottom-0 right-0">
          <Icon width={22} color="transparent" name="done" />
        </div>
      </div>
      <p className="text-[20px] text-[#fff] font-[700]">
        {lang.stacking.ru.connectedWallet}
      </p>
      <div className="flex flex-row items-center gap-[10px]">
        <Icon width={18} color="rgba(255,255,255,0.3)" name="wallet" />
        <p className="text-[16px] text-[#fff]/30">
          Zxclsp39msd3489dv2334621ns..
        </p>
      </div>
      <div className="w-full flex flex-col">
        <Button type="button" view="primary" disabled>
          Привязать кошелек
        </Button>
      </div>
    </div>
  );
}

export default Wallet;
