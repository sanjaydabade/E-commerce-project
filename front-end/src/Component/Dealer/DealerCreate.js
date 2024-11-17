
// import React, { useState } from 'react';
// import axios from 'axios';
// import './DealerCreate.css';
// import { Link } from 'react-router-dom';

// const DealerCreate = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         mobileNumber: '',   
//         email: '',
//         password: '',
//         otp: '',
//     });
//     const [otpSent, setOtpSent] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleMobileSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/dealer-otp', { mobileNumber: formData.mobileNumber });
//             alert(`OTP sent to ${formData.mobileNumber}: ${response.data.otp}`);
//             setOtpSent(true);
//             setErrorMessage('');
//         } catch (error) {
//             console.error(error);
//             setErrorMessage('Error sending OTP');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8000/dealer-create-acc', formData);
//             alert('Account created successfully!');
//             setErrorMessage('');
//         } catch (error) {
//             if (error.response && error.response.status === 409) {
//                 setErrorMessage(error.response.data.message); // Email already exists
//             } else if (error.response && error.response.status === 400) {
//                 setErrorMessage(error.response.data.message); // Invalid OTP
//             } else {
//                 setErrorMessage('Error creating account');
//             }
//             console.error(error);
//         }
//     };

//     return (
//         <div className="dealer-form-container">
//             <p className="dealer-title">Create Account</p>
//             <form className="dealer-form" onSubmit={otpSent ? handleSubmit : handleMobileSubmit}>
//                 <input
//                     type="text"
//                     className="dealer-input"
//                     placeholder="Username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="tel"
//                     className="dealer-input"
//                     placeholder="Mobile Number"
//                     name="mobileNumber"
//                     value={formData.mobileNumber}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     className="dealer-input"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     className="dealer-input"
//                     placeholder="Password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 {otpSent && (
//                     <input
//                         type="text"
//                         className="dealer-input"
//                         placeholder="OTP"
//                         name="otp"
//                         value={formData.otp}
//                         onChange={handleChange}
//                         required
//                     />
//                 )}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//                 <button type="submit" className="dealer-form-btn">
//                     {otpSent ? 'Create Account' : 'Send OTP'}
//                 </button>
//             </form>
//             <p className="dealer-signup-label">
//                 <Link to ="/create-login">
//                 Already have an account?<span className="dealer-signup-link"> Log in</span>
//                 </Link>
//             </p>
//         </div>
//     );
// };

// export default DealerCreate;




// import React, { useState } from 'react';
// import axios from 'axios';
// import './DealerCreate.css';
// import { Link } from 'react-router-dom';

// const DealerCreate = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     mobileNumber: '',
//     email: '',
//     password: '',
//     rePassword: '', // Field for re-entering password
//     mobileOtp: '',
//     emailOtp: '',
//   });
//   const [otpSent, setOtpSent] = useState({ mobile: false, email: false });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Send OTP for mobile or email
//   const handleOtpSubmit = async (type) => {
//     try {
//       const data = type === 'mobile' ? { mobileNumber: formData.mobileNumber, type } : { email: formData.email, type };
//       const response = await axios.post('http://localhost:8000/dealer-otp', data);
//       alert(`OTP sent to ${type === 'mobile' ? formData.mobileNumber : formData.email}`);
//       setOtpSent({ ...otpSent, [type]: true });
//       setErrorMessage('');
//     } catch (error) {
//       console.error(error);
//       setErrorMessage(`Error sending ${type} OTP`);
//     }
//   };

