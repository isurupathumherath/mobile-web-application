// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AdvancedSearch from './AdvancedSearch'; // Import the component
import PropertyCard from './PropertyCard'; // Assuming you have this component

const App = () => {
    const [properties, setProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [advancedSearchCriteria, setAdvancedSearchCriteria] = useState({});
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);


    useEffect(() => {
        // Fetch properties.json
        fetch('/properties.json')
            .then(response => response.json())
            .then(data => setProperties(data.properties));
    }, []);

    const handleBasicSearch = (term) => {
        setSearchTerm(term);
        setShowAdvancedSearch(false); // Hide advanced search when using basic search
    };

    const handleAdvancedSearchChange = (criteria, value) => {
        setAdvancedSearchCriteria(prev => ({ ...prev, [criteria]: value }));
    };

    const toggleAdvancedSearch = () => {
      setShowAdvancedSearch(prevShow => !prevShow);
    };

    const filteredProperties = properties.filter(property => {
        const matchesBasicSearch = property.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesAdvancedSearch = Object.keys(advancedSearchCriteria).every(key => {
            if (!property[key]) return true; // If the property doesn't have the key, skip this criterion
            return property[key].toString().toLowerCase().includes(advancedSearchCriteria[key].toLowerCase());
        });

        return showAdvancedSearch ? matchesAdvancedSearch : matchesBasicSearch;
    });

    return (
        <div className="App">
            <Header onBasicSearch={handleBasicSearch} toggleAdvancedSearch={toggleAdvancedSearch} />
            {showAdvancedSearch && <AdvancedSearch onSearchChange={handleAdvancedSearchChange} />}
            <div className="property-list">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default App;
