import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

interface Order {
  // Define your order data structure here
}

// Define an async thunk to fetch orders
export const fetchOrders = createAsyncThunk<Order[]>(
  "orders/fetchOrders",
  async () => {
    const response = await axios.get<Order[]>(`${API_BASE_URL}/api/orders`);
    return response.data;
  }
);

// Define an async thunk to create a new order
export const createOrder = createAsyncThunk<Order, Order>(
  "orders/createOrder",
  async (orderData) => {
    const response = await axios.post<Order>(
      `${API_BASE_URL}/api/orders`,
      orderData
    );
    return response.data;
  }
);

interface OrderState {
  orders: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  status: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred.";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      });
  },
});

export default orderSlice.reducer;
