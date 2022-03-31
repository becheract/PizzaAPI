import { createSlice } from "@reduxjs/toolkit";

//the initial state of the pizza 🍕
const initialState = { 
    incomingOrder : [] as Array<Object>,
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    //reducers are functions that manage state
    reducers: {
        addOrder : (state, action) => {
            state.incomingOrder = [...state.incomingOrder, action.payload]
            console.log(state.incomingOrder)
        },  
        setOrders : (state, action) => {
           state.incomingOrder = action.payload
           console.log(state.incomingOrder)
        },
        deleteOrder : (state, action) => {
            state.incomingOrder = [...state.incomingOrder]
            
      
        }

    },
})

export default pizzaSlice.reducer
//exporting this action
export const { addOrder, setOrders, deleteOrder } = pizzaSlice.actions