import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

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
         alert('Successfully Login');
       
        }
       
        setError('');
        form.reset();
        navigate(from, { replace: true });
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
        setError(error.message)
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="hero w-full my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary"
                >
                  Google
                </button>
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
