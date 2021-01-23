import React from "react";
import { Data } from "../data/Data";
import { useState } from "react";
import MovieCard from "./MovieCard";
import MoviAdd from "./MoviAdd";
import Filter from "./Filter";
import { Button } from "react-bootstrap";
const MovieList = () => {
  const [movi, setmovi] = useState(Data);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const addMovi = (state) => {
    setmovi(() => [
      ...movi,
      {
        title: state.title,
        description: state.description,
        posterUrl: state.posterUrl,
        rate: state.rate,
      },
    ]);
  };
  const [show, setshow] = useState(false);
  const addNewMovi = (e) => {
    //;
    setshow(!show);
  };

  return (
    <div>
      <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />
      <span>
        <Button variant="danger" onClick={(e) => addNewMovi()}>
          {show
            ? `fill in the form
`
            : `Add new Movie`}{" "}
        </Button>
        {show && <MoviAdd addMovi={addMovi} />}
      </span>
      <MovieCard
        movi={movi.filter(
          (el) =>
            el.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            el.rate >= filterRate
        )}
      />
    </div>
  );
};

export default MovieList;
