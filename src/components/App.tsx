import { fetchUserAndMenu } from '@/store/reducer'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const App: React.FC = ({ children }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/login') {
      dispatch(fetchUserAndMenu())
    }
  }, [])
  return <>{children}</>
}

export default App
