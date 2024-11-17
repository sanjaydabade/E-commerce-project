

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import './ProductDetails.css';
// import Header from '../Header/Header';
// import FrontendFooter from '../Footer/FrontendFooter';
// import axios from 'axios';
// import HeaderMenu from '../Menu/HeaderMenu';

// export default function AddToCart({ addToCart,onAddToCart }) {
//   const { id, tyreType } = useParams();
//   const [tyreBrand, setTyreBrand] = useState(null);
  
//   const [tyre, setTyre] = useState(null); // Change to handle a single tyre
//   const [successMessage, setSuccessMessage] = useState('');
//   const [cities, setCities] = useState([]);
//   const [quantity, setQuantity] = useState(1); 
//   const [brands, setBrands] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [logo, setLogo] = useState(null);
//   const [brandImage, setBrandImage] = useState(null); // State for the image URL
 
//   const [addresses, setAddresses] = useState([
//     { state: '', city: '', pinCode: '', details: '' }
//   ]);

//   const addAddress = () => {
//     setAddresses([...addresses, { state: '', city: '', pinCode: '', details: '' }]);
//   };


//   const [deliveryOption, setDeliveryOption] = useState(""); // Tracks selected delivery option
 
//   // Handle state change and update cities
//   const handleStateChange = (index, stateValue) => {
//     const updatedAddresses = [...addresses];
//     updatedAddresses[index].state = stateValue;
//     setAddresses(updatedAddresses);
//     setCities(stateCityData[stateValue] || []);
//   };

//   // Handle city change
//   const handleCityChange = (index, cityValue) => {
//     const updatedAddresses = [...addresses];
//     updatedAddresses[index].city = cityValue;
//     setAddresses(updatedAddresses);
//   };

//   // Handle delivery option selection
//   const handleDeliveryChange = (e) => {
//     setDeliveryOption(e.target.value);
//   };

//   const stateCityData = {
//     AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Anantapur'],
//     ArunachalPradesh: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Bomdila', 'Tezu', 'Changlang'],
//     Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'],
//     Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai'],
//     Chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
//     Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Canacona'],
//     Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh'],
//     Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Sonipat', 'Rohtak'],
//     HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Bilaspur', 'Chamba'],
//     Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
//     Karnataka: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davangere', 'Gulbarga', 'Shimoga'],
//     Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Palakkad', 'Alappuzha'],
//     MadhyaPradesh: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna'],
//     Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Kolhapur', 'Solapur'],
//     Manipur: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Kakching'],
//     Meghalaya: ['Shillong', 'Tura', 'Nongpoh', 'Cherrapunji', 'Nongstoin', 'Baghmara', 'Jowai', 'Mawkyrwat'],
//     Mizoram: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Saiha', 'Kolasib', 'Lawngtlai', 'Mamit'],
//     Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto', 'Phek'],
//     Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur', 'Sambalpur', 'Balasore', 'Baripada'],
//     Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'],
//     Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur'],
//     Sikkim: ['Gangtok', 'Namchi', 'Geyzing', 'Pelling', 'Ravangla', 'Mangan', 'Yuksom', 'Jorethang'],
//     TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Vellore', 'Erode'],
//     Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Ramagundam', 'Suryapet'],
//     Tripura: ['Agartala', 'Udaipur', 'Kailashahar', 'Dharmanagar', 'Ambassa', 'Belonia', 'Khowai', 'Teliamura'],
//     UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad', 'Bareilly'],
//     Uttarakhand: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani', 'Roorkee', 'Rudrapur', 'Kashipur'],
//     WestBengal: ['Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Asansol', 'Durgapur', 'Kharagpur', 'Malda']
//   };
  

//   useEffect(() => {
//     fetch(`http://localhost:8000/get-details/${id}/${tyreType}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched tyre data:", data); // Log the fetched data
//         setTyre(data); // Set the tyre data (single object)
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [id, tyreType]);



//   const handleAddToCart = (tyre) => {
//     addToCart(tyre);
//     setSuccessMessage('Item successfully added to cart!');
//     setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
//   };

