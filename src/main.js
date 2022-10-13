import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Mainbody({ productstate, selects, zmw, gbp, jpy, eur}) {

 

  return (
    <div className="container">
      {productstate.map((item) => {
        return (
          <div key={item.id} className="item-container">
           

            <Link to={`/detail/${item.id}`}>
              <img src={item.image} className="image" />
            </Link>

            <Link to={`/detail/${item.id}`}>
              <p className="homefonts">{item.category}</p>
              <p className="price">
                <span>
                  {(() => {
                    switch (true) {
                      case selects === "ZMW":
                        {
                          return <p>K {(item.price * zmw).toFixed(2)}</p>;
                
                        }
                        break;

                      case selects === "GBP":
                        {
                          return <p>£ {(item.price * gbp).toFixed(2)}</p>;
                        }
                        break;

                      case selects === "EUR":
                        {
                          return <p>€ {(item.price * eur).toFixed(2)}</p>;
                        }
                        break;

                      case selects === "JPY":
                        {
                          return <p>¥ {(item.price * jpy).toFixed(2)}</p>;
                        }
                        break;

                      default:
                        {
                          return <p>$ {item.price}</p>;
                        }
                        break;
                    }
                  })()}
                </span>
              </p>{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Mainbody;
