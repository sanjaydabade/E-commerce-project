
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/ekka.css';
import Dashboard from './Component/Dashboard/Dashboard.js';
import Signup from './Component/Signup/Signup.js';
import './assets/css/ekka.css.map'
import AddProduct from './Component/Add-product/Add-product.js'
import ProductList from './Component/Product-list/Productlist.js';
import Tyrebrand from './Component/tyrebrand/Tyrebrand.js';
import Carbrand from './Component/Carbrand/Carbrand.js';
import CarModel from './Component/Carbrand/CarModel.js';
import Bikebrand from './Component/Bike/Bikebrand.js';
import BikeModelPage from './Component/Bike/Bikemodel.js';
import Caredit from './Component/Carbrand/Caredit.js';

import CarModelEdit from './Component/Carbrand/Carmodeledit.js';
import BikebrandEdit from './Component/Bike/Bikebrandedit.js';
import BikeModelEdit from './Component/Bike/Bikemodeledit.js';
import TyreEdit from './Component/tyrebrand/Tyreedit.js';
import AddproductEdit from './Component/Add-product/AddproductEdit.js';
import Dealer from './Component/Dealer/Dealer.js';
import DealerEdit from './Component/Dealer/DealerEdit.js';
import Home from './Component/Home/Home.js';
import Mainheader from './Component/MainHeader/Mainheader.js';
import Showproduct from './Component/showProduct/Showproduct.js';
import FrontendFooter from './Component/Footer/FrontendFooter.js';
import ProductDeatails from './Component/ProductDetails/ProductDeatails.js';
import AddtoCart from './Component/AddtoCart/AddtoCart.js';
import HeaderMenu from './Component/Menu/HeaderMenu.js';
import Buynow from './Component/Buynow/Buynow.js';
import DealerLogin from './Component/Dealer/DealerLogin.js';

import DealerList from './Component/Dealer/DealerList.js';

import Register from './Component/FrontendLogin/Register.js';
import FrontendLogin from './Component/FrontendLogin/Login.js';
import DealerCreate from './Component/Dealer/DealerCreate.js';
import DealerCreateLogin from './Component/Dealer/DealerCreateLogin.js';
import GstDetails from './Component/Dealer/GstDetails.js';
import BankDetailsForm from './Component/Dealer/BankDetailsForm.js';

import BusinessDetails from './Component/Dealer/BusinessDetails.js';
import DealerCategories from './Component/Dealer/DealerCategories.js';
import AddDealerlist from './Component/Dealer/AddDealerlist.js';
import CustomerSidebar from './Component/Customer-Dashboard/CustomerSidebar.js';
import Customer from './Component/Customer-Dashboard/Customer.js';
import Accountinfo from './Component/Customer-Dashboard/Accountinfo.js';
import AddressBook from './Component/Customer-Dashboard/AddressBook.js';

import Myaccount from './Component/Customer-Dashboard/Myaccount.js';
import Myinvitations from './Component/Customer-Dashboard/Myinvitations.js';
import Myorders from './Component/Customer-Dashboard/Myorders.js';
import Signout from './Component/Customer-Dashboard/Signout.js';
import MyVehicle from './Component/Customer-Dashboard/MyVehicle.js';




export default function App() {
    const [cart, setCart] = useState([]);
 


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);



  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item._id === newItem._id);
      let updatedCart;

      if (existingItem) {
        // If the item already exists in the cart, increase its count
        updatedCart = prevCart.map(item =>
          item._id === newItem._id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // If the item is new, set initial date and time for the item
        newItem.count = 1;
        newItem.selectedDate = new Date(); // Default to the current date/time
        updatedCart = [...prevCart, newItem];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Function to update the selected date and time for a specific item in the cart
 


  function HeaderMenuWrapper({ cart }) {
    const location = useLocation();
    
    // Define frontend routes where HeaderMenu should be displayed
    const frontendRoutes = ['/home', '/main', '/menu', '/show', '/details/:id/:tyreType', '/addtocart'];

    // Conditionally render the HeaderMenu based on the current route
    if (frontendRoutes.includes(location.pathname)) {
        return <HeaderMenu cart={cart} />;
    }

    return null;
}
 
    return (
        <>
         
            <Router>
          
            <HeaderMenuWrapper cart={cart} />
                <Routes>

                    {/* Dashboard */}
                    <Route path="/" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/list" element={<ProductList />} />
                    <Route path="/tyre" element={<Tyrebrand />} />
                    <Route path="/carbrand" element={<Carbrand/>} />
                    <Route path="/carbrand-model" element={<CarModel/>} />
                    <Route path="/bikebrand" element={<Bikebrand/>} />
                    <Route path="/bikemodel" element={<BikeModelPage/>} />
                    <Route path="/caredit/:id" element={<Caredit/>} />
                    <Route path="/carmodeledit/:id" element={<CarModelEdit/>} />
                    <Route path="/bikebrandedit/:id" element={<BikebrandEdit/>} />
                    <Route path="/bikemodeledit/:id" element={<BikeModelEdit/>} />
                    <Route path="/tyreedit/:id" element={<TyreEdit/>} />
                    <Route path="/addproductedit/:id/:tyreType" element={<AddproductEdit/>} />
                    <Route path="/dealer" element={<Dealer />} />
                    <Route path="/dealer-edit/:id" element={<DealerEdit />} />
                    <Route path="/dealer-login" element={<DealerLogin />} />
                   
                    <Route path="/dealer-list" element={<DealerList/>} />
                    <Route path="/create-dealer" element={<DealerCreate/>} />
                    <Route path="/create-login" element={<DealerCreateLogin/>} />
                    <Route path="/gst-details" element={<GstDetails/>} />
                    <Route path="/bank-details" element={<BankDetailsForm/>} />
                    <Route path="/business-details" element={<BusinessDetails/>} />
                    <Route path="/dealer-category" element={<DealerCategories/>} />
                    <Route path="/add-dealer" element={<AddDealerlist/>} />

                    <Route path="/sidebar" element={<CustomerSidebar/>} />
                    <Route path="/customer" element={<Customer/>} />
                  

                  
                   {/* Frontend  */}

                   {/* <HeaderMenu cart={cart} /> */}
                    <Route path="/home" element={<Home/>} />
                    <Route path="/main" element={<Mainheader/>} />
                    <Route path="/menu" element={<HeaderMenu />} />

                    <Route path="/show" element={<Showproduct />} />
                    <Route path="/footer" element={<FrontendFooter />} />
                    <Route path="/details/:id/:tyreType" element={<ProductDeatails addToCart={addToCart} />} />
                   
                    <Route path="/addtocart" element={<AddtoCart cart={cart}/>} />
                    <Route path="/buy" element={<Buynow />} />
                    <Route path="/front-register" element={<Register/>} />
                    <Route path="/front-login" element={<FrontendLogin/>} />


                    <Route path="/acc-info" element={<Accountinfo/>} />
                    <Route path="/address-book" element={<AddressBook/>} />
                    <Route path="/my-account" element={<Myaccount/>} />
                    <Route path="/my-invitations" element={<Myinvitations/>} />
                    <Route path="/my-orders" element={<Myorders/>} />
                    <Route path="/sign-out" element={<Signout/>} />
                    <Route path="/my-vehicle" element={<MyVehicle/>} />










                </Routes>
                
            </Router>
            
        </>
    );
}



