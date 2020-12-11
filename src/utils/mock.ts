const result = 'SUCCESS'

export const baseResponse = (data: any) => ({ result, data })

const mockAPI = {
  login: (req: any) => Promise.resolve({ result, token: 'Have a good day!' }),
  logout: () => Promise.resolve({ result }),
  fetchUserAndMenu: () =>
    Promise.resolve({
      result,
      data: { admin: { name: 'abc', role: 'qqq' }, menu: {} },
    }),
  fetchCreateOption: () => Promise.resolve({ result, data: {} }),
}

export default mockAPI
