import React, { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { getCharacters } from "store/slicers/charactersSlice";
import { Characters } from "./components/counter/Characters";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;
