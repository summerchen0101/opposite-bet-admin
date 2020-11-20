import { ResponseBase } from '@/lib/types'
import { join } from 'path'
import httpStatus from 'http-status'
interface Options {
  noAuth?: boolean
}
export default class Request {
  private static baseUrl = `http://${process.env.API_DOMAIN}`
  private static bashPath = 'api'
  static get<T>(url, options: Options = {}): Promise<T> {
    return this.request('GET', url, options)
  }
  static post<T>(url, data = null, options: Options = {}): Promise<T> {
    return this.request('POST', url, data, options)
  }
  private static async request(
    method,
    url,
    data = null,
    options: Options = {},
  ) {
    const response = await fetch(
      new URL(join(this.bashPath, url), this.baseUrl).toString(),
      {
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
      },
    )
    const { status } = response
    if (status > 300) {
      throw httpStatus[status]
    }

    return response.json()
    // // 處理回傳狀態
    // .then((response) => {
    //   if (response.status >= 200 && response.status < 300) {
    //     return response.json()
    //   }
    //   throw response
    // })
    // // 處理token過期
    // .then((data) => {
    //   if (data.result === 'TOKEN_ERROR') {
    //     sessionStorage.removeItem('token')
    //     throw 'TOKEN_ERROR'
    //   }
    //   return data
    // })
  }
}

// export const postRequest = ()
