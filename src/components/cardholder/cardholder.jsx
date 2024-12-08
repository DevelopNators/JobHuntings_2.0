import React from "react";
import './cardHolder.css';
import Partners from "../partners/partners";
import JobType from "../jobtype/jobtype";
import JobCard from "../jobcard/jobcard";
import { useSelector } from "react-redux";

const CardHolder = () => {
  const { data ,loading } = useSelector((state) => state.card);
 
  return (
    <div  className="card-holder ">
      <div className="partners-container">
        <Partners />
      </div>
      
      <div className="content-container">
        <div className="sidebar">
          <JobType />
         
        </div>
        
        {
          
        }
        <div className="main-content">
          <h3 className="latest-jobs-header"> Latest Jobs</h3>

          <p className="results-count">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <span>Job Counts: {data?.config?.recordsCount || 0}</span>
          )}
        </p>

          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default CardHolder;
