import Card from "../../foodCard/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";
import useAxios from "../../hooks/useAxios";
import Pagination from "../../components/Pagination";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosBase = useAxios();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [grid, setGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    setCurrentPage(1); // Reset to first page on search

    // Fetch foods with search query
    setLoading(true);
    axiosBase
      .get(`/foods/all-foods?search=${searchQuery}&page=1`)
      .then((res) => {
        setFoods(res.data.foods);
        setPagination(res.data.pagination);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  };

  const handleLayout = () => {
    setGrid(!grid);
  };

  useEffect(() => {
    setLoading(true);
    // Removed status=Available to fetch all foods
    axiosBase
      .get(`/foods/all-foods?page=${currentPage}`)
      .then((res) => {
        setFoods(res.data.foods);
        setPagination(res.data.pagination);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  }, [currentPage]);

  const handleSortByQuantity = (e) => {
    const sortValue = e.target.value;
    setCurrentPage(1); // Reset to first page on sort

    if (!sortValue) {
      // Reset to default (no sorting)
      setLoading(true);
      // Removed status=Available
      axiosBase
        .get("/foods/all-foods?page=1")
        .then((res) => {
          setFoods(res.data.foods);
          setPagination(res.data.pagination);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Something went wrong");
          setLoading(false);
        });
      return;
    }

    setLoading(true);
    // Removed status=Available
    axiosBase
      .get(
        `/foods/all-foods?sortBy=quantity&sortOrder=${sortValue}&page=1`
      )
      .then((res) => {
        setFoods(res.data.foods);
        setPagination(res.data.pagination);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* <Helmet>
        <title>All Foods-BiteShare</title>
      </Helmet> */}
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-12 mt-28">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 ">
            All Foods
          </h1>
          <p className="text-center text-sm md:text-base w-[80%]">
            Explore a variety of food donations ready for pickup!
            Whether you're looking for homemade meals, fresh bread, or delicious
            fruits, we've got you covered. Check the details, pickup locations,
            and expiration times to claim your food before it's gone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:justify-items-end mb-14">
          {/* search bar */}
          <div className="col-span-2 md:col-span-1">
            <label className="input input-bordered  flex items-center gap-2">
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
              className="select select-bordered w-full "
            >
              <option defaultValue value="">
                Sort by (Default)
              </option>
              <option className="font-semibold" value="asc">
                Low Quantity
              </option>
              <option className="font-semibold" value="desc">
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
              {foods?.map((food) => {
                return <Card key={food._id} data={food}></Card>;
              })}
            </div>

            {/* Pagination Controls */}
            <Pagination
              pagination={pagination}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
