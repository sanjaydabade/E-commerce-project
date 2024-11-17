

import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Showproduct.css';
import FrontendFooter from '../Footer/FrontendFooter';
import { Link } from 'react-router-dom';
import HeaderMenu from '../Menu/HeaderMenu';

export default function Showproduct() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [result1, setResult] = useState([]);
  const [minPrice, setMinPrice] = useState(1000); // Initial min price
  const [maxPrice, setMaxPrice] = useState(873690); // Initial max price
  const [sortOption, setSortOption] = useState(''); // New state for sorting option
  const [sortedTyres, setSortedTyres] = useState([]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  useEffect(() => {
    const fetchTyres = async () => {
      try {
        const response = await fetch('http://localhost:8000/get-tyres'); // Ensure this is correct
        const data = await response.json();
        console.log('Fetched tyres:', data);

        // Remove duplicates if needed
        const uniqueTyres = [...new Map(data.map(t => [t._id, t])).values()];
        setSortedTyres(uniqueTyres);
      } catch (error) {
        console.error('Error fetching tyres:', error);
      }
    };

    fetchTyres();
  }, []); // Runs only once

  // Filter tyres based on both selected brand and price range
  const filteredTyres = sortedTyres.filter((tyre) => {
    // Check if tyre matches selected brand
    const matchesBrand = selectedBrand.toLowerCase() === 'all' || 
      (Array.isArray(tyre.tyreBrand) && tyre.tyreBrand.some((brand) => brand.trim().toLowerCase() === selectedBrand.trim().toLowerCase()));

    // Check if tyre price is within the selected price range
    const matchesPrice = tyre.price >= minPrice && tyre.price <= maxPrice;

    // Both brand and price filters must match
    return matchesBrand && matchesPrice;
  });

  // Sorting logic
  const sortedTyres1 = [...filteredTyres].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating-asc':
        return (a.rating || 0) - (b.rating || 0); // Assuming rating is part of the tyre object
      case 'rating-desc':
        return (b.rating || 0) - (a.rating || 0);
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt); // Assuming createdAt is part of the tyre object
      default:
        return 0; // No sorting
    }
  });

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = Math.max(event.target.value, minPrice + 1000);
    setMaxPrice(newMaxPrice);
  };

  // Handle sorting option change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <>
      <div className='showPage-container'>
        <Header />
        <HeaderMenu />

        <div className='container-page'>
          <div className='orange-navbar'>
            <div className='orange-name'>
              <Link to="/home"><p>Home</p></Link>
              <div className='vl'></div>
            </div>
            <div className='orange-name-shop'>
              <p>Shop</p>
            </div>
          </div>

          {/* Default sorting section */}
          <div className='default-sorting'>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="" disabled> default sorting</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="rating-desc">Rating: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Tyre Brand Selection */}
          <div className='tyre-brands'>
            <h2>TYRE BRANDS</h2>
          </div>
          <div className='tyre-brand-name'>
            <p className={selectedBrand === 'All' ? 'active' : ''} onClick={() => handleBrandClick('All')}>All</p>
            <p className={selectedBrand === 'Michelin' ? 'active' : ''} onClick={() => handleBrandClick('Michelin')}>Michelin</p>
            <p className={selectedBrand === 'Jk Tyres' ? 'active' : ''} onClick={() => handleBrandClick('Jk Tyres')}>Jk Tyres</p>
            <p className={selectedBrand === 'Bridgestone' ? 'active' : ''} onClick={() => handleBrandClick('Bridgestone')}>Bridgestone</p>
            <p className={selectedBrand === 'Goodyear' ? 'active' : ''} onClick={() => handleBrandClick('Goodyear')}>Goodyear</p>
            <p className={selectedBrand === 'Apollo' ? 'active' : ''} onClick={() => handleBrandClick('Apollo')}>Apollo</p>
            <p className={selectedBrand === 'Ceat' ? 'active' : ''} onClick={() => handleBrandClick('Ceat')}>Ceat</p>
            <p className={selectedBrand === 'Yokohama' ? 'active' : ''} onClick={() => handleBrandClick('Yokohama')}>Yokohama</p>
          </div>

          <hr className='hr-line' />

          <div className="price-filter">
            <h3>Filter by Price</h3>
            <div className="slider-container">
              <svg className="svg-line" width="212" height="17" viewBox="0 0 212 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="8.5" x2="212" y2="8.5" stroke="#FE9832" strokeWidth="3" />
                <rect width="3" height="17" fill="#FE9832" />
                <rect x="209" width="3" height="17" fill="#FE9832" />
              </svg>
              <input
                type="range"
                min="1000"
                max="873690"
                step="1000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                className="range-slider"
                id="maxPrice"
              />
            </div>
            <div className="price-range-label">
              <span>Price: ₹{minPrice.toLocaleString()} - ₹{maxPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Filtered Tyres Display */}
          <div className="show-container">
            {sortedTyres1.map((tyre) => {
              const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 30 days
              const isOnSale = tyre.Salesprice < tyre.price;

              return (
                <div key={tyre._id} className="tyre-card">
                  <div className='img-container'>
                    {isOnSale && (
                      <div className="tyre-status sale">
                        <span>Sale</span>
                      </div>
                    )}
                    {isNew && (
                      <div className="tyre-status new">
                        <span>New</span>
                      </div>
                    )}
                    <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`} alt={tyre.title} className="tyre-image" />
                  </div>
                  <div className="tyre-details">
                    <h2>{tyre.title}</h2>
                    <div className="price-section">
                      {tyre.Salesprice && <span className="Sales-price">₹ {tyre.Salesprice}</span>}
                      <span className="tyre-price">₹ {tyre.price}</span>
                    </div>
                    <p className="tyre-description">
                      {/* {tyre.description} */}
                    </p>
                  </div>
                  <Link to={`/details/${tyre._id}/${tyre.tyreType}`}>
                    <button className='tyre-button'><span>View Details</span></button>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
        <FrontendFooter />
      </div>
    </>
  );
}