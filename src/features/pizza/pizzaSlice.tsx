import { createSlice } from "@reduxjs/toolkit";

//the initial state of the pizza 🍕
const initialState = { 
        firstname: '',
        lastname: '',
        address: '',
        style : '',
        crust: '',
        extraCheese: false,   
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    //reducers are functions that manage state
    reducers: {
        onchange : (state, action) => {
            console.log('action', action)
        }
    },
})

export default pizzaSlice.reducer
//exporting this action
export const { onchange } = pizzaSlice.actions