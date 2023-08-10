import { configureStore } from '@reduxjs/toolkit';

//Rtk
import { baseApi } from './features/Rtk/apiBaseSlice';

//reducer
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
