import  {useState } from 'react'
import '../../styles/App.css'
import { connect  } from 'react-redux'
import pizza from '../../assets/pizza.png'
import {Button} from '../Button/Button'
// hook 
import useForm from '../Hooks/useForm';
//validation
import validateInfo from '../Validate/validateInfo';


export const GetYourPizza = ({submitForm} : any) => {
  //destructure hook
  const {handleChange, handleCheckChange, handleSubmit, errors,  values}
   = useForm( 
     submitForm, 
     validateInfo )

  //array of styles and crusts
  const [style] = useState(['Hawaiian', 'Pepperoni', 'Canadian' , 'Supreme', 'Cheese' , 'Margherita'] );
  const [crust] = useState(['Original Crust', 'Thin Crust', 'Gluten-Free Crust']);
 
 
  return (
  <form className="w-full max-w-lg mx-auto p-5 border-2  shadow-lg" onSubmit={handleSubmit}>
    <img src={pizza}  alt="Logo" className="w-1/5 h-45 mx-auto"/>
      <div>
        <h1 className="p-5 font-light text-3xl text-SecondRed font-Nunito text-center">Get your Pizza</h1>
      </div>

  <div className="flex flex-wrap -mx-3 mb-6 ">

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="text-black font-Quicksand" htmlFor="grid-last-name">
         Name
      </label>
      <input className="appearance-none font-Quicksand block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name"
      value={values.name}
      onChange={handleChange}
      type="text" placeholder="John Doe" 
      name="name"/>
      {errors.name && <p className='p-1 text-red-600'>{errors.name}</p>}
    </div>

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="text-black font-Quicksand" htmlFor="grid-address">
        Address
      </label>
      <input name="address" 
        value={values.address}
        onChange={handleChange}
       className=" font-Quicksand appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-address" type="text" placeholder="Address"/>
      {errors.address && <p className='p-1 text-red-600'>{errors.address}</p>}
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6 ">

    <div className="w-full md:w-1/2 px-3 py-2">
      <label className="font-Quicksand block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Style
      </label>
      <div className="relative">
        <select name="style"
         
         value={values.style}
         onChange={handleChange}
         className="font-Quicksand block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Select Style Type</option>
          {style && 
          style.map((i, index) =>{
            return <option key={index}>{i}</option>
          })}
        </select>
        {errors.style && <p className='p-1 text-red-600'>{errors.style}</p>}
      </div>

      <div className="form-check pt-5 font-Quicksand">
      <input name="cheese"
      checked={values.cheese}
      onChange={handleCheckChange}
      className="form-check-input appearance-none h-4 w-4 border  border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  />
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
        <select name="crust"  
        value={values.crust}
        onChange={handleChange}
        className="font-Quicksand block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Select Crust Type</option>
          {crust && 
          crust.map((i, index) => {
            return <option key={index}>{i}</option>
          }) }
        </select>
       {errors.crust && <p className='p-1 text-red-600'>{errors.crust}</p>}
      </div>
    </div>
    <Button  className="mb-4 md:w-2/12 md:ml-auto uppercase mx-auto">Submit</Button>
 
  </div>

</form>
 
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GetYourPizza)