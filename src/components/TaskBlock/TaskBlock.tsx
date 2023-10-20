import { FC, ReactNode } from "react";

import styles from "./TaskBlock.module.scss";

interface TaskBlockProps {
  title: string;
  text: string;
  liFirst?: string;
  liSecond?: string;
  liThird?: string;
  liFourth?: string;
  liFifth?: string;
  liSixth?: string;
  responseText?: string;
  responseLiFirst?: string;
  responseLiSecond?: string;
  responseLiThird?: string;
  children?: ReactNode;
}

export const TaskBlock: FC<TaskBlockProps> = ({
  title,
  text,
  liFirst,
  liSecond,
  liThird,
  liFourth,
  liFifth,
  liSixth,
  responseText,
  responseLiFirst,
  responseLiSecond,
  responseLiThird,
  children,
}) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.wrapTitle}>{title}</h2>
      <p className={styles.wrapText}>{text}</p>

      <ul className={styles.wrapUl}>
        {liFirst && <li>1. {liFirst}</li>}
        {liSecond && <li>2. {liSecond}</li>}
        {liThird && <li>3. {liThird}</li>}
        {liFourth && <li>4. {liFourth}</li>}
        {liFifth && <li>5. {liFifth}</li>}
        {liSixth && <li>6. {liSixth}</li>}
      </ul>

      <div className={styles.wrapDecision}>
        <h4 className={styles.wrapDecisionText}>Решение:</h4>
        {responseText && (
          <p className={styles.wrapResponseText}>{responseText}</p>
        )}
        {responseLiFirst && (
          <p className={styles.wrapResponseText}>1. {responseLiFirst}</p>
        )}
        {responseLiSecond && (
          <p className={styles.wrapResponseText}>2. {responseLiSecond}</p>
        )}
        {responseLiThird && (
          <p className={styles.wrapResponseText}>3. {responseLiThird}</p>
        )}
        {children}
      </div>
    </div>
  );
};
