import { useContext } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Auth/AuthProvider";
import Loading from "../../../loading/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ManageFoodCard from "../../../components/dashboard/ManageFoodCard";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const {
    data: foods = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["manageMyFoods", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.post("/foods/manage-myfoods", {
        email: user?.email,
      });
      return res.data;
    },
    enabled: !!user?.email,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiosSecure.delete(`/foods/available-foods/${id}`),
    onSuccess: (_, id) => {
      toast.success("Food deleted successfully!");
      queryClient.setQueryData(["manageMyFoods", user?.email], (old = []) =>
        old.filter((food) => food._id !== id)
      );
    },
    onError: () => toast.error("Failed to delete food"),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this food?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f87171",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Failed to load your foods
      </div>
    );

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          My Foods
        </h1>
        <p className="text-gray-600 mt-3 text-lg mb-2">
          Update or remove foods you've shared
        </p>
        <p className="text-lg text-gray-600">
          Food{foods.length !== 1 ? "s" : ""} Listed:{" "}
          <span className="font-bold text-amber-600">{foods.length}</span>
        </p>
      </div>

      {/* Empty State */}
      {foods.length === 0 ? (
        <div className="text-center py-20">
          <div className="bg-white rounded-3xl shadow-2xl p-16 max-w-lg mx-auto border border-amber-100">
            <div className="text-6xl mb-6 text-gray-300">No foods yet</div>
            <p className="text-gray-600 text-lg mb-8">
              You haven't shared any food yet. Start helping others!
            </p>
            <Link
              to="/dashboard/add-food"
              className="btn bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg"
            >
              Add Your First Food
            </Link>
          </div>
        </div>
      ) : (
        /* Responsive Card Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {foods.map((food, index) => (
            <ManageFoodCard
              key={food._id}
              food={food}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
