import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MoviAdd = ({ addMovi }) => {
  const [state, setstate] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: "",
  });
  console.log(state);

  const handelSubmit = (e) => {
    e.preventDefault();
    addMovi(state);
    setstate({ title: "", description: "", posterUrl: "", rate: "" });
  };
  const ratingChanged = (newRating) => {
    setstate({ ...state, rate: newRating });
  };
  return (
    <div>
      <div>
        <Form onSubmit={handelSubmit} className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              className="text-muted"
              required
              value={state.title}
              onChange={(e) => {
                setstate({ ...state, title: e.target.value });
              }}
              type="text"
              placeholder="Enter title movie"
            />
            <Form.Text></Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={state.description}
              onChange={(e) => {
                setstate({ ...state, description: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Link img</Form.Label>
            <Form.Control
              type="text"
              className="text-muted"
              value={state.posterUrl}
              onChange={(e) => {
                setstate({ ...state, posterUrl: e.target.value });
              }}
              placeholder="copy link img movie"
            />
            <Form.Text></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicRange">
            <Form.Label>
              Rate
              <ReactStars
                count={5}
                onChange={(e) => {
                  ratingChanged(e);
                }}
                size={24}
                activeColor="#ffd700"
              />
            </Form.Label>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MoviAdd;
