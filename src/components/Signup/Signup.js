import React from "react";

const Signup = () => {
  return (
    <div>
      <h1 className="text-center text-secondary my-4">Please Sign up </h1>

      <div className="w-50 mx-auto">
        <form className="w-50 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="exampleInputEmail1"
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

          <button
            type="Sign up"
            className="btn btn-outline-primary d-block w-100 my-2 "
          >
            Submit
          </button>
        </form>
        <button
          type="submit"
          className="btn btn-outline-primary d-block w-50 my-2 mx-auto"
        >
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Signup;
