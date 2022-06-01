import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {string} icon - url of icon 
 * @param {string} alt - alt to discrib icon
 * @param {number} quantity - quantity relative to the unit 
 * @param {string} unity - unity relative to the quantity
 * @param {string} nutrient - relative to quantity and unity 
 * @returns A component with all informations about nutrients 
 */
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

InfoCard.propTypes = {
    icon : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired,
    quantity : PropTypes.number.isRequired, 
    unity : PropTypes.string.isRequired, 
    nutrient : PropTypes.string.isRequired
}