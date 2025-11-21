import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEditNote, MdAccessTime } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { TbPaperBag } from "react-icons/tb";

const Card = ({ data }) => {
  const { _id, foodImg, foodName, location, exDate, quantity, note, status } = data;

  const isExpired = new Date(exDate) < new Date();

  return (
    <Link to={`/food-details/${_id}`} className="block h-full">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 group h-full flex flex-col">
        {/* Image */}
        <div className="h-56 bg-gray-200 relative overflow-hidden">
          <img
            src={foodImg || "/no-image.jpg"}
            alt={foodName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Status Badge */}
          <div
            className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${status === "Available"
              ? "bg-green-500"
              : status === "Requested"
                ? "bg-amber-500"
                : "bg-gray-500"
              }`}
          >
            {status}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 truncate">
            {foodName}
          </h3>

          <div className="space-y-3 text-sm flex-1">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600 flex items-center gap-2">
                <TbPaperBag className="text-amber-600" />
                Quantity:
              </span>
              <span className="text-amber-600 font-bold">
                {quantity} serving{quantity > 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600 flex items-center gap-2">
                <FaLocationDot className="text-amber-600" />
                Location:
              </span>
              <span className="text-gray-800">{location}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-600 flex items-center gap-2">
                <MdAccessTime className="text-amber-600" />
                Expires:
              </span>
              <span
                className={`font-bold ${isExpired ? "text-red-600" : "text-green-600"
                  }`}
              >
                {new Date(exDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            {note && (
              <div className="flex items-start gap-2">
                <MdOutlineEditNote className="text-amber-600 mt-0.5" />
                <p className="text-gray-700 text-sm ">{note}</p>
              </div>
            )}
          </div>

          {/* Optional subtle footer badge for status icon */}
          <div className="flex justify-center pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-amber-700 font-semibold">
              <GrStatusGood />
              <span>{status}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;