import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, Backe } from "./components/HomePage";
import Cards from "./components/cards/Cards";
import AppDeco from "./components/decomposition/AppDeco";

function App() {
  return (
    <BrowserRouter basename={"/hw_react_composition/"}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Task1"
          element={
            <>
              <Backe />
              <Cards />
            </>
          }
        />
        <Route
          path="/Task2"
          element={
            <>
              <Backe />
              <AppDeco />
            </>
          }
        />
        <Route
          path="/Task3"
          element={
            <>
              <Backe />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
