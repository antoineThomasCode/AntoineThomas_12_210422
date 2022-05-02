import React from "react";

function InfoCard ({icon, alt, quantity, unity, nutrient}) {


    return (
        <div className="info-card">
            <img src={icon} alt={alt} />
            <div>
                <p>{quantity} {unity}</p>
                <p>{nutrient}</p>
            </div>
        </div>
    )
}
export default InfoCard