import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://bitebuddy-lovat.vercel.app",
  // baseURL: "http://localhost:3000/",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          console.log("Unauthorized Access");
          logOutUser()
            .then(() => {
              console.log("User Logged Out");
              navigate("/login");
            })
            .catch(() => {
              console.log("Something went wrong");
            });
        }
      }
    );
  }, []);

  return instance;
};

export default useAxiosSecure;
