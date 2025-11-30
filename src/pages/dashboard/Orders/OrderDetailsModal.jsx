const OrderDetailsModal = ({ selectedOrder, closeModal }) => {
    if (!selectedOrder) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="bg-linear-to-r from-amber-500 to-orange-500 text-white px-8 py-6 rounded-t-2xl">
                    <h2 className="text-3xl font-bold">Order Details</h2>
                </div>

                {/* Modal Body */}
                <div className="p-8">
                    {/* Food Image */}
                    <div className="mb-6 flex justify-center">
                        <img
                            src={selectedOrder.foodImg || "/no-image.jpg"}
                            alt={selectedOrder.foodName}
                            className="w-48 h-48 rounded-xl object-cover border-4 border-amber-200 shadow-lg"
                        />
                    </div>

                    {/* Order Information */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-600">Food Name:</span>
                            <span className="font-bold text-gray-800 text-lg">
                                {selectedOrder.foodName}
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-600">Delivery Location:</span>
                            <span className="text-gray-800">{selectedOrder.address}</span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-600">Delivery Date:</span>
                            <span className="text-gray-800">
                                {new Date(selectedOrder.deliveryDate).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-600">Quantity:</span>
                            <span className="font-bold text-amber-600 text-lg">
                                {selectedOrder.quantity}
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-600">Status:</span>
                            <span
                                className={`inline-block px-4 py-2 rounded-full text-xs font-bold text-white ${selectedOrder.status === "Delivered"
                                    ? "bg-green-500"
                                    : selectedOrder.status === "In Transit"
                                        ? "bg-blue-500"
                                        : selectedOrder.status === "Processing"
                                            ? "bg-amber-500"
                                            : selectedOrder.status === "Cancelled"
                                                ? "bg-red-500"
                                                : "bg-gray-500"
                                    }`}
                            >
                                {selectedOrder.status}
                            </span>
                        </div>

                        {selectedOrder.note && (
                            <div className="border-b border-gray-200 pb-3">
                                <span className="font-semibold text-gray-600 block mb-2">Note:</span>
                                <p className="text-gray-700 italic bg-amber-50 p-4 rounded-lg">
                                    {selectedOrder.note}
                                </p>
                            </div>
                        )}

                        {selectedOrder.orderDate && (
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                <span className="font-semibold text-gray-600">Order Date:</span>
                                <span className="text-gray-800">
                                    {new Date(selectedOrder.orderDate).toLocaleDateString()}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Close Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={closeModal}
                            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsModal;
