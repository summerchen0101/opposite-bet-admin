import React, { useState } from 'react'

interface DashboardContextProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

export const DashboardContext = React.createContext<DashboardContextProps | null>(
  null,
)

const DashboardContextProvider: React.FC = ({ children }) => {
  const [collapsed, changeCollapsed] = useState(false)
  const toggleCollapsed = () => changeCollapsed(!collapsed)
  return (
    <DashboardContext.Provider value={{ collapsed, toggleCollapsed }}>
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardContextProvider
