import './single-card.css';
import {   useEffect, useState } from 'react';
import SingleJobDetail from '../singleJobDetailCard.jsx/singleJobDetails';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleJob } from '../actions/singleCardAction';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LoadingComponent from '../loadinComponent/LoadingComponent'
import TrainingModal from '../advertisementModals/TrainingModal';
import   WhatsappLink from '../socialLinks/whatsapp'
import ShareableLinks from '../socialLinks/shareAbleLinks';
const SingleJob = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { singleCard: data, loading, error } = useSelector((state) => state.singleCard);

    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [show, setShow] = useState(false);

    console.log("data ", data)

    useEffect(() => {
            dispatch(fetchSingleJob(id));
            setShow(true)
    }, [dispatch, id]);

    const handleClose = () => setShow(false);

    const convertToBulletPoints = (htmlContent) => {
        // Create a temporary div to hold the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
    
    
        const paragraphs = Array.from(tempDiv.getElementsByTagName('p'));
    
     
        return paragraphs.map((paragraph, index) => (
          <li key={index}>{paragraph.textContent}</li>
        ));
      };


    if (loading) return <p> <LoadingComponent/> </p>;

    if (error) return <p>Error: {error}</p>;

    return (
        
        <div className="single-job-container">
            
            {/* Bootstrap Modal */}
            <TrainingModal show= {show} handleClose = {handleClose}/>

   


           
            <div className="job-description">
                <Link to="/">  
                    <button className="back-button">← Back</button> 
                </Link>
                <p className="text-muted mb-1">{data?.organizationName || 'Not provided'}</p>
                <h5 className="mb-1">Need {data?.jobRole || 'Associate Software Developer'}</h5>
                <hr />
                <img
                  src={data?.coverPhoto}
                  alt="job"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginTop: '10px',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
                {/* whatsapp  */}
                <WhatsappLink whatsapp = {data?.whatsAppGroupLink}></WhatsappLink>
                
                <h3 className="section-title">Description</h3>
                <div style={{ marginTop: '40px' }}>
                    <h4 className="subsection-title">Overview</h4>
                </div>
                {data?.job_Description && convertToBulletPoints(data?.long_Description)}
                <h4 className="subsection-title">Requirements</h4>

                
                    <li>{<span> JobLocation:  {data?.requirements} </span>}</li>
                  
                    <li>{<span> JobLocation:  {data?.jobLocation} </span>}</li>
                    <li>{<span> Exspanerience :  {data?.experience} </span>}</li>
             

                <div style={{ marginTop: '30px' }}>
                    <h4 className="subsection-title">Skill & Experience</h4>
                    <p> <li>  {data?.short_Description} </li> </p>
                    
                    
                </div>

                <div style={{ marginTop: '30px' }}>
                    <h4 className="subsection-title">Apply Instructions</h4>
                    <p> <li>  {data?.appyInstructions} </li></p>
                </div>

               <ShareableLinks url= {`https://jobhuntings.developnators.com/${data?.jobId}`} title="Check out this amazing Job!" />


                <hr /> 
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4> Interested in this job? <br /><strong>Apply ASAP</strong> </h4>
                    <div>
                        {data?.appyLink ? (
                            <a
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                color: '#fff',
                                backgroundColor: '#007bff',
                                borderRadius: '4px',
                                textDecoration: 'none', 
                                fontSize: '16px',
                                textAlign: 'center',
                              }}
                            className="apply-button" 
                            href={data?.appyLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            Apply for this position →
                            </a>
                        ) : (
                            <p>Application link not available</p>
                        )}
                        </div>

                </div>
            </div>

              
            <SingleJobDetail 
                jobRole={data?.jobRole} 
                salary={data?.salary} 
                createdAt={data?.createdDate}
                applyLink = {data?.appyLink}
                categoryId={data?.categoryId} 
            />
        </div>
    );
};

export default SingleJob;
