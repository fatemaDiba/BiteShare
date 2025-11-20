import { Link } from "react-router";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";

const ManageFoodCard = ({ food, index, handleDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 group">
      {/* Image */}
      <div className="h-56 bg-gray-200 relative overflow-hidden">
        <img
          src={food.foodImg || "/no-image.jpg"}
          alt={food.foodName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-amber-600 shadow">
          #{index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 truncate">
          {food.foodName}
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Quantity:</span>
            <span className="text-amber-600 font-bold">
              {food.quantity} serving{food.quantity > 1 ? "s" : ""}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Location:</span>
            <span className="text-gray-800">{food.location}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">Expires:</span>
            <span
              className={`font-bold ${new Date(food.exDate) < new Date() ? "text-green-600" : "text-red-600"
                }`}
            >
              {new Date(food.exDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <Link
            to={`/update-food/${food._id}`}
            className="flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-700 font-bold px-5 py-3 rounded-xl transition-all hover:scale-105"
          >
            <FaPencil />
            Edit
          </Link>

          <button
            onClick={() => handleDelete(food._id)}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 font-bold px-5 py-3 rounded-xl transition-all hover:scale-105"
          >
            <RiDeleteBin5Fill className="text-xl" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageFoodCard;
