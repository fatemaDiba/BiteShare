import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Auth/AuthProvider";
import { toast } from "react-toastify";
import OrderDetailsModal from "./OrderDetailsModal";
import Pagination from "../../../components/Pagination";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState(null);
    const itemsPerPage = 10;
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user?.email) return;

        axiosSecure
            .get(`/foods/orders?email=${user.email}&page=${currentPage}&limit=${itemsPerPage}`)
            .then((res) => {
                setOrders(res.data.orders);
                setPagination(res.data.pagination);
            })
            .catch(() => toast.error("Failed to load orders!"));
    }, [axiosSecure, user?.email, currentPage]);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axiosSecure.patch(`/orders/${orderId}`, { status: newStatus });
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === orderId ? { ...order, status: newStatus } : order
                )
            );
            // Update selectedOrder if it's the one being changed
            if (selectedOrder && selectedOrder._id === orderId) {
                setSelectedOrder((prev) => ({ ...prev, status: newStatus }));
            }
            toast.success("Status updated successfully!");
        } catch (error) {
            toast.error("Failed to update status!");
        }
    };

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
    };

    const closeModal = () => {
        setSelectedOrder(null);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                    My Orders
                </h1>
                <p className="text-lg text-gray-600">
                    Total Orders:{" "}
                    <span className="font-bold text-amber-600">
                        {pagination?.totalItems || 0}
                    </span>
                </p>
            </div>

            {/* Empty State */}
            {orders.length === 0 ? (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-semibold text-gray-600">
                        No orders found
                    </h3>
                    <p className="text-gray-500 mt-2">
                        Your orders will appear here
                    </p>
                </div>
            ) : (
                <>
                    {/* Beautiful Table */}
                    <div className="overflow-x-auto shadow-2xl rounded-2xl border border-amber-100">
                        <table className="w-full text-sm lg:text-base">
                            <thead className="bg-linear-to-r from-amber-500 to-orange-500 text-white">
                                <tr>
                                    <th className="px-6 py-5 text-left font-bold">#</th>
                                    <th className="px-6 py-5 text-left font-bold">Food Name</th>
                                    <th className="px-6 py-5 text-left font-bold">Delivery Location</th>
                                    <th className="px-6 py-5 text-left font-bold">Delivery Date</th>
                                    <th className="px-6 py-5 text-left font-bold">Quantity</th>
                                    <th className="px-6 py-5 text-center font-bold">Status</th>
                                    <th className="px-6 py-5 text-center font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {orders.map((order, index) => {
                                    return (
                                        <tr
                                            key={order._id}
                                            className="hover:bg-amber-50 transition-colors duration-200"
                                        >
                                            {/* Index */}
                                            <td className="px-6 py-5 font-medium text-gray-700">
                                                {(currentPage - 1) * itemsPerPage + index + 1}
                                            </td>

                                            {/* Food Name */}
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={order.foodImg || "/no-image.jpg"}
                                                        alt={order.foodName}
                                                        className="w-12 h-12 rounded-lg object-cover border border-amber-200"
                                                    />
                                                    <span className="font-semibold text-gray-800">
                                                        {order.foodName}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Delivery Location */}
                                            <td className="px-6 py-5 text-gray-700">
                                                {order.address}
                                            </td>

                                            {/* Delivery Date */}
                                            <td className="px-6 py-5 text-gray-700">
                                                {new Date(order.deliveryDate).toLocaleDateString()}
                                            </td>

                                            {/* Quantity */}
                                            <td className="px-6 py-5 text-gray-700 font-semibold">
                                                {order.quantity}
                                            </td>

                                            {/* Status - Editable Select */}
                                            <td className="px-6 py-5 text-center">
                                                <select
                                                    value={order.status}
                                                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                    className={`px-4 py-2 rounded-full text-xs font-bold text-white border-none outline-none cursor-pointer ${order.status === "Delivered"
                                                        ? "bg-green-500"
                                                        : order.status === "In Transit"
                                                            ? "bg-blue-500"
                                                            : order.status === "Processing"
                                                                ? "bg-amber-500"
                                                                : order.status === "Cancelled"
                                                                    ? "bg-red-500"
                                                                    : "bg-gray-500"
                                                        }`}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Processing">Processing</option>
                                                    <option value="In Transit">In Transit</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </td>

                                            {/* Action - View Details */}
                                            <td className="px-6 py-5 text-center">
                                                <button
                                                    onClick={() => handleViewDetails(order)}
                                                    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Component */}
                    <Pagination
                        pagination={pagination}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </>
            )}

            {/* Modal for Order Details */}
            <OrderDetailsModal selectedOrder={selectedOrder} closeModal={closeModal} />
        </div>
    );
};

export default Orders;