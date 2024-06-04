import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./slice/auth";
import categoryReducer from "./slice/categorySlice";
import courierReducer from "./slice/courierSlice";
import decorationReducer from "./slice/decorationSlice";

const store = configureStore({
   reducer: {
      auth: authReducer,
      category: categoryReducer,
      courier: courierReducer,
      decoration: decorationReducer,
   },
});

// static type untuk selector dan dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks yang sudah diberi static type
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
