import errCodes from '@/lib/errCodes'

export const toCurrency = (num: number, decimal = 0) =>
  Number(num.toFixed(decimal)).toLocaleString()

export const toErrorMessage = (code: string) => errCodes[code]
