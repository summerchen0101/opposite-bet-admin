import Request from '@/utils/request'
export * from './admin'
export const getUserList = (id) => {
  return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}
// 登入
export const login = (data) => {
  return Request.post(`admin/login`, data, { noAuth: true })
}
// 取得登入資訊(選單及登入者資料)
export const getUserInfo = () => {
  return Request.post('admin/getAdminPortal')
}
