import React from "react";
import "./offer.css";

const OfferBox = ({ title, isNew, id }) => {
  return (
    <div className="box-content">
      {isNew && <span className="circle"></span>}
      <h2>{title}</h2>
      {isNew && <p>(nowość)</p>}
    </div>
  );
};

export default OfferBox;
