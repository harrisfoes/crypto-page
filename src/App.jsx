import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Navigation />
        <Hero />
        <Features />
      </div>
    </>
  );
}

export default App;
