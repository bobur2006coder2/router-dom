import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo/logo.svg"
import { NavEl } from '../../utils/utils'
import Button from '../Buttons/Button'
import "./style.css"
export default function Navbar() {
    return (
        <nav>
            <div className="img_logo">
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="boxRight">
                <ul className="list">
                    {NavEl.map((elem) => {
                        return (<React.Fragment> <Link to={elem.path}><li className="list_item">{elem.pagename}</li></Link></React.Fragment>)})}
                </ul>
                <div className="btn">
                    <Button className={"orange"} name="Manage Booking" />
                </div>
            </div>
        </nav>
    )
}
