import { useContext, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Auth/AuthProvider";

const OrdersChart = () => {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user?.email) return;

        const fetchOrdersData = async () => {
            try {
                // Fetch all orders for the user
                const response = await axiosSecure.get(`/foods/orders?email=${user.email}&limit=1000`);
                const orders = response.data.orders;

                // Group orders by month
                const monthlyData = {};
                const monthNames = [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];

                // Get last 6 months
                const currentDate = new Date();
                for (let i = 5; i >= 0; i--) {
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
                    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
                    const monthLabel = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

                    monthlyData[monthKey] = {
                        month: monthLabel,
                        orders: 0,
                        delivered: 0,
                        pending: 0,
                        cancelled: 0,
                    };
                }

                // Count orders by month and status
                orders.forEach(order => {
                    const orderDate = new Date(order.orderDate);
                    const monthKey = `${orderDate.getFullYear()}-${String(orderDate.getMonth() + 1).padStart(2, '0')}`;

                    if (monthlyData[monthKey]) {
                        monthlyData[monthKey].orders++;

                        if (order.status === "Delivered") {
                            monthlyData[monthKey].delivered++;
                        } else if (order.status === "Pending" || order.status === "Processing" || order.status === "In Transit") {
                            monthlyData[monthKey].pending++;
                        } else if (order.status === "Cancelled") {
                            monthlyData[monthKey].cancelled++;
                        }
                    }
                });

                // Convert to array for chart
                const chartArray = Object.values(monthlyData);
                setChartData(chartArray);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching orders data:", error);
                setLoading(false);
            }
        };

        fetchOrdersData();
    }, [axiosSecure, user?.email]);

    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Orders Overview (Last 6 Months)</h3>
                <div className="flex justify-center items-center h-80">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
                </div>
            </div>
        );
    }

    const totalOrders = chartData.reduce((sum, month) => sum + month.orders, 0);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Orders Overview (Last 6 Months)</h3>
                <div className="text-sm text-gray-600">
                    Total: <span className="font-bold text-amber-600">{totalOrders}</span> orders
                </div>
            </div>

            {totalOrders === 0 ? (
                <div className="flex justify-center items-center h-80 text-gray-500">
                    <div className="text-center">
                        <p className="text-xl font-semibold">No orders yet</p>
                        <p className="text-sm mt-2">Your order statistics will appear here</p>
                    </div>
                </div>
            ) : (
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="month"
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            axisLine={{ stroke: '#e5e7eb' }}
                        />
                        <YAxis
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            axisLine={{ stroke: '#e5e7eb' }}
                            allowDecimals={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                            cursor={{ fill: 'rgba(251, 191, 36, 0.1)' }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '20px' }}
                            iconType="circle"
                        />
                        <Bar
                            dataKey="delivered"
                            fill="#10b981"
                            name="Delivered"
                            radius={[8, 8, 0, 0]}
                        />
                        <Bar
                            dataKey="pending"
                            fill="#f59e0b"
                            name="Pending/In Progress"
                            radius={[8, 8, 0, 0]}
                        />
                        <Bar
                            dataKey="cancelled"
                            fill="#ef4444"
                            name="Cancelled"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default OrdersChart;
