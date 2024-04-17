import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login";

function App() {
  const url = useParams();
  console.log(url);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home"></Navigate>} />
        <Route
          path="/home"
          element={
            <>
              <NavBar></NavBar>
              <Hero></Hero>
              <Footer></Footer>{" "}
            </>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="*"
          element={
            <div>
              <h2>Error 404</h2>
              <p>This page doesn't exists</p>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
