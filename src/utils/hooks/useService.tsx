import * as apis from '@/utils/apis'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const useService = () => {
  const history = useHistory()
  const fetchMenuInfo = async () => {
    try {
      const res = await apis.getUserInfo()
      if (res.result === 'SUCCESS') {
        // res.data.admin
      }
    } catch (err) {
      message.error(err.statusText)
      history.push('/login')
    }
  }
  return {
    fetchMenuInfo,
  }
}

export default useService
