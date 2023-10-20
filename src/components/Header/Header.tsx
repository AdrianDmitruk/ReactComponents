import { FC } from "react";

import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header: FC = () => {
  return (
    <div className={styles.wrap}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.wrapLinkActive : styles.wrapLink
        }
      >
        Основные задания
      </NavLink>
      <NavLink
        to="/dop"
        className={({ isActive }) =>
          isActive ? styles.wrapLinkActive : styles.wrapLink
        }
      >
        Дополнительные задания
      </NavLink>
    </div>
  );
};
