import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
	const dispatch = useDispatch();

	const { cartItems, isLoading } = useSelector(store => store.cart);
	const { isOpen } = useSelector(store => store.modal);

	useEffect(() => {
		dispatch(calculateTotals());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems]);

	useEffect(() => {
		dispatch(getCartItems());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
