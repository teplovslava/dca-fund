import React from "react";

interface IPercentInfoBlock {
  percent: number;
  period: React.ReactNode;
}

function PercentInfoBlock({ percent, period }: IPercentInfoBlock) {
  return (
    <div className="flex flex-row gap-[20px] items-center">
      <div className="bg-gradient-to-tr from-[#FFFFFF]/0 to-[#FDDF96] p-[1px] w-[76px] h-[76px] rounded-full">
        <div className="bg-[#272B34] h-full w-full rounded-full flex flex-row items-center justify-center">
          <p className=" text-[20px] font-[700] bg-clip-text text-transparent bg-gradient-to-tl from-[#F9B100] to-[#FDDF96]">
            {percent} %
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[14px] text-[#8296A4]">{period}</p>
        <p className="text-[20px] text-[#FFFFFF] font-[700]">
          {percent}% в мес
        </p>
      </div>
    </div>
  );
}

export default PercentInfoBlock;
