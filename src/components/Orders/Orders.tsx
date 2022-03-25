import {useEffect, useState} from 'react'
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import { addOrder, setOrders } from '../../features/pizza/pizzaSlice';
export default function Orders() {
  //redux useSelector hook
	const tasks = useAppSelector((state) => state.pizza.incomingOrder);
  
  const [ loading, setLoading] = useState(false); 
	//redux dispatch hook
	const dispatch = useDispatch()
    //load data from api

    useEffect(() => {
      api.get(`/orders`)
      .then(async (res) => {
        if(res.status === 200){
          
          await dispatch(setOrders(res.data))
          await setLoading(true);
        }
      }).catch((err) => {console.log(err)})
    },[])

  return (
    
    <div>
       Orders API
      
       {!loading ? <h1> 'loading' </h1> : 
      tasks.map(( order, i) => {
          console.log(order);
          return <li key={i}>{order.name!}</li>
        })}

    </div>
  )
}
