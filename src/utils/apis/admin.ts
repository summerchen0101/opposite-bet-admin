import Request from '@/utils/request'

interface getAdminListReqProps {
  account?: string
  role?: string
  status?: 1 | 0
  ip?: string
}

export const getAdminList = (req: getAdminListReqProps = {}): Promise<any> => {
  const data = {
    search_account: req.account,
    search_role: req.role,
    search_status: req.status,
    search_ip: req.ip,
  }
  return Request.post(`admin/getAdminList`, data)
}

export const getAdminRoles = (): Promise<any> => {
  return Request.post(`admin/getAdminRoles`)
}
