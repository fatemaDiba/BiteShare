import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import moment from "moment";
import RequestFoodModal from "../../components/modals/RequestFoodModal";
import BulkOrderModal from "../../components/modals/BulkOrderModal";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosBase = useAxios();
  const { user } = useContext(AuthContext);

  const [food, setFood] = useState({});
  const [currentDate] = useState(moment().format("DD-MM-YYYY"));
  const [loading, setLoading] = useState(true);

  // Modal visibility state
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

  useEffect(() => {
    axiosBase
      .post("/foods/food-details", { id })
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load food details");
        setLoading(false);
      });
  }, [id, axiosBase]);

  const openRequestModal = () => {
    if (!user) return navigate("/login");
    setIsRequestModalOpen(true);
  };

  const openBulkModal = () => {
    if (!user) return navigate("/login");
    setIsBulkModalOpen(true);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-12 mt-28">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={food.foodImg}
              alt={food.foodName}
              className="w-full h-80 sm:h-[400px] lg:h-full object-cover rounded-xl shadow-lg"
            />
            {/* Expiry Date Top-Right */}
            <div className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-lg text-white text-sm font-semibold shadow">
              Expires: {food.exDate}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {food.foodName}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="text-lg font-semibold text-gray-800">{food.quantity}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Bulk Price</p>
                <p className="text-lg font-semibold text-gray-800">${food.price}</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-sm text-gray-500">Pickup Location</p>
                <p className="text-lg font-semibold text-gray-800">{food.location}</p>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-gray-700">{food.description}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={openRequestModal}
                className="btn w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-md transform transition hover:scale-105"
              >
                Request Food
              </button>
              <button
                onClick={openBulkModal}
                className="btn w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transform transition hover:scale-105"
              >
                Bulk Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <RequestFoodModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        food={food}
        user={user}
        currentDate={currentDate}
        axiosBase={axiosBase}
        foodId={id}
        navigate={navigate}
      />
      <BulkOrderModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        food={food}
        user={user}
        axiosBase={axiosBase}
      />
    </div>

  );
};

export default FoodDetails;