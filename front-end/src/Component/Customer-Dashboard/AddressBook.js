// import React from 'react'
// import Header from '../Header/Header'
// import HeaderMenu from '../Menu/HeaderMenu'
// import CustomerSidebar from './CustomerSidebar'

// export default function AddressBook() {
//   return (
//     <>
//     <Header/>
//     <HeaderMenu/>
//     <CustomerSidebar/>

   
//     </>
//   )
// }





// import React from 'react';
// import Header from '../Header/Header';
// import HeaderMenu from '../Menu/HeaderMenu';
// import CustomerSidebar from './CustomerSidebar';
// import './Customer.css';

// export default function AddressBook() {
//   return (
//     <>
//       <Header />
//       <HeaderMenu />
//       <CustomerSidebar />
//       <div className="address-book-container">
//         {/* Left Section */}
//         <div className="address-book-left">
//           <h2>Contact Information</h2>
//           <form className="form-section">
//             <label>
//               First Name:
//               <input type="text" name="firstName" placeholder="Enter first name" />
//             </label>
//             <label>
//               Last Name:
//               <input type="text" name="lastName" placeholder="Enter last name" />
//             </label>
//             <label>
//               Company:
//               <input type="text" name="company" placeholder="Enter company name" />
//             </label>
//             <label>
//               Phone Number:
//               <input type="text" name="phone" placeholder="Enter phone number" />
//             </label>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="address-book-right">
//           <h2>Address</h2>
//           <form className="form-section">
//             <label>
//               City:
//               <input type="text" name="city" placeholder="Enter city" />
//             </label>
//             <label>
//               State:
//               <input type="text" name="state" placeholder="Enter state" />
//             </label>
//             <label>
//               Zip Code:
//               <input type="text" name="zip" placeholder="Enter zip code" />
//             </label>
//             <label>
//               Country:
//               <input type="text" name="country" placeholder="Enter country" />
//             </label>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }




import React from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';
import './Customer.css';

export default function AddressBook() {
  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="main-container">
        
        <div className="customer-sidebar">
          <CustomerSidebar />
        </div>

        {/* Address Book Content */}
        <div className="address-book-container">
          {/* Left Section */}
          <div className="address-book-left">
            <h2>Contact Information</h2>
            <form className="form-section">
              <label>
                First Name:
                <input type="text" name="firstName" placeholder="Enter first name" />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" placeholder="Enter last name" />
              </label>
              <label>
                Company:
                <input type="text" name="company" placeholder="Enter company name" />
              </label>
              <label>
                Phone Number:
                <input type="text" name="phone" placeholder="Enter phone number" />
              </label>
            </form>
          </div>

          {/* Right Section */}
          <div className="address-book-right">
            <h2>Address</h2>
            <form className="form-section">
              <label>
                City:
                <input type="text" name="city" placeholder="Enter city" />
              </label>
              <label>
                State:
                <input type="text" name="state" placeholder="Enter state" />
              </label>
              <label>
                Zip Code:
                <input type="text" name="zip" placeholder="Enter zip code" />
              </label>
              <label>
                Country:
                <input type="text" name="country" placeholder="Enter country" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
