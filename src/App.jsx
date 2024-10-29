import React,{useEffect,useState} from "react";
import Homepge from "./Componets/Homepage";
import LoginPage from "./Componets/LOGIN/LoginPage";
import Animations from "./Componets/Animations";
import Newpage from "./Newpage";
import Render from "./Componets/Render";
import Dash from "./Componets/LOGIN/Dash";
import Maps from "./Lists & Maps/Maps";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Nopage from "./Nopage";
import Api from "./Componets/Api";
import TestRun from "./API/TestRun";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []); 

  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <BrowserRouter>
      <Maps/>
          <Routes>
            <Route index path="/" element={<Homepge/>}/>
            <Route path="/about" element={<Newpage/>}/>
            <Route path="/contact" element={<Dash/>}/>
            <Route path="/products" element={<Api/>}/>
            <Route path="/dogs" element={<TestRun/>}/>
            <Route path="*" element={<Nopage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
