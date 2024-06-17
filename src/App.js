import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="App grid grid-cols-3">
      <div>
        <Navbar />
      </div>
      <div>
       <Hero />
      </div>
  
      

    </div>
  );
}

export default App;
