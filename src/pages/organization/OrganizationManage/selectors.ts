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
export const selectCurrentLevel = createSelector(
  selectModuleState,
  (moduleState) => moduleState.currentLevel,
)
export const selectRoleOptions = createSelector(
  selectModuleState,
  (moduleState) => moduleState.roleOptions,
)
export const selectAgentStruct = createSelector(
  selectModuleState,
  (moduleState) => moduleState.agentStruct,
)
export const selectDisplayCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayCreateModal,
)
export const selectDisplayLevelCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayLevelCreateModal,
)
export const selectDisplayMemberCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayMemberCreateModal,
)
export const selectDisplayPwModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayPwModal,
)
export const selectDisplayPercentageModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayPercentageModal,
)
export const selectDisplayWhiteListModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayWhiteListModal,
)
export const selectDisplayLoginHistoryModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayLoginHistoryModal,
)
export const selectDisplayTradeHistoryModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayTradeHistoryModal,
)
export const selectDisplayPointFormModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayPointFormModal,
)
export const selectDisplayInvitedFormModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayInvitedFormModal,
)
