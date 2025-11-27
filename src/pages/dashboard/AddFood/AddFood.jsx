import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Auth/AuthProvider";
import useAxios from "../../../hooks/useAxios";

const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosBase = useAxios();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleAddFoodBtn = async (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.foodName.value.trim();
    const location = form.location.value.trim();
    const quantity = Number(form.quantity.value);
    const exDate = form.date.value;
    const description = form.description.value.trim();
    const price = Number(form.price.value);
    const imageFile = form.foodImg.files[0];

    // Validation
    if (foodName.length < 2)
      return toast.error("Food name must be at least 2 characters");
    if (description.length < 10)
      return toast.error("Description must be at least 10 characters");
    if (quantity < 1) return toast.error("Quantity must be at least 1");
    if (price < 0) return toast.error("Price cannot be negative");
    if (!exDate) return toast.error("Please select expiry date");
    if (!imageFile) return toast.error("Please select an image");

    try {
      setLoading(true);

      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);


      if (!imgbbApiKey) {
        setLoading(false);
        return toast.error("ImgBB API key is missing in configuration");
      }

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        formData
      );

      if (imgRes.data.success) {
        const foodImg = imgRes.data.data.display_url;

        const foodData = {
          foodName,
          foodImg,
          location,
          quantity,
          exDate: new Date(exDate).toISOString(),
          description,
          price,
          userEmail: user?.email,
          userName: user?.displayName,
          userUrl: user?.photoURL,
        };

        await axiosBase.post("/foods/add-food", foodData);
        toast.success("Food added successfully!");
        form.reset();
        navigate("/dashboard/manage-myfoods");
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add food. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Add New Food Listing
          </h1>
          <p className="text-lg text-gray-600">
            Share your extra food and help someone in need today.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
          {/* Form Body */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleAddFoodBtn} className="space-y-6">
              {/* 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Food Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="e.g., Chicken Biryani, Vegetable Curry"
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="e.g., Dhaka, Gulshan 2"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity (servings)
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="5"
                  />
                </div>

                {/* Expiry Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Price per Item */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bulk Order Price (per item)
                  </label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl font-bold text-amber-600">
                      $
                    </span>
                    <input
                      type="number"
                      name="price"
                      min="0"
                      step="0.01"
                      required
                      className="w-full pl-12 pr-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none font-semibold"
                      placeholder="4.99"
                    />
                  </div>
                </div>
              </div>

              {/* Food Image File & Preview */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Food Image
                </label>
                <input
                  type="file"
                  name="foodImg"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                  className="w-full cursor-pointer px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                />
                {preview && (
                  <div className="mt-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-40 object-cover border-2 border-amber-100"
                    />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="5"
                  required
                  className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none resize-none"
                  placeholder="Describe the food condition, ingredients, portion size, allergies, etc."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn bg-amber-500 text-white font-bold text-lg px-12 py-5 rounded-lg shadow-2xl transform ease-in-out transition-all duration-200 border-0 hover:bg-orange-400 ${loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="loading loading-spinner"></span>
                      Uploading...
                    </span>
                  ) : (
                    "Add Food to Share"
                  )}
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
