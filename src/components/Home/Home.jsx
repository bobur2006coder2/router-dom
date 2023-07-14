import React from 'react'
import Button from '../Buttons/Button'
import "./style.css"
import car from "../../assets/image/car.svg"
import Section from '../Section/Section'

export default function Home() {
  return (
    <>
    
    <header>
      <div className="header-left">
        <h1 className="text-h1-header-left"> The World`s Best Luxury Car Deals</h1>
        <p className="text-p-header-left">HKinvestor can provide rentals of the most exclusive cars like Ferrari and Lamborghini.</p>
        <div className="btns-header">
          <Button className={"orange"} name="Buy Now"/>
          <Button className={"orange_secundary"} name="Video Introduction"/> 
        </div>
        <div className="header-numbers">
          <div className="text-all">
            <h2 className="num-text-header">500+</h2>
            <p className="">Luxury Cars</p>
          </div>
          <div className="text-all">
            <h2 className="num-text-header">#1</h2>
            <p className="">Best Deal Car</p>
          </div>
        </div>
      </div>
      <div className="header-right"><img src={car} alt="" className='img-header'/></div>
    </header>
 <Section/> 

    </>
    
  )
}
