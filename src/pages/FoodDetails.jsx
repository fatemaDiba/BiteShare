import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthProvider";
import moment from "moment";

const FoodDetails = () => {
  const [currentDate, setCurrentDate] = useState("");
  const { id } = useParams();
  const axiosBase = useAxios();
  const [food, setFood] = useState({});
  const [note, setNote] = useState();
  const { user } = useContext(AuthContext);
  const requestModal = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const date = moment().format("DD-MM-YYYY");
    setCurrentDate(date);
  }, []);

  const handleModal = () => {
    if (user) {
      return requestModal.current.showModal();
    }
    return navigate("/login");
  };

  const handleNote = (e) => {
    const noteData = e.target.value;
    setNote(noteData);
  };

  const handleRequest = () => {
    const requestData = {
      foodName: food.foodName,
      location: food.location,
      donner: food.userName,
      exDate: food.exDate,
      user: user.email,
      note,
      currentDate,
    };

    axiosBase
      .post(`/foods/request-food/${id}`, requestData)
      .then((res) => {
        toast.success("Successfully Added Food To My Request");
        requestModal.current.close();
        navigate("/request-myfood");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  useEffect(() => {
    axiosBase
      .post("/foods/food-details", { id: id })
      .then((res) => {
        setFood(res.data);
        setNote(res.data.note);
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Food Details-BiteBuddy</title>
      </Helmet>
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-12 mt-28">
        <div className="p-10 bg-light-secondary/50  rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img src={food.foodImg} className="w-[50%] rounded-lg shadow-2xl" />
            <div className="space-y-3  dark:text-white">
              <h1 className="text-xl md:text-3xl text-black  dark:text-white font-bold mb-5">
                {food.foodName}
              </h1>
              <p className="text-base md:text-lg font-semibold">
                Quantity:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  {food.quantity}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                PickUp Location:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  {food.location}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Expire Date:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  {food.exDate}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Note:
                <span className="font-semibold ml-2 text-sm md:text-base">
                  {food.note}
                </span>
              </p>
              <div className="flex flex-col md:flex-row gap-5 flex-wrap pt-10 ">
                <button
                  onClick={handleModal}
                  className="btn text-black bg-amber-500 hover:bg-amber-600 dark:text-white"
                >
                  Request Food
                </button>

                {/* modal */}
                <dialog ref={requestModal} className="modal">
                  <div className="modal-box space-y-1 p-10">
                    <h1 className="text-2xl md:text-4xl text-black  dark:text-white font-bold mb-5">
                      {food.foodName}
                    </h1>
                    <p className="text-base  md:text-lg font-semibold">
                      Quantity:
                      <span className="font-semibold ml-2  text-sm md:text-base">
                        {food.quantity}
                      </span>
                    </p>
                    <p className="text-base md:text-lg font-semibold">
                      PickUp Location:
                      <span className="font-semibold ml-2  text-sm md:text-base">
                        {food.location}
                      </span>
                    </p>

                    <p className="text-base md:text-lg font-semibold">
                      Expire Date:
                      <span className="font-semibold ml-2  text-sm md:text-base">
                        {food.exDate}
                      </span>
                    </p>
                    <div className="text-base md:text-lg font-semibold">
                      <p className="mb-2">Note:</p>
                      <textarea
                        className="textarea textarea-bordered"
                        placeholder="Note"
                        defaultValue={note}
                        onChange={handleNote}
                      ></textarea>
                    </div>
                    <ul>
                      <p className="text-base md:text-lg font-semibold">
                        Donner:
                      </p>
                      <li className="font-semibold ml-2 text-sm md:text-base">
                        {food.userEmail}
                      </li>
                      <li className="font-semibold ml-2 text-sm md:text-base">
                        {food.userName}
                      </li>
                    </ul>
                    <p className="text-base md:text-lg font-semibold">
                      User Email:
                      <span className="font-semibold ml-2 text-black/70 text-sm md:text-base">
                        {user?.email}
                      </span>
                    </p>
                    <p className="text-base md:text-lg font-semibold">
                      Request Time:
                      <span className="font-semibold ml-2  text-sm md:text-base">
                        {currentDate}
                      </span>
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        <button
                          onClick={handleRequest}
                          className="btn bg-purple-400 text-black font-bold"
                        >
                          Request
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
