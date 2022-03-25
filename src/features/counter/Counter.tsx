import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { getCharacters, selectCharacters } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const characters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(getCharacters())}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(getCharacters())}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
