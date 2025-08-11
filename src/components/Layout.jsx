import { Outlet } from "react-router-dom"
import Sidebar from "./SideBar.jsx"
import Header2 from "./Header2.jsx"

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header2 />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
