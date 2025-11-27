import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import axios from "axios";

const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosBase = useAxios();

  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    axiosBase
      .post("/foods/food-details", { id })
      .then((res) => {
        setFood(res.data);
        setPreview(res.data.foodImg);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load food");
        setLoading(false);
      });
  }, [id, axiosBase]);

  const handleUpdate = async (e) => {
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
    if (foodName.length < 2) return toast.error("Food name too short");
    if (description.length < 10) return toast.error("Description must be 10+ characters");
    if (quantity < 1) return toast.error("Quantity must be at least 1");
    if (price < 0) return toast.error("Price cannot be negative");
    if (!exDate) return toast.error("Please select expiry date");



    try {
      setUpdating(true);
      let foodImg = food.foodImg; // Default to existing image

      // If new image selected, upload it
      if (imageFile) {
        if (!imgbbApiKey) {
          setUpdating(false);
          return toast.error("ImgBB API key is missing in configuration");
        }

        const formData = new FormData();
        formData.append("image", imageFile);

        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          formData
        );

        if (imgRes.data.success) {
          foodImg = imgRes.data.data.display_url;
        } else {
          setUpdating(false);
          return toast.error("Failed to upload image");
        }
      }

      const updatedData = {
        foodName,
        foodImg,
        location,
        quantity,
        exDate: new Date(exDate).toISOString(),
        description,
        price,
      };

      await axiosBase.put(`/foods/update-food/${id}`, updatedData);
      toast.success("Food updated successfully!");
      navigate("/dashboard/manage-myfoods");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        toast.warn(error.response.data.message);
      } else {
        toast.error("Update failed");
      }
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Update <span className="text-amber-600">Food Listing</span>
          </h1>
          <p className="text-lg text-gray-600">
            Edit details and save changes
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
          {/* Form Body */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleUpdate} className="space-y-6">
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
                    defaultValue={food.foodName}
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="e.g., Chicken Biryani"
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
                    defaultValue={food.location}
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                    placeholder="e.g., Dhaka, Mirpur"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    defaultValue={food.quantity}
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
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
                    defaultValue={food.exDate ? food.exDate.split('T')[0] : ''}
                    required
                    className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none"
                  />
                </div>

                {/* Price per Item */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price per Item ($)
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
                      defaultValue={food.price || 0}
                      required
                      className="w-full pl-12 pr-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none font-semibold"
                      placeholder="5.99"
                    />
                  </div>
                </div>
              </div>

              {/* Food Image File & Preview */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Food Image (Leave empty to keep current image)
                </label>
                <input
                  type="file"
                  name="foodImg"
                  accept="image/*"
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
                      className="w-40 object-cover border-2 border-amber-100 rounded-xl"
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
                  defaultValue={food.description || food.note}
                  required
                  className="w-full px-5 py-2 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 outline-none resize-none"
                  placeholder="Food condition, ingredients, allergies, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={updating}
                  className={`btn bg-amber-500 text-white font-bold text-lg px-12 py-5 rounded-lg shadow-2xl transform ease-in-out transition-all duration-200 border-0 hover:bg-orange-400 ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {updating ? (
                    <span className="flex items-center gap-2">
                      <span className="loading loading-spinner"></span>
                      Updating...
                    </span>
                  ) : (
                    "Update Food"
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

export default UpdateFood;
