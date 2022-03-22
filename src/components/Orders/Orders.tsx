import React, {useState } from 'react'
import '../../styles/App.css'
import { connect, useDispatch  } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { order } from '../../features/pizza/pizzaSlice';

export const Orders = () => {
  //creating dispatch variable
  const dispatch = useDispatch();
 
  //use selector retrieves data from the store
  const pizzaForm = useAppSelector((state) => state.pizza)
  //will get the user input
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [style, setStyle] = useState('Hawaiian');
  const [cheese, setCheese] = useState(false);
  const [crust, setCrust] = useState('Original Crust');


  //object will hold the inputs of the order
  const obj = {
    firstname : first,
    lastname : last,
    address : address,
    style : style,
    extraCheese : cheese,
    crust : crust,
  }

  console.log(obj)
  
  //once submitted it will send the order object to the redux reducer called 'order'
  const handleSubmit = ( e : any ) => {
    e.preventDefault();
    dispatch(order(obj));
    //clearing input 
    setFirst("");
    setLast("");
    setAddress("");
    setStyle("");
    setCheese(false);
    setCrust("");
  } 


 
  return (
      <form className="w-full max-w-lg mx-auto p-5">
      <div>
        <h1 className='text-3xl font-bold underline'>Order Your Pizza Today!</h1>
      </div>

  <div className="flex flex-wrap -mx-3 mb-6">

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name" type="text" placeholder="Doe" value={first} onChange={e => setFirst(e.currentTarget.value)}/>
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name" type="text" placeholder="Doe" value={last} onChange={e => setLast(e.currentTarget.value)}/>
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
        Address
      </label>
      <input onChange={e => setAddress(e.currentTarget.value)} value={address} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-2">

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Style
      </label>
      <div className="relative">
        <select  onChange={e => setStyle(e.currentTarget.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value={'Hawaiian'}>Hawaiian</option>
          <option value={'Pepperoni'}>Pepperoni</option>
          <option value={'Canadian'}>Canadian</option>
          <option value={'Supreme'}>Supreme</option>
          <option value={'Cheese'}>Cheese</option>
          <option value={'Margherita'}>Margherita</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div className="form-check pt-5">
      <input onChange={e => setCheese(e.currentTarget.checked)}  className="form-check-input appearance-none h-4 w-4 border  border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id="flexCheckDefault"/>
      <label className="form-check-label inline-block text-gray-800 " htmlFor="flexCheckDefault">
        Extra Cheese
      </label>
    </div>
      
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Crust
      </label>
      <div className="relative">
        <select onChange={e => setCrust(e.currentTarget.value)}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option value={'Original Crust'}>Original Crust</option>
          <option value={'Thin Crust'}>Thin Crust</option>
          <option value={'Gluten-Free Crust'}>Gluten-Free Crust</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
    Submit
  </button>
</form>
 
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)