"use client"

import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { FaTachometerAlt, FaTable, FaCreditCard, FaWrench, FaUser, FaSignInAlt, FaRocket } from "react-icons/fa"

const Sidebar = () => {
  const { user } = useAuth()

  const menuItems = [
    { icon: FaTachometerAlt, label: "Dashboard", path: "/dashboard" },
    { icon: FaTable, label: "Tables", path: "/tables" },
    { icon: FaCreditCard, label: "Billing", path: "/billing" },
    { icon: FaWrench, label: "RTL", path: "/rtl" },
  ]

  const accountItems = [
    { icon: FaUser, label: "Profile", path: "/profile" },
    { icon: FaSignInAlt, label: "Sign In", path: "/login" },
    { icon: FaRocket, label: "Sign Up", path: "/register" },
  ]

  return (
    <div className="w-64 bg-gradient-to-b from-[#0F123B] via-[#1A1F71] to-[#0F123B] min-h-screen text-white relative">
      {/* Background overlay for better gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-blue-900/30 pointer-events-none"></div>

      <div className="relative z-10 p-6">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-white font-bold text-lg tracking-wider mb-4">VISION UI FREE</h1>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2 mb-8">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm shadow-lg"
                    : "hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Icon with conditional background */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"
                        : "bg-transparent group-hover:bg-blue-500/20"
                    }`}
                  >
                    <item.icon
                      className={`text-lg transition-all duration-300 ${
                        isActive ? "text-white" : "text-blue-400 group-hover:text-blue-300"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isActive ? "text-white font-semibold" : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Account Pages Section */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4 px-4 font-semibold">ACCOUNT PAGES</h3>

          <nav className="space-y-2">
            {accountItems.map((item, index) => {
              // Don't show Sign In/Sign Up if user is logged in
              if (user && (item.path === "/login" || item.path === "/register")) {
                return null
              }

              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm shadow-lg"
                        : "hover:bg-white/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Icon with conditional background */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30"
                            : "bg-transparent group-hover:bg-blue-500/20"
                        }`}
                      >
                        <item.icon
                          className={`text-lg transition-all duration-300 ${
                            isActive ? "text-white" : "text-blue-400 group-hover:text-blue-300"
                          }`}
                        />
                      </div>

                      {/* Label */}
                      <span
                        className={`font-medium transition-all duration-300 ${
                          isActive ? "text-white font-semibold" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>
        </div>

        {/* User info if logged in */}
        {user && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <FaUser className="text-white text-sm" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">{user.name}</p>
                <p className="text-gray-400 text-xs">{user.email}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
