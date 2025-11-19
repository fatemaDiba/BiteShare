import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Auth/AuthProvider";
import { useNavigate } from "react-router";
import useAxios from "../../../hooks/useAxios";

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
      {/* <Helmet>
        <title>Add food-BiteBuddy</title>
      </Helmet> */}
      <div className="w-11/12 sm:container xl:w-7/12 mx-auto mb-20 mt-28">
        <div className="card bg-light-secondary/50 w-[90%] md:w-[80%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl my-6">
              Add Your <span className="text-amber-700">Food Information </span>
            </h2>
            <form onSubmit={handleAddFoodBtn} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text ">Food Name</span>
                </label>
                <input
                  type="text"
                  name="foodName"
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
                  placeholder="Food Image URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text ">
                    Pick up location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
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
                  placeholder="Quantity of food"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">
                    Expire Date
                  </span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Expire date and time"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control gap-2 flex flex-col">
                <label className="label">
                  <span className="label-text">Bulk Order Price</span>
                </label>
                <input
                  type="number"
                  min={0}
                  name="price"
                  placeholder="Price"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control gap-2 flex flex-col md:col-span-2">
                <label className="label">
                  <span className="label-text">
                    Description
                  </span>
                </label>
                <textarea
                  placeholder="Description"
                  name="note"
                  className="textarea textarea-bordered textarea-base w-full"
                  required
                ></textarea>
              </div>


              <div className="form-control gap-2 flex flex-col mb-4 md:col-span-2">
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
