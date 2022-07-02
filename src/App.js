import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import "./App.css";
import Login from "./Components/Login.jsx";
import Error from "./Components/Error";
import Home from "./Components/Home";
import { Bookings } from "./Components/Bookings";
import { MovieDetiailPage } from "./Components/MovieDetiailPage";

function App() {
  // const { isAuth } = useSelector((state) => state.reducer);

  // if (!isAuth) {
  //   return (
  //     <>
  //       <Navbar />
  //       <Login />
  //     </>
  //   );
  // }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/movies/:id" element={<MovieDetiailPage />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default App;
