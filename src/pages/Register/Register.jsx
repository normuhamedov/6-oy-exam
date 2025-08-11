"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import Header from "../../components/Header"
import FancyInput from "../../components/Input.jsx"
import Button from "../../components/Button.jsx"
import { Apple, Facebook, Google } from "../../assets/icons"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register } = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

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

    if (!agreeTerms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    try {
      await register(formData.name.trim(), formData.email, formData.password)
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
        <div className="w-1/2 h-full bg-cover bg-center register-bg flex items-center justify-center flex-col">
          <p className="font-[Plus Jakarta Display] font-normal text-[20px] leading-[100%] tracking-[0.18em] text-[#FFFFFF] mb-[16px]">
            INSPIRED BY THE FUTURE:
          </p>
          <h2 className="font-[Plus Jakarta Display] font-bold text-[36px] leading-[100%] tracking-[0.18em] bg-[linear-gradient(94.56deg,#FFFFFF_79.99%,#21242F_102.65%)] bg-clip-text text-transparent">
            THE VISION UI DASHBOARD
          </h2>
        </div>

        <div className="w-1/2 h-full flex flex-col items-start justify-center pt-[40px] pl-[103px] bg-[linear-gradient(159.02deg,#0F123B_14.25%,#090D2E_56.45%,#020515_86.14%)]">
          <div className="w-full max-w-sm flex items-center justify-center flex-col">
            <h2 className="font-[Plus Jakarta Display] font-bold text-[26px] leading-[130%] tracking-[0em] text-[#FFFFFF] mb-[7px] m-auto">
              Welcome!
            </h2>
            <p className="font-[Plus Jakarta Display] font-medium text-[12px] leading-[140%] tracking-[0em] text-[#A0AEC0] text-center mb-[20px]">
              Use these awesome forms to login or create new account in your project for free.
            </p>

            <div className="border-2 border-[#ffffff33] w-[380px] pb-2 pl-[25px] pr-[30px] backdrop-blur-[42px] bg-[linear-gradient(123.64deg,rgba(255,255,255,0)_-22.71%,rgba(255,255,255,0.039)_70.04%)] rounded-[30px]">
              <div className="text-center pt-2">
                <h3 className="font-[Plus Jakarta Display] font-medium text-[18px] leading-[140%] tracking-[0em] text-white text-center mb-[10px]">
                  Register with
                </h3>
                <div className="flex items-center justify-center gap-[15px]">
                  <div className="w-[60px] h-[60px] rounded-[20px] border-[2px] border-[#ffffff33] backdrop-blur-[42px] flex items-center justify-center cursor-pointer hover:border-[#ffffff55] transition-colors">
                    <Facebook />
                  </div>
                  <div className="w-[60px] h-[60px] rounded-[20px] border-[2px] border-[#ffffff33] backdrop-blur-[42px] flex items-center justify-center cursor-pointer hover:border-[#ffffff55] transition-colors">
                    <Apple />
                  </div>
                  <div className="w-[60px] h-[60px] rounded-[20px] border-[2px] border-[#ffffff33] backdrop-blur-[42px] flex items-center justify-center cursor-pointer hover:border-[#ffffff55] transition-colors">
                    <Google />
                  </div>
                </div>
                <p className="font-[Plus Jakarta Display] font-medium text-[18px] leading-[140%] tracking-[0em] text-[#A0AEC0] text-center">
                  or
                </p>
              </div>

              {errors.general && (
                <div className="w-full mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm">{errors.general}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <FancyInput
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  className="mb-4"
                />

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
                />

                <div className="flex items-center gap-3 mb-[5px]">
                  <div
                    onClick={() => setAgreeTerms(!agreeTerms)}
                    className={`w-[36px] h-[18px] flex items-center rounded-full cursor-pointer transition-all duration-300 ${
                      agreeTerms
                        ? "bg-gradient-to-r from-blue-500 to-[#0075FF]"
                        : "bg-gradient-to-r from-gray-400 to-gray-600"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                        agreeTerms ? "translate-x-5" : ""
                      }`}
                    />
                  </div>
                  <span className="text-white text-[12px]">
                    I agree to the{" "}
                    <Link to="#" className="text-blue-300 hover:text-blue-200">
                      Terms and Conditions
                    </Link>
                  </span>
                </div>

                {errors.terms && <p className="text-red-400 text-xs mb-2">{errors.terms}</p>}

                <Button type="submit" size="md" loading={loading} disabled={loading}>
                  {loading ? "CREATING ACCOUNT..." : "SIGN UP"}
                </Button>
              </form>

              <p className="mt-[10px] text-center font-[Plus Jakarta Display] font-normal text-[12px] leading-[140%] tracking-[0em] text-[#A0AEC0]">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-white hover:text-blue-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <div className="fixed bottom-1">
            <p className="font-[Plus Jakarta Display] font-normal text-[8px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
              @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
            </p>
            <div className="flex items-center justify-center gap-[46px] m-auto mt-2">
              <p className="font-[Plus Jakarta Display] font-normal text-[8px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
                Marketplace
              </p>
              <p className="font-[Plus Jakarta Display] font-normal text-[8px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
                Blog
              </p>
              <p className="font-[Plus Jakarta Display] font-normal text-[8px] leading-[150%] tracking-[0em] text-[#A0AEC0]">
                License
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
    