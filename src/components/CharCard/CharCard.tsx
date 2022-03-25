import React, { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { RMCharacter } from "types/index";
import {
  addToFavorite,
  removeFromFavorite,
} from "store/slicers/charactersSlice";
import styles from "./CharCard.module.scss";

export function CharCard({
  character,
}: {
  character: RMCharacter;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { name, status, species } = character;

  const handleAddFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addToFavorite(character));
    } else {
      dispatch(removeFromFavorite(character));
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.charPhoto}
          src={character?.image}
          alt="charPhoto"
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span>Name: {name}</span>
          <span>Species: {species}</span>
          <span>Status: {status}</span>
        </div>
        <div className={styles.likeWrapper}>
          <img
            onClick={handleAddFavorite}
            className={styles.likeButton}
            src={isFavorite ? "/images/likeFill.svg" : "/images/like.svg"}
            alt="Like"
          />
        </div>
      </div>
    </div>
  );
}
