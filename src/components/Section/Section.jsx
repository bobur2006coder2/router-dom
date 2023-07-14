import React, { Fragment } from 'react'
import { sectionImageBoxes } from '../../utils/utils'
import "./style.css"
import img1 from '../../assets/image/carin2.svg'
import img2 from '../../assets/image/carin1.svg'
import img3 from '../../assets/image/carin3.svg'


export default function Section() {
    return (
        <>
    <h1 className="section-text">Rent a Luxury Car</h1>
  <div className="sectionBoxes"> 
{sectionImageBoxes.map(({section_top_name,section_bottom_name,image_card,id})=>{
    return(
        <React.Fragment key={id}>

        <div className="car-box"><img src={image_card} alt="" className="car-image-boxes" />
        <div className="hover-car-texts">
            <h1 className="hover-text-top">{section_top_name}</h1>
            <h3 className="hover-text-bottom">{section_bottom_name}</h3>
        </div>
        </div>
        </React.Fragment>
    )
})}
 
  </div>
 <h1 className="section-text-two">Our Other Services</h1>
 <div className="sectionBoxes-two ">
    <div className="boxTwo-card">
    <img src={img1} alt="" />
<h3 className='text-top-card'>Private Charter</h3>
<p  className='text-bottom-card'>Pinjam Mobil Rent also offers you discreet and speedy, transfers via helicopter or private planes.</p>
    </div>
    <div className="boxTwo-card">
    <img src={img2} alt="" />
<h3 className='text-top-card'>Chauffer Driven Car Rentals</h3>
<p  className='text-bottom-card'>Our chauffers are professional drivers who provide a discreet, reliable punctual and professional service.</p>
    </div>
    <div className="boxTwo-card">
    <img src={img3} alt="" />
<h3 className='text-top-card'>Wedding Car Rentals</h3>
<p  className='text-bottom-card'>If you want to celebrate your wedding in style and elegance, choose one car from our luxury collection.</p>
    </div>
 </div>
        </>
    )
}
