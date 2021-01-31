import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Data } from "../data/Data";
const Description = ({ match }) => {
  const [state, setstate] = useState(Data);

  useEffect(() => {
    console.log("did 1");
    setstate(() => state.find((el) => el.title === match.params.id));
  }, [match.params.id]);

  return (
    <div
      style={{
        marginTop: "10px",
        height: "555px",
        backgroundColor: "Black",
        color: "white",
      }}
    >
      <h4>
        {" "}
        <em>{state.description}</em>{" "}
      </h4>

      <div>
        <iframe
          title="myFrame"
          width="560"
          height="315"
          src={state.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">
        {" "}
        <button type="button" className="btn btn-light">
          back to the home page
        </button>
      </Link>
    </div>
  );
};

export default Description;
