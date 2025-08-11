"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import Header from "../../components/Header"
import FancyInput from "../../components/Input.jsx"
import Button from "../../components/Button.jsx"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      await login(formData.email, formData.password)
      navigate("/dashboard")
    } catch (error) {
      setErrors({ general: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <div className="flex items-center flex-col">
      <Header />
      <div className="flex h-screen w-full">
        <div className="w-1/2 h-full bg-cover bg-center login-bg flex items-center justify-center flex-col">
          <p className="font-[Plus Jakarta Display] font-normal text-[20px] leading-[100%] tracking-[0.18em] text-[#FFFFFF] mb-[16px]">
            INSPIRED BY THE FUTURE:
          </p>
          <h2 className="font-[Plus Jakarta Display] font-bold text-[36px] leading-[100%] tracking-[0.18em] bg-[linear-gradient(94.56deg,#FFFFFF_79.99%,#21242F_102.65%)] bg-clip-text text-transparent">
            THE VISION UI DASHBOARD
          </h2>
        </div>

        <div className="w-1/2 h-full flex flex-col items-start justify-center pl-[103px] bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)]">
          <div className="w-full max-w-sm flex items-start justify-center flex-col">
            <h2 className="font-[Plus Jakarta Display] font-bold text-[30px] leading-[130%] tracking-[0em] text-[#FFFFFF] mb-[7px]">
              Nice to see you!
            </h2>
            <p className="font-[Plus Jakarta Display] font-medium text-[14px] leading-[140%] tracking-[0em] text-[#A0AEC0] mb-[35px]">
              Enter your email and password to sign in
            </p>

            {errors.general && (
              <div className="w-full mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm">{errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full">
              <FancyInput
                label="Email"
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                className="mb-4"
                inputClassName="py-4"
              />

              <FancyInput
                label="Password"
                type="password"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                required
                className="mb-4"
                inputClassName="py-4"
              />

              <div className="flex items-center gap-3 mt-[24px] mb-[35px]">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                    rememberMe
                      ? "bg-gradient-to-r from-blue-500 to-[#0075FF]"
                      : "bg-gradient-to-r from-gray-400 to-gray-600"
                  }`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${
                      rememberMe ? "translate-x-7" : ""
                    }`}
                  />
                </div>
                <span className="text-white">{rememberMe ? "Remembered" : "Remember me"}</span>
              </div>

              <Button type="submit" size="md" loading={loading} disabled={loading}>
                {loading ? "SIGNING IN..." : "SIGN IN"}
              </Button>
            </form>

            <p className="m-auto mt-[35px] font-[Plus Jakarta Display] font-normal text-[14px] leading-[140%] tracking-[0em] text-[#A0AEC0]">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-white hover:text-blue-300 transition-colors">
                Sign up
              </Link>
            </p>
          </div>

          <div className="fixed bottom-15">
            <p className="font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
              @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
            </p>
            <div className="flex items-center justify-center gap-[46px] m-auto mt-2">
              <p className="font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
                Marketplace
              </p>
              <p className="font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
                Blog
              </p>
              <p className="font-[Plus Jakarta Display] font-normal text-[14px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
                License
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
