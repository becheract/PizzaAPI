import React from 'react'
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';
import check from '../../assets/checkmark.png'
export default function FormSuccess() {
  return (
    <div className="container flex justify-center mx-auto m-5">
      <div className="text-center  p-3 rounded w-full md:w-10/12 ">
        <h3 className="p-5 font-black text-3xl text-SecondRed font-Nunito">We have recieved your order!</h3>
        <img src={check} width="90px" height="90px" className=' mx-auto m-5' alt="Order Recieved"/>
        <Link to='/orders' className='mx-auto'><Button  className="mb-4 uppercase">Go to orders</Button></Link>
      </div>
    </div>
  )
}
