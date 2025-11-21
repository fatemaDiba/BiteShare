import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const BulkOrderModal = ({ isOpen, onClose, food, user, axiosBase }) => {
  const initialFormState = {
    quantity: 1,
    deliveryDate: "",
    address: "",
    description: "",
  }
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBulkOrder = () => {
    console.log("Bulk order data:", { ...form, foodId: food._id, user });
    toast.info("Bulk order feature coming soon!");
    onClose();
  };

  const handleClose = () => {
    setForm(initialFormState);
    onClose();
  };


  if (!isOpen) return null;

  const total = form.quantity * (food.price || 0);

  return (
    <dialog open className="modal">
      <div className="modal-box p-6 sm:p-10 relative max-w-3xl w-full">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 hover:scale-110 transition cursor-pointer"
        >
          <IoIosCloseCircleOutline className="text-3xl" />
        </button>

        <h1 className="text-lg md:text-3xl font-bold mb-6 text-left">
          Bulk Order - {food.foodName}
        </h1>

        {/* Quantity & Total standalone */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 my-4">
          <div className="form-control flex flex-col gap-2 w-full">
            <label className="label font-semibold">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              className="input input-bordered w-full"
              value={form.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start md:justify-center items-center">
            <p className="text-xl font-bold text-green-600 mt-2">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Name and Email - full width on mobile, two-column on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control flex flex-col gap-2 w-full">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              value={user?.displayName || ""}
              disabled
            />
          </div>

          <div className="form-control flex flex-col gap-2 w-full">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              value={user?.email || ""}
              disabled
            />
          </div>
        </div>

        {/* Delivery Date & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="form-control flex flex-col gap-2 w-full">
            <label className="label font-semibold">Delivery Date</label>
            <input
              type="date"
              name="deliveryDate"
              className="input input-bordered w-full"
              value={form.deliveryDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-control flex flex-col gap-2 w-full">
            <label className="label font-semibold">Delivery Address</label>
            <input
              type="text"
              name="address"
              className="input input-bordered w-full"
              placeholder="Full address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Full-width description */}
        <div className="form-control my-4 flex flex-col gap-2 w-full">
          <label className="label font-semibold">Notes (Optional)</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="3"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        {/* Submit button */}
        <div className="modal-action mt-2">
          <button
            onClick={handleBulkOrder}
            className="btn bg-purple-600 text-white w-full sm:w-auto"
          >
            Place Bulk Order
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default BulkOrderModal;
