import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetail.css'; // Make sure to create this CSS file for styling

const PropertyDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        // Fetch the specific property details from properties.json
        fetch('/properties.json')
            .then(response => response.json())
            .then(data => {
                const detail = data.properties.find(p => p.id.toString() === id);
                setProperty(detail);
            });
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className="property-detail-container">
            <h2>{property.title}</h2>
            <img 
                src={`/images/${property.image}`} 
                alt={property.title} 
                className="property-image" 
            />

            {/* Display other property details */}
            <p>{property.description}</p>
            {/* Add more fields as needed */}
        </div>
    );
};

export default PropertyDetail;
