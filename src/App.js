import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
// import AboutMe from "./pages/AboutMe/AboutMe";
import Game from "./pages/Game/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/:videoId" element={<HomePage />}></Route>
          </Route>
          <Route path="/game" element={<Game />}></Route>
          {/* <Route path="/about" element={<AboutMe />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
