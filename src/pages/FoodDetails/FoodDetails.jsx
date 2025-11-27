import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import moment from "moment";
import RequestFoodModal from "../../components/modals/RequestFoodModal";
import BulkOrderModal from "../../components/modals/BulkOrderModal";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { MdAccessTime, MdEmail } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";

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

  const isExpired = new Date(food.exDate) < new Date();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-12 mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Image and Status */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image with 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl bg-linear-to-br from-gray-100 to-gray-200">
            <img
              src={food.foodImg}
              alt={food.foodName}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Status Badge */}
            <div
              className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg backdrop-blur-sm ${food.status === "Available"
                ? "bg-green-500/90"
                : food.status === "Requested"
                  ? "bg-orange-500/90"
                  : "bg-gray-500/90"
                }`}
            >
              {food.status}
            </div>
            {/* Expiry Badge */}
            <div
              className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg backdrop-blur-sm ${isExpired ? "bg-red-500/90" : "bg-blue-500/90"
                }`}
            >
              <div className="flex items-center gap-2">
                <MdAccessTime />
                {isExpired ? "Expired" : `Expires At : ${new Date(food.exDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}`}
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {food.description || food.note || "No description available."}
            </p>
          </div>
        </div>

        {/* Right Column - Details and Actions */}
        <div className="space-y-6">
          {/* Food Name */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {food.foodName}
            </h1>
          </div>

          {/* Food Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Food Information</h2>

            {/* Quantity */}
            <div className="flex items-center justify-between py-3 px-4 bg-amber-50 rounded-xl">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <TbPaperBag className="text-amber-600 text-lg" />
                Quantity
              </span>
              <span className="text-amber-700 font-bold">
                {food.quantity} {food.quantity > 1 ? "servings" : "serving"}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between py-3 px-4 bg-green-50 rounded-xl">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <BiDollar className="text-green-600 text-lg" />
                Bulk Price
              </span>
              <span className="text-green-700 font-bold text-lg">
                ${food.price}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-start justify-between py-3 px-4 bg-blue-50 rounded-xl">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <FaLocationDot className="text-blue-600 text-lg" />
                Location
              </span>
              <span className="text-blue-700 font-semibold text-right max-w-[180px]">
                {food.location}
              </span>
            </div>
          </div>

          {/* Donor Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Donor Information</h2>

            {/* Donor Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <FaUser className="text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Donor Name</p>
                <p className="font-semibold text-gray-800">{food.userName}</p>
              </div>
            </div>

            {/* Donor Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MdEmail className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Contact Email</p>
                <p className="font-semibold text-gray-800 text-sm break-all">
                  {food.userEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={openRequestModal}
              disabled={food.status !== "Available" || isExpired}
              className={`btn w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transform transition hover:scale-105 border-0 ${food.status !== "Available" || isExpired ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              Request Food
            </button>
            <button
              onClick={openBulkModal}
              className="btn w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg transform transition hover:scale-105 border-0"
            >
              Bulk Order
            </button>
            {food.status !== "Available" && (
              <p className="text-center text-sm text-orange-600 font-medium">
                Request Food is not available for this item
              </p>
            )}
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
        ownerEmail={food.userEmail}
        ownerName={food.userName}
      />
    </div>
  );
};

export default FoodDetails;