"use client"

import { useState } from "react"
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"
import Button from "../../components/Button"
import Modal from "../../components/Modal"
import AuthorForm from "../../components/AuthorForm"
import ProjectForm from "../../components/ProjectForm"

const Tables = () => {
  const [authors, setAuthors] = useState([
    {
      id: 1,
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      function: "Manager",
      department: "Organization",
      status: "Online",
      employed: "14/06/21",
      avatar: "/professional-woman.png",
    },
    {
      id: 2,
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      function: "Programmer",
      department: "Developer",
      status: "Offline",
      employed: "14/06/21",
      avatar: "/woman-developer.png",
    },
    {
      id: 3,
      name: "Laurent Michel",
      email: "laurent@simmmple.com",
      function: "Executive",
      department: "Projects",
      status: "Online",
      employed: "14/06/21",
      avatar: "/man-executive.png",
    },
    {
      id: 4,
      name: "Freduardo Hill",
      email: "freduardo@simmmple.com",
      function: "Manager",
      department: "Organization",
      status: "Online",
      employed: "14/06/21",
      avatar: "/business-manager.png",
    },
    {
      id: 5,
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      function: "Programmer",
      department: "Developer",
      status: "Offline",
      employed: "14/06/21",
      avatar: "/man-programmer.png",
    },
    {
      id: 6,
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      function: "Designer",
      department: "UI/UX Design",
      status: "Offline",
      employed: "14/06/21",
      avatar: "/man-designer.png",
    },
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Chakra Soft UI Version",
      budget: "$14,000",
      status: "Working",
      completion: 60,
      icon: "🎨",
    },
    {
      id: 2,
      name: "Add Progress Track",
      budget: "$3,000",
      status: "Canceled",
      completion: 10,
      icon: "📊",
    },
    {
      id: 3,
      name: "Fix Platform Errors",
      budget: "Not set",
      status: "Done",
      completion: 100,
      icon: "🔧",
    },
    {
      id: 4,
      name: "Launch our Mobile App",
      budget: "$32,000",
      status: "Done",
      completion: 100,
      icon: "📱",
    },
    {
      id: 5,
      name: "Add the New Pricing Page",
      budget: "$400",
      status: "Working",
      completion: 25,
      icon: "💰",
    },
  ])

  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [editingAuthor, setEditingAuthor] = useState(null)
  const [editingProject, setEditingProject] = useState(null)

  const handleAddAuthor = (authorData) => {
    const newAuthor = {
      ...authorData,
      id: Date.now(),
      avatar: `/placeholder.svg?height=40&width=40&query=${authorData.name.toLowerCase().replace(" ", "-")}`,
    }
    setAuthors([...authors, newAuthor])
    setIsAuthorModalOpen(false)
  }

  const handleEditAuthor = (authorData) => {
    setAuthors(
      authors.map((author) => (author.id === editingAuthor.id ? { ...authorData, id: editingAuthor.id } : author)),
    )
    setEditingAuthor(null)
    setIsAuthorModalOpen(false)
  }

  const handleDeleteAuthor = (id) => {
    if (window.confirm("Are you sure you want to delete this author?")) {
      setAuthors(authors.filter((author) => author.id !== id))
    }
  }

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Date.now(),
    }
    setProjects([...projects, newProject])
    setIsProjectModalOpen(false)
  }

  const handleEditProject = (projectData) => {
    setProjects(
      projects.map((project) =>
        project.id === editingProject.id ? { ...projectData, id: editingProject.id } : project,
      ),
    )
    setEditingProject(null)
    setIsProjectModalOpen(false)
  }

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((project) => project.id !== id))
    }
  }

  const openEditAuthor = (author) => {
    setEditingAuthor(author)
    setIsAuthorModalOpen(true)
  }

  const openEditProject = (project) => {
    setEditingProject(project)
    setIsProjectModalOpen(true)
  }

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium"
    switch (status) {
      case "Online":
        return `${baseClasses} bg-green-500 text-white`
      case "Offline":
        return `${baseClasses} bg-gray-500 text-white`
      case "Working":
        return `${baseClasses} bg-blue-500 text-white`
      case "Done":
        return `${baseClasses} bg-green-500 text-white`
      case "Canceled":
        return `${baseClasses} bg-red-500 text-white`
      default:
        return `${baseClasses} bg-gray-500 text-white`
    }
  }

  return (
    <div className="p-6 bg-gradient-to-br from-[#0F123B] via-[#1A1F71] to-[#0F123B] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Authors Table */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Authors Table</h2>
            <Button
              onClick={() => {
                setEditingAuthor(null)
                setIsAuthorModalOpen(true)
              }}
              className="flex items-center gap-2"
            >
              <FaPlus /> Add Author
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Author
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Function
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Employed
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author) => (
                  <tr key={author.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={author.avatar || "/placeholder.svg"}
                          alt={author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-white font-medium">{author.name}</p>
                          <p className="text-gray-400 text-sm">{author.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-white font-medium">{author.function}</p>
                        <p className="text-gray-400 text-sm">{author.department}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={getStatusBadge(author.status)}>{author.status}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-300">{author.employed}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => openEditAuthor(author)}
                          className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteAuthor(author.id)}
                          className="text-red-400 hover:text-red-300 transition-colors p-2"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Projects</h2>
              <p className="text-gray-400 text-sm">30 done this month</p>
            </div>
            <Button
              onClick={() => {
                setEditingProject(null)
                setIsProjectModalOpen(true)
              }}
              className="flex items-center gap-2"
            >
              <FaPlus /> Add Project
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Companies
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Completion
                  </th>
                  <th className="text-left py-4 px-4 text-gray-300 font-medium text-sm uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-lg">
                          {project.icon}
                        </div>
                        <span className="text-white font-medium">{project.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-white font-medium">{project.budget}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={getStatusBadge(project.status)}>{project.status}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-white text-sm font-medium">{project.completion}%</span>
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.completion}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => openEditProject(project)}
                          className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="text-red-400 hover:text-red-300 transition-colors p-2"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Author Modal */}
      <Modal
        isOpen={isAuthorModalOpen}
        onClose={() => {
          setIsAuthorModalOpen(false)
          setEditingAuthor(null)
        }}
        title={editingAuthor ? "Edit Author" : "Add New Author"}
      >
        <AuthorForm
          author={editingAuthor}
          onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor}
          onCancel={() => {
            setIsAuthorModalOpen(false)
            setEditingAuthor(null)
          }}
        />
      </Modal>

      {/* Project Modal */}
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => {
          setIsProjectModalOpen(false)
          setEditingProject(null)
        }}
        title={editingProject ? "Edit Project" : "Add New Project"}
      >
        <ProjectForm
          project={editingProject}
          onSubmit={editingProject ? handleEditProject : handleAddProject}
          onCancel={() => {
            setIsProjectModalOpen(false)
            setEditingProject(null)
          }}
        />
      </Modal>
    </div>
  )
}

export default Tables
