// import React from 'react'
// import Header from '../Header/Header'
// import HeaderMenu from '../Menu/HeaderMenu'
// import CustomerSidebar from './CustomerSidebar'

// export default function Customer() {
//   return (
   
//     <>
//      <Header/>
//    <HeaderMenu/>
//    <CustomerSidebar/>

    
//     </>
//   )
// }






import React from 'react';
import Header from '../Header/Header';
import HeaderMenu from '../Menu/HeaderMenu';
import CustomerSidebar from './CustomerSidebar';

export default function Customer() {
  return (
    <div className="customer-layout">
      <Header />
      <HeaderMenu />
      <div className="customer-content">
        <CustomerSidebar />
        <div className="main-content">
          {/* Add main content here */}
          {/* <h1>Welcome to your Dashboard</h1> */}
        </div>
      </div>
    </div>
  );
}