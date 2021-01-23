import React from "react";
import ReactStars from "react-rating-stars-component";

const Filter = ({ setFilterTitle, setFilterRate }) => {
  const ratingChanged = (newRating) => {
    setFilterRate(newRating);
    console.log(setFilterRate);
    console.log(newRating);
  };

  return (
    <div>
      <div className="styleNav">
        <div>
          <span>Search Movie By Title</span>
          <input
            className="form-control"
            onChange={(e) => setFilterTitle(e.target.value)}
            placeholder="Type to search..."
          ></input>
        </div>
        <div>
          <span>Search Movie By Rate</span>

          <ReactStars
            count={5}
            onChange={(e) => ratingChanged(e)}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
