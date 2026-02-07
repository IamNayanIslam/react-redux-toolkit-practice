//product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//cart constants

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";


//product initialState

const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
}


//cart initialState

const initialCartState = {
    cartItems: [],
    numberOfItems: 0,
}

//product actions

const getProducts = () =>{
    return{
        type: GET_PRODUCTS,
    }
}

const addProduct = (product) =>{
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

//cart actions

const getCart = () =>{
    return{
        type: GET_CART,
    }
}

const addToCart = (item) =>{
    return {
        type: ADD_TO_CART,
        payload: item,
    }
}

//productReducer

const productReducer = (state = initialProductState, {type, payload} = actions)=>{
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
         case ADD_PRODUCT:
            return{
                ...state, 
                products: [...state.products, payload],
                numberOfProducts: state.numberOfProducts + 1,
            }   
        default:
           return state;
    }
}

//cartReducer



const cartReducer = (state = initialCartState, {type, payload} = actions)=>{
    switch (type) {
        case GET_CART:
            return {
                ...state
            }
         case ADD_TO_CART:
            return{
                ...state, 
                cartItems: [...state.cartItems, payload],
                numberOfItems: state.numberOfItems + 1,
            }   
        default:
           return state;
    }
}






//create store

const {createStore, combineReducers} = require("redux");


//combine reducers

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
})

const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getCart());
store.dispatch(addToCart("egg"));
store.dispatch(addProduct('egg'));