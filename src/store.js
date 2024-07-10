import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import itemModalReducer from "./features/modal/itemModalSlice";


export const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
		itemModal: itemModalReducer,
	},
});