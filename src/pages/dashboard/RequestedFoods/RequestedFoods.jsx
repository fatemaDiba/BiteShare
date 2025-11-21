import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Auth/AuthProvider";
import { toast } from "react-toastify";
import moment from "moment";

const RequestedFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    axiosSecure
      .post("/foods/requested-foods", { email: user.email })
      .then((res) => setFoods(res.data))
      .catch(() => toast.error("Failed to load requested foods!"));
  }, [axiosSecure, user?.email]);

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          My Food Requests
        </h1>
        <p className="text-lg text-gray-600">
          Total Requests: <span className="font-bold text-amber-600">{foods.length}</span>
        </p>
      </div>

      {/* Empty State */}
      {foods.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-8xl mb-4">Neutral Face</div>
          <h3 className="text-2xl font-semibold text-gray-600">No requests found</h3>
          <p className="text-gray-500 mt-2">Your requested foods will appear here</p>
        </div>
      ) : (
        /* Beautiful Table */
        <div className="overflow-x-auto shadow-2xl rounded-2xl border border-amber-100">
          <table className="w-full text-sm lg:text-base">
            <thead className="bg-linear-to-r from-amber-500 to-orange-500 text-white">
              <tr>
                <th className="px-6 py-5 text-left font-bold">#</th>
                <th className="px-6 py-5 text-left font-bold">Food Name</th>
                <th className="px-6 py-5 text-left font-bold">Donor</th>
                <th className="px-6 py-5 text-left font-bold">Location</th>
                <th className="px-6 py-5 text-left font-bold">Requested On</th>
                <th className="px-6 py-5 text-left font-bold">Expires On</th>
                <th className="px-6 py-5 text-center font-bold">Status</th>
                <th className="px-6 py-5 text-center font-bold">Note</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {foods.map((food, index) => {
                const isExpired = moment(food.exDate, "DD-MM-YYYY").isBefore(moment(), "day");

                const requestDate = food.currentDate
                  ? moment(food.currentDate, "DD-MM-YYYY").format("DD MMM YYYY")
                  : "—";

                const expireDate = moment(food.exDate, "DD-MM-YYYY").format("DD MMM YYYY");


                return (
                  <tr
                    key={food._id}
                    className="hover:bg-amber-50 transition-colors duration-200"
                  >
                    {/* Index */}
                    <td className="px-6 py-5 font-medium text-gray-700">
                      {index + 1}
                    </td>

                    {/* Food Name */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={food.foodImg || "/no-image.jpg"}
                          alt={food.foodName}
                          className="w-12 h-12 rounded-lg object-cover border border-amber-200"
                        />
                        <span className="font-semibold text-gray-800">
                          {food.foodName}
                        </span>
                      </div>
                    </td>

                    {/* Donor */}
                    <td className="px-6 py-5">
                      <span className="font-medium text-amber-700">
                        {food.donner || food.donorName || "Anonymous"}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-5 text-gray-700">{food.location}</td>

                    {/* Requested Date */}
                    <td className="px-6 py-5 text-gray-700">{requestDate}</td>

                    {/* Expire Date */}
                    <td className="px-6 py-5">
                      <span
                        className={`font-bold ${isExpired ? "text-red-600" : "text-green-600"
                          }`}
                      >
                        {expireDate}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5 text-center">
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-xs font-bold text-white ${isExpired
                          ? "bg-red-500"
                          : food.requestStatus === "Delivered"
                            ? "bg-blue-500"
                            : "bg-amber-500"
                          }`}
                      >
                        {isExpired
                          ? "Expired"
                          : food.requestStatus || "Pending"}
                      </span>
                    </td>

                    {/* Note */}
                    <td className="px-6 py-5 text-center">
                      {food.note ? (
                        <span className="text-gray-600 italic">Yes</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestedFoods;