import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesLayout from "./Layouts/MoviesLayout";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import About from "./Pages/About";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MoviesLayout/>}>
            <Route element={<Home/>} path="/" />
            <Route element={<Movies/>} path="/movies" />
            <Route element={<About/>} path="/about" />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
