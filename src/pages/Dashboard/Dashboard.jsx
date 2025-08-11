import { FaWallet, FaUsers, FaUserPlus, FaShoppingCart, FaCheckCircle, FaUsers as FaUsersActive } from "react-icons/fa"
import StatCard from "../../components/StatCard.jsx"
import CircularProgress from "../../components/CircularProgress.jsx"
import Chart from "../../components/Chart.jsx"
import ProjectTable from "../../components/ProjectTable.jsx"

const Dashboard = () => {
  const salesData = [250, 300, 280, 400, 350, 450, 380, 420, 390, 480, 440, 500]
  const activeUsersData = [320, 280, 350, 400, 380, 420, 390, 450, 410, 480, 460, 500]

  return (
    <div className="p-6 bg-gray-50 min-h-screen bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)]">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Daily Money"
          value="$53,000"
          change="+55%"
          icon={<FaWallet className="text-white text-xl" />}
          iconBg="bg-gradient-to-r from-green-400 to-green-600"
        />
        <StatCard
          title="Today's Users"
          value="2,300"
          change="+3%"
          icon={<FaUsers className="text-white text-xl" />}
          iconBg="bg-gradient-to-r from-blue-400 to-blue-600"
        />
        <StatCard
          title="New Clients"
          value="+3,052"
          change="-2%"
          icon={<FaUserPlus className="text-white text-xl" />}
          iconBg="bg-gradient-to-r from-green-400 to-green-600"
        />
        <StatCard
          title="Total Sales"
          value="$173,000"
          change="+5%"
          icon={<FaShoppingCart className="text-white text-xl" />}
          iconBg="bg-gradient-to-r from-blue-400 to-blue-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Welcome Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-blue-200 text-sm mb-2">Welcome back,</p>
              <h2 className="text-2xl font-bold mb-2">Mark Johnson</h2>
              <p className="text-blue-200 text-sm mb-4">
                Glad to see you again!
                <br />
                Ask me anything.
              </p>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Tap to record →
              </button>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
              <img src="/src/assets/brain-image.png" alt="Brain" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Satisfaction Rate */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Satisfaction Rate</h3>
          <div className="flex items-center justify-center">
            <CircularProgress percentage={95} />
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Based on likes</p>
          </div>
        </div>

        {/* Referral Tracking */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Referral Tracking</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Invited</span>
                <span className="text-sm font-medium">145 people</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Bonus</span>
                <span className="text-sm font-medium">1,465</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-1">9.3</div>
              <div className="text-sm text-gray-500">Total Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Chart title="Sales overview" subtitle="(+5) more in 2021" data={salesData} />

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
            <p className="text-sm text-gray-500">(+23) than last week</p>
          </div>

          <div className="flex items-end space-x-1 h-32 mb-4">
            {activeUsersData.map((value, index) => (
              <div
                key={index}
                className="bg-blue-500 rounded-t-sm flex-1"
                style={{
                  height: `${(value / Math.max(...activeUsersData)) * 100}%`,
                  minHeight: "10px",
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <FaUsers className="text-blue-500" />
              <div>
                <div className="font-medium">32,984</div>
                <div className="text-gray-500">Users</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <div>
                <div className="font-medium">2.42m</div>
                <div className="text-gray-500">Clicks</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaShoppingCart className="text-orange-500" />
              <div>
                <div className="font-medium">2,400$</div>
                <div className="text-gray-500">Sales</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaUsersActive className="text-purple-500" />
              <div>
                <div className="font-medium">320</div>
                <div className="text-gray-500">Items</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectTable />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Orders overview</h3>
              <p className="text-sm text-gray-500">+30% this month</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">$2400, Design changes</p>
                <p className="text-sm text-gray-500">22 DEC 7:20 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">New order #4219423</p>
                <p className="text-sm text-gray-500">21 DEC 11:21 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Server Payments for April</p>
                <p className="text-sm text-gray-500">21 DEC 9:28 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">New card added for order #4395133</p>
                <p className="text-sm text-gray-500">20 DEC 2:20 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Unlock packages for Development</p>
                <p className="text-sm text-gray-500">18 DEC 4:54 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">New order #9851258</p>
                <p className="text-sm text-gray-500">18 DEC 4:49 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
