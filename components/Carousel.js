import React from "react";

const Carousel = ({ images }) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        {images.map((image, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}></li>
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img className="d-block w-100" src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
      <style jsx>
        {`
          .carousel-item {
            max-height: 400px;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
