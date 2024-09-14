import BINANCE from "@shared/ui/images/binance.png";
import BYBIT from "@shared/ui/images/bybit.png";
import UNISWAP from "@shared/ui/images/uniswap.png";
import BINGX from "@shared/ui/images/bingx.png";
import PANCAKESWAP from "@shared/ui/images/pancakeswap.png";
import DYDX from "@shared/ui/images/dydx.png";
import APEX from "@shared/ui/images/apex.png";
import TRADINGVIEW from "@shared/ui/images/tradingview.png";
import ARKHAM from "@shared/ui/images/arkham.png";
import BUBBLEMAPS from "@shared/ui/images/bubblemaps.png";
import DEXTOOLS from "@shared/ui/images/dextools.png";
import COINMARKETCAP from "@shared/ui/images/coinmarketcap.png";
import SANTIMENT from "@shared/ui/images/santiment.png";
import TRUST from "@shared/ui/images/trust.png";
import METAMASK from "@shared/ui/images/mtmask.png";
import TRONLINK from "@shared/ui/images/tronlink.png";
import { useContext } from "react";
import { LangContext } from "../../app/context/LangaugeContext";

const partnerList = [
  {
    img: BINANCE,
    alt: "BINANCE",
  },
  {
    img: BYBIT,
    alt: "BYBIT",
  },
  {
    img: UNISWAP,
    alt: "UNISWAP",
  },
  {
    img: BINGX,
    alt: "BINGX",
  },
  {
    img: PANCAKESWAP,
    alt: "PANCAKESWAP",
  },
  {
    img: DYDX,
    alt: "DYDX",
  },
  {
    img: APEX,
    alt: "APEX",
  },
  {
    img: TRADINGVIEW,
    alt: "TRADINGVIEW",
  },
  {
    img: ARKHAM,
    alt: "ARKHAM",
  },
  {
    img: BUBBLEMAPS,
    alt: "BUBBLEMAPS",
  },
  {
    img: DEXTOOLS,
    alt: "DEXTOOLS",
  },
  {
    img: COINMARKETCAP,
    alt: "COINMARKETCAP",
  },
  {
    img: SANTIMENT,
    alt: "SANTIMENT",
  },
  {
    img: TRUST,
    alt: "TRUST",
  },
  {
    img: METAMASK,
    alt: "METAMASK",
  },
  {
    img: TRONLINK,
    alt: "TRONLINK",
  },
];

function Partners() {
  const { language } = useContext(LangContext);
  return (
    <div className="element-background">
      <p className="font-[700] text-[#fff] text-[20px] mb-4">
        {language.stacking.partners}
      </p>
      <div className="grid xl:grid-cols-8 grid-cols-4 max-[676px]:grid-cols-2 w-full justify-items-center gap-[10px]">
        {partnerList.map((partner, i) => (
          <img key={i} src={partner.img} alt={partner.alt} />
        ))}
      </div>
    </div>
  );
}

export default Partners;
