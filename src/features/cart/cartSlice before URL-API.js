import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
	cartItems: cartItems,
	amount: 4,
	total: 0,
	isLoading: true,
};

// we must be careful...what ever we 'return' from the reducers below becomes the new state value.  if  you 'return cartItems = [] the entire state and all of it's properties will be set to just cartItems = []!  This is why we must be careful to only return the property we want to change.  In this case, we only want to change the cartItems property.  We want to keep the amount and total properties the same.  We only want to change the cartItems property.  This is why we return state.cartItems = [] and not return cartItems = [].
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: state => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter(item => item.id !== itemId);
		},
		increase: (state, action) => {
			// this works with: onClick={() => dispatch(increase(id))}
			const itemId = action.payload;
			const cartItem = state.cartItems.find(item => item.id === itemId);
			cartItem.amount++;
		},
		increase2: (state, { payload }) => {
			// this works with onClick={() => dispatch(increase2({id}))}>
			const cartItem = state.cartItems.find(item => item.id === payload.id);
			cartItem.amount++;
		},
		increaseQty: (state, { payload }) => {
			const { id } = payload;
			const cartItem = state.cartItems.find(item => item.id === id);
			//cartItem.amount = cartItem.amount + 1;
			cartItem.amount++;
		},
		decreaseQty: (state, { payload }) => {
			const { id } = payload;
			const cartItem = state.cartItems.find(item => item.id === id);
			//cartItem.amount = cartItem.amount - 1;
			cartItem.amount--;
		},
		calculateTotals: state => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach(item => {
				amount += item.amount;
				total += item.price * item.amount;
			})
			state.amount = amount;
			state.total = parseFloat(total.toFixed(2));
		}
	},
});

console.log('cartSlice: ',cartSlice);
export const { clearCart, removeItem, increaseQty, decreaseQty, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
