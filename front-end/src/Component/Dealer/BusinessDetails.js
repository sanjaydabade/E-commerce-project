

import React, { useState } from 'react';
import axios from 'axios';
import './DealerCreate.css'
import { Link } from 'react-router-dom';

const BusinessDetails = () => {
    const [formData, setFormData] = useState({
        storename: '',
        productCategory: '',
        address: '',
        method: [],
        leastTime: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                method: checked 
                    ? [...prev.method, value] 
                    : prev.method.filter((m) => m !== value)
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/add-business-details', formData);
            console.log(response.data);
            alert('Business details added successfully!'); // Show success alert
            // Optionally reset the form or show a success message
            setFormData({
                storename: '',
                productCategory: '',
                address: '',
                method: [],
                leastTime: '',
            });
        } catch (error) {
            console.error('Error adding business:', error);
            alert('Failed to add business details.'); // Show error alert
        }
    };

    return (
        <div className="business-form-container">
            <h2 className="business-title">Add Business Details</h2>
            <form className="business-form" onSubmit={handleSubmit}>
                <div>
                    <label className="business-label">Store Name:</label>
                    <input
                        type="text"
                        name="storename"
                        className="business-input"
                        value={formData.storename}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="business-label">Product Category:</label>
                    <input
                        type="text"
                        name="productCategory"
                        className="business-input"
                        value={formData.productCategory}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="business-label">Address:</label>
                    <input
                        type="text"
                        name="address"
                        className="business-input"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="business-checkbox-container">
                    <label className="business-label">Shipping Method:</label>
                    <div>
                        <input
                            type="checkbox"
                            className="business-checkbox"
                            name="method"
                            value="shipping"
                            onChange={handleChange}
                        /> Shipping
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            className="business-checkbox"
                            name="method"
                            value="fitting"
                            onChange={handleChange}
                        /> Fitting
                    </div>
                </div>
                <div>
                    <label className="business-label">Least Time:</label>
                    <select
                        name="leastTime"
                        className="business-input"
                        value={formData.leastTime}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select...</option>
                        <option value="4 hours">4 hours</option>
                        <option value="8 hours">8 hours</option>
                        <option value="24 hours">24 hours</option>
                    </select>
                </div>

                <Link to="/dealer-category">
                <button type="submit" className="business-button">Next</button>
                </Link>
                
            </form>
        </div>
    );
};

export default BusinessDetails;