export enum Protocal {
  Http = 'http://',
  Https = 'https://',
}
export enum Status {
  ALL = 0,
  ON = 3,
  OFF = -2,
}

export enum LevelCode {
  Vendor = 'L1',
  Shareholder = 'L2',
  MajorAgent = 'L3',
  Agent = 'L4',
  Member = 'L5',
}

export type LevelCodeOpts = keyof typeof LevelCode
