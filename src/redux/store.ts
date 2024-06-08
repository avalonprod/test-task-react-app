import {  combineReducers, configureStore } from '@reduxjs/toolkit'
import { appReducer } from './slices/app'



export type RootState = {
  app: ReturnType<typeof appReducer>;
};

const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer
})


export default store
