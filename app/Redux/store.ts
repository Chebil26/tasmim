"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counterSlice";

import categoryReducer from "./Features/categorySlice";
import typeReducer from "./Features/typeSlice";
import colorReducer from "./Features/colorSlice";
import ambianceReducer from "./Features/ambianceSlice";
import revetementReducer from "./Features/revetementSlice";
import furnitureTypeReducer from "./Features/furnitureTypeSlice";
import furnitureReducer from "./Features/furnitureSlice";
import optionReducer from "./Features/optionSlice";
import questionReducer from "./Features/questionSlice";
import orderReducer from "./Features/orderSlice";
import paletteReducer from "./Features/paletteSlice";
import orderFormReducer from "./Features/orderFormSlice";
import userImageReducer from "./Features/userImage";

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    categories: categoryReducer,
    color: colorReducer,
    type: typeReducer,
    palette: paletteReducer,
    ambiance: ambianceReducer,
    revetement: revetementReducer,
    furnitureType: furnitureTypeReducer,
    furniture: furnitureReducer,
    option: optionReducer,
    question: questionReducer,
    order: orderReducer,

    userImages: userImageReducer,
    orderForm: orderFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
