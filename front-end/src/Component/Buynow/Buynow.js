
 import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import './Buynow.css'
import { Link, useLocation } from 'react-router-dom';
import FrontendFooter from '../Footer/FrontendFooter';
const BuyNow = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [cart, setCart] = useState([]);



  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  
  }, []);

 


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
   
    console.log('Sending OTP to:', phoneNumber);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Simulate OTP verification (In a real application, call your API here)
    console.log('Verifying OTP:', otp);
    if (otp === '123456') { // Simulating successful verification for demo purposes
      alert('OTP verified successfully!');
      
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const incrementCount = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item._id === itemId) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const originalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const discountedPrice = cart.reduce((acc, item) => acc + item.Salesprice * item.count, 0);
  const discount = originalPrice - discountedPrice;
  const deliveryCharges = 0; // Assuming free delivery
  const totalAmount = discountedPrice + deliveryCharges;

const location = useLocation()
  return (
<>
    <Header/>
    <HeaderMenu/>


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


    <div className="buy-now-page">

<div  className='cart-buynow-container'>

<div className="buynow-right-section">
            <div className="buynow-checkout-total">     
    <input type="text" placeholder="coupon code" class="buynow-coupon-input" />
    <button class="buynow-apply-coupon-button"><span>Apply</span></button>

        <p>Recommended Services</p>  
   

        {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

            <div className="buynow-cart-checkout">
              {cart.map((item) => (
                <div key={item._id} className="buynow-checkout-item">
                  
                  <div className="buynow-checkout-info">
                    <h5 >{item.title}</h5>
                    <span>{item.description}</span>
                    <p2>₹{item.price}</p2>
                    <p1>₹{item.Salesprice}</p1>
                    
                  </div>

                  <div className='buynow-checkout-img'>
                    <div className='buynow-checkout-img-box'>
                  <img
               src={`http://localhost:8000/uploads/${item.avatarImages}`}
               alt={item.avatarImages}
               className="buynow-checkout-avatarImages "
             />
             </div>
             <button onClick={() => incrementCount(item._id)} className='buynow-checkout-add'><span>Add</span></button>

             
                    </div>
              
                </div>

              ))}
            </div>   
      )}


      <div className='buynow-payment-info'>
                 <div className='buynow-payment-info-subtotal'>
                  <p>subtotal</p>
                 
                  <span> ₹{originalPrice}</span>
                  </div> 




                  <div className='buynow-shipping-charges'>
                  <p>shipping Charges</p> 
                 
                  <span>{deliveryCharges === 0 ? 'Free' : `₹${deliveryCharges}`}</span>
                  </div> 


                  <div className='buynow-coupon-discount'>
                    <p>coupon discount</p>
                    <span>₹</span>

                  </div>

                  <hr className='buynow-payment-hr'/>

                  <div className='buynow-payment-total-amount'>
                    <p>total</p>
                    <span>
                    ₹{totalAmount}
                    </span>
                    </div>
                  
                  </div>

                  
        <button className="buynow-proceed-button"><span>placeholder</span></button>
      

            </div>
           
              
          </div>

</div>


      
      <span className='buynow-acc'>Account</span>
      
      {!isOtpSent ? (
        <form onSubmit={handleSendOtp} className="buy-now-form">
          <p>To place order, log in to your existing account or sign up</p>

          <div className="form-group-buynow">

            <label htmlFor="phone-number">Phone No.</label>
            <div className="phone-input">


          

<div class="ui-wrapper">
    <div class="input-wrapper">
       
        <div class="textfield">
        
        <input pattern="\d+" maxlength="11" id="phonenumber" type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number"
            required
            />
            
        </div>
    </div>
   
</div>

            </div>
          </div>

          <button type="submit" className="continue-button"><span>continue</span> </button>

        </form>

      ) : (
        <form onSubmit={handleVerifyOtp} className="buy-now-form">
          <div className="form-group-buynow">
            <label htmlFor="otp">Enter OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              required
            />
          </div>

          <button type="submit" className="continue-button">Verify OTP</button>
        </form>
      )}
</div>

  


<FrontendFooter/> 

   
    </>
  );
};

export default BuyNow;






