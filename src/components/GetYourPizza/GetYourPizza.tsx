import  {useState, useEffect } from 'react'
import '../../styles/App.css'
import { connect, useDispatch  } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { addOrder } from '../../features/pizza/pizzaSlice';
import { v4 as uuidv4 } from 'uuid';
import api from '../../features/pizza/api';
import pizza from '../../assets/pizza.png'
import {Button} from '../Button/Button'

export const Orders = () => {
  //creating dispatch variable
  const dispatch = useDispatch();
  //for saving orders
  const [saving, setSaving] = useState(false);
  //use selector retrieves data from the store
  const pizzaForm = useAppSelector((state) => state.pizza.incomingOrder)
  //will get the user input
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [style] = useState(['Hawaiian', 'Pepperoni', 'Canadian' , 'Supreme', 'Cheese' , 'Margherita'] );
  const[selectedCrust, setSelectedCrust] = useState("")
  const[selectedStyle, setSelectedStyle] = useState("")
  const [cheese, setCheese] = useState(false);
  const [crust] = useState(['Original Crust', 'Thin Crust', 'Gluten-Free Crust']);
  //array of fields which will validate user input
  const [fields, setFields ] = useState({
    nameErr : name, 
    addressErr : address, 
    styleErr : selectedStyle, 
    crustErr : selectedCrust});

  //error message will output which inputs are empty 
  const [errMsg, setErrMsg] = useState([])
  //object will hold the inputs of the order
  const obj = {
    id : uuidv4(),
    style : selectedStyle,
    crust : selectedCrust,
    cheese : cheese,
    name : name,
    address : address,
  }


  
  //once submitted it will send the order object to the redux reducer called 'order'
  const handleSubmit = ( e : any ) => {
    e.preventDefault();
    //for loop through the fields and check if they are empty

      // if(element === "") {
      //   setErrMsg([...errMsg, element])
      // }

    //loading
    setSaving(true);
    api.post('/orders', obj)
    .then((res) => {
      if(res.status === 201) {
        dispatch(addOrder(obj));
        //clearing input 
        setName("")
        setAddress("");
        setSelectedCrust("");
        setSelectedStyle("");
        setCheese(false);
        //setting loading to false
        setSaving(false)
      }
    }).catch(error => console.log(error))

  } 


 
  return (
  <form className="w-full max-w-lg mx-auto p-5 border-2  shadow-lg" onSubmit={handleSubmit}>
    <img src={pizza}  alt="Logo" className="w-1/5 h-45 mx-auto"/>
    {saving && ( 
      <div className='saving'>Saving...</div> 
    )}
      <div>
        <h1 className="p-5 font-light text-3xl text-SecondRed font-Nunito text-center">Get your Pizza</h1>
      </div>

  <div className="flex flex-wrap -mx-3 mb-6 ">

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="text-black font-Quicksand" htmlFor="grid-last-name">
         Name
      </label>
      <input className="appearance-none font-Quicksand block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name" type="text" placeholder="John Doe" value={name} onChange={e => setName(e.currentTarget.value)}/>
    </div>

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="text-black font-Quicksand" htmlFor="grid-address">
        Address
      </label>
      <input onChange={e => setAddress(e.currentTarget.value)} value={address} className=" font-Quicksand appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-address" type="text" placeholder="Address"/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6 ">

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="font-Quicksand block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Style
      </label>
      <div className="relative">
        <select value={selectedStyle} onChange={e => setSelectedStyle(e.target.value)} className="font-Quicksand block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Select Style Type</option>
          {style && 
          style.map((i, index) =>{
            return <option key={index}>{i}</option>
          })}
        </select>

      </div>
      <div className="form-check pt-5 font-Quicksand">
      <input onChange={e => setCheese(e.currentTarget.checked)}  className="form-check-input appearance-none h-4 w-4 border  border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked={cheese} />
      <label className="form-check-label inline-block text-gray-800 " htmlFor="flexCheckDefault">
        Extra Cheese
      </label>
    </div>
      
    </div>
    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="font-Quicksand block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Crust
      </label>
      <div className="relative">
        <select value={selectedCrust} onChange={e => setSelectedCrust(e.target.value)}  className="font-Quicksand block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Select Crust Type</option>
          {crust && 
          crust.map((i, index) => {
            return <option key={index}>{i}</option>
          }) }
        </select>
       
      </div>
    </div>
    <Button  className="mb-4 md:w-2/12 md:ml-auto uppercase mx-auto">Submit</Button>
 
  </div>

</form>
 
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)