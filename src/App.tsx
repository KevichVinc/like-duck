import React, { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { useAppDispatch } from "store/hooks";
import { getCharacters, selectPage } from "store/slicers/charactersSlice";
import { Characters } from "components/Characters/Characters";
import { Header } from "components/Header/Header";

function App() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const [showOnlyFavorite, setShowOnlyFavorite] = useState<boolean>(false);

  const handleShowOnlyFavorite = () => {
    setShowOnlyFavorite(!showOnlyFavorite);
  };

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch]);
  return (
    <div className="App">
      <Header showOnlyFavorite={handleShowOnlyFavorite} />
      <Characters showOnlyFavorite={showOnlyFavorite} />
    </div>
  );
}

export default App;
