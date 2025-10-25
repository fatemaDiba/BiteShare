import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEditNote } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";

// {data}
const Card = ({ data }) => {
  const { _id, foodImg, foodName, location, exDate, quantity, note, status } =
    data;



  return (
    <Link to={`/food-details/${_id}`} className="h-full">
      <div className="card bg-[#faf4e9] shadow-xl hover:scale-105 transition-transform h-full">
        <div className="h-[200px] overflow-hidden">
          <figure className="h-full rounded-xl">
            <img
              src={foodImg}
              alt="Shoes"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        <div className="flex flex-col py-4 px-5 space-y-2 mb-5">
          <h2 className="card-title font-bold mb-2">{foodName}</h2>
          <p className="flex gap-2 items-center font-medium text-black/60">
            <TbPaperBag /> {quantity}
          </p>
          <p className="flex gap-2 items-center font-medium text-black/60">
            <FaLocationDot /> {location}
          </p>
          <p className="flex gap-2 items-center font-medium text-black/60">
            <MdAccessTime /> {exDate}
          </p>
          <p className="flex gap-2 items-center font-medium text-black/60">
            <MdOutlineEditNote /> {note}
          </p>
          <p className="flex gap-2 items-center font-medium text-black/60">
            <GrStatusGood /> {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