//   const handleBuyNow = (tyre) => {
//     handleAddToCart(tyre);
//     navigate('/buynow', { state: { item: tyre } });
//   };


//    // Handle quantity increment
//    const handleIncrement = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   // Handle quantity decrement (ensure it doesn't go below 1)
//   const handleDecrement = () => {
//     setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
//   };

//   return (
//   <>
//     <Header/>
//     <HeaderMenu/>


// {tyre ? (
        
//         <>
       
//          <div className='orange-navbar'>
//         <div className='orange-name'>

//           <Link to="/home" ><p>Home</p></Link>
          
//           <div className='vl'></div>
//         </div>
//         <div className='orange-name-shop'>
//           <p>{tyre.title}</p>
//         </div>
//       </div>
       


//     </>
          
//       )
       
//        : (
//         <p>No tyres found</p> 
//       )
//       }



//     <div className="add-to-cart-container">
//       {successMessage && (
//         <div className="notification">
//           {successMessage}
//         </div>
//       )}

//       {/* Render tyre details */}
//       {tyre ? (
       
//           <div className="product-content">
//             <div className="image-container">
//               {/* Display tyre images */}
//               <img
//                 src={`http://localhost:8000/uploads/${tyre.avatarImages}`}
//                 alt={tyre.avatarImages}
//                 className="avatarImages"
//               />
//             </div>


//             <div className='Thumbnails-img'>
//             <div className='thumb1-img'>
//             <img
//                 src={`http://localhost:8000/uploads/${tyre.thumb1Images}`}
//                 alt={tyre.thumb1Images}
//                 className="thumb1Images"
//               />
//             </div>
//             <div className='thumb2-img'>
//             <img
//                 src={`http://localhost:8000/uploads/${tyre.thumb2Images}`}
//                 alt={tyre.thumb2Images}
//                 className="thumb2Images"
//               />
//             </div>
//             <div className='thumb3-img'>
//             <img
//                 src={`http://localhost:8000/uploads/${tyre.thumb3Images}`}
//                 alt={tyre.thumb3Images}
//                 className="thumb3Images"
//               />
//             </div>
//             <div className='thumb4-img'>
//             <img
//                 src={`http://localhost:8000/uploads/${tyre.thumb4Images}`}
//                 alt={tyre.thumb4Images}
//                 className="thumb4Images"
//               />
//             </div>
//             </div>


//             <div className="info-container">
          
//             <div className='brand-logo'>
//             {/* {brands.map((brand) => (
//               <div key={brand._id} className="brand-item">
//                 {brand.image.map((item, idx) => (
//                   <img
//                     key={idx}
//                     src={`http://localhost:8000/uploads/${item}`}
//                     alt={item}
//                     className="brand-logo-image img-fluid"  
//                   />
//                 ))}
//               </div>
//             ))} */}

                 

              
//           </div>


             
//             {/* braand title */}
//               <div className='brand-title'>
//               {tyre.title}
//               </div>

//               <div className="brand-price">
//                 {tyre.Salesprice && <span className="brand-Sales-price">₹ {tyre.Salesprice}</span>}
//                 <span className="brand-tyre-price">₹ {tyre.price}</span>
//               </div>

             
//             </div>


            
//            {/*address section */}
           
//            <div className="home-delivery">
//         <input
//           type="radio"
//           id="homeDelivery"
//           name="delivery"
//           value="homeDelivery"
//           onChange={handleDeliveryChange}
//           checked={deliveryOption === "homeDelivery"}
//         />
//         <label htmlFor="homeDelivery">Home Delivery</label>

//       </div>
      
//       <div className="get-fitted">
//         <input
//           type="radio"
//           id="getFitted"
//           name="delivery"
//           value="getFitted"
//           onChange={handleDeliveryChange}
//           checked={deliveryOption === "getFitted"}
//         />
//         <label htmlFor="getFitted">Get Fitted</label>
//       </div>

      
//       {deliveryOption === "getFitted" && (
//         addresses.map((address, index) => (
//           <div key={index} className="state">
//             <label>State</label>
//             <select
//               value={address.state}
//               onChange={(e) => handleStateChange(index, e.target.value)}
//             >
//               <option value="">Select State</option>
//               {Object.keys(stateCityData).map((state) => (
//                 <option key={state} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>

