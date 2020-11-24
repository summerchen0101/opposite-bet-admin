export interface TableItem {
  key: number
  id: string
  eventId: number
  startAt: string
  teams: [string, string]
  league: string
  country: string
  count: number
  volume: number
  isOpened: boolean
  // result: {
  //   full: '3:2',
  //   firstHalf: '2:1',
  // },
}
