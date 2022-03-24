import {useEffect} from 'react'
//redux
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import api from '../../features/pizza/api';
import { addOrder } from '../../features/pizza/pizzaSlice';
export default function Orders() {
  //redux useSelector hook
	const tasks = useAppSelector((state) => state.pizza);
	//redux dispatch hook
	const dispatch = useDispatch()
    //load data from api
    api.get(`/orders`)
    .then((res) => {
      if(res.status === 200){
        console.log(res)
      }
    })
  return (
    <div>
      Orders API
        
    </div>
  )
}
