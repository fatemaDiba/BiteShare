import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
// import { AuthContext } from "../../Auth/AuthProvider";
// import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { newUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const handleRegisterBtn = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const photoUrl = form.photo.value;

  //   const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  //   if (!password.match(regex)) {
  //     toast.error("Please give A Valid Password ");
  //     return;
  //   }
  //   newUser(email, password)
  //     .then((res) => {
  //       // console.log(res.user);
  //       form.reset();
  //       toast.success("Successfully registered user");

  //       updateUser(name, photoUrl)
  //         .then((res) => { })
  //         .catch((error) => {
  //           toast.error("Something went wrong");
  //         });

  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       toast.error("Something went wrong");
  //       setLoading(false);
  //     });
  // };

  // const handleGoogleBtn = () => {
  //   signInWithGoogle()
  //     .then((res) => {
  //       toast.success("Successfully registered with google");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       toast.error("Something went wrong");
  //       setLoading(false);
  //     });
  // };
  return (
    <div>
      {/* <Helmet>
        <title>Register-BiteBuddy</title>
      </Helmet> */}
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-14 mt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="card bg-light-secondary/50 shadow-2xl p-4">
            <div className="card-body dark:text-white">
              <h2 className="font-bold text-center text-2xl md:text-4xl mb-6">
                <span className="text-amber-700">Register</span> Now
              </h2>
              <form onSubmit={handleRegisterBtn}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      name="photo"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <button className="btn bg-amber-500 hover:bg-amber-600 text-white w-full">
                    Register
                  </button>
                </div>
              </form>
              <div className="my-6">
                <p className="text-sm mb-2 text-black">Register with Google</p>
                <button
                  onClick={handleGoogleBtn}
                  className="btn bg-slate-200 hover:bg-slate-400 w-full font-bold text-black"
                >
                  Google <FcGoogle className="text-xl" />
                </button>
              </div>
              <div className="text-sm">
                <p className="text-black">
                  Already Have An Account?
                  <Link to="/login" className="text-amber-700 font-bold ml-2">
                    LogIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full justify-center hidden md:flex">
            <img
              src="/assets/register.png"
              alt="Register Illustration"
              className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
