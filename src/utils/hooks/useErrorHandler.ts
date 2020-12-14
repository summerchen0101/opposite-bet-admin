import { message } from 'antd'

const useErrorHandler = () => {
  const apiErr = (err) => message.error(err.toString())
  return { apiErr }
}

export default useErrorHandler
