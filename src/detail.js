import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail({selects, zmw, gbp, jpy, eur}) {
  const [attribute, setProdState] = useState({});
  const passedproduct = useParams("id");
  const prodid = passedproduct.id;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${prodid}`)
      .then((response) => response.json())
      .then((json) => setProdState(json));
  }, []);

  return (
    <><div className="detailbody">
      <div className="detailhead">
        <div className="floatleft">
          <p className="quality">QUALITY STOCK</p>
          <p className="purchase">
            PURCHASE <span className="be"> and be our</span>
            <span className="happy"> HAPPY CLIENT</span>
          </p>
          <p></p>
        </div>
        <img src="/detailback.PNG" alt="photo" />
      </div>
      <div className="detailcontainer">
        <div className="detailleft">
          <img
            className="detailimage"
            src={attribute.image}
            alt="produt_image"
          /><br></br> <br></br>
          <p className="detailprice">
            <h5>Price: 
            {(() => {
              switch (true) {
                case selects === "ZMW":
                  {
                    return <span> K {(attribute.price * zmw).toFixed(2)}</span>;
                    
                  }
                  break;

                case selects === "GBP":
                  {
                    return <span> £ {(attribute.price * gbp).toFixed(2)}</span>;
                  }
                  break;

                case selects === "EUR":
                  {
                    return <span> € {(attribute.price * eur).toFixed(2)} </span>;
                  }
                  break;

                case selects === "JPY":
                  {
                    return <span> ¥ {(attribute.price * jpy).toFixed(2)}</span>;
                  }
                  break;

                default:
                  {
                    return <span> $ {attribute.price}</span>;
                  }
                  break;
              }
            })()}</h5>
          </p>
        </div>
        <div className="detailright">
          <p>
            <h5>
              Name <br></br>
            </h5>
            {attribute.title}
          </p>
          <p>
            <h5>
              Category <br></br>
            </h5>
            {attribute.category}
          </p>
          <p>
            <h5>
              Description <br></br>
            </h5>
            {attribute.description}
          </p>
        </div>
      </div>
      </div></>
  );
}

export default Detail;
