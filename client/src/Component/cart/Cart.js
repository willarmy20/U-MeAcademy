import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {formatCurrency} from '../utils';
import Fade from 'react-reveal/Fade';
import {removeFromCart} from '../../actions/courseActions'
import './cart.css'

const Cart = () => {
    const courseItems = useSelector(state => state.course.cartItems);
    const numberOfItems = useSelector(state => state.course.numberOfItems);
    const totalCosts = useSelector(state => state.course.totalCost);
    const dispatch = useDispatch()
    console.log(courseItems)
  return <>
    <h1>Cart</h1>
    <div>
        {courseItems.length === 0 
            ?
            <div>Cart is empty</div>

            : 
            <div>
                You have <em>{numberOfItems}</em> items in the cart
            </div>
        }
    </div>

        <Fade left cascade>
        <div className="row align-items-center cart-items">
            {courseItems.map(item =>{
                return <div key={item.id} className="col-7 d-flex">

                    <div className="d-flex flex-row">
                            <div>
                                <img src={item.image_480x270} alt={item.title} />
                            </div>
                            <div>
                                <div>
                                {item.title}
                                </div>
                                <div>
                                {item.price} X {item.count}
                                </div>
                            </div>
                    
                            
                
                        <button className="btn btn-warning" onClick={()=> dispatch(removeFromCart(item))}>Remove</button>
                        </div>
                        <div>     
                    </div>

                    
            
                   
                </div>
            
            })}
        </div>
        <div className="totalCost">
        <h1>Total Cost</h1>
        {formatCurrency(totalCosts)}
       </div>
        </Fade>
  </>;
};


export default Cart
