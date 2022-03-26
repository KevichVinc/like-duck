import React, { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { useAppDispatch } from "store/hooks";
import { getCharacters, selectPage } from "store/slicers/charactersSlice";
import { Characters } from "components/Characters/Characters";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const [showOnlyFavorite, setShowOnlyFavorite] = useState<boolean>(false);

  const handleShowOnlyFavorite = () => {
    setShowOnlyFavorite(!showOnlyFavorite);
  };

  useEffect(() => {
    if (page > 1) {
      return;
    }
    dispatch(getCharacters(page));
  }, [dispatch, page]);

  return (
    <div className="App">
      <Header showOnlyFavorite={handleShowOnlyFavorite} />
      <Characters showOnlyFavorite={showOnlyFavorite} />
      <Footer />
    </div>
  );
}

export default App;
