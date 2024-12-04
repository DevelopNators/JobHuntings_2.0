import React, { useState } from 'react';
import './jobtype.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/cardAction';
import LoadingComponent from '../loadinComponent/LoadingComponent';
import { pageNumber, pageSize } from '../store/store';

const JobType = () => {
    const { data, loading } = useSelector((state) => state.card);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch();

    const handleRadioChange = (categoryId) => {
        setSelectedCategory(categoryId);

        // console.log("Selected category:", categoryId);

        dispatch(fetchData({ pageNumber, pageSize, categoryId }));
    };

    if (loading) {
        return <LoadingComponent />;
    }

    return (
        <div className="job-type-container">
            <div className="job-type-header">
                <h5 className="job-type-title">Job Type</h5>
                <button
                    className="clear-btn"
                    onClick={() => {
                        setSelectedCategory(null);
                        dispatch(fetchData({ pageNumber, pageSize, categoryId: null })); 
                    }}
                >
                    Clear
                </button>
            </div>

            {data?.category?.map((category) => (
                <div className="form-check" key={category.categoryId}>
                    <input
                        className="form-check-input"
                        type="radio"
                        id={category.name.toLowerCase().replace(' ', '-')}
                        checked={selectedCategory === category.categoryId}
                        onChange={() => handleRadioChange(category.categoryId)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={category.name.toLowerCase().replace(' ', '-')}
                    >
                        {category.name.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default JobType;
