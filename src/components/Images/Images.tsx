import {useState, useEffect} from 'react';
import Margherita from '../Images/Margherita.png';
import Canadian from  '../Images/Canadian.png';
import Pepperoni from '../Images/Pepperoni.png'
import Cheese from '../Images/Cheese.png';
import Hawaiian from '../Images/Hawaiian.png';
import Supreme from '../Images/Supreme.png';

//create a interface for props
interface style {
    style: string
}


export default function Images(props : style) {
    //key value array
    let style :  any =  {
     'Margherita' : Margherita,
     'Hawaiian': Hawaiian, 
      'Pepperoni': Pepperoni,
      'Canadian': Canadian,
      'Supreme': Supreme,
      'Cheese': Cheese};

    const [pizzaImg, setPizzaImg] = useState<any>()
    //loop through options and return image based
    //on that option
    useEffect(() => {
        for(const [key, value] of Object.entries(style)){
            if(props.style == key)
            setPizzaImg(value)
        }
 
    }, [])


    return (
        <img src={pizzaImg}  alt="Pizza Icon" className="mx-auto w-10 "/>
      )
}
