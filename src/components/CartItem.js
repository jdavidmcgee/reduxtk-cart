import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import {
	removeItem,
	increaseQty,
	decreaseQty,
} from '../features/cart/cartSlice';

import { openItemModal } from '../features/modal/itemModalSlice';

const CartItem = ({ id, title, price, img, amount }) => {
	const dispatch = useDispatch();

	return (
		<article className="cart-item">
			<img src={img} alt={title} className="img" />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">${price}</h4>
				<button
					className="remove-btn"
					onClick={() => dispatch(removeItem(id))}>
					remove
				</button>
			</div>
			<div>
				<button
					className="amount-btn"
					onClick={() => dispatch(increaseQty({ id }))}>
					<ChevronUp />
				</button>
				<p className="amount">{amount}</p>
				<button
					className="amount-btn"
					onClick={
						amount === 1
							? () => dispatch(openItemModal(id))
							: () => dispatch(decreaseQty({ id }))
					}>
					<ChevronDown />
				</button>
				{/* another way to write the above without a ternary operator */}
				{/* <button
					className="amount-btn"
					onClick={() => {
						if (amount === 1) {
							dispatch(removeItem(id));
							return;
						}
						dispatch(decreaseQty({ id }));
					}}
					>
					<ChevronDown />
				</button> */}
			</div>
		</article>
	);
};

export default CartItem;
