import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import RightSection from "./pages/RightSection";

function App() {
  return (
    <div className="App ">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <RightSection />
      </div>
    </div>
  );
}

export default App;
