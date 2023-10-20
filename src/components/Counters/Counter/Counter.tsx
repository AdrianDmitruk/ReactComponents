import { FC, memo } from "react";

import styles from "./Counter.module.scss";

interface CounterProps {
  counter: {
    id: number;
    count: number;
  };
  isEven: boolean;
  onDecrement: (id: number) => void;
  onIncrement: (id: number) => void;
  onDelete: (id: number) => void;
  onReset: (id: number) => void;
}

export const Counter: FC<CounterProps> = memo(
  ({ counter, isEven, onDecrement, onIncrement, onDelete, onReset }) => {
    return (
      <div className={styles.wrap}>
        <div className={styles.wrapTitle}>
          <div>{counter.count}</div>
          <div>{isEven ? "четное" : "нечетное"}</div>
        </div>

        <div className={styles.wrapBtn}>
          <button
            className={styles.wrapBtnItem}
            onClick={() => onDecrement(counter.id)}
          >
            Уменьшить
          </button>

          <button
            className={styles.wrapBtnItem}
            onClick={() => onIncrement(counter.id)}
          >
            Увеличить
          </button>
        </div>
        <div className={styles.wrapBtn}>
          <button
            className={styles.wrapBtnItem}
            onClick={() => onDelete(counter.id)}
          >
            Удалить счетчик
          </button>
          <button
            className={styles.wrapBtnItem}
            onClick={() => onReset(counter.id)}
          >
            Обнулить счетчик
          </button>
        </div>
      </div>
    );
  }
);
