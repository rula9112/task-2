import React from "react";
import MyNavbar from  './assets/component/navbar/MyNavbar'
import './styleSass.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/page-home";
import Page2 from "./assets/pages/Page2";
import Page1 from "./assets/pages/Page1";


function App()
{
    return(
      <BrowserRouter>
       <MyNavbar />
      <Routes>
      <Route path="" index element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>

  </BrowserRouter>
)
}
export default App;