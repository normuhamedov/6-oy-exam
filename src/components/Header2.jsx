import { FaSearch, FaBell, FaCog } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <nav className="text-sm text-gray-500">
            <span>Pages</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
          </nav>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type here..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FaBell />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FaCog />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
