import { createSlice } from "@reduxjs/toolkit";

//the initial state of the pizza 🍕
const initialState = { 
    pizzaOrder: [{
        firstname: '',
        lastname: '',
        address: '',
        style : '',
        crust: '',
        extraCheese: false,
    }]
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    //reducers are functions that manage state
    reducers: {
        onchange : (state) => {
            
        }
    },
})

export default pizzaSlice.reducer