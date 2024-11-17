

// import React from 'react';
// import './HeaderMenu.css';

// export default function HeaderMenu({ cart }) {
//     // Calculate cart count
//     const cartCount = Array.isArray(cart) ? cart.reduce((count, item) => count + (item.count || 0), 0) : 0;

//     return (
//         <div className='main-container1'>
//             <img src="https://s3-alpha-sig.figma.com/img/ce52/a484/76df2c1c5b50936dbc94c907e66e0c5c?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AsciEIBGTVRxIUrPYktTwhZK~g6heB7jOnxCzCMaeEtqj2rLCX-XrDPfYDPVaN8WNwMpkkRUEOiORuJxiZ6ls5pDbAX1Fd7PUXSG-P~sCMR07ZR0QqyTSeAtAXofHl0jiNPSmDunpOWxBnxnLHJbuay-D6yaQokRbTSJCBflYHGqPYTjq3kTn12JlJj1DQz2WTF8-Ek7wZT0uTbjTfURFhX6P-aWKxYPzXvBVSDFVgDlXOHp0V6P1GglwDJ~Wg41lqVcbHI1ke9ILhDBzhBwf21vNbWgWelr0rsoiKlpZ73B3VNXWap34CrOCMobV2IvPTkpNZa90X~3DcSD8CPXXw__" />

//             <div className="main-navbar1">
//                 <a href="#">HOME</a>
//                 <a href="#">BEST DEAL</a>
//                 <a href="#">TYRES</a>
//                 <a href="#">FOR CAR</a>
//                 <a href="#">FOR BIKE</a>
//             </div>

//             <div className='main-icon1'>
//     <i className="ri-heart-line"></i>
    
//     {/* Cart Icon and Count */}
//     <div className="cart-wrapper">
       
//         <i className="ri-shopping-bag-3-line"></i>
//         {/* Conditionally display cart count */}
//         {cartCount > 0 && (
//             <span className="cart-count">
//               ({cartCount})
//             </span>
//         )}
//     </div>
// </div>

//             <button className="main-button1">
//                 <span><i className="ri-user-3-line"></i></span>
//                 <a href="#">Login/Register</a>
//             </button>
//         </div>
//     );
// }



import React, { useState } from 'react';
import './HeaderMenu.css';

export default function HeaderMenu({ cart }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu on click
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Calculate cart count
    const cartCount = Array.isArray(cart) ? cart.reduce((count, item) => count + (item.count || 0), 0) : 0;

    return (
        <>
            <div className='main-container1'>
                <img src="https://s3-alpha-sig.figma.com/img/ce52/a484/76df2c1c5b50936dbc94c907e66e0c5c?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AsciEIBGTVRxIUrPYktTwhZK~g6heB7jOnxCzCMaeEtqj2rLCX-XrDPfYDPVaN8WNwMpkkRUEOiORuJxiZ6ls5pDbAX1Fd7PUXSG-P~sCMR07ZR0QqyTSeAtAXofHl0jiNPSmDunpOWxBnxnLHJbuay-D6yaQokRbTSJCBflYHGqPYTjq3kTn12JlJj1DQz2WTF8-Ek7wZT0uTbjTfURFhX6P-aWKxYPzXvBVSDFVgDlXOHp0V6P1GglwDJ~Wg41lqVcbHI1ke9ILhDBzhBwf21vNbWgWelr0rsoiKlpZ73B3VNXWap34CrOCMobV2IvPTkpNZa90X~3DcSD8CPXXw__" />

                {/* Menu Button for mobile */}
                <div className='menu-icon' onClick={toggleMenu}>
                    <i className="ri-menu-line"></i>
                </div>

                {/* Main Navbar */}
                <div className={`main-navbar1 ${menuOpen ? 'open' : ''}`}>
                    <a href="#">HOME</a>
                    <a href="#">BEST DEAL</a>
                    <a href="#">TYRES</a>
                    <a href="#">FOR CAR</a>
                    <a href="#">FOR BIKE</a>
                </div>

                <div className='main-icon1'>
                    <i className="ri-heart-line"></i>

                    {/* Cart Icon and Count */}
                    <div className="cart-wrapper">
                        <i className="ri-shopping-bag-3-line"></i>
                        {cartCount > 0 && (
                            <span className="cart-count">({cartCount})</span>
                        )}
                    </div>
                </div>

                <button className="main-button1">
                    <span><i className="ri-user-3-line"></i></span>
                    <a href="/front-register">Login/Register</a>
                </button>
            </div>
        </>
    );
}