import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { FC } from 'react';

//the initial state of the pizza 🍕
const initialState = { 
    incomingOrder : [] as Array<Object>,
}
interface order {
    name: string,
    style: string,
    id: string,
    address: string,
    crust: string,
    cheese: boolean,
  }

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    //reducers are functions that manage state
    reducers: {
        addOrder : (state, action) : void => {
            //adds old array and appends payload to the olad array
            state.incomingOrder = [...state.incomingOrder, action.payload]
            console.log(state.incomingOrder)
        },  
        setOrders : (state, action) : void => {
            //sets state to payload
           state.incomingOrder = action.payload
        },
        deleteOrder : (state, action) : void => {
            //filter state
            let filtered = state.incomingOrder.filter
            ((order: any) => order.id !== action.payload);
      
                state.incomingOrder = filtered
        },
    },
})

export default pizzaSlice.reducer
//exporting this action
export const { addOrder, setOrders, deleteOrder } = pizzaSlice.actions