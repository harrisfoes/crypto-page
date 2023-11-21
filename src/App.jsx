import Navigation from "./components/Sections/Navigation";
import Hero from "./components/Sections/Hero";
import Features from "./components/Sections/Features";
import CryptoForm from "./components/Sections/CryptoForm";
import Transactions from "./components/Sections/Transactions";
import Footer from "./components/Sections/Footer";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Navigation />
        <Hero />
      </div>
      <Features />
      <CryptoForm />
      <Transactions />
      <Footer />
    </>
  );
}

export default App;
