import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const notify = () => toast.success("Login Successful");

const Login = () => {
  const [error, setError] = useState(null);
  useTitle("Login");

  const { signIn, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be 6 characters long");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          alert("Successfully Login");
        }

        setError("");
        form.reset();

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("https://pictorialbd-photography-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="hero w-full my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col ">
          <div className="text-center lg:text-left">
            <div>
              <img
                className=""
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=826&t=st=1668058828~exp=1668059428~hmac=e253a0f4368eeef54ac70c2de52bb225dadda1545bcd41d0c8292d620bc456f5"
                alt=""
              />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center py-5">Login now!</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  required
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don't have an account?
                  </Link>
                  <p className="text-red-500">{error}</p>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary my-3">Login</button>

                <div onClick={notify}>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn  btn-ghost btn-outline w-full text-2xl"
                  >
                    <FaGoogle className="mx-2"></FaGoogle> Google
                  </button>
                </div>
                <Toaster />
                {error}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
