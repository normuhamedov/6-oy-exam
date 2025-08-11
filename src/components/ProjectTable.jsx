import { FaEllipsisV } from "react-icons/fa"

const ProjectTable = () => {
  const projects = [
    {
      name: "Chakra Soft UI Version",
      members: ["👤", "👤", "👤", "👤"],
      budget: "$14,000",
      completion: 60,
    },
    {
      name: "Add Progress Track",
      members: ["👤", "👤"],
      budget: "$3,000",
      completion: 10,
    },
    {
      name: "Fix Platform Errors",
      members: ["👤", "👤"],
      budget: "Not set",
      completion: 100,
    },
    {
      name: "Launch our Mobile App",
      members: ["👤", "👤", "👤", "👤"],
      budget: "$32,000",
      completion: 100,
    },
    {
      name: "Add the New Pricing Page",
      members: ["👤", "👤", "👤", "👤"],
      budget: "$400",
      completion: 25,
    },
    {
      name: "Redesign New Online Shop",
      members: ["👤", "👤"],
      budget: "$7,600",
      completion: 40,
    },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
          <p className="text-sm text-gray-500">30 done this month</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <FaEllipsisV />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
              <th className="pb-3">Companies</th>
              <th className="pb-3">Members</th>
              <th className="pb-3">Budget</th>
              <th className="pb-3">Completion</th>
            </tr>
          </thead>
          <tbody className="space-y-3">
            {projects.map((project, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-sm font-semibold">{project.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-gray-900">{project.name}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex -space-x-2">
                    {project.members.map((member, idx) => (
                      <div key={idx} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white">
                        <span className="text-xs">{member}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-4 text-gray-900 font-medium">{project.budget}</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900">{project.completion}%</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectTable
