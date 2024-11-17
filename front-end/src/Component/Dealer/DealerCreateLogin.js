
// import React, { useState } from 'react';
// import axios from 'axios';
// import './DealerCreate.css';
// import { Link } from 'react-router-dom';

// const DealerCreateLogin = () => {
//     const [identifier, setIdentifier] = useState(''); // State for email or mobile number
//     const [otpSent, setOtpSent] = useState(false); // State to track if OTP was sent
//     const [otp, setOtp] = useState(''); // State for the OTP input
//     const [errorMessage, setErrorMessage] = useState(''); // State for error messages
//     const [successMessage, setSuccessMessage] = useState(''); // State for success messages
//     const [otpModalVisible, setOtpModalVisible] = useState(false); // State for modal visibility
//     const [otpModalContent, setOtpModalContent] = useState(''); // State for OTP modal content

//     const handleIdentifierChange = (e) => {
//         setIdentifier(e.target.value); // Update identifier state
//     };

//     const handleOtpChange = (e) => {
//         setOtp(e.target.value); // Update OTP state
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         try {
//             const response = await axios.post('http://localhost:8000/dealer-login', { emailOrMobile: identifier });
            
//             // Log the entire response to see the structure
//             console.log('Response:', response.data);

//             setSuccessMessage(response.data.message);
//             setOtpSent(true);
//             setErrorMessage('');

//             // Check if OTP is in the response and show it in a modal
//             if (response.data.otp) {
//                 setOtpModalContent(`Your OTP is: ${response.data.otp}`);
//                 setOtpModalVisible(true);
//             } else {
//                 console.log('No OTP received in the response');
//             }
//         } catch (error) {
//             console.error('Error in sending OTP:', error);
//             setErrorMessage('Error sending OTP. Please try again.');
//             setSuccessMessage('');
//         }
//     };

//     const handleOtpSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         try {
//             const response = await axios.post('http://localhost:8000/dealer-login-otp', { emailOrMobile: identifier, otp });
//             setSuccessMessage(response.data.message); // Set success message for login
//             setErrorMessage(''); // Clear any error message
//             // Optionally, redirect or perform another action upon successful verification
//         } catch (error) {
//             console.error(error); // Log error to console
//             setErrorMessage('Invalid OTP. Please try again.'); // Set error message
//         }
//     };

//     return (
//         <div className="dealer-login-container">
//             <p className="dealer-title">Login</p>
//             <form className="dealer-login-form" onSubmit={otpSent ? handleOtpSubmit : handleLoginSubmit}>
//                 <input
//                     type="text"
//                     className="dealer-input"
//                     placeholder="Email or Mobile Number"
//                     value={identifier}
//                     onChange={handleIdentifierChange}
//                     required
//                 />
//                 {otpSent && (
//                     <input
//                         type="text"
//                         className="dealer-input"
//                         placeholder="Enter OTP"
//                         value={otp}
//                         onChange={handleOtpChange}
//                         required
//                     />
//                 )}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//                 {successMessage && <p className="success-message">{successMessage}</p>}
//                 <button type="submit" className="dealer-login-btn">
//                     {otpSent ? 'Verify OTP' : 'Send OTP'}
//                 </button>
//             </form>
//             <p className="dealer-signup-label">
//                 <Link to="/create-dealer">Don't have an account? <span className="dealer-signup-link">Sign up</span></Link>
//             </p>

//             {/* OTP Modal */}
//             {otpModalVisible && (
//                 <div className="otp-modal">
//                     <div className="otp-modal-content">
//                         <span className="close" onClick={() => setOtpModalVisible(false)}>&times;</span>
//                         <p>{otpModalContent}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DealerCreateLogin;





// import React, { useState } from 'react';
// import axios from 'axios';
// import './DealerCreate.css';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

// const DealerCreateLogin = () => {
//     const [identifier, setIdentifier] = useState(''); // State for email or mobile number
//     const [otpSent, setOtpSent] = useState(false); // State to track if OTP was sent
//     const [otp, setOtp] = useState(''); // State for the OTP input
//     const [errorMessage, setErrorMessage] = useState(''); // State for error messages
//     const [successMessage, setSuccessMessage] = useState(''); // State for success messages
//     const [otpModalVisible, setOtpModalVisible] = useState(false); // State for modal visibility
//     const [otpModalContent, setOtpModalContent] = useState(''); // State for OTP modal content
//     const [otpVerified, setOtpVerified] = useState(false); // State to track if OTP was verified

//     const navigate = useNavigate(); // Use useNavigate for redirection

//     const handleIdentifierChange = (e) => {
//         setIdentifier(e.target.value); // Update identifier state
//     };

//     const handleOtpChange = (e) => {
//         setOtp(e.target.value); // Update OTP state
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         try {
//             const response = await axios.post('http://localhost:8000/dealer-login', { emailOrMobile: identifier });
            
//             // Log the entire response to see the structure
//             console.log('Response:', response.data);

//             setSuccessMessage(response.data.message);
//             setOtpSent(true);
//             setErrorMessage('');

//             // Check if OTP is in the response and show it in a modal
//             if (response.data.otp) {
//                 setOtpModalContent(`Your OTP is: ${response.data.otp}`);
//                 setOtpModalVisible(true);
//             } else {
//                 console.log('No OTP received in the response');
//             }
//         } catch (error) {
//             console.error('Error in sending OTP:', error);
//             setErrorMessage('Error sending OTP. Please try again.');
//             setSuccessMessage('');
//         }
//     };

//     const handleOtpSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         try {
//             const response = await axios.post('http://localhost:8000/dealer-login-otp', { emailOrMobile: identifier, otp });
//             setSuccessMessage(response.data.message); // Set success message for login
//             setErrorMessage(''); // Clear any error message
//             setOtpVerified(true); // Set OTP as verified
            
//             // Optionally, redirect or perform another action upon successful verification
//         } catch (error) {
//             console.error(error); // Log error to console
//             setErrorMessage('Invalid OTP. Please try again.'); // Set error message
//         }
//     };

//     const handleContinue = () => {
//         navigate('/next-page'); // Redirect to the desired page
//     };

//     return (
//         <div className="dealer-login-container">
//             <p className="dealer-title">Login</p>
//             <form className="dealer-login-form" onSubmit={otpSent ? handleOtpSubmit : handleLoginSubmit}>
//                 <input
//                     type="text"
//                     className="dealer-input"
//                     placeholder="Email or Mobile Number"
//                     value={identifier}
//                     onChange={handleIdentifierChange}
//                     required
//                 />
//                 {otpSent && (
//                     <input
//                         type="text"
//                         className="dealer-input"
//                         placeholder="Enter OTP"
//                         value={otp}
//                         onChange={handleOtpChange}
//                         required
//                     />
//                 )}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//                 {successMessage && <p className="success-message">{successMessage}</p>}
//                 <button type="submit" className="dealer-login-btn">
//                     {otpSent ? 'Verify OTP' : 'Send OTP'}
//                 </button>


//                 {otpVerified && (
//                 <button onClick={handleContinue} className="continue-btn">
//                     Continue
//                 </button>
//             )}
//             </form>
//             <p className="dealer-signup-label">
//                 <Link to="/create-dealer">Don't have an account? <span className="dealer-signup-link">Sign up</span></Link>
//             </p>

//             {/* OTP Modal */}
//             {otpModalVisible && (
//                 <div className="otp-modal">
//                     <div className="otp-modal-content">
//                         <span className="close" onClick={() => setOtpModalVisible(false)}>&times;</span>
//                         <p>{otpModalContent}</p>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default DealerCreateLogin;




import React, { useState } from 'react';
import axios from 'axios';
import './DealerCreate.css';
import { Link, useNavigate } from 'react-router-dom';

const DealerCreateLogin = () => {
    const [identifier, setIdentifier] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [otpModalVisible, setOtpModalVisible] = useState(false);
    const [otpModalContent, setOtpModalContent] = useState('');
    
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleIdentifierChange = (e) => setIdentifier(e.target.value);

    const handleOtpChange = (e) => setOtp(e.target.value);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/dealer-login', { emailOrMobile: identifier });
            setSuccessMessage(response.data.message);
            setOtpSent(true);
            setErrorMessage('');

            if (response.data.otp) {
                setOtpModalContent(`Your OTP is: ${response.data.otp}`);
                setOtpModalVisible(true);
            }
        } catch (error) {
            setErrorMessage('Error sending OTP. Please try again.');
            setSuccessMessage('');
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/dealer-login-otp', { emailOrMobile: identifier, otp });
            setSuccessMessage(response.data.message);
            setErrorMessage('');

            // Navigate to another page after successful OTP verification
            navigate('/gst-details');
        } catch (error) {
            setErrorMessage('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="dealer-login-container">
            <p className="dealer-title">Login</p>
            <form className="dealer-login-form" onSubmit={otpSent ? handleOtpSubmit : handleLoginSubmit}>
                <input
                    type="text"
                    className="dealer-input1"
                    placeholder="Email or Mobile Number"
                    value={identifier}
                    onChange={handleIdentifierChange}
                    required
                />
                {otpSent && (
                    <input
                        type="text"
                        className="dealer-input1"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleOtpChange}
                        required
                    />
                )}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button type="submit" className="dealer-login-btn">
                    {otpSent ? 'Continue' : 'Send OTP'}
                </button>
            </form>
            <p className="dealer-signup-label">
                <Link to="/create-dealer">Don't have an account? <span className="dealer-signup-link">Sign up</span></Link>
            </p>

            {otpModalVisible && (
                <div className="otp-modal">
                    <div className="otp-modal-content">
                        <span className="close" onClick={() => setOtpModalVisible(false)}>&times;</span>
                        <p>{otpModalContent}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DealerCreateLogin;