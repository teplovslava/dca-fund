function Statistic() {
  return (
    <div className="element-background flex max-[787px]:flex-col  max-[1440px]:flex-row max-[1440px]:justify-evenly flex-col gap-[15px] items-center justify-between h-full">
      <div>
        <p className="text-[44px] text-white font-[700] mb-[-10px]">390 млн</p>
        <p className="text-[16px] text-[#8296A4] font-[600]">
          Всего застекировано
        </p>
      </div>

      <div>
        <p className="text-[44px] text-white font-[700] mb-[-10px]">10 235</p>
        <p className="text-[16px] text-[#8296A4] font-[600]">Всего начислено</p>
      </div>

      <div>
        <p className="text-[44px] text-white font-[700] mb-[-10px]">26.78</p>
        <p className="text-[16px] text-[#8296A4] font-[600]">Всего выведено</p>
      </div>
    </div>
  );
}

export default Statistic;
