import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderFormState {
  id: number | null;
  ref: string;
  description: string;
  user: number | null;
  category: number | null;
  type: number | null;
  ambiance: number | null;
  palette: number | null;
  revetment: number | null;
  imageUrls: string[];
  colors: any[];
  furnitures: any[];
  options: number[];
  questions: any[];
}

const initialState: OrderFormState = {
  id: null,
  ref: "",
  description: "",
  user: null,
  category: null,
  type: null,
  ambiance: null,
  palette: null,
  revetment: null,
  imageUrls: [],
  colors: [],
  furnitures: [],
  options: [],
  questions: [],
};

const orderFormSlice = createSlice({
  name: "orderForm",
  initialState,
  reducers: {
    setOrderForm: (state, action: PayloadAction<OrderFormState>) => {
      return { ...state, ...action.payload };
    },
    updateOrderField: (
      state,
      action: PayloadAction<{ field: keyof OrderFormState; value: any }>
    ) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
  },
});

export const { setOrderForm, updateOrderField } = orderFormSlice.actions;
export default orderFormSlice.reducer;
