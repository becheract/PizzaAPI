import {useEffect, useState} from 'react'
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import {  setOrders , deleteOrder} from '../../features/pizza/pizzaSlice';
import {Button} from '../Button/Button'
import Images from '../Images/Images'

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
  
  //loading and deleting icon
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
    
    //delete orders by taking id as param
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
    //when loading is set to false then show loading icon
    <div>
       {!loading ? <h1> 'loading' </h1> : 
       //loop through all items in the array of objects
      tasks.map(( order : any , i) => {

        const orderRecieved: order = {
          name: order.name,
          id: order.id,
          crust: order.crust,
          cheese: order.cheese,
          address: order.address,
          style: order.style,
        }

        //return a container for each order retrieved
          return (
          <div key={i} className='border shadow m-5 rounded p-1 h-40'>

          <div className="flex column h-full font-Quicksand">

            <div className="border w-2/4 h-full">
              <h3 className="font-bold text-sm">Order ID:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.id} </span></h3>
              <h3 className="font-bold text-sm">Order Name:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.name}</span></h3>
              <h3 className="font-bold text-sm">Order address:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.address}</span></h3>
              <h3 className="font-bold text-sm">Order Style:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.style}</span></h3>
            </div>

            <div className="border w-1/4 h-full">
              <h3 className="font-bold text-sm">Order Crust: <span className="font-Quicksand text-xs font-normal">{orderRecieved.crust}</span></h3>
              <h3 className="font-bold text-sm">Order Cheese:<span className="font-Quicksand text-xs font-normal">{orderRecieved.cheese ? ' Yes cheese' : ' No cheese'}</span> </h3>
            </div>

            <div className="flex flex-wrap border h-100 justify-center column w-1/4 text-center">
            {/* pass the syle as a prop */}
              <div className="h-70 border w-full">
                <Images style={orderRecieved.style}></Images>
              </div>

              <div className="border h-20 w-full h-30 ">
              <Button onClick={() => deleteOrderFunc(orderRecieved.id)} className="uppercase h-5 w-20 flex leading-3 font-Quicksand mx-auto"><span className="my-auto text-xs">Delete</span></Button>
              </div>
            </div>
            
          </div>

          </div>
          )
        })}
      

    </div>
  )
}
