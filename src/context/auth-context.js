import React, { createContext, useContext, useEffect, useState } from 'react'


const AuthContext = createContext(undefined)

const initialState = {
  user: null,
  isAuthenticated: false,
  deploymentType: 'default',
}

export function AuthProvider({ children }) {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('auth')
      return saved ? JSON.parse(saved) : initialState
    }
    return initialState
  })

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(state))
  }, [state])

  const login = async (provider) => {
    const user = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      provider
    }
    
    setState(prev => ({
      ...prev,
      user,
      isAuthenticated: true
    }))
  }

  const logout = () => {
    setState(prev => ({
      ...prev,
      user: null,
      isAuthenticated: false
    }))
  }

  const setDeploymentType = (type) => {
    setState(prev => ({
      ...prev,
      deploymentType: type
    }))
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout, setDeploymentType }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

