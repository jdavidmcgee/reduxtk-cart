import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import cartItems from '../../cartItems';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
	cartItems: [],
	amount: 4,
	total: 0,
	isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
	return fetch(url)
		.then(response => response.json())
		.catch(error => console.log(error));
});

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
			});
			state.amount = amount;
			state.total = parseFloat(total.toFixed(2));
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCartItems.pending, state => {
				state.isLoading = true;
			})
			.addCase(getCartItems.fulfilled, (state, action) => {
				state.cartItems = action.payload;
				state.isLoading = false;
			})
			.addCase(getCartItems.rejected, state => {
				state.isLoading = false;
			});
	},
	// extraReducers: {
	// 	[getCartItems.pending]: state => {
	// 		state.isLoading = true;
	// 	},
	// 	[getCartItems.fulfilled]: (state, action) => {
	// 		state.cartItems = action.payload;
	// 		state.isLoading = false;
	// 	},
	// 	[getCartItems.rejected]: state => {
	// 		state.isLoading = false;
	// 	},
	// },
});

//console.log('cartSlice: ', cartSlice);
export const {
	clearCart,
	removeItem,
	increaseQty,
	decreaseQty,
	calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
