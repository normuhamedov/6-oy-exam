"use client"

import { useState, useEffect } from "react"
import FancyInput from "./Input"
import Button from "./Button"

const AuthorForm = ({ author, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    function: "",
    department: "",
    status: "Online",
    employed: "",
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (author) {
      setFormData({
        name: author.name || "",
        email: author.email || "",
        function: author.function || "",
        department: author.department || "",
        status: author.status || "Online",
        employed: author.employed || "",
      })
    }
  }, [author])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.function.trim()) {
      newErrors.function = "Function is required"
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required"
    }

    if (!formData.employed.trim()) {
      newErrors.employed = "Employed date is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FancyInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter full name"
        required
      />

      <FancyInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter email address"
        required
      />

      <FancyInput
        label="Function"
        name="function"
        value={formData.function}
        onChange={handleChange}
        error={errors.function}
        placeholder="e.g., Manager, Developer"
        required
      />

      <FancyInput
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        error={errors.department}
        placeholder="e.g., Organization, Development"
        required
      />

      <div className="flex flex-col gap-2 w-full mb-[14px]">
        <label className="text-[12px] font-semibold tracking-wide text-white drop-shadow-md">
          Status <span className="text-red-400">*</span>
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="px-4 py-3 rounded-[20px] outline-none w-full bg-[linear-gradient(94.56deg,#FFFFFF33_0%,#21242F33_100%)] backdrop-blur-md text-white border-[2px] border-[#ffffff33] focus:border-[#ffffff55] focus:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      <FancyInput
        label="Employed Date"
        name="employed"
        value={formData.employed}
        onChange={handleChange}
        error={errors.employed}
        placeholder="DD/MM/YY"
        required
      />

      <div className="flex gap-3 pt-4">
        <Button type="submit" size="md" className="flex-1">
          {author ? "Update Author" : "Add Author"}
        </Button>
        <Button type="button" onClick={onCancel} variant="secondary" size="md" className="flex-1">
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default AuthorForm
