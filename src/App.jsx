
// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
// import Header from "./components/header/Header";
// import About from "./components/about/about";
// import Footer from "./components/footer/footer";
// import Hero from "./components/hero/hero";
// import CardHolder from "./components/cardholder/cardholder";
// import SingleJob from "./components/singleJobCard/singleCard";
// import StripModal from "./components/advertisementModals/StripModal";
// import Contact from "./components/contact/contact";
// import PrivacyPolicy from "./components/privacyPolicy/privacy-policy";
// import TermAndService from "./components/termServices/termServices";
// // import NavLink from "./components/navlinks/navlinks";
// import { initializeAnalytics, trackPageView } from "./analytics";
// import { useLocation } from "react-router-dom";

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     initializeAnalytics();
//   }, []);

//   useEffect(() => {
//     trackPageView(location.pathname);
//   }, [location]);

//   return (
//     <>
//       <Router>

//         <Header></Header>
       
//         <Routes>
//           <Route path= "/" element={<CardHolder/>} />
          
//           <Route path="/about" element={<About />} />
//           <Route path="/singlejob/:id" element={<SingleJob/>}/>
//           <Route path="/contact" element={<Contact/> } ></Route>
//           <Route path ="/privacy-policy" element = {<PrivacyPolicy/> } > </Route>
//           <Route path ="term-services" element={<TermAndService/>}  > </Route>
          
//         </Routes>

//       <Footer></Footer>
//       </Router>

//     </>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import CardHolder from "./components/cardholder/cardholder";
import SingleJob from "./components/singleJobCard/singleCard";
import StripModal from "./components/advertisementModals/StripModal";
import Contact from "./components/contact/contact";
import PrivacyPolicy from "./components/privacyPolicy/privacy-policy";
import TermAndService from "./components/termServices/termServices";
// import NavLink from "./components/navlinks/navlinks";
import { initializeAnalytics, trackPageView } from "./analytics";
import { useLocation } from "react-router-dom";

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <Router>
      <PageTracker />
      <Header />
      <Routes>
        <Route path="/" element={<CardHolder />} />
        <Route path="/about" element={<About />} />
        <Route path="/singlejob/:id" element={<SingleJob />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-services" element={<TermAndService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null; 
}

export default App;
