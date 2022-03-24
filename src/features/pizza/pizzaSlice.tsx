import { createSlice } from "@reduxjs/toolkit";

//the initial state of the pizza 🍕
const initialState = { 
    incomingOrder : [],
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    //reducers are functions that manage state
    reducers: {
        addOrder : (state, action) => {
           const newOrder = [ 
               ...state.incomingOrder,
               action.payload
           ];
           state.incomingOrder = newOrder 
        },
        setOrders : (state, action) => {
            
        }

    },
})

export default pizzaSlice.reducer
//exporting this action
export const { addOrder } = pizzaSlice.actions