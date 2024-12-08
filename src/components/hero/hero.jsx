import React, { useState, useEffect } from "react";
import "./hero.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { pageNumber, pageSize } from '../store/store';
import { fetchData } from '../actions/cardAction';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

const Hero = () => {
  const { data } = useSelector((state) => state.card);
  const navigate = useNavigate();
  const location = useLocation();

  const jobCount = data?.config?.recordsCount || 0
  const [displayCount, setDisplayCount] = useState(0);
  const [title, setTitle] = useState("")
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
   
    if (location.pathname !== '/') {
      navigate('/');
    }
   
  };
 
  useEffect(() => {
    let currentCount = 0;
    const increment = Math.ceil(jobCount / 100); 

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= jobCount) {
        clearInterval(interval);
        setDisplayCount(jobCount);
      } else {
        setDisplayCount(currentCount);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [jobCount]);

  const handleClick = (e) =>{
    e.preventDefault()
    if (title){
      dispatch(fetchData({pageNumber, pageSize, name: title}))
    }
  }

  return (
    <>
      <div
        className="hero-section text-center text-white"
        // style={{ backgroundColor: "#007bff", padding: "200px 0" }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title"
          >
            <span style={{ fontSize: "3.5rem" }}>Your Ultimate Job</span>
            <br />
            <span style={{ fontSize: "3.0rem" }}>Search Companion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-description"
          >
            Are you looking for the perfect job or the ideal candidate? Find
            your dream job
            <br />
            with thousands of job postings across industries.
          </motion.p>

          {
            location.pathname == '/' ? (

              <div className="input-container">
              <input
              
                type="text"
                className="form-control"
                placeholder="Job Title"
                aria-label="Job Title"
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                onClick={handleClick}
              />
              <button  onClick={(e) => {
                handleClick(e);
                handleSearch(e);
              }}  className="search-button" type="button">
                Search
              </button>
            </div>

            )
            :""
          }

         

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-3"
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              { location.pathname == '/'?  displayCount + ' Jobs' :''} 
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
