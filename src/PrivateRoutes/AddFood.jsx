import { useContext } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosBase = useAxios();
  const navigate = useNavigate();

  const handleAddFoodBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImg = form.foodImg.value;
    const location = form.location.value;
    const quantity = form.quantity.value;
    const exDate = form.date.value;
    const note = form.note.value;
    const userEmail = user.email;
    const userName = user.displayName;
    const userUrl = user.photoURL;

    if (!foodName || foodName.length < 2) {
      toast.error("Please give valid name!");
      return;
    }

    if (!note || note.length < 5) {
      toast.error("Please give a note at least 5 character!");
      return;
    }

    if (!quantity || quantity < 0) {
      toast.error("Please give quantity more than 0!");
      return;
    }

    const foodAddFormData = {
      foodName,
      foodImg,
      location,
      quantity,
      exDate,
      note,
      userEmail,
      userName,
      userUrl,
    };

    axiosBase
      .post("/foods/add-food", foodAddFormData)
      .then((res) => {
        toast.success("Successfully Added Food");
        navigate("/available-foods");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add food-BiteBuddy</title>
      </Helmet>
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-20 mt-28">
        <div className="card bg-light-secondary/50 w-[90%] md:w-[80%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body dark:text-white">
            <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl">
              Add Your <span className="text-amber-700">Food Information </span>
            </h2>
            <form onSubmit={handleAddFoodBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  dark:text-white">Food Name</span>
                </label>
                <input
                  type="text"
                  name="foodName"
                  placeholder="Food name"
                  className="input input-bordered mb-5"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Food Image</span>
                </label>
                <input
                  type="url"
                  name="foodImg"
                  placeholder="food url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  dark:text-white">
                    Pick up location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Pick up location"
                  className="input input-bordered mb-5"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Quantity</span>
                </label>
                <input
                  type="number"
                  min={0}
                  name="quantity"
                  placeholder="quantity of food"
                  required
                  className="input input-bordered mb-5"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">
                    Expire Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="expire date and time"
                  required
                  className="input input-bordered mb-5"
                />
              </div>
              <textarea
                placeholder="additional notes"
                name="note"
                className="textarea textarea-bordered textarea-base w-full mt-3"
                required
              ></textarea>

              <div className="form-control mt-6 mb-4">
                <button className="btn bg-amber-500 hover:bg-amber-600 text-white">
                  Add Food
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
