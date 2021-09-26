import React from "react";
import "./Author.css";

const Author = (props) => {
  const { name, age, email, gender, salary, url } = props.author;
  return (
    <div className="col-md-4 ">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters author-details">
          <div className="col-md-4 d-flex align-items-center">
            <img
              style={{ width: "100px" }}
              className="img-fluid "
              src={url}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Gender: {gender}</p>
              <p className="card-text">Age: {age}</p>
              <p className="card-text">Salary: ${salary}</p>
              <p className="card-text">Contact: {email}</p>
              <div className=" ">
                <button
                  onClick={() => props.handleFavoriteAuthor(props)}
                  className="btn btn-warning float-bottom mt-3"
                >
                  <i className="fas fa-cart-plus"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
