import { useContext, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import OrdersChart from "../../../components/dashboard/OrdersChart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Auth/AuthProvider";
import { toast } from "react-toastify";

const DashHome = ({ stats }) => {
  stats = { added: 10, requested: 5, available: 42 };
  const [reportMonth, setReportMonth] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // Generate last 6 months for dropdown
  const months = [];
  const currentDate = new Date();
  for (let i = 0; i < 6; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const label = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    months.push({ value, label });
  }

  const handleDownloadReport = async () => {
    if (!user?.email) {
      toast.error("User information not available. Please try again.");
      return;
    }

    console.log("Downloading report for:", user.email, "Month:", reportMonth);

    try {
      const response = await axiosSecure.get(`/foods/orders/report?email=${user.email}&month=${reportMonth}`);
      const orders = response.data;

      console.log("Orders found:", orders.length);

      if (orders.length === 0) {
        toast.info("No orders found for the selected period.");
        return;
      }

      const doc = new jsPDF();

      // Add title
      doc.setFontSize(18);
      doc.text("Order Report", 14, 20);

      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);
      doc.text(`User: ${user.email}`, 14, 33);
      if (reportMonth) {
        doc.text(`Period: ${reportMonth}`, 14, 38);
      } else {
        doc.text(`Period: All Time`, 14, 38);
      }

      // Define columns
      const tableColumn = ["Food Name", "Qty", "Price", "Status", "Order Date", "Address"];

      // Define rows
      const tableRows = [];

      orders.forEach(order => {
        const orderData = [
          order.foodName,
          order.quantity,
          order.totalPrice,
          order.status,
          new Date(order.orderDate).toLocaleDateString(),
          order.address
        ];
        tableRows.push(orderData);
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 45,
      });

      doc.save(`order_report_${reportMonth || "all_time"}.pdf`);

      toast.success("Report downloaded successfully!");
    } catch (error) {
      console.error("Error downloading report:", error);
      toast.error("Failed to download report.");
    }
  };

  const cards = [
    {
      title: "Foods You Added",
      value: stats.added,
      color: "from-orange-400 to-orange-500",
    },
    {
      title: "Foods You Requested",
      value: stats.requested,
      color: "from-blue-400 to-blue-500",
    },
    {
      title: "Available Foods",
      value: stats.available,
      color: "from-green-400 to-green-500",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>

        {/* Report Generation Section */}
        <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
          <select
            value={reportMonth}
            onChange={(e) => setReportMonth(e.target.value)}
            className="select select-bordered select-sm w-full max-w-xs focus:outline-none border-gray-300 rounded-md text-sm"
          >
            <option value="">All Time</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleDownloadReport}
            className="btn btn-sm bg-amber-500 hover:bg-amber-600 text-white border-none rounded-md flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 text-white bg-linear-to-r ${item.color} hover:scale-105 transition-transform`}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-4xl font-bold mt-3">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Orders Chart */}
      <div className="mt-10">
        <OrdersChart />
      </div>
    </div>
  );
};

export default DashHome;
