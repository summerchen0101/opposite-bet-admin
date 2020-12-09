const result = 'SUCCESS'

const mockAPI = {
  login: (req: any) => Promise.resolve({ result, token: 'Have a good day!' }),
  fetchUserAndMenu: () =>
    Promise.resolve({
      result,
      data: { admin: { name: 'abc', role: 'qqq' }, menu: {} },
    }),
  fetchCreateOption: () => Promise.resolve({ result, data: {} }),
}

export default mockAPI
