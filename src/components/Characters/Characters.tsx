import React from "react";
import styles from "./Characters.module.scss";
import { useAppSelector } from "store/hooks";
import {
  selectCharacters,
  selectFavoriteCharacters,
  selectPage,
  getCharacters,
} from "store/slicers/charactersSlice";
import { useAppDispatch } from "store/hooks";
import { RMCharacter } from "types/index";
import { TOTAL_CHARACTERS_COUNT } from "constants/index";
import { CharCard } from "components/CharCard/CharCard";

export function Characters({
  showOnlyFavorite,
}: {
  showOnlyFavorite: boolean;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const favoriteCharacters = useAppSelector(selectFavoriteCharacters);
  const page = useAppSelector(selectPage);
  const showMoreButton =
    !showOnlyFavorite && characters.length <= TOTAL_CHARACTERS_COUNT;

  const handleMoreChars = () => {
    dispatch(getCharacters(page));
  };

  return (
    <>
      <div className={styles.charactersWrapper}>
        <div className={styles.charactersInnerWrapper}>
          {showOnlyFavorite ? (
            favoriteCharacters.length > 0 ? (
              favoriteCharacters.map((favoriteCharacter: RMCharacter) => {
                return (
                  <CharCard
                    key={favoriteCharacter?.id}
                    character={favoriteCharacter}
                  />
                );
              })
            ) : (
              <div className={styles.noFavoriteChars}>
                <span> I’ll tell you how I feel about school, Jerry</span>
              </div>
            )
          ) : (
            characters.map((character: RMCharacter) => {
              return <CharCard key={character?.id} character={character} />;
            })
          )}
        </div>
        {showMoreButton && (
          <div className={styles.moreCharsWrapper}>
            <button onClick={handleMoreChars} className={styles.moreChars}>
              Get
              <img
                className={styles.addMoreChars}
                src="/images/morty.svg"
                alt="more chars"
              />
              characters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
