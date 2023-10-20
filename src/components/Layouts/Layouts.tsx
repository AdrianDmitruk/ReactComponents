import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layouts: FC = () => {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
