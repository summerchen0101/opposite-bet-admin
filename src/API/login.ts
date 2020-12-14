import Request from '@/utils/request'

interface RequestData {
  acc: string
  pass: string
}

export default (reqData: RequestData) => Request.post<null>('login', reqData)
