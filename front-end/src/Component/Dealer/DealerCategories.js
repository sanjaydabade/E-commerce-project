

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DealerCategories() {
  const [tyres, setTyres] = useState([]);
  const [selectedCarTyreBrands, setSelectedCarTyreBrands] = useState([]);
  const [selectedBikeTyreBrands, setSelectedBikeTyreBrands] = useState([]);
  const [tyreTypes, setTyreTypes] = useState({ car: false, bike: false });
  const navigate = useNavigate();

  // Fetch tyre brands from the API
  useEffect(() => {
    const fetchTyres = async () => {
      const response = await fetch('http://localhost:8000/get-tyre-brands');
      const data = await response.json();
      setTyres(data);
    };
    fetchTyres();
  }, []);

  const handleCheckboxChange = (brandId, type) => {
    if (type === 'car') {
      setSelectedCarTyreBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    } else if (type === 'bike') {
      setSelectedBikeTyreBrands((prev) =>
        prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
      );
    }
  };

  const handleTyreTypeChange = (type) => {
    setTyreTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSubmit = () => {
    navigate('/dealer-list', {
      state: {
        selectedBrands: {
          car: selectedCarTyreBrands,
          bike: selectedBikeTyreBrands,
        },
        tyreTypes: tyreTypes,
      },
    });
  };

  return (
    <div className="form-group-category">
      <div className="form-check">
        <input 
          type="checkbox" 
          id="dealsInCar" 
          checked={tyreTypes.car} 
          onChange={() => handleTyreTypeChange('car')} 
        />
        <label htmlFor="dealsInCar">Deals in Car</label>
      </div>
      <div className="form-check">
        <input 
          type="checkbox" 
          id="dealsInBike" 
          checked={tyreTypes.bike} 
          onChange={() => handleTyreTypeChange('bike')} 
        />
        <label htmlFor="dealsInBike">Deals in Bike</label>
      </div>


      {/* Car Tyre Brands Section */}
      {tyreTypes.car && (
        <div className="form-group-category mt-3">
          <h5>Car Tyre Brands</h5>
          {tyres.map((brand) => (
            <div key={brand._id} className="form-check">
              <input
                type="checkbox"
                id={`car-${brand._id}`}
                value={brand._id}
                checked={selectedCarTyreBrands.includes(brand._id)}
                onChange={() => handleCheckboxChange(brand._id, 'car')}
              />
              <label htmlFor={`car-${brand._id}`}>{brand.name}</label>
            </div>
          ))}
        </div>
      )}

      {/* Bike Tyre Brands Section */}
      {tyreTypes.bike && (
        <div className="form-group-category mt-3">
          <h5>Bike Tyre Brands</h5>
          {tyres.map((brand) => (
            <div key={brand._id} className="form-check">
              <input
                type="checkbox"
                id={`bike-${brand._id}`}
                value={brand._id}
                checked={selectedBikeTyreBrands.includes(brand._id)}
                onChange={() => handleCheckboxChange(brand._id, 'bike')}
              />
              <label htmlFor={`bike-${brand._id}`}>{brand.name}</label>
            </div>
          ))}
        </div>
      )}

      <button onClick={handleSubmit}>View Selected Brands</button>
    </div>
  );
}      












