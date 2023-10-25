import { Routes, Route } from "react-router-dom";
import Abouts from "../Abouts";
import { ContactoPhp } from "../contacto";
import Destiny from "../Destiny";
import Faq from "../Faq";
import JobBag from "../JobBag";
import NavBar from "../Navbar";
import Slide from "../Slider";
import Tickets from "../Tickets";

import "./NewHeader.css";


const NewHeader = () => {
  return (  
    <>
    
    <NavBar/>
    <Routes>
    <Route path="/" element={<Slide/>}/>
      <Route path="/about" element={<Abouts/>}/>
      <Route path="/destiny" element={<Destiny/>}/>
      <Route path="/tickets" element={<Tickets/>}/>
      <Route path="/contact" element={<ContactoPhp/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/job" element={<JobBag/>}/>
    </Routes>
    </>  
  );
};

export default NewHeader;
