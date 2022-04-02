import React from 'react'
import { Link } from "react-router-dom";
import pizza from '../../assets/pizza.png'
import {Button} from '../Button/Button'
export default function Home() {
  return (
    <div className="container flex justify-center column w-screen mx-auto my-10">
      <div className="text-center w-screen">

      <img src={pizza}  alt="Logo" className="w-3/5 h-45 mx-auto"/>
      <div className="w-4/5 mx-auto">
        <h1 className="p-5 font-light text-3xl text-SecondRed font-Nunito">Get Exceptional Pizza</h1>
        <p className="p-5 text-SecondRed font-Quicksand">Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian origin</p>
        <Link to='/get-your-pizza'><Button  className="mb-4 md:w-2/12 md:ml-auto uppercase">Get Your Pizza</Button></Link>
      </div>
      </div>
    </div>
  )
}
