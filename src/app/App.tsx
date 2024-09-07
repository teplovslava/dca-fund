import StackingPage from "@pages/stacking";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '../config'
import LangaugeContext from "./context/LangaugeContext";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <LangaugeContext>
    <div className="overlay">

          <Header />
            <div className="flex-1">
            <StackingPage />
            </div>
          <Footer />

    </div>
    </LangaugeContext>
    </CookiesProvider>
    </QueryClientProvider>
      </WagmiProvider>
  );
}
