import {useEffect, useState} from 'react'
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import {  setOrders , deleteOrder} from '../../features/pizza/pizzaSlice';
import {Button} from '../Button/Button'


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
  const [ deleting, setDeleting ] = useState(true); 
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
      console.log(id);
      api.delete(`/orders/${id}`)
      .then( async (res) => {
        if(res.status === 200) {
          
          await dispatch(deleteOrder(id));
          setDeleting(true);
        }
      }).catch(error => console.log(error))
  
    }
  return (
    
    <div>
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
        console.log(order.cheese)
          return (
          <div key={i} className={'border shadow m-5 rounded p-5 flex column'}>

            <div>
              <h3 className="font-medium text-sm">Order ID:<span className="font-Quicksand text-xs"> {orderRecieved.id} </span></h3>
              <h3 className="font-medium text-sm">Order Name:<span className="font-Quicksand text-xs"> {orderRecieved.name}</span></h3>
              <h3 className="font-medium text-sm">Order address:<span className="font-Quicksand text-xs"> {orderRecieved.address}</span></h3>
            </div>

            <div>
              <h3 className="font-medium text-sm">Order Crust: <span className="font-Quicksand text-xs">{orderRecieved.crust}</span></h3>
              <h3 className="font-medium text-sm">Order Cheese:<span className="font-Quicksand text-xs">{orderRecieved.cheese}</span> </h3>
              <h3 className="font-medium text-sm">Order Style:<span className="font-Quicksand text-xs"> {orderRecieved.style}</span></h3>
            </div>


            <div className="">
              <Button onClick={() => deleteOrderFunc(orderRecieved.id)} className="uppercase h-10 w-20 flex m-1 leading-3 font-Quicksand"><p className="m-auto text-center">Delete</p></Button>
            </div>
          </div>
          )
        })}
      

    </div>
  )
}
