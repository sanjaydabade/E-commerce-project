
// import React, { useEffect, useState } from 'react'
// import Header from '../Header/Header'
// import './AddtoCart.css'
// import HeaderMenu from '../Menu/HeaderMenu'
// import { Link, useLocation } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import FrontendFooter from '../Footer/FrontendFooter';
// export default function AddtoCart() {

//   const [cart, setCart] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(new Date()); // State to store the selected date

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
  
//   }, []);

//   const updateCart = (newCart) => {
//     setCart(newCart);
//     localStorage.setItem('cart', JSON.stringify(newCart));


//   };


//   const incrementCount = (id) => {
//     const newCart = cart.map(item =>
//       item._id === id ? { ...item, count: item.count + 1 } : item
//     );
//     updateCart(newCart);
//   };

//   const decrementCount = (id) => {
//     const newCart = cart.map(item =>
//       item._id === id ? { ...item, count: item.count - 1 } : item
//     ).filter(item => item.count > 0);
//     updateCart(newCart);
//   };

//   const removeFromCart = (id) => {
//     const newCart = cart.filter(item => item._id !== id);
//     updateCart(newCart);
//   };
  


//   const originalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);
//   const discountedPrice = cart.reduce((acc, item) => acc + item.Salesprice * item.count, 0);
//   const discount = originalPrice - discountedPrice;
//   const deliveryCharges = 0; // Assuming free delivery
//   const totalAmount = discountedPrice + deliveryCharges;

 
//   const updateItemDate = (id, date) => {
//     const updatedCart = cart.map(item =>
//       item._id === id ? { ...item, selectedDate: date } : item
//     );
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const location = useLocation();
  
//   return (
//     <>

//     <Header/>

//     <HeaderMenu/>




//       <div className='orange-navbar-addtocart'>
//             <div 
//                 className={location.pathname === '/addtocart' ? 'active' : ''}
//                 onClick={() => window.location.href = '/addtocart'} /* Or use navigate */
//             >
//                 Shopping Cart
//                 <i class="ri-arrow-right-line"></i>
//             </div>

//             <div 
//                 className={location.pathname === '/buy' ? 'active' : ''}
//                 onClick={() => window.location.href = '/buy'} /* Or use navigate */
//             >
//                 Checkout
//                 <i class="ri-arrow-right-line"></i>
//             </div>

//             <div 
//                 className={location.pathname === '/order-complete' ? 'active' : ''}
//                 onClick={() => window.location.href = '/order-complete'} /* Or use navigate */
//             >
//                 Order Complete
//             </div>
//         </div>



// <div className='product'>
//   Product
// </div>

// <div className='price'>
//   price
// </div>


// <div className='quantity'>
//   quantity
// </div>


// <div className='subtotal'>
//   subtotal
// </div>

// <hr className='cart-hr-line'/>


//    <div className="cart-container">
      
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
      
        
//         cart.map((item) => (

//           <div key={item._id} className="cart-item">
         
//               <div className='cart-image'>
//                <img
//                src={`http://localhost:8000/uploads/${item.avatarImages}`}
//                alt={item.avatarImages}
//                className="cart-avatarImages "
//              />
           
//            <div className='cart-title'>
//             {item.title}
           
           


//             <div className="cart-price">
//                ₹{item.price}
              
              
            
//                <div className="cart-quantity">
        
//         <button onClick={() => decrementCount(item._id)} className="cart-decrement-button">
//          <span ></span>
//         </button>
//         <div className="cart-quantity-display"><span>{item.count}</span></div>
//         <button onClick={() => incrementCount(item._id)} className="cart-increment-button">
//           +
//         </button>
     

//        <div className='cart-subtotal'>
//         ₹{item.price * item.count}

//             </div>
            
//             </div>
//             </div>
//             </div>
           
           
//             <div className='schedule-service'>

//             <p>schedule service</p>
            
//        <div className='cart-date-time'>
        
      
//                 <DatePicker
//                   selected={new Date(item.selectedDate)}
//                   onChange={(date) => updateItemDate(item._id, date)}
//                   showTimeSelect
//                   dateFormat="Pp" // Format: Date and Time
//                   timeFormat="HH:mm"
//                   className="datepicker-input" // Add your custom class for styling
//                 />
                
