import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, moduleName } from './reducer'

interface IModuleState {
  [moduleName]: IState
}

export const useTypedSelector: TypedUseSelectorHook<IModuleState> = useSelector

const selectModuleState = (state: IModuleState) => state[moduleName]
export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
)
export const selectEditRole = createSelector(
  selectModuleState,
  (moduleState) => moduleState.editRole,
)
export const selectMenu = createSelector(
  selectModuleState,
  (moduleState) => moduleState.menu,
)
export const selectDisplayCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayCreateModal,
)
export const selectDisplayEditModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayEditModal,
)
