import Request from '@/utils/request'

export const fetchAll = () => Request.post<any>('admin_role/list')
