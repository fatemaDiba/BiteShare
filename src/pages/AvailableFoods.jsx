import Card from "../foodCard/Card";
import { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";


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


const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [grid, setGrid] = useState(true);

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleLayout = () => {
    setGrid(!grid);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   axiosBase
  //     .get("/foods/available-foods")
  //     .then((res) => {
  //       setFoods(res.data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       toast.error("Something went wrong");
  //     });
  // }, []);

  const filteredFood = data?.filter((food) => {
    return food.foodName.toLowerCase().includes(query?.toLowerCase());
  });

  // const handleSortByQuantity = (e) => {
  //   const sortValue = e.target.value;
  //   setLoading(true);
  //   axiosBase.post("/foods/sort-by-quantity", { sortValue }).then((res) => {
  //     setFoods(res.data);
  //     setLoading(false);
  //   });
  // };

  return (
    <div>
      {/* <Helmet>
        <title>Available foods-BiteShare</title>
      </Helmet> */}
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-12 mt-28">
        <div className="flex flex-col justify-center items-center mb-10 dark:text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 ">
            Available Foods
          </h1>
          <p className="text-center text-sm md:text-base w-[80%]">
            Explore a variety of available food donations ready for pickup!
            Whether you're looking for homemade meals, fresh bread, or delicious
            fruits, we've got you covered. Check the details, pickup locations,
            and expiration times to claim your food before it's gone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:justify-items-center mb-14">
          {/* search bar */}
          <div className="col-span-2 md:col-span-1">
            <label className="input input-bordered dark:border-white/50 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                onChange={handleSearch}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          {/* sort btn */}
          <div>
            <select
              onChange={handleSortByQuantity}
              className="select select-bordered w-full dark:border-white/60"
            >
              <option defaultValue value="">
                Sort by (Default)
              </option>
              <option className="font-semibold" value="1">
                Low Quantity
              </option>
              <option className="font-semibold" value="-1">
                High Quantity
              </option>
            </select>
          </div>
          {/* change layout */}
          <div>
            <button
              onClick={handleLayout}
              className="btn bg-amber-500 hover:bg-amber-600"
            >
              Change Layout
            </button>
          </div>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${grid ? "lg:grid-cols-4" : "lg:grid-cols-3"
                } gap-6`}
            >
              {filteredFood?.map((food) => {
                return <Card key={food._id} data={food}></Card>;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
