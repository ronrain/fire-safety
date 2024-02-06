import React from "react";

const LocationList = (props) => {
  return (
    <div>
      <h2 className="text-center">{props.title}</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
          {props.location.map((item) => (
            <div className="col" key={item._id}>
              <div className="card mb-3" style={{ width: '18rem' }}>
                <img
                  src={item.imageUrl}
                  className="card-img-top img-fluid"
                  style={{ height: '200px' }} // Adjust the height as needed
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4"></div> {/* Add space at the bottom */}
    </div>
  );
};

export default LocationList;
