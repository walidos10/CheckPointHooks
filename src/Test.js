import React from "react";
import { useState } from "react";

const Test = () => {
  function useIncrim() {
    const [compteur, setcompteur] = useState(0);
    const incrimante = () => {
      setcompteur((compteur) => compteur + 1);
    };

    return [compteur, incrimante];
  }
  const [compteur, incrimante] = useIncrim(0);
  const [obj, setobj] = useState([{ name: "", lastname: "" }]);
  const Addob = (e) => {
    return setobj(
      ...obj,
      (obj.name = e.target.value),
      (obj.lastname = e.target.value)
    );
  };

  return (
    <div>
      <button onClick={() => incrimante()}>
        <h1>hellloooo{compteur}</h1>
      </button>
      <form>
        <input type="" placeholder="ecrire votre nom" value={obj.name}></input>
        <input
          type=""
          placeholder="ecrire lastname"
          valuer={obj.lastname}
        ></input>
        <button onClick={(e) => Addob(e)}> add</button>
      </form>
      {console.log(obj)}
    </div>
  );
};
export default Test;
