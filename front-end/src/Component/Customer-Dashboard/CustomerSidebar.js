import React from 'react';
import { FaUserCircle, FaShoppingCart, FaMapMarkerAlt, FaInfo, FaCarAlt, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import './Customer.css'


export default function CustomerSidebar() {
  return (
    <div className="customer-sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="/my-account">
            <FaUserCircle className="icon" /> My Account
          </a>
        </li>
        <li>
          <a href="/my-orders">
            <FaShoppingCart className="icon" /> My Orders
          </a>
        </li>
        <li>
          <a href="/address-book">
            <FaMapMarkerAlt className="icon" /> Address Book
          </a>
        </li>
        <li>
          <a href="/acc-info">
            <FaInfo className="icon" /> Account Information
          </a>
        </li>
        <li>
          <a href="/my-vehicle">
            <FaCarAlt className="icon" /> My Vehicles
          </a>
        </li>

        <li>
          <a href="/my-invitations"><FaEnvelope className="icon" /> My Invitations</a>
        </li>
        <li>
          <a href="/sign-out"><FaSignOutAlt className="icon" /> Sign Out</a>
        </li>
      </ul>
    </div>
  );
}