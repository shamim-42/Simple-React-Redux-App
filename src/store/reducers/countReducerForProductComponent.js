import {INCREMENT, DECREMENT, INCREMENT_PRICE, DECREMENT_PRICE} from '../actions/type';

const starting_state = {
    price: 100
}

const countReducerForProductComponent = (state=starting_state, action) => {
    switch (action.type) {
        case INCREMENT_PRICE:
            return{
                price: state.price + 1
            }

        case DECREMENT_PRICE:
            return{
                price: state.price - 1
            }
    
        default:
            return state
    }
}
export default countReducerForProductComponent;