//             <div className="city">
//               <label>City</label>
//               <select
//                 value={address.city}
//                 onChange={(e) => handleCityChange(index, e.target.value)}
//                 disabled={!address.state}
//               >
//                 <option value="">Select City</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//             </div>

           

// <div className="address-box">
//   {tyre.addresses && tyre.addresses.length > 0 ? (
//     tyre.addresses
//       .filter(
//         (addr) => addr.state === address.state && addr.city === address.city
//       )
//       .map((filteredAddress, addrIndex) => (
//         <div key={addrIndex} className="address1">
//           <p>{filteredAddress.details}</p>
//           <hr /> 
//         </div>
//       ))
//   ) : (
//     <span>No Address Found</span>
//   )}
// </div>
//           </div>
//         ))
//       )}
      
//           </div>
        
//       ) : (
//         <p>No tyres found</p> 
//       )
//       }
//     </div>

//           {/* Quantity Section with Increment/Decrement */}
//           <div className="quantity-section">
        
//         <button onClick={handleDecrement} className="decrement-button">
//          <span ></span>
//         </button>
//         <div className="quantity-display"><span>{quantity}</span></div>
//         <button onClick={handleIncrement} className="increment-button">
//           +
//         </button>


//       </div>


//  {/* add to cart  */}
// <Link to="/addtocart" className='add-to-cart-button' >

//         <button onClick={() => handleAddToCart(tyre)}  className="cart-text">Add to cart</button>
//       </Link>




// {/* compatible section */}
//    <div className='compatible-vehicle'>
//     <p>compatible vehicles</p>

//    </div>
// {tyre ? (
//   <>


//     <div className='compatible-type'>
//       <div className='type1'>
//         <p>{tyre.tyreType}</p>
//       </div>
      
//       {tyre.tyreType === 'car' ? (
        
//         <>
//           <div className='type2'>
//             <p>{tyre.manufactureMonth}</p>
//           </div>
//           <div className='type3'>
//             <p>{tyre.manufactureYear}</p>
//           </div>
//         </>
//       ) : tyre.tyreType === 'bike' ? (
     
//         <>
//           <div className='type2'>
//             <p>{tyre.manufactureMonth}</p>
//           </div>
//           <div className='type3'>
//             <p>{tyre.manufactureYear}</p>
//           </div>
//         </>
//       ) : null}
      
      
//       <div className='type4'>
//         <p>{tyre.seasons}</p>
//       </div>
//       <div className='type5'>
//         <p>{tyre.material}</p>
//       </div>
//       <div className='type6'>
//         <p>
//           {tyre.speedRating}
//         </p>
//       </div>
//       <div className='type7'>
//         <p>{tyre.loadCapacity}</p>
//       </div>
//     </div>
//   </>
// ) : (
//   <p>No tyres found</p>
// )}


  
// {/* compatible section */}

//     <div className="details-box">
//       {tyre ? (
        
//         <>
//         <div className='width-box'>
//         <strong>Width : {tyre.width} </strong>
//         <hr className='width-hr'/>
//       </div>
   
      

//       <div className='size-box'>
//       <strong>Size : {tyre.customs}</strong>
//       <hr className='size-hr'/>
//     </div>
   
//     <div className='warranty-box'>
//       <strong> Manufacturer’s warranty : {tyre.warranty}</strong> 

//       <hr className='size-hr'/>

//     </div>

//     <div className='vehicle-box'>
//       <strong>compatible vehicle : {tyre.s }</strong> 
//     </div>
//     </>
          
//       )
       
//        : (
//         <p>No tyres found</p> 
//       )
//       }
//     </div>


//   {/* description section */}


