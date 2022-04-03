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
    //array of options
    let style : string[] = ['Margherita', 'Hawaiian', 'Pepperoni', 
    'Canadian' , 'Supreme', 'Cheese'];

    const [pizzaImg, setPizzaImg] = useState('')
    //loop through options and return image based
    //on that option
    useEffect(() => {
        style.map((pizzaStyle : string, i : number) => {
            if(props.style == pizzaStyle){
                
                setPizzaImg(Supreme);
            }
        })  
 
    }, [])


    return (
        <img src={pizzaImg}  alt="Pizza Icon" className="w-"/>
      )
}
