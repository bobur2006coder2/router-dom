import React from 'react'
import logo from "../../assets/logo/logo.svg"
import { footerLi, footerLiThree, footerLiTwo } from '../../utils/utils'
import "./style.css"
import theEnd from "../../assets/image/footer.png"
export default function Footer() { 
  return ( 
    <footer>
      <div className="parentFooter">
        <div className="footer-left">
          <div className="footer-leftTop">
            <img src={logo} alt="" className="footer-logo" />
            <h4 className="footer-logo-text">HKinvision</h4>
          </div>
          <p className="footerLeftBottom-p">
            The World's Best Luxury Car’s Dealing Platform
          </p>
        </div>
        <div className="footerRight">
          <ul className="list-footer">
            {footerLi.map((elem) => {
              return (
                <li key={elem.id} className={elem.style} > {elem.name} </li>
              )
            })}
          </ul>
          <ul className="list-footer">
            {footerLiTwo.map((elem) => {
              return (
                <li key={elem.id} className={elem.style} > {elem.name} </li>
              )
            })}
          </ul>
          <ul className="list-footer">
            {footerLiThree.map((elem) => {
              return (
                <li key={elem.id} className={elem.style} > {elem.name} </li>
              )
            })}
          </ul>
          <img src={theEnd} alt="" className='img-footer'/>
        </div>
      </div>
        <div className="footer-bottom"><h4 className="footerBottom-text">©2022 HKInvestor. All right reserved</h4></div>
    </footer>
  )
}
