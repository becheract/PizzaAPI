import {useEffect, useState} from 'react'
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import {  setOrders , deleteOrder} from '../../features/pizza/pizzaSlice';
import {Button} from '../Button/Button'
import Images from '../Images/Images'
import Nothing from '../Images/pizza.png'
import { Link } from 'react-router-dom';
import loadingGif from '../../assets/loading.gif';


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
  //length of state

  //loading and deleting icon
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
    
    //delete orders by taking id as param
    const deleteOrderFunc = (id : string) => {
      console.log(id);
      api.delete(`/orders/${id}`)
      .then( async (res) => {
        if(res.status === 200) {
          
          await dispatch(deleteOrder(id));
        }
      }).catch(error => console.log(error))
  
    }
  return (
    <div>
     

      {/* when loading is set to false then show loading icon */}
       {!loading ? 
       <div className="flex mx-auto text-center column">
       <div className="mx-auto ">
       <img className="text-center mx-auto" alt="Loading..." src={loadingGif} width="50%" height="50%"/>
       <h1 className='text-center font-Quicksand text-xl font-black'>Loading</h1>
       </div>
      </div> : 
       //loop through all items in the array of objects
      tasks.map(( order : any , i : number) => {
 
        const orderRecieved: order = {
          name: order.name,
          id: order.id,
          crust: order.crust,
          cheese: order.cheese,
          address: order.address,
          style: order.style,
        }

        
        return (
        //return a container for each order retrieved
          <div key={i} className='group block border mx-auto shadow-lg m-5 rounded p-1 h-10/12 w-10/12  space-y-3 hover:bg-redPizza hover:ring-redHover transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-105 '>

          <div className=" h-fit font-Quicksand md:flex ">

            <div className="w-full h-auto p-5 group-hover:text-white">
              <h3 className="font-bold text-sm">Order ID:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.id} </span></h3>
              <h3 className="font-bold text-sm">Order Name:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.name}</span></h3>
              <h3 className="font-bold text-sm">Order address:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.address}</span></h3>
              <h3 className="font-bold text-sm">Order Style:<span className="font-Quicksand text-xs font-normal"> {orderRecieved.style}</span></h3>
            </div>

            <div className="w-full h-auto p-5 group-hover:text-white">
              <h3 className="font-bold text-sm">Order Crust:<span className="font-Quicksand text-xs font-normal">{orderRecieved.crust}</span></h3>
              <h3 className="font-bold text-sm">Order Cheese:<span className="font-Quicksand text-xs font-normal">{orderRecieved.cheese ? ' Yes cheese' : ' No cheese'}</span> </h3>
            </div>

            <div className=" h-full justify-center w-full text-center">
            {/* pass the syle as a prop */}
              <div className="h-70  w-full p-5">
                <Images style={orderRecieved.style} ></Images>
              </div>

              <div className="h-30 w-full h-30 ">
              <Button onClick={() => deleteOrderFunc(orderRecieved.id)} className="mx-auto mt-5 mb-5 w-1/2 h-auto ring ring-slate-900/5 text-white bg-redPizza font-Quicksand group-hover:ring-white">Remove</Button>
              </div>
            </div>
            
          </div>
          
          </div>

        )
        })}
      {tasks.length > 0 ? console.log(tasks.length) :
      <div className="mx-auto w-90" style={{display : loading ? "block" : "none"}}>
      <div>
        <img className='mx-auto lg:w-6/12 lg:p-5' src={Nothing} alt="Please place an order" />
        <h3 className='text-center font-Quicksand text-xl font-black'>No orders made</h3>
       <div className='text-center'>
        <Link to='/get-your-pizza'><Button  className="mb-4 md:w-2/12 md:ml-auto uppercase">Get Your Pizza</Button></Link>
        </div>
       </div>
      </div>
      }
    </div>

  )

}




