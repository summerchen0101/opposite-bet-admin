import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { GlobalState } from './reducer'
import { RootState } from './rootReducer'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const selectModuleState = (state: { global: GlobalState }) => state.global

export const selectLoginStatus = createSelector(
  selectModuleState,
  (global) => global.isLogin,
)

export const selectLoading = createSelector(
  selectModuleState,
  (global) => global.loading,
)
export const selectMenu = createSelector(
  selectModuleState,
  (global) => global.menu,
)
