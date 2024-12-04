// import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import { Card, Badge } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../actions/cardAction';
// import { formatDistanceToNow } from 'date-fns';
// import './jobcard.css';
// import LoadingComponent from '../loadinComponent/LoadingComponent';
// import { getCategoryById } from '../services/category';
// import { setPageNumber, setPageSize } from '../features/cardSlice';
// import CardPagination from '../pagination/pagination';

// const JobCard = () => {
//   const dispatch = useDispatch();
//   const { data, loading, cache, error, pageNumber, pageSize } = useSelector((state) => state.card);
//   const [isFirstLoad, setIsFirstLoad] = useState(false);

//   // console.log(pageNumber, pageSize)

//   useEffect(() => {
//     if ((isFirstLoad && cache === 'miss') || data.length === 0) {
//       dispatch(fetchData({ pageNumber, pageSize }));
//     }
//   }, [dispatch, pageNumber, pageSize, cache, data.length, isFirstLoad]);

//   const jobs = useMemo(() => data?.jobs || [], [data?.jobs]);

//   const nextPage = useCallback(() => {
//     if (jobs.length >= 10) {
      
//       dispatch(setPageNumber(pageNumber + 1));

//     }
//   }, [dispatch, pageNumber, jobs.length]);
  
//   const previousPage = useCallback(() => {
//     if (pageNumber > 1) {
//       dispatch(setPageNumber(pageNumber - 1));
//     }
//   }, [dispatch, pageNumber]);

//   const handleReset = useCallback(() => {
//     dispatch(setPageNumber(1));
//     dispatch(fetchData({ pageNumber: 1, pageSize }));
//   }, [dispatch, pageSize]);

//   const renderJobs = useMemo(
//     () =>
//       jobs.map((res, index) => (
//         <motion.div
//           key={index}
//           className="job-listing-container"
//           whileHover={{ scale: 1.03, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' }}
//           transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//           style={{ maxWidth: '500px', margin: 'auto' }}
//         >
//           <Card style={{ marginBottom: '20px', border: '1px solid #e9ecef', borderRadius: '10px', padding: '15px' }}>
//             <Card.Body>
//               <img
//                 src={res.cardPhoto}
//                 alt="job"
//                 style={{
//                   width: '100%',
//                   maxWidth: '100%',
//                   height: '200px',
//                   objectFit: 'cover',
//                   borderRadius: '8px',
//                   transition: 'transform 0.3s ease-in-out',
//                 }}
//                 className="responsive-image"
//               />
//               <div className="d-flex justify-content-between align-items-center mt-3">
//                 <div>
//                   <h5 className="mb-1">{res.jobRole || 'Associate Software Developer'}</h5>
//                   <p className="text-muted mb-1">{res.organizationName || 'Not provided'}</p>
//                   <Badge variant="secondary" className="mr-2">
//                     {getCategoryById(res.categoryId).name}
//                   </Badge>
//                   <Badge variant="info" className="mr-2">
//                     {res.salary || 'Not Disclosed'}
//                   </Badge>
//                   <span className="text-muted">
//                     {formatDistanceToNow(new Date(res.createdDate), { addSuffix: true })}
//                   </span>
//                 </div>
//                 <Link to={`singlejob/${res?.jobId}`}>
//                   <button className="view-job-button">View Job →</button>
//                 </Link>
//               </div>
//               <Card.Text
//                 className="mt-2 text-muted"
//                 style={{ fontSize: '0.9rem', maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}
//               >
//                 {res.short_Description.slice(0, 200)}...
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </motion.div>
//       )),
//     [jobs]
//   );

//   if (loading) {
//     return (
//       <p>
//         <LoadingComponent />
//       </p>
//     );
//   }

//   if (error) {
//     return <p>{error === 'Network Error' ? 'Hope you don’t see this' : 'Some error occurred'}</p>;
//   }

