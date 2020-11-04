import { createSelector } from 'reselect'
import { GlobalState } from './reducer'

const selectModuleState = (state: { global: GlobalState }) => state.global

export const selectLoginStatus = createSelector(
  selectModuleState,
  (global) => global.isLogin,
)
