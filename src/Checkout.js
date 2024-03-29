import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=''/>

            <div>
                <h3>Hello, {user?.email}{/*we are using optional chaining (?.) cuz there is a asynchronous period during which user won't be loaded cuz it is being fetched from firebase*/}</h3> 
                <h2 className="checkout__title">
                    Your shopping Basket
                </h2>
                {basket.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                ))}
                 
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
            
        </div>
    </div>
  )
}

export default Checkout