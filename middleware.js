//product constants

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";




//product initialState

const initialProductState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2,
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








//create store

const {createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addProduct('egg'));