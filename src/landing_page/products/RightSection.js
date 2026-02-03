import React from "react";

export default function RightSection({
  productTitle,
  productDescription,
  link1,
  imgUrl,
}) {
  return (
    <div className="container-fluid">
      <div className="row container-product justify-content-evenly">
        <div className="col-4 px-5 py-5 right-section-content-product">
          <h3>{productTitle}</h3>
          <p>{productDescription}</p>
          <a href="#" className="d-inline-flex align-items-center gap-1 mx-4">
            {link1}
          </a>
        </div>
        <div className="col-5">
          <img src={imgUrl} alt="image" style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}
