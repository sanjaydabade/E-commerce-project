import React, { useState } from 'react';
import axios from 'axios';
import './DealerCreate.css'
import { Link } from 'react-router-dom';

const BankDetailsForm = () => {
    const [formData, setFormData] = useState({
        accountholdername: '',
        bankAccount: '',
        ifsc: '',
        accounttype: '',
        reenteraccountnumber: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if bankAccount and reenteraccountnumber match
        if (formData.bankAccount !== formData.reenteraccountnumber) {
            setError("Bank account number and re-entered account number must match.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/bank-details', formData);
            alert(response.data.message);
            setError('');
            setFormData({
                accountholdername: '',
                bankAccount: '',
                ifsc: '',
                accounttype: '',
                reenteraccountnumber: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Failed to submit bank details');
        }
    };

    return (
        <div className="bank-form-container">
            <h2 className="bank-form-title">Enter Bank Details</h2>
            {error && <p className="bank-form-error">{error}</p>}
            <form className="bank-form" onSubmit={handleSubmit}>
                <label className="bank-form-label">
                    Account Holder Name:
                    <input type="text" name="accountholdername" value={formData.accountholdername} onChange={handleChange} required className="bank-form-input" />
                </label>
                <label className="bank-form-label">
                    Bank Account Number:
                    <input type="number" name="bankAccount" value={formData.bankAccount} onChange={handleChange} required className="bank-form-input" />
                </label>
                <label className="bank-form-label">
                    IFSC Code:
                    <input type="text" name="ifsc" value={formData.ifsc} onChange={handleChange} required className="bank-form-input" />
                </label>
                <label className="bank-form-label">
                    Account Type:
                    <select name="accounttype" value={formData.accounttype} onChange={handleChange} required className="bank-form-input1">
                        <option value="">Select Type</option>
                        <option value="savings">Savings</option>
                        <option value="current">Current</option>
                    </select>
                </label>
                <label className="bank-form-label">
                    Re-enter Account Number:
                    <input type="number" name="reenteraccountnumber" value={formData.reenteraccountnumber} onChange={handleChange} required className="bank-form-input" />
                </label>

                <Link to ="/business-details">
                <button type="submit" className="bank-form-button">Submit</button>
                </Link>
                
            </form>
        </div>
    );
};

export default BankDetailsForm;