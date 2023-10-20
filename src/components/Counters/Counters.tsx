import { FC, useState } from "react";
import { Counter } from "./Counter/Counter";

import styles from "./Counters.module.scss";

interface ICounter {
  id: number;
  count: number;
}

export const Counters: FC = () => {
  const [counters, setCounters] = useState<ICounter[]>([]);

  const handleAddCounter = () => {
    const newCounter = {
      id: Date.now(),
      count: 0,
    };

    setCounters([...counters, newCounter]);
  };

  const increment = (id: number) => {
    const updatedCounters: ICounter[] = counters.map((counter) => {
      return counter.id === id
        ? {
            ...counter,
            count: counter.count + 1,
          }
        : counter;
    });

    setCounters(updatedCounters);
  };

  const decrement = (id: number) => {
    const updatedCounters: ICounter[] = counters.map((counter) => {
      if (counter.id === id) {
        const newCount = counter.count - 1;
        return {
          ...counter,
          count: newCount >= 0 ? newCount : 0,
        };
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  const sum = counters.reduce((result, { count }) => result + count, 0);

  const handleRemoveAllCounters = () => {
    setCounters([]);
  };

  const removeCounter = (id: number) => {
    const updatedCounters: ICounter[] = counters.filter(
      (counter) => counter.id !== id
    );
    setCounters(updatedCounters);
  };

  const resetCounter = (id: number) => {
    const updatedCounters: ICounter[] = counters.map((counter) => {
      return counter.id === id
        ? {
            ...counter,
            count: 0,
          }
        : counter;
    });

    setCounters(updatedCounters);
  };

  const isEven = (num: number) => num % 2 === 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.wrapBtn}>
        <button className={styles.wrapBtnItem} onClick={handleAddCounter}>
          Добавить счетчик
        </button>
        <button
          className={styles.wrapBtnItem}
          onClick={handleRemoveAllCounters}
        >
          Удалить счетчики
        </button>
      </div>

      <div className={styles.wrapTitle}>Общая сумма со счетчиков: {sum}</div>

      <div className={styles.wrapCard}>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={increment}
              onDecrement={decrement}
              onDelete={removeCounter}
              onReset={resetCounter}
              isEven={isEven(counter.count)}
            />
          );
        })}
      </div>
    </div>
  );
};
