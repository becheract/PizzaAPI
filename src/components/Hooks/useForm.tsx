import {useState, useEffect, ChangeEvent} from 'react'

import '../../styles/App.css'
import { connect, useDispatch  } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { addOrder } from '../../features/pizza/pizzaSlice';
import { v4 as uuidv4 } from 'uuid';
import api from '../../features/pizza/api';
import pizza from '../../assets/pizza.png'
import {Button} from '../Button/Button';


interface Order {
    id: string,
    name: string,
    address: string,
    style: string,
    cheese: boolean
    crust: string,
}

interface ErrorsOptions {
    name?: string,
    address?: string,
    crust?: string,
    style?: string,
}

export default function useForm(callback : any,validateInfo : any ) {
    //creating dispatch variable
    const dispatch = useDispatch();
    
     //object will hold the inputs of the order
    const [values ,setValues] = useState<Order>({
        id : uuidv4(),
        name: '',
        address: '',
        style: '',
        cheese: false,
        crust: '',
    });

    //use selector retrieves data from the store
    const pizzaForm = useAppSelector((state) => state.pizza.incomingOrder)
     //error message will output which inputs are empty 
    const [errors, setErrors] = useState<ErrorsOptions>({})
    //success message will output
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) : void => {
        const { name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    //for checkbox
    const handleCheckChange = (event : ChangeEvent<HTMLInputElement>) : void => {
       const { name } = event.target 
       setValues({
           ...values,
        [name]: event.target.checked
       })
    }
    
  
    
    //submit form to server
      //once submitted it will send the order object to the redux reducer called 'order'
    const handleSubmit = ( e : React.FormEvent<HTMLFormElement> ) => {
    //stop default event
    e.preventDefault();
    //validation
    setErrors(validateInfo(values))
    setIsSubmitting(true)
}

  useEffect(() => {
      //if no errors and usestate is equal to true
    if(Object.keys(errors).length === 0 && isSubmitting) {
        
        api.post('/orders', values)
        .then((res) => {
          if(res.status === 201) {
            dispatch(addOrder(values));
            callback();
          }
        }).catch(error => {
             alert(error)
            
        })
    }else if(Object.keys(errors).length > 0){
        return ;
    }
  },[errors])

    return {handleChange, handleCheckChange, values, handleSubmit, errors}
}
