import { join } from 'path'
interface Options {
  noAuth?: boolean
}
export default class Request {
  private static baseUrl = `http://${process.env.API_DOMAIN}`
  private static bashPath = 'api'
  static get(url, options: Options = {}): Promise<any> {
    return this.request('GET', url, options)
  }
  static post(url, data = null, options: Options = {}): Promise<any> {
    return this.request('POST', url, data, options)
  }
  private static request(method, url, data = null, options: Options = {}) {
    return (
      fetch(new URL(join(this.bashPath, url), this.baseUrl).toString(), {
        method, // *GET, POST, PUT, DELETE, etc.
        body: data && JSON.stringify(data),
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          // 'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json',
          Authorization:
            !options?.noAuth && `Bearer ${sessionStorage.getItem('token')}`,
        },
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer,
      })
        // 處理回傳狀態
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json()
          }
          throw response
        })
        // 處理token過期
        .then((data) => {
          if (data.result === 'TOKEN_ERROR') {
            sessionStorage.removeItem('token')
            throw 'TOKEN_ERROR'
          }
          return data
        })
    )
  }
}
