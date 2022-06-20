import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Post from "./components/Post/Post";
import Review from "./components/Review/Review";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route
          path={"/post"}
          element={
            <RequireAuth>
              <Post />
            </RequireAuth>
          }
        />
        <Route path={"/review"} element={<Review />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
