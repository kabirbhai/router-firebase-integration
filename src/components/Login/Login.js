import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return <span>Loading</span>;
  }
  return (
    <div>
      <h1 className="text-center text-primary my-4">Please login now</h1>

      <div className="w-50 mx-auto">
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary d-block w-50 my-2 mx-auto"
        >
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