//        </div>
      
     

// </div>


// <button  onClick={() => removeFromCart(item._id)} className='cart-remove-button'>
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="24" height="24" rx="5" fill="#FE9832"/>
//     <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>
// </button>


//             </div>
            
//             </div>
            
//         ))
        
//       )}


// <div className="right-section">

//     <div className="checkout-total">     
//     <input type="text" placeholder="coupon code" class="coupon-input" />
//     <button class="apply-coupon-button"><span>Apply</span></button>

//         <p>Recommended Services</p>  
   

//         {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (

//             <div className="cart-checkout">
//               {cart.map((item) => (
//                 <div key={item._id} className="checkout-item">
                  
//                   <div className="checkout-info">
//                     <h5 >{item.title}</h5>
//                     <span>{item.description}</span>
//                     <p2>₹{item.price}</p2>
//                     <p1>₹{item.Salesprice}</p1>
                    
//                   </div>

//                   <div className='checkout-img'>
//                     <div className='checkout-img-box'>
//                   <img
//                src={`http://localhost:8000/uploads/${item.avatarImages}`}
//                alt={item.avatarImages}
//                className="checkout-avatarImages "
//              />
//              </div>
//              <button onClick={() => incrementCount(item._id)} className='checkout-add'><span>Add</span></button>

             
//                     </div>
              
//                 </div>

//               ))}
//             </div>   
//       )}


//       <div className='payment-info'>
//                  <div className='payment-info-subtotal'>
//                   <p>subtotal</p>
                 
//                   <span> ₹{originalPrice}</span>
//                   </div> 




//                   <div className='shipping-charges'>
//                   <p>shipping Charges</p> 
                 
//                   <span>{deliveryCharges === 0 ? 'Free' : `₹${deliveryCharges}`}</span>
//                   </div> 


//                   <div className='coupon-discount'>
//                     <p>coupon discount</p>
//                     <span>₹</span>

//                   </div>

//                   <hr className='payment-hr'/>

//                   <div className='payment-total-amount'>
//                     <p>total</p>
//                     <span>
//                     ₹{totalAmount}
//                     </span>
//                     </div>
                  
//                   </div>

//                   <Link to="/buy"  >
//         <button className="proceed-button"><span>Proceed to checkout</span></button>
//       </Link>

//             </div>
           
              
//           </div>
         
//     </div>
//      <FrontendFooter/>
//     </>
//   );
// };

    


