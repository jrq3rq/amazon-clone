import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import './Checkout.css';
import Subtotal from "./Subtotal";


function Checkout() {
    const [{ basket }] = useStateValue();

    return <div className="checkout">
        <div className="checkout_left">
             <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/music/merch/2019/Virtualbundles/US-EN_040620_dotDollar_ACQ_LP_1500x300_CV1b.jpg" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shooping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, 
                        chick "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket </h2>
                    {/* list out all the checkout products */}
                    {basket?.map((item) => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        )
                    )}
                </div>
        )}
        </div>
        {basket.length > 0 && (
            <Subtotal />
        )}

    </div>
}
// react-currency-format
export default Checkout
