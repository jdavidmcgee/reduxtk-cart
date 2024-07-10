import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
//import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
	const dispatch = useDispatch();

	const { cartItems, total, amount } = useSelector(store => store.cart);
	// the useSelector hook is method to grab the state from the store.  The state is referred to as a slice - cartSlice in this case.  we tell the useSelector, through the function, what we want from the 'store.'  We used useSelector to access our entire store - specifically the cart slice

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>your cart</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			<header>
				<h2>your cart</h2>
			</header>
			<div>
				{cartItems.map(item => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button
					className="btn clear-btn"
					onClick={() => dispatch(openModal())}>
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
