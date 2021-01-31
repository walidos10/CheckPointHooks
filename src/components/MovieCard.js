import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movi }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {movi.map((el, i) => (
        <Card key={i} style={{ width: "18rem", height: "100%" }}>
          <Link to={`/description/${el.title}`}>
            <Card.Img variant="top" src={el.posterUrl} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <ReactStars
                key={el.rate}
                count={5}
                value={el.rate}
                size={24}
                edit={false}
                isHalf={false}
                activeColor="#ffd700"
              />
              ,
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default MovieCard;
