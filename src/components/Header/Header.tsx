import React from "react";
import styles from "./Header.module.scss";

export function Header({
  showOnlyFavorite,
}: {
  showOnlyFavorite: () => void;
}): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoBig}
            src="/rick-and-morty-chars-database/images/Rick_and_Morty.svg"
            alt="logo"
          />
          <img
            className={styles.logoSmall}
            src="/rick-and-morty-chars-database/images/jerry.svg"
            alt="logo"
          />
        </div>
        <div className={styles.controls}>
          <span className={styles.controlsTitle}>
            Show only favorite characters
          </span>
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={showOnlyFavorite}
          />
        </div>
      </div>
    </div>
  );
}
