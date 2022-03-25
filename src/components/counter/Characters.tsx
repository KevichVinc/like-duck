import React, { useState } from "react";
import { useAppSelector } from "store/hooks";
import {
  selectCharacters,
  selectFavoriteCharacters,
} from "store/slicers/charactersSlice";
import { RMCharacter } from "types/index";
import styles from "./Characters.module.scss";
import { CharCard } from "components/CharCard/CharCard";

export function Characters(): JSX.Element {
  const characters = useAppSelector(selectCharacters);
  const favoriteCharacters = useAppSelector(selectFavoriteCharacters);

  const [showOnlyFavorite, setShowOnlyFavorite] = useState<boolean>(false);

  const handleOnlyFavorite = () => {
    setShowOnlyFavorite(!showOnlyFavorite);
  };

  return (
    <>
      <div className={styles.header}>
        <input type="checkbox" onChange={handleOnlyFavorite} />
      </div>
      <div className={styles.charactersWrapper}>
        {showOnlyFavorite
          ? favoriteCharacters.map((favoriteCharacter: RMCharacter) => {
              return (
                <CharCard
                  key={favoriteCharacter?.id}
                  character={favoriteCharacter}
                />
              );
            })
          : characters.map((character: RMCharacter) => {
              return <CharCard key={character?.id} character={character} />;
            })}
      </div>
    </>
  );
}
