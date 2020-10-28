import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Store, Reducer } from 'redux';
import staticReducers from './rootReducer';

export type StoreType = Store & {
  asyncReducers?: { [key: string]: Reducer };
  injectReducer?: (key: string, asyncReducer: Reducer) => void;
};

function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export default function configureAppStore() {
  const store: StoreType = {
    ...configureStore({
      reducer: createReducer(),
    }),
    asyncReducers: {},
    injectReducer: (key, asyncReducer) => {
      store.asyncReducers[key] = asyncReducer;
      store.replaceReducer(createReducer(store.asyncReducers));
    },
  };

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(createReducer(store.asyncReducers)),
    );
  }

  return store;
}
