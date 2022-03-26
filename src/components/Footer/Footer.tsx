import React from "react";
import { scrollTo } from "utils/scrollTo";
import styles from "./Footer.module.scss";
import cx from "classnames";

export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInnerWrapper}>
        <div className={styles.createdByWrapper}>
          <span className={styles.createdByTitle}>Created By: KevichVinc</span>
          <a href="https://github.com/KevichVinc" target="_blank">
            <img
              className={styles.linkIcon}
              src="/images/github.svg"
              alt="github"
            />
          </a>
        </div>
        <div className={styles.goToTop} onClick={() => scrollTo(0)}>
          <img
            className={cx(styles.portalToTop, styles.rotating)}
            src="/images/portal.png"
            alt="portal"
          />
          <span className={styles.scrollTitle}>Scroll to top!</span>
        </div>
      </div>
    </div>
  );
}
