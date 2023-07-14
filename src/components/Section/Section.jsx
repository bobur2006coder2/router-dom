import React, { Fragment } from 'react'
import { sectionCards, sectionImageBoxes } from '../../utils/utils'
import "./style.css"



export default function Section() {
    return (
        <>
            <h1 className="section-text">Rent a Luxury Car</h1>
            <div className="sectionBoxes">
                {sectionImageBoxes.map(({ section_top_name, section_bottom_name, image_card, id }) => {
                    return (
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
                {sectionCards.map(({ tex_top, tex_bottom, cardImage, id }) => {
                    return (
                        <React.Fragment key={id}>
                            <div className="boxTwo-card">
                                <img src={cardImage} alt="" />
                                <h3 className='text-top-card'>{tex_top}</h3>
                                <p className='text-bottom-card'>{tex_bottom}</p>
                            </div>
                        </React.Fragment>
                    )
                })}

            </div>
        </>
    )
}
