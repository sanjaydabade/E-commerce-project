// import React from 'react'
// import Header from '../Header/Header'
// import HeaderMenu from '../Menu/HeaderMenu'
// import CustomerSidebar from './CustomerSidebar'
// import './Customer.css'
// export default function Myaccount() {
//   return (
//     <>
//     <Header/>
//     <HeaderMenu/>
//     <CustomerSidebar/>
//     <div className='my-account'>
//     <pp>My Account</pp>
//     </div>

   
//     </>
//   )
// }




import React from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';
import './Customer.css';
import {Link} from 'react-router-dom'
export default function Myaccount() {
  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="my-account-wrapper">
        <CustomerSidebar />
        
        <div className="my-account-container">
          <h2 className="account-title"> Account Information</h2>
          <hr  className="divider"/>
        
          {/* Contact Information Section */}
          <div className="contact-info">
      <h3>Contact Information</h3>
      <p>Name:</p>
      <p>Email: </p>
      <button className="edit-button" onClick={() => alert("Edit functionality disabled!")}>
        Edit
      </button>
    </div>


          {/* Address Book Section */}
          <div className="address-book">
            <h3>Address Book </h3>
            <p1>Manage Address</p1>
            <hr className="divider" />
            <h6>Default Billing Address</h6>
            <p>You have not sent a default billing address</p>
            <button className="edit-button" onClick={() => alert("Edit functionality disabled!")}>
        Edit address
      </button>
          </div>
        </div>
      </div>
    </>
  );
}