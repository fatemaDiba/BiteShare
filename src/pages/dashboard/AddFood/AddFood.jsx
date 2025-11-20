import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Auth/AuthProvider";
import useAxios from "../../../hooks/useAxios";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosBase = useAxios();
  const navigate = useNavigate();

  const handleAddFoodBtn = (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.foodName.value.trim();
    const foodImg = form.foodImg.value.trim();
    const location = form.location.value.trim();
    const quantity = Number(form.quantity.value);
    const exDate = form.date.value;
    const description = form.description.value.trim();
    const price = Number(form.price.value);

    // Validation
    if (foodName.length < 2) return toast.error("Food name must be at least 2 characters");
    if (description.length < 10) return toast.error("Description must be at least 10 characters");
    if (quantity < 1) return toast.error("Quantity must be at least 1");
    if (price < 0) return toast.error("Price cannot be negative");
    if (!exDate) return toast.error("Please select expiry date");

    const foodData = {
      foodName,
      foodImg,
      location,
      quantity,
      exDate,
      description,
      price,
      userEmail: user?.email,
      userName: user?.displayName,
      userUrl: user?.photoURL,
    };

    axiosBase
      .post("/foods/add-food", foodData)
      .then(() => {
        toast.success("Food added successfully!");
        form.reset();
        navigate("/available-foods");
      })
      .catch(() => toast.error("Failed to add food. Try again."));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Share Your <span className="text-amber-600">Surplus Food</span>
          </h1>
          <p className="text-gray-600 mt-3 text-lg">Help reduce waste and feed someone in need</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Add New Food Listing</h2>
          </div>

          {/* Form Body */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleAddFoodBtn} className="space-y-6">

              {/* 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Food Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Food Name</label>
                  <input
                    type="text"
                    name="foodName"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="e.g., Chicken Biryani, Vegetable Curry"
                  />
                </div>

                {/* Food Image URL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Food Image URL</label>
                  <input
                    type="url"
                    name="foodImg"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="https://example.com/food.jpg"
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="e.g., Dhaka, Gulshan 2"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity (servings)</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="5"
                  />
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Price per Item */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bulk Order Price (per item)</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl font-bold text-amber-600">$</span>
                    <input
                      type="number"
                      name="price"
                      min="0"
                      step="0.01"
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none font-semibold"
                      placeholder="4.99"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  rows="5"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none resize-none"
                  placeholder="Describe the food condition, ingredients, portion size, allergies, etc."
                ></textarea>
              </div>

              {/* Donor Info Card */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 flex items-center gap-5">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="You"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">You are donating as:</p>
                  <p className="text-lg font-semibold text-amber-700">{user?.displayName}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  Add Food to Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;