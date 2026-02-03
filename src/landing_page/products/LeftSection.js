import React from "react";

export default function LeftSection({
  imgUrl,
  productTitle,
  productDescription,
  link1,
  link2,
  playstoreBadge,
  appStoreBadge,
}) {
  return (
    <div className="container-fluid">
      <div className="row container-product justify-content-evenly">
        <div className="col-5">
          <img src={imgUrl} alt="image" style={{ width: "80%" }} />
        </div>
        <div className="col-4 px-5 py-5 left-section-content-product">
          <h3>{productTitle}</h3>
          <p>{productDescription}</p>
          <a href="#" className="d-inline-flex align-items-center gap-1 mx-4">
            {link1}
          </a>
          <a href="#" className="d-inline-flex align-items-center gap-1 mx-4">
            {link2}
          </a>
          <br></br>
          <a href="">
            <img src={playstoreBadge} />
          </a>
          <a href="">
            <img src={appStoreBadge} />
          </a>
        </div>
      </div>
    </div>
  );
}
