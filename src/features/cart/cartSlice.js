import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      state.cart.push(action.payload);
    },
    incPizzaQuantity: (state, action) => {
      let pizza = state.cart.find((pizza) => pizza.id === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.price;
    },
    decPizzaQuantity: (state, action) => {
      let pizza = state.cart.find((pizza) => pizza.id === action.payload);
      if (pizza.quantity <= 1) {
        state.cart = state.cart.filter((pizza) => pizza.id !== action.payload);
      } else {
        pizza.quantity--;
        pizza.totalPrice = pizza.quantity * pizza.price;
      }
    },
    deletePizza: (state, action) => {
      state.cart = state.cart.filter((pizza) => pizza.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addPizza,
  incPizzaQuantity,
  decPizzaQuantity,
  deletePizza,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getPizzaId = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id);

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export default cartSlice.reducer;
