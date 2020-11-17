import useService from '@/utils/hooks/useService'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchUserAndMenu } from '@/store/reducer'
import { useDispatch } from 'react-redux'

const App: React.FC = ({ children }) => {
  const { fetchMenuInfo } = useService()
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/login') {
      // fetchMenuInfo()
      dispatch(fetchUserAndMenu())
    }
  }, [])
  return <>{children}</>
}

export default App