//   return (
//     <>
//       {jobs.length > 0 ? (
//         renderJobs
//       ) : (
//         <div>
//           <button className="reset-button apply-button" onClick={handleReset}>
//             Reset
//           </button>
//         </div>
//       )}
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           margin: '0 auto',
//         }}
//       >
//         <CardPagination nextPage={nextPage} previousPage={previousPage} pageNumber={pageNumber} />
//       </div>
//     </>
//   );
// };

// export default JobCard;

import React, { useEffect, useMemo, useCallback , useState} from 'react';
import { Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/cardAction';
import { formatDistanceToNow } from 'date-fns';
import './jobcard.css';
import LoadingComponent from '../loadinComponent/LoadingComponent';
import { getCategoryById } from '../services/category';
import { setPageNumber, setPageSize } from '../features/cardSlice';
import CardPagination from '../pagination/pagination';

const JobCard = () => {
  const dispatch = useDispatch();
  const { data, loading, cache, error, pageNumber, pageSize } = useSelector((state) => state.card);
  const [isFirstLoad, setIsFirstLoad] = useState(false);


  useEffect(() => {
    if (isFirstLoad || cache === 'miss' || data?.length === 0) {
      dispatch(fetchData({ pageNumber, pageSize }));
      setIsFirstLoad(false); 
    }
  }, [dispatch, pageNumber, pageSize, cache, data?.length, isFirstLoad]);
  


  const jobs = useMemo(() => data.jobs || [], [data.jobs]);


  const nextPage = useCallback(() => {
    const totalJobsFetched = data?.config?.recordsCount || 0; 
    const maxPage = Math.ceil(totalJobsFetched / pageSize);
    if (pageNumber < maxPage && jobs.length >= pageSize) {
      setIsFirstLoad(true); 
      dispatch(setPageNumber(pageNumber + 1));
    }
  }, [dispatch, pageNumber, pageSize, jobs.length, data?.config?.recordsCount]);
  

  const previousPage = useCallback(() => {
    if (pageNumber > 1) {
      setIsFirstLoad(true); 
      dispatch(setPageNumber(pageNumber - 1));
    }
  }, [dispatch, pageNumber]);
  

  const handleReset = useCallback(() => {
    dispatch(setPageNumber(1));
    dispatch(fetchData({ pageNumber: 1, pageSize }));
  }, [dispatch, pageSize]);

  
  const renderJobs = useMemo(
    () =>
      jobs.map((res, index) => (
        <motion.div
          key={index}
          className="job-listing-container"
          whileHover={{ scale: 1.03, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ maxWidth: '500px', margin: 'auto' }}
        >
          <Card style={{ marginBottom: '20px', border: '1px solid #e9ecef', borderRadius: '10px', padding: '15px' }}>
            <Card.Body>
              <img
                src={res.cardPhoto}
                alt="job"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease-in-out',
                }}
                className="responsive-image"
              />
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <h5 className="mb-1">{res?.postTitle || 'Associate Software Developer'}</h5>
                  <p className="text-muted mb-1">{res.organizationName || 'Not provided'}</p>
                  <Badge variant="secondary" className="mr-2">
                    {getCategoryById(res.categoryId).name}
                  </Badge>
                  <Badge variant="info" className="mr-2">
                    {res.salary || 'Not Disclosed'}
                  </Badge>
                  <span className="text-muted">
                    {formatDistanceToNow(new Date(res.createdDate), { addSuffix: true })}
                  </span>
                </div>
                <Link to={`singlejob/${res?.jobId}`}>
                  <button className="view-job-button">View Job →</button>
                </Link>
              </div>
              <Card.Text
                className="mt-2 text-muted"
                style={{ fontSize: '0.9rem', maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {res.short_Description.slice(0, 200)}...
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      )),
    [jobs]
  );

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <p>{error === 'Network Error' ? 'Hope you don’t see this' : 'Some error occurred'}</p>;
  }

  return (
    <>
      {jobs?.length > 0 ? (
        renderJobs
      ) : (
        <div>
          <button className="reset-button apply-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <CardPagination nextPage={nextPage} previousPage={previousPage} pageNumber={pageNumber} />
      </div>
    </>
  );
};

export default JobCard;

