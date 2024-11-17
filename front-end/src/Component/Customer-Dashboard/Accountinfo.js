


// import React from 'react';
// import Header from '../Header/Header';
// import HeaderMenu from '../Menu/HeaderMenu';
// import CustomerSidebar from './CustomerSidebar';
// import './Customer.css';

// export default function Accountinfo() {
//   return (
//     <>
//       <Header />
//       <HeaderMenu />
//       <div className="account-info-container">
//         <CustomerSidebar />
//         <div className="account-info-card">
//           <h2>Account Information</h2>
//           <hr />
//           <div className="account-info-sections">
//             {/* Left Section */}
//             <div className="account-info-left">
//               <div className="account-info-item">
//                 <label>First Name:</label>
//                 <p>John</p>
//               </div>
//               <div className="account-info-item">
//                 <label>Last Name:</label>
//                 <p>Doe</p>
//               </div>
//             </div>
//           <h3>Email And Mobile Number</h3>
            
//             {/* Right Section */}
//             <div className="account-info-right">
//               <div className="account-info-item">
//                 <label>Email:</label>
//                 <p>john.doe@example.com</p>
//               </div>
//               <div className="account-info-item">
//                 <label>Mobile Number:</label>
//                 <p>+1234567890</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </>
//   );
// }



// import React from 'react';
// import Header from '../Header/Header';
// import HeaderMenu from '../Menu/HeaderMenu';
// import CustomerSidebar from './CustomerSidebar';
// import './Customer.css';

// export default function Accountinfo() {
//   return (
//     <>
//       <Header />
//       <HeaderMenu />
//       <div className="account-info-container">
//         <CustomerSidebar />
//         <div className="account-info-card">
//           <div className="account-info-header">
//             <h2>Account Information</h2>
//             <h3>Email and Mobile Number</h3>
//           </div>
//           <hr />
//           <div className="account-info-sections">
//             {/* Left Section */}
//             <div className="account-info-left">
//               <div className="account-info-item">
//                 <label>First Name:</label>
//                 <p>John</p>
//                 <hr/>
//               </div>
//               <div className="account-info-item">
//                 <label>Last Name:</label>
//                 <p>Doe</p>
//                 <hr/>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="account-info-right">
//               <div className="account-info-item">
//                 <label>Email:</label>
//                 <p>john.doe@example.com</p>
//                 <hr/>
//               </div>
//               <div className="account-info-item">
//                 <label>Mobile Number:</label>
//                 <p>+1234567890</p>
//                 <hr/>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useState } from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';
import './Customer.css';

export default function Accountinfo() {
  const [changeEmail, setChangeEmail] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);

  const handleSave = () => {
    alert(`Change Email: ${changeEmail}, Change Number: ${changeNumber}`);
  };

  return (
    <>
      <Header />
      <HeaderMenu />
      <div className="account-info-container">
        <CustomerSidebar />
        <div className="account-info-card">
          <div className="account-info-header">
            <h2>Account Information</h2>
            <h3>Email and Mobile Number</h3>
          </div>
          <hr />
          <div className="account-info-sections">
            {/* Left Section */}
            <div className="account-info-left">
              <div className="account-info-item">
                <label>First Name:</label>
                <p>sanjay</p>
                <hr />
              </div>
              <div className="account-info-item">
                <label>Last Name:</label>
                <p>Dabade</p>
                <hr />
              </div>
            </div>

            {/* Right Section */}
            <div className="account-info-right">
              <div className="account-info-item">
                <label>Email:</label>
                <p>sanjay@gmail.com</p>
                <hr />
              </div>
              <div className="account-info-item">
                <label>Mobile Number:</label>
                <p>1234567890</p>
                <hr />
              </div>
            </div>
          </div>

          {/* Checkboxes and Save Button */}
          <div className="account-info-options">
            <div className="account-info-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={changeEmail}
                  onChange={(e) => setChangeEmail(e.target.checked)}
                />
                Change Email
              </label>
            </div>
            <div className="account-info-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={changeNumber}
                  onChange={(e) => setChangeNumber(e.target.checked)}
                />
                Change Mobile Number
              </label>
            </div>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