//   // Create dealer account
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (formData.password !== formData.rePassword) {
//       setErrorMessage('Passwords do not match');
//       return; // Exit early if passwords do not match
//     }

//     try {
//       await axios.post('http://localhost:8000/dealer-create-acc', formData);
//       alert('Account created successfully!');
//       setErrorMessage('');
//     } catch (error) {
//       if (error.response && error.response.status === 409) {
//         setErrorMessage(error.response.data.message); // Email already exists
//       } else if (error.response && error.response.status === 400) {
//         setErrorMessage(error.response.data.message); // Invalid OTP
//       } else {
//         setErrorMessage('Error creating account');
//       }
//       console.error(error);
//     }
//   };

//   return (
//     <div className="dealer-form-container">
//       <p className="dealer-title">Create Account</p>
//       <form className="dealer-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="dealer-input"
//           placeholder="Username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="tel"
//           className="dealer-input"
//           placeholder="Mobile Number"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           required
//         />
//         {!otpSent.mobile && (
//           <button type="button" className="otp-btn" onClick={() => handleOtpSubmit('mobile')}>
//             Mobile No Verify
//           </button>
//         )}
//         {otpSent.mobile && (
//           <input
//             type="text"
//             className="dealer-input"
//             placeholder="Enter Mobile OTP"
//             name="mobileOtp"
//             value={formData.mobileOtp}
//             onChange={handleChange}
//             required
//           />
//         )}
//         <input
//           type="email"
//           className="dealer-input"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         {!otpSent.email && (
//           <button type="button" className="otp-btn" onClick={() => handleOtpSubmit('email')}>
//             Email Id Verify
//           </button>
//         )}
//         {otpSent.email && (
//           <input
//             type="text"
//             className="dealer-input"
//             placeholder="Enter Email OTP"
//             name="emailOtp"
//             value={formData.emailOtp}
//             onChange={handleChange}
//             required
//           />
//         )}
//         <input
//           type="password"
//           className="dealer-input"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           className="dealer-input"
//           placeholder="Re-enter Password"
//           name="rePassword"
//           value={formData.rePassword}
//           onChange={handleChange}
//           required
//         />
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <button type="submit" className="dealer-form-btn">
//           Create Account
//         </button>
//       </form>
//       <p className="dealer-signup-label">
//         <Link to="/create-login">
//           Already have an account?<span className="dealer-signup-link"> Log in</span>
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default DealerCreate;



import React, { useState } from 'react';
import axios from 'axios';
import './DealerCreate.css';
import { Link } from 'react-router-dom';

const DealerCreate = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobileNumber: '',
    email: '',
    password: '',
    rePassword: '',
    mobileOtp: '',
    emailOtp: '',
  });
  const [otpSent, setOtpSent] = useState({ mobile: false, email: false });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Send OTP for mobile or email
  const handleOtpSubmit = async (type) => {
    try {
      const data = type === 'mobile' 
        ? { mobileNumber: formData.mobileNumber, type } 
        : { email: formData.email, type };

      const response = await axios.post('http://localhost:8000/dealer-otp', data);
      
      // Display the OTP in a pop-up alert
      alert(`OTP sent to ${type === 'mobile' ? formData.mobileNumber : formData.email}: ${response.data.otp}`);
      setOtpSent({ ...otpSent, [type]: true });
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage(`Error sending ${type} OTP`);
    }
  };

  // Create dealer account
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:8000/dealer-create-acc', formData);
      alert('Account created successfully!');
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage(error.response.data.message);
      } else if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Error creating account');
      }
      console.error(error);
    }
  };

  return (
    <div className="dealer-form-container">
      <p className="dealer-title">Create Account</p>
      <form className="dealer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="dealer-input"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          className="dealer-input"
          placeholder="Mobile Number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        {!otpSent.mobile && (
          <button type="button" className="otp-btn" onClick={() => handleOtpSubmit('mobile')}>
            Mobile No Verify
          </button>
        )}
        {otpSent.mobile && (
          <input
            type="text"
            className="dealer-input"
            placeholder="Enter Mobile OTP"
            name="mobileOtp"
            value={formData.mobileOtp}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          className="dealer-input"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {!otpSent.email && (
          <button type="button" className="otp-btn" onClick={() => handleOtpSubmit('email')}>
            Email Id Verify
          </button>
        )}
        {otpSent.email && (
          <input
            type="text"
            className="dealer-input"
            placeholder="Enter Email OTP"
            name="emailOtp"
            value={formData.emailOtp}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="password"
          className="dealer-input"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          className="dealer-input"
          placeholder="Re-enter Password"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleChange}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="dealer-form-btn">
          Create Account
        </button>
      </form>
      <p className="dealer-signup-label">
        <Link to="/create-login">
          Already have an account?<span className="dealer-signup-link"> Log in</span>
        </Link>
      </p>
    </div>
  );
};

export default DealerCreate;