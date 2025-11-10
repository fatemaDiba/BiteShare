import { useContext } from "react";
import { Link } from "react-router"
import { Tooltip } from "react-tooltip"
import { AuthContext } from "../../Auth/AuthProvider";

const Profile = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutBtn = (e) => {
    e.preventDefault();
    logOutUser()
      .then((res) => {
        console.log("User Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(first)("Something went wrong!");
      });
  };

  return (
    <>
      {user ? (
        <div className="flex gap-4">
          <Tooltip
            anchorSelect="#profile-pic"
            place="bottom"
            className="!p-2 !rounded-lg !bg-gray-700 !text-white !h-24"
            clickable
          >
            <div className="flex flex-col justify-center items-center space-y-2 py-2">
              <p className="font-bold text-md">{user?.displayName}</p>
              <button
                onClick={handleLogOutBtn}
                className="px-4 py-1.5 cursor-pointer text-white font-semibold rounded-lg hover:bg-slate-500 bg-light-primary"
              >
                Logout
              </button>
            </div>
          </Tooltip>

          <div
            tabIndex={0}
            role="button"
            id="profile-pic"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="md:w-10 w-8 rounded-full relative">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-slate-200 text-sm px-4 py-2 rounded-md font-semibold hover:bg-slate-400 "
          >
            LogIn
          </Link>
          <Link
            to="/register"
            className=" bg-amber-500 hover:bg-amber-600 text-sm px-4 py-2 rounded-md font-semibold"
          >
            Register
          </Link>
        </div>
      )}
    </>
  )
}
export default Profile