import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const RequestFoodModal = ({
  isOpen,
  onClose,
  food,
  user,
  currentDate,
  axiosBase,
  foodId,
  navigate,
}) => {
  const [note, setNote] = useState(food.note || "");

  const handleRequest = () => {
    const requestData = {
      foodName: food.foodName,
      location: food.location,
      donner: food.userName,
      exDate: food.exDate,
      user: user.email,
      note,
      currentDate,
    };

    axiosBase
      .post(`/foods/request-food/${foodId}`, requestData)
      .then(() => {
        toast.success("Food requested successfully!");
        onClose();
        navigate("/request-myfood");
      })
      .catch(() => toast.error("Something went wrong"));
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal">
      <div className="modal-box p-6 sm:p-10 relative max-w-3xl w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:scale-110 transition"
        >
          <IoIosCloseCircleOutline className="text-3xl" />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          {food.foodName}
        </h1>

        {/* Grid layout for static info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-1">
            <p className="font-semibold">Quantity:</p>
            <p className="text-gray-700">{food.quantity}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Location:</p>
            <p className="text-gray-700">{food.location}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Expires:</p>
            <p className="text-gray-700">{food.exDate}</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Request Date:</p>
            <p className="text-gray-700">{currentDate}</p>
          </div>
        </div>

        {/* Donor Info */}
        <div className="mb-4 p-4 bg-gray-50 rounded-md">
          <p className="font-semibold mb-2">Donor Information:</p>
          <p className="text-gray-700">{food.userName}</p>
          <p className="text-gray-500 text-sm">{food.userEmail}</p>
        </div>

        {/* Notes */}
        <div className="form-control my-4 flex flex-col gap-2">
          <label className="label font-semibold">Additional Notes:</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add any note..."
          />
        </div>

        {/* Your Email */}
        <div className="mb-4">
          <p className="font-semibold">Your Email:</p>
          <p className="text-gray-700">{user?.email}</p>
        </div>

        {/* Confirm Button */}
        <div className="modal-action">
          <button
            onClick={handleRequest}
            className="btn bg-purple-600 text-white w-full sm:w-auto"
          >
            Confirm Request
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default RequestFoodModal;
