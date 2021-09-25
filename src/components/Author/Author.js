import React from "react";

const Author = (props) => {
  const { name, age, email, gender, salary, url } = props.author;
  return (
    <div className="col-md-4">
      <div class="card mb-3" style={{ maxWidth: "540px", height: "350px" }}>
        <div class="row no-gutters">
          <div class="col-md-4 d-flex align-items-center">
            <img
              style={{ width: "100px" }}
              className="img-fluid  "
              src={url}
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Gender: {gender}</p>
              <p class="card-text">Age: {age}</p>
              <p class="card-text">Salary: $ {salary}</p>
              <p class="card-text">Contact: {email}</p>
              <div className=" ">
                <button
                  onClick={() => props.handleFavoriteAuthor(props)}
                  className="btn btn-warning float-bottom mt-3"
                >
                  <i class="fas fa-cart-plus"></i> Add to card
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
