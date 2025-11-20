import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Auth/AuthProvider";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosBase = useAxios();
  const { user } = useContext(AuthContext);

  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosBase
      .post("/foods/food-details", { id })
      .then((res) => {
        setFood(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load food");
        setLoading(false);
      });
  }, [id, axiosBase]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      foodName: form.foodName.value.trim(),
      foodImg: form.foodImg.value.trim(),
      location: form.location.value.trim(),
      quantity: Number(form.quantity.value),
      exDate: form.date.value,
      description: form.description.value.trim(),
      price: Number(form.price.value),
    };

    // Simple validation
    if (updatedData.foodName.length < 2) return toast.error("Food name too short");
    if (updatedData.description.length < 10) return toast.error("Description must be 10+ characters");
    if (updatedData.quantity < 1) return toast.error("Quantity must be at least 1");
    if (updatedData.price < 0) return toast.error("Price cannot be negative");

    axiosBase
      .put(`/foods/update-food/${id}`, updatedData)
      .then(() => {
        toast.success("Food updated successfully!");
        navigate("/manage-myfoods");
      })
      .catch(() => toast.error("Update failed"));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-30 px-4">
      <div className="max-w-4xl mx-auto"> {/* Controlled max width */}

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Update <span className="text-amber-600">Food Listing</span>
          </h1>
          <p className="text-gray-600 mt-2">Edit details and save changes</p>
        </div>

        {/* Compact & Beautiful Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-5 text-center">
            <h2 className="text-2xl font-bold">Edit Food Information</h2>
          </div>

          {/* Form Body */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleUpdate} className="space-y-6">

              {/* 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Food Name</label>
                  <input
                    type="text"
                    name="foodName"
                    defaultValue={food.foodName}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                    placeholder="e.g., Chicken Biryani"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Food Image URL</label>
                  <input
                    type="url"
                    name="foodImg"
                    defaultValue={food.foodImg}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                    placeholder="https://example.com/food.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={food.location}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                    placeholder="e.g., Dhaka, Mirpur"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    defaultValue={food.quantity}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={food.exDate}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Item ($)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-bold">$</span>
                    <input
                      type="number"
                      name="price"
                      min="0"
                      step="0.01"
                      defaultValue={food.price || 0}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                      placeholder="5.99"
                    />
                  </div>
                </div>
              </div>

              {/* Description - Full Width */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  rows="4"
                  defaultValue={food.description || food.note}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none"
                  placeholder="Food condition, ingredients, allergies, etc."
                />
              </div>

              {/* Donor Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-center gap-4">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="You"
                  className="w-14 h-14 rounded-full border-4 border-white shadow"
                />
                <div>
                  <p className="font-semibold text-gray-800">{user?.displayName}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Update Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;