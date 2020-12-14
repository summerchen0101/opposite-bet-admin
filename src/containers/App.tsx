import API from '@/API'
import { useAppDispatch } from '@/store'
import { setLogin } from '@/store/reducer'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const App: React.FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { apiErr } = useErrorHandler()
  const handleLoginStatus = async () => {
    try {
      await API.checkLogin()
      dispatch(setLogin())
    } catch (err) {
      apiErr(err)
    }
  }
  useEffect(() => {
    if (location.pathname !== '/login') {
      handleLoginStatus()
    }
  }, [])
  return <>{children}</>
}

export default App
