import React from "react";

export default function Card({img_src, rating, n_reviews, location, title, price, status}) {
    return(
        <div className="Card-component">
            {status === "Sold out" && 
            <div className="Card-badge">
                SOLD OUT
            </div>
            }

            {location === "Online" && status !== "Sold out" && 
            <div className="Card-badge">
                ONLINE
            </div>
            }

            <img alt="" src={img_src}/>
            <div className="Card-info">
                <div className="Card-rating-location">
                    <img alt="" src="../../images/star.png"/>
                    <p style={{margin: "0 5px"}}> {rating}</p>
                    <span className="gray"> ({n_reviews}) ∙ {location} </span>
                </div>
                <p style={{margin: 0, textAlign: "left"}}>{title}</p>
                <p style={{margin: "5px 0", textAlign: "left"}}> <span className="bold">From ${price}</span> / person</p>
            </div>
        </div>
    )
}