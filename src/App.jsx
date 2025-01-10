import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
import LOGOImage from "/now_gg_Logo.jpg";
import { Personcontext } from "./contexts/Personcontext";
function App() {
  
  return (
    <Personcontext>
      <div className="min-h-svh ">
        {/* navbar of te explore page */}
        <nav className="border-b-[1px] shadow-sm bg-transparent backdrop-blur-sm  flex items-center justify-between">
          <div className="w-[5%] min-w-[30px]  mx-[2%]">
            <img src={LOGOImage} alt="BrandLogo" />
          </div>

          <h1 className="text-[0.3em]  max-sm:text-[0.35em] font-[200] mx-[2%]">
            Ankush Kumar
          </h1>
        </nav>

       
        <div className="mx-[5%] ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/details/:Id?" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Personcontext>
  );
}

export default App;
