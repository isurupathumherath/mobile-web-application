import React from 'react';
import './PropertyModal.css'; // Create and import CSS for styling

const PropertyModal = ({ property, onClose }) => {
    if (!property) return null;

    return (
        <div className="property-modal-backdrop">
            <div className="property-modal">
                <button className="modal-close-button" onClick={onClose}>×</button>
                <img src={`/images/${property.image}`} alt={property.title} className="property-main-image" />
                {/* Add thumbnail images if available */}
                <div className="property-details">
                    <h3>{property.title}</h3>
                    <p>Type: {property.type}</p>
                    <p>Price: {property.price}</p>
                    <p>Location: {property.location}</p>
                    <p>{property.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PropertyModal;
