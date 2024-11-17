// import React, { useState } from 'react';
// import axios from 'axios';
// import './DealerCreate.css'
// const GstDetails = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         mobileNumber: '',
//         gstNumber: '',
//         panDetails: '',
//         bankAccount: '',
//         otp: '',
//     });
//     const [otpSent, setOtpSent] = useState(false);
//     const [otpVerified, setOtpVerified] = useState(false);
//     const [otpError, setOtpError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSendOtp = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/gst-generate-otp', {
//                 email: formData.email,
//                 mobileNumber: formData.mobileNumber,
//             });
//             setOtpSent(true);
//             alert(`OTP sent: ${response.data.otp}`); // Display OTP in alert
//         } catch (error) {
//             alert('Error sending OTP');
//         }
//     };

//     const handleVerifyOtp = async () => {
//         try {
//             await axios.post('http://localhost:8000/gst-verify-otp', {
//                 email: formData.email,
//                 otp: formData.otp,
//             });
//             setOtpVerified(true);
//             alert('OTP verified successfully');
//         } catch (error) {
//             setOtpError('Invalid OTP');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (otpVerified) {
//             try {
//                 await axios.post('http://localhost:8000/add-gst-details', formData);
//                 alert('GST details saved successfully');
//             } catch (error) {
//                 alert('Error saving GST details');
//             }
//         } else {
//             alert('Please verify your OTP first');
//         }
//     };

//     return (
//         <div>
//             <h2>Tax Details Form</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="mobileNumber"
//                     placeholder="Mobile Number"
//                     value={formData.mobileNumber}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="gstNumber"
//                     placeholder="GST Number"
//                     value={formData.gstNumber}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="panDetails"
//                     placeholder="PAN Details"
//                     value={formData.panDetails}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="bankAccount"
//                     placeholder="Bank Account Number"
//                     value={formData.bankAccount}
//                     onChange={handleChange}
//                     required
//                 />
//                 {otpSent && !otpVerified && (
//                     <div>
//                         <input
//                             type="text"
//                             name="otp"
//                             placeholder="Enter OTP"
//                             value={formData.otp}
//                             onChange={handleChange}
//                             required
//                         />
//                         <button type="button" onClick={handleVerifyOtp}>
//                             Verify OTP
//                         </button>
//                         {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
//                     </div>
//                 )}
//                 <button type="button" onClick={handleSendOtp}>
//                     Send OTP
//                 </button>
//                 <button type="submit" disabled={!otpVerified}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default GstDetails;





// import React, { useState } from 'react';
// import axios from 'axios';
// import './DealerCreate.css';

// const GstDetails = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         mobileNumber: '',
//         gstNumber: '',
//         panDetails: '',
//         bankAccount: '',
//         otp: '',
//     });
//     const [otpSent, setOtpSent] = useState(false);
//     const [otpVerified, setOtpVerified] = useState(false);
//     const [otpError, setOtpError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSendOtp = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/gst-generate-otp', {
//                 email: formData.email,
//                 mobileNumber: formData.mobileNumber,
//             });
//             setOtpSent(true);
//             alert(`OTP sent: ${response.data.otp}`);
//         } catch (error) {
//             alert('Error sending OTP');
//         }
//     };

//     const handleVerifyOtp = async () => {
//         try {
//             await axios.post('http://localhost:8000/gst-verify-otp', {
//                 email: formData.email,
//                 otp: formData.otp,
//             });
//             setOtpVerified(true);
//             alert('OTP verified successfully');
//         } catch (error) {
//             setOtpError('Invalid OTP');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (otpVerified) {
//             try {
//                 await axios.post('http://localhost:8000/add-gst-details', formData);
//                 alert('GST details saved successfully');
//             } catch (error) {
//                 alert('Error saving GST details');
//             }
//         } else {
//             alert('Please verify your OTP first');
//         }
//     };

//     return (
//         <div className="dealer-form-container">
//             <h2 className="dealer-title">Tax Details Form</h2>
//             <form onSubmit={handleSubmit} className="dealer-form">
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="dealer-input"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="mobileNumber"
//                     placeholder="Mobile Number"
//                     value={formData.mobileNumber}
//                     onChange={handleChange}
//                     className="dealer-input"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="gstNumber"
//                     placeholder="GST Number"
//                     value={formData.gstNumber}
//                     onChange={handleChange}
//                     className="dealer-input"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="panDetails"
//                     placeholder="PAN Details"
//                     value={formData.panDetails}
//                     onChange={handleChange}
//                     className="dealer-input"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="bankAccount"
//                     placeholder="Bank Account Number"
//                     value={formData.bankAccount}
//                     onChange={handleChange}
//                     className="dealer-input"
//                     required
//                 />
//                 {otpSent && !otpVerified && (
//                     <div>
//                         <input
//                             type="text"
//                             name="otp"
//                             placeholder="Enter OTP"
//                             value={formData.otp}
//                             onChange={handleChange}
//                             className="dealer-input"
//                             required
//                         />
//                         <button type="button" onClick={handleVerifyOtp} className="dealer-form-btn">
//                             Verify OTP
//                         </button>
//                         {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
//                     </div>
//                 )}
//                 <button type="button" onClick={handleSendOtp} className="dealer-form-btn">
//                     Send OTP
//                 </button>
//                 <button type="submit" disabled={!otpVerified} className="dealer-form-btn">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default GstDetails;



import React, { useState } from 'react';
import axios from 'axios';
import './DealerCreate.css';
import { Link } from 'react-router-dom';

const GstDetails = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobileNumber: '',
        gstNumber: '',
        panDetails: '',
    });
    const [submissionError, setSubmissionError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/add-gst-details', formData);
            alert('GST details saved successfully');
            setFormData({ email: '', mobileNumber: '', gstNumber: '', panDetails: '' }); // Reset form
        } catch (error) {
            setSubmissionError('Error saving GST details');
        }
    };

    return (
        <div className="dealer-form-container">
            <h2 className="dealer-title">Tax Details Form</h2>
            <form onSubmit={handleSubmit} className="dealer-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="dealer-input"
                    required
                />
                <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="dealer-input"
                    required
                />
                <input
                    type="text"
                    name="gstNumber"
                    placeholder="GST Number"
                    value={formData.gstNumber}
                    onChange={handleChange}
                    className="dealer-input"
                    required
                />
                <input
                    type="text"
                    name="panDetails"
                    placeholder="PAN Details"
                    value={formData.panDetails}
                    onChange={handleChange}
                    className="dealer-input"
                    required
                />
                <Link to="/bank-details">
                <button type="submit" className="dealer-form-btn">
                    Submit
                </button>
                </Link>
                {submissionError && <p style={{ color: 'red' }}>{submissionError}</p>}
            </form>
        </div>
    );
};

export default GstDetails;