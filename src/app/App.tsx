import StackingPage from "@pages/stacking";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";

export default function App() {
  return (
    <div className="overlay">
      <Header />
      <StackingPage />
      <Footer />
    </div>
  );
}