// <div className='reason-to-choose'>
//   Reason to choose 
//   <hr/>
// </div>

//       {tyre ? (
        
//         <>
       
//        <div 
//   className='description-info' 
//   dangerouslySetInnerHTML={{ __html: tyre.description1 }}
// ></div>
           
//     </>
          
//       )
       
//        : (
//         <p>No tyres found</p> 
//       )
//       }
  

//     </>
//   );

// }











import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ProductDetails.css';
import Header from '../Header/Header';
import FrontendFooter from '../Footer/FrontendFooter';
import HeaderMenu from '../Menu/HeaderMenu';

export default function AddToCart({ addToCart }) {
  const { id, tyreType } = useParams();
  const [tyre, setTyre] = useState(null); // Change to handle a single tyre
  const [successMessage, setSuccessMessage] = useState('');
  const [cities, setCities] = useState([]);
  const [quantity, setQuantity] = useState(1); 
  const [tyreBrandImages, setTyreBrandImages] = useState({});
  const [brandImage, setBrandImage] = useState('');
  const [selectedAddresses, setSelectedAddresses] = useState([]); // State to track selected addresses
  const [tyreDetails, setTyreDetails] = useState(null);
  const [error, setError] = useState('');
  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([
    { state: '', city: '', pinCode: '', details: '' }
  ]);

  const [deliveryOption, setDeliveryOption] = useState(""); // Tracks selected delivery option
 
  // Handle state change and update cities
  const handleStateChange = (index, stateValue) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].state = stateValue;
    setAddresses(updatedAddresses);
    setCities(stateCityData[stateValue] || []);
  };

  // Handle city change
  const handleCityChange = (index, cityValue) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].city = cityValue;
    setAddresses(updatedAddresses);
  };

  // Handle delivery option selection
  const handleDeliveryChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const stateCityData = {
    AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Anantapur'],
    ArunachalPradesh: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Bomdila', 'Tezu', 'Changlang'],
    Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'],
    Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai'],
    Chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
    Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Canacona'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh'],
    Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Sonipat', 'Rohtak'],
    HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Bilaspur', 'Chamba'],
    Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
    Karnataka: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davangere', 'Gulbarga', 'Shimoga'],
    Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Palakkad', 'Alappuzha'],
    MadhyaPradesh: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Kolhapur', 'Solapur'],
    Manipur: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Kakching'],
    Meghalaya: ['Shillong', 'Tura', 'Nongpoh', 'Cherrapunji', 'Nongstoin', 'Baghmara', 'Jowai', 'Mawkyrwat'],
    Mizoram: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Saiha', 'Kolasib', 'Lawngtlai', 'Mamit'],
    Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto', 'Phek'],
    Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur', 'Sambalpur', 'Balasore', 'Baripada'],
    Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'],
    Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur'],
    Sikkim: ['Gangtok', 'Namchi', 'Geyzing', 'Pelling', 'Ravangla', 'Mangan', 'Yuksom', 'Jorethang'],
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Vellore', 'Erode'],
    Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Ramagundam', 'Suryapet'],
    Tripura: ['Agartala', 'Udaipur', 'Kailashahar', 'Dharmanagar', 'Ambassa', 'Belonia', 'Khowai', 'Teliamura'],
    UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad', 'Bareilly'],
    Uttarakhand: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani', 'Roorkee', 'Rudrapur', 'Kashipur'],
    WestBengal: ['Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Asansol', 'Durgapur', 'Kharagpur', 'Malda']
  };
  


  useEffect(() => {
    setLoading(true);  // Start loading
    fetch(`http://localhost:8000/get-details/${id}/${tyreType}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched tyre data:", data);  // Log the fetched data
        setTyre(data);  // Set tyre data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load tyre details. Please try again later.');
      })
      .finally(() => {
        setLoading(false);  // Stop loading
      });
  }, [id, tyreType]);  // Dependency array to re-fetch if id or tyreType changes


  const handleAddressSelect = (address) => {
    // If the address is already selected, remove it (deselect)
    if (selectedAddresses.includes(address)) {
      setSelectedAddresses(selectedAddresses.filter((selected) => selected !== address));
    } else {
      // Otherwise, add the address to the selected list
      setSelectedAddresses([...selectedAddresses, address]);
    }
  };


  const handleAddToCart = (tyre) => {
    addToCart(tyre);
    setSuccessMessage('Item successfully added to cart!');
    setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
  };


   // Handle quantity increment
   const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle quantity decrement (ensure it doesn't go below 1)
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };



  return ( 
  <>
    <Header/>
    <HeaderMenu/>
    <div className='ProductDetails'>
{tyre ? (
        
        <>
       
        <div className='orange-navbar'>
        <div className='orange-name'>

          <Link to="/home" ><p>Home</p></Link>
          
          <div className='vl'></div>
        </div>
        <div className='orange-name-shop'>
          <p>{tyre.title}</p>
        </div>
      </div>
       


    </>
          
      )
       
       : (
        <p>No tyres found</p> 
      )
      }



    <div className="add-to-cart-container">
      {successMessage && (
        <div className="notification">
          {successMessage}
        </div>
      )}

      {/* Render tyre details */}
      {tyre ? (
       
          <div className="product-content">
            <div className="image-container">
              {/* Display tyre images */}
              <img
                src={`http://localhost:8000/uploads/${tyre.avatarImages}`}
                alt={tyre.avatarImages}
                className="avatarImages"
              />
            </div>


            <div className='Thumbnails-img'>
            <div className='thumb1-img'>
            <img
                src={`http://localhost:8000/uploads/${tyre.thumb1Images}`}
                alt={tyre.thumb1Images}
                className="thumb1Images"
              />
            </div>
            <div className='thumb2-img'>
            <img
                src={`http://localhost:8000/uploads/${tyre.thumb2Images}`}
                alt={tyre.thumb2Images}
                className="thumb2Images"
              />
            </div>
            <div className='thumb3-img'>
            <img
                src={`http://localhost:8000/uploads/${tyre.thumb3Images}`}
                alt={tyre.thumb3Images}
                className="thumb3Images"
              />
            </div>
            <div className='thumb4-img'>
            <img
                src={`http://localhost:8000/uploads/${tyre.thumb4Images}`}
                alt={tyre.thumb4Images}
                className="thumb4Images"
              />
            </div>
            </div>


            <div className="info-container">
          
            <div className='brand-logo'>
      
           {tyre.tyreBrand && tyre.tyreBrand.map((brand, index) => (
  <div key={index}>
    {brand.image && brand.image.length > 0 && (
      brand.image.map((imageItem, idx) => (
        <img 
          key={idx} 
          src={`http://localhost:8000/uploads/${imageItem}`} 
          alt={`image-${idx}`} 
          className="brand-logo" 
        />
      ))
    )}
  </div>
))}

            
      
          </div>


             
            {/* braand title */}
              <div className='brand-title'>
              {tyre.title}
              </div>

              <div className="brand-price">
                {tyre.Salesprice && <span className="brand-Sales-price">₹ {tyre.Salesprice}</span>}
                <span className="brand-tyre-price">₹ {tyre.price}</span>
              </div>

             
            </div>


            
           {/*address section */}
           
           <div className="home-delivery">
        <input
          type="radio"
          id="homeDelivery"
          name="delivery"
          value="homeDelivery"
          onChange={handleDeliveryChange}
          checked={deliveryOption === "homeDelivery"}
        />
        <label htmlFor="homeDelivery">Home Delivery</label>

      </div>
      
      <div className="get-fitted">
        <input
          type="radio"
          id="getFitted"
          name="delivery"
          value="getFitted"
          onChange={handleDeliveryChange}
          checked={deliveryOption === "getFitted"}
        />
        <label htmlFor="getFitted">Get Fitted</label>
      </div>

      
      {deliveryOption === "getFitted" && (
        addresses.map((address, index) => (
          <div key={index} className="state">
            <label>State</label>
            <select
              value={address.state}
              onChange={(e) => handleStateChange(index, e.target.value)}
            >
              <option value="">Select State</option>
              {Object.keys(stateCityData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <div className="city">
              <label>City</label>
              <select
                value={address.city}
                onChange={(e) => handleCityChange(index, e.target.value)}
                disabled={!address.state}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

           

<div className="address-box">

{tyre.addresses && tyre.addresses.length > 0 ? (
        <div className="address-box">
          {tyre.addresses
            .filter(
              (addr) => addr.state === addresses[0]?.state && addr.city === addresses[0]?.city
            )
            .map((filteredAddress, addrIndex) => (
              <div
                key={addrIndex}
                className={`address1 ${selectedAddresses.includes(filteredAddress) ? 'selected' : ''}`}
                onClick={() => handleAddressSelect(filteredAddress)} // Toggle selection
              >
                <p>{filteredAddress.details}</p>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        <span>No Address Found</span>
      )}


</div>
          </div>
        ))
      )}
      
          </div>
        
      ) : (
        <p>No tyres found</p> 
      )
      }


    </div>

          {/* Quantity Section with Increment/Decrement */}
          <div className="quantity-section">
        
        <button onClick={handleDecrement} className="decrement-button">
         <span ></span>
        </button>
        <div className="quantity-display"><span>{quantity}</span></div>
        <button onClick={handleIncrement} className="increment-button">
          +
        </button>


      </div>


 {/* add to cart  */}
<Link to="/addtocart" className='add-to-cart-button' >

        <button onClick={() => handleAddToCart(tyre)}  className="cart-text">Add to cart</button>
      </Link>




{/* compatible section */}
   <div className='compatible-vehicle'>
    <p>compatible vehicles</p>

   </div>
{tyre ? (
  <>


    <div className='compatible-type'>
      <div className='type1'>
        <p>{tyre.tyreType}</p>
      </div>
      

     
      {tyre.tyreType === 'car' ? (
        
        <>
          <div className='type2'>
            <p>{tyre.carbrand}</p>
          </div>
          <div className='type3'>
            <p>{tyre.carModel}</p>
          </div>
        </>
      ) : tyre.tyreType === 'bike' ? (
     
        <>
          <div className='type2'>
            <p>{tyre.bikebrand}</p>
          </div>
          <div className='type3'>
            <p>{tyre.bikeModel}</p>
          </div>
        </>
      ) : null}
      
      
      <div className='type4'>
        <p>{tyre.seasons}</p>
      </div>
      <div className='type5'>
        <p>{tyre.material}</p>
      </div>
      <div className='type6'>
        <p>
          {tyre.speedRating}
        </p>
      </div>
      <div className='type7'>
        <p>{tyre.loadCapacity}</p>
      </div>
    </div>
  </>
) : (
  <p>No tyres found</p>
)}


  
{/* compatible section */}

    <div className="details-box">
      {tyre ? (
        
        <>
        <div className='width-box'>
        <strong>Width : {tyre.width} </strong>
        <hr className='width-hr'/>
      </div>
   
      

      <div className='size-box'>
      <strong>Size : {tyre.customs}</strong>
      <hr className='size-hr'/>
    </div>
   
    <div className='warranty-box'>
      <strong> Manufacturer’s warranty : {tyre.warranty}</strong> 

      <hr className='size-hr'/>

    </div>

    <div className='vehicle-box'>
      <strong>compatible vehicle : {tyre.s }</strong> 
    </div>
    </>
          
      )
       
       : (
        <p>No tyres found</p> 
      )
      }
    </div>


  {/* description section */}
<div className='reason-to-choose'>
 Reason to choose
  <hr/>
  </div>


      {tyre ? (
        
        <>
       
       <div 
  className='description-info' 
  dangerouslySetInnerHTML={{ __html: tyre.description1 }}
></div>
           
    </>
          
      )
       
       : (
        <p>No tyres found</p> 
      )
      }
  </div>


<FrontendFooter/>


    </>
  );

}