import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './AddtoCart.css'
import HeaderMenu from '../Menu/HeaderMenu'
import { Link, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import FrontendFooter from '../Footer/FrontendFooter';


export default function AddtoCart() {

  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to store the selected date

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));


  };


  const incrementCount = (id) => {
    const newCart = cart.map(item =>
      item._id === id ? { ...item, count: item.count + 1 } : item
    );
    updateCart(newCart);
  };

  const decrementCount = (id) => {
    const newCart = cart.map(item =>
      item._id === id ? { ...item, count: item.count - 1 } : item
    ).filter(item => item.count > 0);
    updateCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item._id !== id);
    updateCart(newCart);
  };
  


  const originalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const discountedPrice = cart.reduce((acc, item) => acc + item.Salesprice * item.count, 0);
  const discount = originalPrice - discountedPrice;
  const deliveryCharges = 0; // Assuming free delivery
  const totalAmount = discountedPrice + deliveryCharges;

 
  const updateItemDate = (id, date) => {
    const updatedCart = cart.map(item =>
      item._id === id ? { ...item, selectedDate: date } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const location = useLocation();
  
  return (
    <>

    <Header/>

    <HeaderMenu/>



    <div class="page-container">
      <div className='orange-navbar-addtocart'>
            <div 
                className={location.pathname === '/addtocart' ? 'active' : ''}
                onClick={() => window.location.href = '/addtocart'} /* Or use navigate */
            >
                Shopping Cart
                <i class="ri-arrow-right-line"></i>
            </div>

            <div 
                className={location.pathname === '/buy' ? 'active' : ''}
                onClick={() => window.location.href = '/buy'} /* Or use navigate */
            >
                Checkout
                <i class="ri-arrow-right-line"></i>
            </div>

            <div 
                className={location.pathname === '/order-complete' ? 'active' : ''}
                onClick={() => window.location.href = '/order-complete'} /* Or use navigate */
            >
                Order Complete
            </div>
        </div>



<div className='product'>
  Product
</div>

<div className='price'>
  price
</div>


<div className='quantity'>
  quantity
</div>


<div className='subtotal'>
  subtotal
</div>

<hr className='cart-hr-line'/>

{/* <main class="AddToCart-main-Container"> */}

   <div className="cart-container">
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
      
        
        cart.map((item) => (

          <div key={item._id} className="cart-item">
         
              <div className='cart-image'>
               <img
               src={`http://localhost:8000/uploads/${item.avatarImages}`}
               alt={item.avatarImages}
               className="cart-avatarImages "
             />
           
           <div className='cart-title'>
            {item.title}
           
            <div className="cart-price">
               ₹{item.price}
            
               <div className="cart-quantity">
        
        <button onClick={() => decrementCount(item._id)} className="cart-decrement-button">
         <span ></span>
        </button>
        <div className="cart-quantity-display"><span>{item.count}</span></div>
        <button onClick={() => incrementCount(item._id)} className="cart-increment-button">
          +
        </button>
     

       <div className='cart-subtotal'>
        ₹{item.price * item.count}

            </div>
            
            </div>
            </div>
            </div>
           
           
            <div className='schedule-service'>

            <p>schedule service</p>
            
       <div className='cart-date-time'>
        
      
                <DatePicker
                  selected={new Date(item.selectedDate)}
                  onChange={(date) => updateItemDate(item._id, date)}
                  showTimeSelect
                  dateFormat="Pp" // Format: Date and Time
                  timeFormat="HH:mm"
                  className="datepicker-input" // Add your custom class for styling
                />
                
       </div>
      
     

</div>


<button  onClick={() => removeFromCart(item._id)} className='cart-remove-button'>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#FE9832"/>
    <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

          
            </div>
            
            </div>
            
        ))
        
      )}


<div className="right-section">

    <div className="checkout-total">     
    <input type="text" placeholder="coupon code" class="coupon-input" />
    <button class="apply-coupon-button"><span>Apply</span></button>

        <p>Recommended Services</p>  
   

        {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

            <div className="cart-checkout">
              {cart.map((item) => (
                <div key={item._id} className="checkout-item">
                  
                  <div className="checkout-info">
                    <h5 >{item.title}</h5>
                    <span>{item.description}</span>
                    <p2>₹{item.price}</p2>
                    <p1>₹{item.Salesprice}</p1>
                    
                  </div>

                  <div className='checkout-img'>
                    <div className='checkout-img-box'>
                  <img
               src={`http://localhost:8000/uploads/${item.avatarImages}`}
               alt={item.avatarImages}
               className="checkout-avatarImages "
             />
             </div>
             <button onClick={() => incrementCount(item._id)} className='checkout-add'><span>Add</span></button>

             
                    </div>
              
                </div>

              ))}
            </div>   
      )}


      <div className='payment-info'>
                 <div className='payment-info-subtotal'>
                  <p>subtotal</p>
                 
                  <span> ₹{originalPrice}</span>
                  </div> 




                  <div className='shipping-charges'>
                  <p>shipping Charges</p> 
                 
                  <span>{deliveryCharges === 0 ? 'Free' : `₹${deliveryCharges}`}</span>
                  </div> 


                  <div className='coupon-discount'>
                    <p>coupon discount</p>
                    <span>₹</span>

                  </div>

                  <hr className='payment-hr'/>

                  <div className='payment-total-amount'>
                    <p>total</p>
                    <span>
                    ₹{totalAmount}
                    </span>
                    </div>
                  
                  </div>

                  <Link to="/buy"  >
        <button className="proceed-button"><span>Proceed to checkout</span></button>
      </Link>

            </div>
           
              
          </div>
         
    </div>
    {/* </main> */}
     <FrontendFooter/>

     </div>
    </>
  );
};

    










