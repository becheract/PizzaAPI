import React, {useState} from 'react'

import GetYourPizza from './GetYourPizza';
import FormSuccess from './FormSuccess'
export default function Form() {
const [isSubmmitted,setIsSubmitted] = useState(false);

const submitForm = () : void => {
    setIsSubmitted(true);
}
  return (
    <div>
        {!isSubmmitted ? <GetYourPizza submitForm
        ={submitForm} /> : <FormSuccess/>
    }
    </div>
  )
}
