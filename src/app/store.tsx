import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import pizzaReducer from '../features/pizza/pizzaSlice';


export const store = configureStore({
  reducer: {
    pizza : pizzaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
