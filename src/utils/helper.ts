import { setLogout } from '@/store/reducer'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { toErrorMessage } from './transfer'

export const errorHandler = (
  result: string,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
): void => {
  if (result !== 'SUCCESS') {
    if (result === 'TOKEN_ERROR') {
      dispatch(setLogout())
    }
    throw toErrorMessage(result)
  }
}

export default { errorHandler }
