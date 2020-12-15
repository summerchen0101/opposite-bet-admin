import { useAppDispatch } from '@/store'
import { setLogout } from '@/store/reducer'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const useErrorHandler = () => {
  const dispatch = useAppDispatch()
  const apiErr = (err) => {
    if (err.message === 'Unauthorized') {
      dispatch(setLogout())
    }
    message.error(err.toString())
  }
  return { apiErr }
}

export default useErrorHandler
