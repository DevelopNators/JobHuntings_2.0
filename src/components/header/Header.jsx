
import NavLink from "../navlinks/navlinks";
import Hero from "../hero/hero";
import "./header.css";
import React, { useState , useEffect} from "react";
import StripModal from "../advertisementModals/StripModal";


const Header = () => {

  const [showStrip, setShowAdStrip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdStrip(true); 
    }, 1000);

    return () => clearTimeout(timer); t
  }, []);





  return (
    <>
    <div>
    {showStrip ? <StripModal setShowAdStrip ={setShowAdStrip}  showStrip = {showStrip} > </StripModal>  : '' }
    </div>
     
   
      <div className={` ${showStrip  ?  'create-space' : ''}`} >
        {/* navlinks */}
        <NavLink showStrip = {showStrip} ></NavLink>

        {/* Hero Section */}
        <Hero></Hero>
      </div>
    </>
  );
};

export default Header;
