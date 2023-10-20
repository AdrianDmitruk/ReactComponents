import { FC } from "react";

import { HashRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { DopPage } from "./pages/DopPage/DopPage";
import { Layouts } from "./components/Layouts/Layouts";

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/dop" element={<DopPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
