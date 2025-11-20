import { useEffect, useState } from "react";
import Card from "../../foodCard/Card";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { BiFoodMenu } from "react-icons/bi";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();

  useEffect(() => {
    axiosBase
      .get("/foods/featured-foods")
      .then((res) => setFoods(res.data))
      .catch(() => {
        toast.error("Something Went Wrong");
      });
  }, []);

  return (
    <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-10">
      <div className="mb-14 md:w-[90%] mx-auto text-center ">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center">
          Share A <span className="text-amber-700">Meal</span>, Share The
          <span className="text-amber-700"> Love</span>
        </h2>
        <p className="text-base w-[90%] lg:w-[70%] mx-auto text-center">
          Your small act of kindness can bring a big smile. Explore our featured
          dishes and contribute to providing meals for those in need. Together,
          we can make a difference, one plate at a time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mb-10">
        {foods?.map((food) => {
          return <Card key={food._id} data={food}></Card>;
        })}
      </div>
      <div className="text-center">
        <Link
          to="/available-foods"
          className="btn bg-amber-500 hover:bg-amber-600 text-black px-6 inline-flex items-center justify-center gap-3"
        >
          Show All Foods
          <BiFoodMenu className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
