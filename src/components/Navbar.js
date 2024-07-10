import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
const Navbar = () => {
    //console.log(useSelector(store => console.log('store:',store)));
    const {amount} = useSelector(store => store.cart); // destructuring the cart object from the store.  we could have const amount = useSelector(store => store.cart.amount);  The store is the global state object that we have access to.  We are using the useSelector hook to get the amount from the cart object in the store.  We are then using the amount in the JSX to display the total amount of items in the cart.
    
	return (
		<nav>
			<div className="nav-center">
				<h3>redux toolkit</h3>
				<div className="nav-container">
                    
					<CartIcon />
					<div className="amount-container">
						<p className="total-amount">{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
