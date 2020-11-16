import useService from '@/utils/hooks/useService'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const App: React.FC = ({ children }) => {
  const { fetchMenuInfo } = useService()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/login') {
      fetchMenuInfo()
    }
  }, [])
  return <>{children}</>
}

export default App
