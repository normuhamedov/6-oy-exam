const Chart = ({ data, title, subtitle }) => {
  const maxValue = Math.max(...data)

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 text-white">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-blue-200 text-sm">{subtitle}</p>
      </div>

      <div className="flex items-end space-x-2 h-40">
        {data.map((value, index) => (
          <div
            key={index}
            className="bg-blue-400 rounded-t-sm flex-1 transition-all duration-300 hover:bg-blue-300"
            style={{
              height: `${(value / maxValue) * 100}%`,
              minHeight: "10px",
            }}
          />
        ))}
      </div>

      <div className="flex justify-between text-xs text-blue-200 mt-4">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
          <span key={index}>{month}</span>
        ))}
      </div>
    </div>
  )
}

export default Chart
