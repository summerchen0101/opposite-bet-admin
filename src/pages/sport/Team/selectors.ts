import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, moduleName } from './reducer'

interface IModuleState {
  [moduleName]: IState
}

export const useTypedSelector: TypedUseSelectorHook<IModuleState> = useSelector

export const selectModuleState = (state: IModuleState) => state[moduleName]

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
)
export const selectEditData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.editData,
)
export const selectGameOpts = createSelector(
  selectModuleState,
  (moduleState) => moduleState.gameOpts,
)
export const selectLeagueOpts = createSelector(
  selectModuleState,
  (moduleState) => moduleState.leagueOpts,
)
export const selectPagination = createSelector(
  selectModuleState,
  (moduleState) => moduleState.pagination,
)
