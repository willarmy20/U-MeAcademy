//import {ADD_TO_CART} from '../actions/actionTypes';

const courseReducer = (state, action) => {
  if (state == null) {
    state = {
        cartItems: [],
        numberOfItems: 0,
        totalCost: parseFloat(0.00),
        courses: [],
        udemyCourses: []
    };
  }

  switch (action.type) { 

    case "ADD_TO_CART":

        let newCartItems = [...state.cartItems];
        let isFound = false;
        let productPrice = 0;

        newCartItems.forEach(product =>{
            if(product.id === action.product.id){
                product.count++;
                isFound = true;
            }
        })

        if(!isFound){
            newCartItems.push({...action.product, count:1})
        }
        console.log(action.product)
        if(action.product.price !== 'Free') {
            productPrice = parseFloat(action.product.price_detail.amount)
        }

        return {
            ...state,
            cartItems: newCartItems,
            numberOfItems: state.numberOfItems + 1,
            totalCost: state.totalCost + productPrice
        }
    case "REMOVE_FROM_CART":

        let cartItems = [...state.cartItems];
        console.log(cartItems)

    

                
                let removedCartItems = cartItems.filter(product => product.id !== action.product.id)
            
               
                console.log(`newOne ${cartItems}`)
            
    

        // if(!isFounded){
        //     cartItems.filter({...action.product, count:-1})
        // }


        return {
            ...state,
            cartItems: removedCartItems,
            numberOfItems: state.numberOfItems - action.product.count,
            totalCost: parseFloat(state.totalCost - parseFloat(action.product.price) * parseFloat(action.product.count)).toFixed(2)
        }
  
        
    
    case "GET_VIDEOS":

        return{
            ...state,
            courses: action.data
        }

        

  
    case "GET_UDEMY_VIDEOS":

        return{
            ...state,
            udemyCourses: action.data
        }
    default:
        return state;
        
        

  }
};

export default courseReducer