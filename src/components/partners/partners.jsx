import React, { useState, useEffect } from "react";
import "./partners.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/cardAction';
import LoadingComponent from '../loadinComponent/LoadingComponent';
import { pageNumber, pageSize } from '../store/store';
import { ErrorImg } from "../../utils/ErrorImageHelper";

const Partners = () => {
  const images = [
    { src: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png", name: "google" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cE21uCf_X-Tr7eUOE77XI9e_Zos6sEyyGw&s", name: "facebook" },
    { src: "https://static-00.iconduck.com/assets.00/amazon-icon-2048x1722-myhuicq8.png", name: "Amazon" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMcySiEAdXWyIYYLV8b39b2sh1sby6Hf7ZA&s", name: "nagarro" },
    { src: "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png", name: "flipkart" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRx38S3MOlgdZBtD9Lg1gZmgHbIBjQwywew&s", name: "Wallmart" },
  ];

  const { data, loading } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = (name) => {
    dispatch(fetchData({ pageNumber, pageSize, name }));
    console.log(`Searching for: ${name}`);
  };



  return (
    <div className="partners-section">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="slider-item" key={index}>
              <img
                src={img.src}
                alt={img.name}
                height="30"
                width="80"
                onClick={() => handleClick(img.name)}
                title={img.name}
                className="slider-image"
                onError={ErrorImg}

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
