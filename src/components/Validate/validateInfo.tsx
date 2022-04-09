import React from 'react'

interface ErrorsOptions {
    name?: string,
    address?: string,
    crust?: string,
    style?: string,
}

interface Order {
    id: string,
    name: string,
    address: string,
    style: string,
    cheese: boolean
    crust: string,
}
export default function validateInfo(values : Order ) : ErrorsOptions {
    const errors : ErrorsOptions = {
        
    }

    //name
    if(!values.name.trim()){
        errors.name = "Name required"
       
    }

    //address
    if(!values.address){
        errors.address = "Address required"
    }else if (values.address.length < 4){
        errors.address = "Address must be more than 4 characters"
    }
    //crust
    if(!values.crust){
        errors.crust = "Select a crust type"
    }
    //style 
    if(!values.style){
        errors.style = "Select a style type"
    }

    //return 
    
    console.log(errors)
    return errors;
}
