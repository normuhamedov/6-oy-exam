"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find((u) => u.email === email && u.password === password)

        if (user) {
          const userWithoutPassword = { ...user }
          delete userWithoutPassword.password
          setUser(userWithoutPassword)
          localStorage.setItem("user", JSON.stringify(userWithoutPassword))
          resolve(userWithoutPassword)
        } else {
          reject(new Error("Invalid email or password"))
        }
      }, 1000) // Simulate API delay
    })
  }

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Get existing users
        const users = JSON.parse(localStorage.getItem("users") || "[]")

        // Check if user already exists
        if (users.find((u) => u.email === email)) {
          reject(new Error("User with this email already exists"))
          return
        }

        // Create new user
        const newUser = {
          id: Date.now(),
          name,
          email,
          password,
          createdAt: new Date().toISOString(),
        }

        // Save to users array
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))

        // Auto login after registration
        const userWithoutPassword = { ...newUser }
        delete userWithoutPassword.password
        setUser(userWithoutPassword)
        localStorage.setItem("user", JSON.stringify(userWithoutPassword))

        resolve(userWithoutPassword)
      }, 1000) // Simulate API delay
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
