import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isItemOpen: false,
};

const itemModalSlice = createSlice({
	name: 'itemModal',
	initialState,
	reducers: {
		openItemModal: (state, action) => {
			state.isItemOpen = true;
            state.itemId = action.payload;
		},
		closeItemModal: (state, action) => {
			state.isItemOpen = false;
		},
	},
});

export const { openItemModal, closeItemModal } = itemModalSlice.actions;

export default itemModalSlice.reducer;
