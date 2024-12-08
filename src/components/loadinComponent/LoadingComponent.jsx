import React from 'react'

const LoadingComponent = () => {
  return (
    <div
    className=" text-center d-flex justify-content-center align-items-center mt-4"
    style={{ height: "50vh" }}
  >
    <div
      className="spinner-grow"
      style={{
        width: "3rem",
        height: "3rem",
        background: "#fc8019",
        border: "solid #fc8019",
        color: "#fff !important",
      }}
      role="status"
    >
      <span className="sr-only"> </span>
    </div>
    <div
      className="spinner-border"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only"> </span>
    </div>
    <div
      className="spinner-grow"
      style={{
        width: "3rem",
        height: "3rem",
        background: "#fc8019",
        border: "solid #fc8019",
        color: "#fff !important",
      }}
      role="status"
    >
      <span className="sr-only"> </span>
    </div>
  </div>
  )
}

export default LoadingComponent