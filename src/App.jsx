import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"
import Tables from "./pages/Table/Table.jsx"
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route
              path="billing"
              element={
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Billing Page</h1>
                </div>
              }
            />
            <Route
              path="rtl"
              element={
                <div className="p-6">
                  <h1 className="text-2xl font-bold">RTL Page</h1>
                </div>
              }
            />
            <Route
              path="profile"
              element={
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Profile Page</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
