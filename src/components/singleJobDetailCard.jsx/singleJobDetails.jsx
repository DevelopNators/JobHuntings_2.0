import './singleJobDetails.css';
import { getCategoryById } from '../services/category';
import { useEffect, useState } from 'react';
import   WhatsappLink from '../socialLinks/whatsapp'

const SingleJobDetail = ({jobRole ,salary,createdAt,applyLink,categoryId}) => {
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };
    const [isVisible , setIsVisisble] = useState(false)

    const changeVisiblity = () =>{
        setTimeout(()=>{
            setIsVisisble(true)
        }, 10000)
    }

    useEffect(()=>{
        changeVisiblity()
    },[])

    const formattedJobRoleDate = formatDate(createdAt);

    return (
        <div className="job-detail-card">
            <div>
                        {applyLink ? (
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
                            href={applyLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                                {
                                    isVisible ? ' Apply for this position →' : 'Loading..'
                                }
                           
                            </a>
                        ) : (
                            <p>Application link not available</p>
                        )}
                        </div>

            <div className="job-detail-info">
                <p><strong>Date Posted:</strong> {formattedJobRoleDate} </p>
                <hr/> 
                <p><strong>Job Type:</strong> Category:  {getCategoryById(categoryId).name}   </p>
                <hr/> 
                <p><strong>Job Role:</strong > {jobRole} </p>
                <hr/>
                <p><strong>Salary:</strong> ₹{salary}</p>

            </div>
        </div>
    );
};

export default SingleJobDetail;
