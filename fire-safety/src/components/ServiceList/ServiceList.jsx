import React from "react";
import './ServiceList.css';

const ServiceList = (props) => {
  return (
    <div>
      <h2 className="text-center">{props.title}</h2>
      <div className="container">
        <div className="card-deck">
          {props.service.map((item) => (
            <div className="card mb-4" key={item._id}>
              <div className="card-header"><strong>{item.code}</strong></div>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
