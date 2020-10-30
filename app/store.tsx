import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "../app/reducer";
import { useDispatch } from "react-redux";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  reducer,
});
export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(logger),
  });

  // if (module.hot) {
  //   module.hot.accept("./reducer", () => {
  //     console.log("Replacing reducer");
  //     store.replaceReducer(require("./reducer").default);
  //   });
  // }

  return store;
};
const dummy = makeStore();
export type AppDispatch = typeof dummy.dispatch;
export const wrapper = createWrapper(makeStore, {});
export type RootReducer = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
