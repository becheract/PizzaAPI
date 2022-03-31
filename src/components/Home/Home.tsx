import React from 'react'
import { Link } from "react-router-dom";
import pizza from '../../assets/pizza.png'
import {Button} from '../Button/Button'
export default function Home() {
  console.log(pizza)
  return (
    <div className="container flex justify-center column w-screen">
      <div className="text-center w-screen mx-auto">

      <img src={pizza}  alt="Logo" className="w-60 h-45"/>
      <h1>Get Exceptional Pizza</h1>
      <p>Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients</p>
      <Button  className="mb-4 md:w-2/12 md:ml-auto">Get Your Pizza</Button>
   
      </div>
    </div>
  )
}
