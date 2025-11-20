const DashHome = ({ stats }) => {
  stats = { added: 10, requested: 5, available: 42 }

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
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 text-white bg-gradient-to-r ${item.color} hover:scale-105 transition-transform`}
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-4xl font-bold mt-3">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashHome;
