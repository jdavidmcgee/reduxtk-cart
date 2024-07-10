//import { closeModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { closeItemModal } from '../features/modal/itemModalSlice';

const ItemModal = ({ id }) => {
	const dispatch = useDispatch();

	return (
		<aside className="item-modal-container">
			<div className="modal">
				<h4>remove this item from the cart?</h4>
				<div className="btn-container">
					<button
						type="button"
						className="btn confirm-btn"
						onClick={() => {
							dispatch(removeItem(id));
							dispatch(closeItemModal());
						}}>
						confirm
					</button>
					<button
						type="button"
						className="btn clear-btn"
						onClick={() => {
							dispatch(closeItemModal());
						}}>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
};

export default ItemModal;
