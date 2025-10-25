// import { useEffect, useState } from "react";
import Card from "../../foodCard/Card";
// import useAxios from "../../hooks/useAxios";
// import { toast } from "react-toastify";
import { Link } from "react-router";
import { MdFoodBank } from "react-icons/md";

const data = [
  {
    _id: "1",
    foodImg: "https://i.ibb.co/2g7fYq3/food1.jpg",
    foodName: "Vegetable Fried Rice",
    location: "Dhaka, Bangladesh",
    exDate: "2025-10-30",
    quantity: "3 boxes",
    note: "Freshly cooked, vegetarian-friendly.",
    status: "Available"
  },
  {
    _id: "2",
    foodImg: "https://i.ibb.co/TPtZp6k/food2.jpg",
    foodName: "Chicken Biryani",
    location: "Chittagong, Bangladesh",
    exDate: "2025-10-28",
    quantity: "5 plates",
    note: "Stored properly, still warm.",
    status: "Pending"
  },
  {
    _id: "3",
    foodImg: "https://i.ibb.co/CP0f5Pp/food3.jpg",
    foodName: "Mixed Fruit Salad",
    location: "Sylhet, Bangladesh",
    exDate: "2025-10-27",
    quantity: "2 bowls",
    note: "Contains seasonal fruits, no preservatives.",
    status: "Delivered"
  }
];

const FeaturedFoods = () => {
  // const [foods, setFoods] = useState([]);
  // const axiosBase = useAxios();

  // useEffect(() => {
  //   axiosBase
  //     .get("/foods/featured-foods")
  //     .then((res) => setFoods(res.data))
  //     .catch(() => {
  //       toast.error("Something Went Wrong");
  //     });
  // }, []);

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
        {data?.map((food) => {
          return <Card key={food._id} data={food}></Card>;
        })}
      </div>
      <div className="text-center">
        <Link
          to="/available-foods"
          className="btn bg-amber-500 hover:bg-amber-600 font-semibold text-center text-black px-5"
        >
          Show All Foods
          <MdFoodBank className="mr-2 text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
