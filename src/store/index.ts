import {
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Store, Reducer, AnyAction } from 'redux'
import staticReducers from './rootReducer'

export type StoreType = Store & {
  asyncReducers?: { [key: string]: Reducer }
  injectReducer?: (key: string, asyncReducer: Reducer) => void
}

function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  })
}

const createStore = function configureAppStore() {
  const store: StoreType = {
    ...configureStore({
      reducer: createReducer(),
    }),
    asyncReducers: {},
    injectReducer: (key, asyncReducer) => {
      store.asyncReducers[key] = asyncReducer
      store.replaceReducer(createReducer(store.asyncReducers))
    },
  }

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(createReducer(store.asyncReducers)),
    )
  }

  return store
}

const store = createStore()

export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<unknown, unknown, AnyAction>>()

export default store
