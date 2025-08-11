const StatCard = ({ title, value, change, icon, iconBg }) => {
  const isPositive = change && change.startsWith("+")

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && <p className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</p>}
        </div>
        <div className={`p-3 rounded-lg ${iconBg}`}>{icon}</div>
      </div>
    </div>
  )
}

export default StatCard
