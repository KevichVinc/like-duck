import React, { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { RMCharacter } from "types/index";
import {
  addToFavorite,
  removeFromFavorite,
} from "store/slicers/charactersSlice";
import styles from "./CharCard.module.scss";
import cx from "classnames";

export function CharCard({
  character,
}: {
  character: RMCharacter;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isCharPhotoLoaded, setIsImageLoaded] = useState<boolean>(false);

  const originalImage = document.createElement("img");
  originalImage.src = character?.image;
  originalImage.onload = () => {
    setIsImageLoaded(true);
  };

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
        {isCharPhotoLoaded ? (
          <img
            className={styles.charPhoto}
            src={character?.image}
            alt="charPhoto"
          />
        ) : (
          <img
            className={cx(styles.portal, styles.rotating)}
            src="/images/portal.png"
            alt="portal"
          />
        )}
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
