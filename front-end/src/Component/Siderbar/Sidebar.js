// import React from 'react'

// export default function Sidebar() {
//   return (
//    <>
//    <div className="ec-left-sidebar ec-bg-sidebar">
// 			<div id="sidebar" className="sidebar ec-sidebar-footer">

// 				<div className="ec-brand">
// 					<a href="index.html" title="Ekka">
// 						<img className="ec-brand-icon" src="assets/img/logo/ec-site-logo.png" alt="" />
// 						<span className="ec-brand-name text-truncate">TyreKing</span>
// 					</a>
// 				</div>

				
// 				<div className="ec-navigation" data-simplebar>
					
// 					<ul className="nav sidebar-inner" id="sidebar-menu"/>
					
// 						<li className="active">
// 							<a className="sidenav-item-link" href="index.html">
// 								<i className="mdi mdi-view-dashboard-outline"></i>
// 								<span className="nav-text">Dashboard</span>
// 							</a>
// 							<hr/>
// 						</li>

						
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="#">
// 								<i className="mdi mdi-account-group-outline"></i>
// 								<span className="nav-text">Vendors</span>
// 							</a>
// 						</li>

						
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="#">
// 								<i className="mdi mdi-account-group"></i>
// 								<span className="nav-text">Users</span>
// 							</a>
// 							<hr/>
// 						</li>

// 						{/* <!-- Category --> */}
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="javascript:void(0)">
// 								<i className="mdi mdi-dns-outline"></i>
// 								<span className="nav-text">Categories</span> <b className="caret"></b>
// 							</a>
// 							<div className="collapse">
// 								<ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
// 									<li className="">
// 										<a className="sidenav-item-link" href="tyrebrands.php">
// 											<span className="nav-text">Tyre Brand</span>
// 										</a>
// 									</li>
// 									<li className="">
// 										<a className="sidenav-item-link" href="carbrands.php">
// 											<span className="nav-text">Car Brand</span>
// 										</a>
// 									</li>
// 									<li className="">
// 										<a className="sidenav-item-link" href="bikebrands.php">
// 											<span className="nav-text">Bike Brand</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</li>

// 						{/* <!-- Products --> */}
// 						<li className="has-sub">
// 							<a className="sidenav-item-link" href="javascript:void(0)">
// 								<i className="mdi mdi-palette-advanced"></i>
// 								<span className="nav-text">Products</span> <b className="caret"></b>
// 							</a>
// 							<div className="collapse">
// 								<ul className="sub-menu" id="products" data-parent="#sidebar-menu">
// 									<li className="">
// 										<a className="sidenav-item-link" href="product-add.php">
// 											<span className="nav-text">Add Product</span>
// 										</a>
// 									</li>
// 									<li className="">
// 										<a className="sidenav-item-link" href="product-list.php">
// 											<span className="nav-text">List Product</span>
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</li>		
// 				</div>
// 			</div>
// 		</div>
//    </>
//   )
// }





import React, { useState } from 'react';

export default function Sidebar() {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!isProductsOpen);
  };

  return (
    <>
      <div className="ec-left-sidebar ec-bg-sideb " >
        <div id="sidebar" className="sidebar ec-sidebar-footer ">
          <div className="ec-brand">
            <a href="index.html" title="Ekka">
              <img className="ec-brand-icon" src="https://amuze.in/projects//tyreking-admin-ui/assets/img/logo/ec-site-logo.png" alt="" />
              <span className="ec-brand-name text-truncate">TyreKing</span>
            </a>
          </div>

          <div className="ec-navigation" data-simplebar>
            <ul className="nav sidebar-inner" id="sidebar-menu">
              <li className="active">
                <a className="sidenav-item-link" href="index.html">
                  <i className="mdi mdi-view-dashboard-outline"></i>
                  <span className="nav-text">Dashboard</span>
                </a>
                <hr/>
              </li>

              <li className="has-sub">
                <a className="sidenav-item-link" href="#">
                  <i className="mdi mdi-account-group-outline"></i>
                  <span className="nav-text">Vendors</span>
                </a>
              </li>

              <li className="has-sub">
                <a className="sidenav-item-link" href="#">
                  <i className="mdi mdi-account-group"></i>
                  <span className="nav-text">Users</span>
                </a>
                <hr />
              </li>

              {/* Category */}
              <li className="has-sub">
                <a className="sidenav-item-link" onClick={toggleCategories}>
                  <i className="mdi mdi-dns-outline"></i>
                  <span className="nav-text">Categories</span> <b className="caret"></b>
                </a>
                <div className={`collapse ${isCategoriesOpen ? 'show' : ''}`}>
                  <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
                    <li>
                      <a className="sidenav-item-link" href="/tyre">
                        <span className="nav-text">Tyre Brand</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/carbrand">
                        <span className="nav-text">Car Brand</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/bikebrand">
                        <span className="nav-text">Bike Brand</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Products */}
              <li className="has-sub">
                <a className="sidenav-item-link" onClick={toggleProducts}>
                  <i className="mdi mdi-palette-advanced"></i>
                  <span className="nav-text">Products</span> <b className="caret"></b>
                </a>
                <div className={`collapse ${isProductsOpen ? 'show' : ''}`}>
                  <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
                    <li>
                      <a className="sidenav-item-link" href="/addproduct">
                        <span className="nav-text">Add Product</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/list">
                        <span className="nav-text">List Product</span>
                      </a>
                    </li>
                    <li>
                      <a className="sidenav-item-link" href="/create-dealer">
                        <span className="nav-text">Dealer</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}