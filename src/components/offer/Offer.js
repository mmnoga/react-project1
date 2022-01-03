import React from "react";
import "./offer.css";

import OfferBox from "./OfferBox";

const Offer = ({ offers }) => {
  return (
    <div id="offer-content">
      <h1>Czym zajmuje się nasza firma?</h1>
      <div className="boxes">
        {offers.map((data) => {
          return (
            <OfferBox key={data.id} title={data.offer} isNew={data.isNew} />
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
