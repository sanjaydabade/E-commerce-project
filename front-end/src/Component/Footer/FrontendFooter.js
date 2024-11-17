import React from 'react'
import './FrontendFooter.css'



export default function FrontendFooter() {






  return (
    <>

   {/* <div className='homepage-footer'> */}
    <div className='front-footer'>
        <div className='left-footer'>
            <h3>we're Happy to Help!</h3>
            <p>Need help choosing thr right products for your vehicle? Our team <br/>
               of highly trained experts has the knowledge and passion to help. just pick up the phone and give us a ring.<br/><br/>
                
                
            Or let's chat via email.We love solving problems and lending a hand (or an ear) 
                 </p>
                 <div className='footer-callimg'>
                  <span>(833) 847-3463<br/>
                  Mon-Fri: 8am - 8pm EST
                  Sat: 9am - 1pm EST</span>
                 </div>

                 <div className='footer-mailimg'>
                  <span>info@tyreking.com </span>
                 </div>

        </div>

        <div className='information'>
            <h4>Information</h4>
            <p>About us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Affiliate</p>
            <p>Contact us</p>
</div>

<div className='account'>
         <h4>My Account</h4>
         <p>My Account</p>
         <p>Last password</p>
         <p>pack My Order</p>
         <p>Wishlist</p>
</div>

      <div className='follows'>
         <h4>Follow Us on</h4>

<div className='icons'>
<span>
<i class="ri-instagram-fill"></i>
            </span>
            <span>
            <i class="ri-facebook-fill"></i>
            </span>
            <span>
            <i class="ri-youtube-fill"></i>
            </span>

            <span>
            <i class="ri-linkedin-box-fill"></i>
            </span>
            </div>
        </div>
      
        <hr  className='footer-hr'/>
        <div className='footer-end'>
            All Right Reserved By Tyre King Copyright @ 2024
        </div>
    </div>
    {/* </div> */}
    </>
  )
}



