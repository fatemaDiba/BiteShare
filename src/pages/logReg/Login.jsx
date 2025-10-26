// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  // const { oldUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);

  //   oldUser(email, password)
  //     .then((res) => {
  //       // console.log(res.user);
  //       toast.success("Successfully Logged in user");
  //       setLoading(false);
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       toast.error("Something went wrong");
  //     });
  // };

  // const handleGoogleBtn = () => {
  //   signInWithGoogle()
  //     .then((res) => {
  //       toast.success("Successfully logged in user with google");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       toast.success("Something went wrong");
  //       setLoading(false);
  //     });
  // };

  return (
    <div>
      {/* <Helmet>
        <title>LogIn-BiteShare</title>
      </Helmet> */}
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-14 mt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="card bg-light-secondary/50 shadow-2xl p-6 lg:p-10">
            <div className="card-body text-white">
              <h2 className="font-bold text-center text-xl text-black/90 md:text-4xl mb-6">
                <span className="text-amber-700">Login</span> Now
              </h2>
              <form>
                {/* onSubmit={handleSubmit} */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 mb-4">
                  <button className="btn bg-amber-500 hover:bg-amber-600 text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="mb-4">
                <p className="text-sm mb-2 text-black">Login with Google</p>
                <button
                  className="btn font-bold bg-slate-200 hover:bg-slate-400 w-full text-black"
                // onClick={handleGoogleBtn}
                >
                  Google <FcGoogle className="text-xl" />
                </button>
              </div>

              <div className="text-sm">
                <p className="text-black">
                  Don't Have An Account?
                  <Link
                    to="/register"
                    className="text-amber-700 font-bold ml-2"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:flex justify-center">
            <img
              src="/assets/login1.png"
              alt="Login Illustration"
              className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
