import React from 'react';
import './PropertyCard.css';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <img src={property.picture} alt={property.type} className="property-image"/>
            <div className="property-info">
                <h2 className="property-title">{property.type} - {property.bedrooms} Bedrooms</h2>
                <p className="property-description">{property.description}</p>
                <p className="property-price">Price: {property.price}</p><br/>
                <Link to={`/property/${property.id}`} className="view-details-button">View Details</Link>
                
            </div>
        </div>
    );
}

export default PropertyCard;
