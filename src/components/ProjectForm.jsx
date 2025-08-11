"use client"

import { useState, useEffect } from "react"
import FancyInput from "./Input"
import Button from "./Button"

const ProjectForm = ({ project, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    status: "Working",
    completion: 0,
    icon: "🎨",
  })

  const [errors, setErrors] = useState({})

  const iconOptions = ["🎨", "📊", "🔧", "📱", "💰", "🚀", "⚡", "🎯", "📈", "🔥"]

  useEffect(() => {
    if (project) {
      setFormData({
        name: project.name || "",
        budget: project.budget || "",
        status: project.status || "Working",
        completion: project.completion || 0,
        icon: project.icon || "🎨",
      })
    }
  }, [project])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Project name is required"
    }

    if (!formData.budget.trim()) {
      newErrors.budget = "Budget is required"
    }

    if (formData.completion < 0 || formData.completion > 100) {
      newErrors.completion = "Completion must be between 0 and 100"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({
        ...formData,
        completion: Number.parseInt(formData.completion),
      })
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
        label="Project Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter project name"
        required
      />

      <FancyInput
        label="Budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        error={errors.budget}
        placeholder="e.g., $10,000 or Not set"
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
          <option value="Working">Working</option>
          <option value="Done">Done</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>

      <FancyInput
        label="Completion (%)"
        name="completion"
        type="number"
        min="0"
        max="100"
        value={formData.completion}
        onChange={handleChange}
        error={errors.completion}
        placeholder="0-100"
        required
      />

      <div className="flex flex-col gap-2 w-full mb-[14px]">
        <label className="text-[12px] font-semibold tracking-wide text-white drop-shadow-md">Icon</label>
        <div className="grid grid-cols-5 gap-2">
          {iconOptions.map((icon) => (
            <button
              key={icon}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, icon }))}
              className={`p-3 rounded-lg text-xl transition-all duration-300 ${
                formData.icon === icon
                  ? "bg-blue-500/30 border-2 border-blue-400"
                  : "bg-white/10 border-2 border-white/20 hover:bg-white/20"
              }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" size="md" className="flex-1">
          {project ? "Update Project" : "Add Project"}
        </Button>
        <Button type="button" onClick={onCancel} variant="secondary" size="md" className="flex-1">
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default ProjectForm
