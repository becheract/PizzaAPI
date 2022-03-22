import { createSlice } from "@reduxjs/toolkit";

//the initial state of the pizza 🍕
const initialState = { 
    incomingOrder : {
        firstname: '',
        lastname: '',
        address: '',
        style : '',
        crust: '',
        extraCheese: false,   
    }
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    //reducers are functions that manage state
    reducers: {
        order : (state, action) => {
            console.log('action', action)
            state.incomingOrder = action.payload
            console.log(state.incomingOrder);
        }
    },
})

export default pizzaSlice.reducer
//exporting this action
export const { order } = pizzaSlice.actions