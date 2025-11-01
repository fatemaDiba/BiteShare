import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const axiosBase = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    axiosBase
      .post("/foods/food-details", { id })
      .then((res) => {
        setFood(res.data);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, [axiosBase, id]);

  const handleUpdateFoodBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImg = form.foodImg.value;
    const location = form.location.value;
    const quantity = form.quantity.value;
    const exDate = form.date.value;
    const note = form.note.value;

    if (!foodName || foodName.length < 2) {
      toast.error("Please give valid name!");
      return;
    }

    if (!note || note.length < 5) {
      toast.error("Please give a note at least 5 characters!");
      return;
    }

    if (!quantity || quantity < 0) {
      toast.error("Please give quantity more than 0!");
      return;
    }

    const foodUpdateFormData = {
      foodName,
      foodImg,
      location,
      quantity,
      exDate,
      note,
    };

    axiosBase
      .put(`/foods/update-food/${id}`, foodUpdateFormData)
      .then(() => {
        toast.success("Successfully Updated Food");
        navigate("/available-foods");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      {/* <Helmet>
        <title>Update food - BiteBuddy</title>
      </Helmet> */}
      <div className="w-11/12 sm:container xl:w-7/12 mx-auto mb-20 mt-28">
        <div className="card bg-light-secondary/50 w-[90%] md:w-[80%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl my-6">
              Update Your <span className="text-amber-700">Food Information</span>
            </h2>

            <form
              onSubmit={handleUpdateFoodBtn}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  name="foodName"
                  defaultValue={food.foodName}
                  placeholder="Food name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="url"
                  name="foodImg"
                  defaultValue={food.foodImg}
                  placeholder="food url"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">Pick up location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={food.location}
                  placeholder="Pick up location"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  min={0}
                  name="quantity"
                  defaultValue={food.quantity}
                  placeholder="quantity of food"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={food.exDate}
                  placeholder="expire date and time"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control gap-2 flex flex-col md:col-span-2">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <textarea
                  placeholder="additional notes"
                  name="note"
                  defaultValue={food.note}
                  className="textarea textarea-bordered textarea-base w-full"
                  required
                ></textarea>
              </div>

              <div className="form-control gap-2 flex flex-col mb-4 md:col-span-2">
                <button className="btn bg-amber-500 hover:bg-amber-600 text-white">
                  Update Food
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
