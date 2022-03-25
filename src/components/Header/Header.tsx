import React from "react";
import styles from "./Header.module.scss";

export function Header({
  showOnlyFavorite,
}: {
  showOnlyFavorite: () => void;
}): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logo}
          src="/images/Rick_and_Morty.svg"
          alt="logo"
        />
      </div>
      <div className={styles.controls}>
        <span>Show only favorite characters</span>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={showOnlyFavorite}
        />
      </div>
    </div>
  );
}
