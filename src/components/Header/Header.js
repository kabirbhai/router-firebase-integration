import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="bg-light py-4 shadow">
      <nav style={{ fontSize: "23px" }}>
        <Link className=" mx-3 border p-2 rounded" to={"/home"}>
          Home
        </Link>
        <Link className=" mx-3 border p-2 rounded" to={"/post"}>
          Post
        </Link>
        <Link className=" mx-3 border p-2 rounded" to={"/review"}>
          Reviews
        </Link>
        <Link className=" mx-3 border p-2 rounded" to={"/signup"}>
          signup
        </Link>
        {user?.uid ? (
          <Link
            onClick={() => signOut(auth)}
            className=" mx-3 border p-2 rounded"
            to={"/login"}
          >
            Log out
          </Link>
        ) : (
          <Link className=" mx-3 border p-2 rounded" to={"/login"}>
            Login
          </Link>
        )}
        <span>{user?.displayName}</span>
      </nav>
    </header>
  );
};

export default Header;
