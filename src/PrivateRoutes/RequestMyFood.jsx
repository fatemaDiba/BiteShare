import { useContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const RequestMyFood = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    axiosSecure
      .post("/foods/requested-foods", { email })
      .then((res) => {
        setFoods(res.data);
      })
      .catch(() => {
        toast.error("Something went Wrong!");
      });
  }, []);
  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-12 mt-28 bg-light-secondary/50  px-10 py-5 rounded-2xl">
      <Helmet>
        <title>My Food Request-BiteBuddy</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-base text-black/70 mb-5">
              <th></th>
              <th>Food Name</th>
              <th>PickUp Location</th>
              <th>Note</th>
              <th>Donner Name</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foods?.map((food, index) => {
              return (
                <tr className="hover" key={food._id}>
                  <th>{index + 1}</th>
                  <td>{food.foodName}</td>
                  <td>{food.location}</td>
                  <td>{food.note}</td>
                  <td>{food.donner}</td>
                  <td>{food.exDate}</td>
                  <td>{food.currentDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestMyFood;
