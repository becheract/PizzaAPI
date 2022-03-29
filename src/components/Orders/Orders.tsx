import {useEffect, useState} from 'react'
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import {  setOrders , deleteOrder} from '../../features/pizza/pizzaSlice';

type order = {
  name: string;
  style: string;
  id: string;
  address: string;
  crust: string; 
  cheese: boolean;
}
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
          setLoading(true);
        }
      }).catch((err) => {console.log(err)})
    },[])
    
    const deleteOrderFunc = (id : string) => {
      api.delete(`/orders/${id}`)
      .then((res) => {
        if(res.status === 200) {
          dispatch(deleteOrder(id));

        }
      }).catch(error => console.log(error))
  
    }
  return (
    
    <div>
       Orders API
       {!loading ? <h1> 'loading' </h1> : 
      tasks.map(( order : any , i) => {

        const orderRecieved: order = {
          name: order.name,
          id: order.id,
          crust: order.crust,
          cheese: order.cheese,
          address: order.address,
          style: order.style,
        }

          return (
          <div key={i} className={'border-8 border-sky-500 gap-5'}>
            <h3>Order ID : {orderRecieved.id}</h3>
            <h3>Order Name: {orderRecieved.name}</h3>
          <button onClick={() => deleteOrderFunc(orderRecieved.id)} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded w-48 mx-auto mt-5">
             Delete
          </button>
          </div>
          )
        })}
      

    </div>
  )
}
