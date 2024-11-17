



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Footer from '../Footer/Footer';
// import Sidebar from '../Siderbar/Sidebar';
// import Navbar from '../Navbar/Navbar';

// import Select from 'react-select'
// const DealerPage = () => {
//   const [dealers, setDealers] = useState([]);
//   const [tyreBrands, setTyreBrands] = useState([]);
//   const [selectedTyreBrand, setSelectedTyreBrand] = useState([]); 
//   const [formData, setFormData] = useState({
//     name: '',
//     contactpersonname: '',
//     contactNumber: '',
//     mobileNumber: '',
//     emailId: '',
//     pincode: '',
//     city: '',
//     state: '',
//     tyreBrand: '',
//     address:''

//   });
//   const [error, setError] = useState(null);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const navigate = useNavigate();

//   // Fetch dealers from the API
//   useEffect(() => {
//     const fetchDealers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/get-dealer');
//         setDealers(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchDealers();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     if (type === 'file') {
//       const fileArray = Array.from(files);
//       const previewUrls = fileArray.map(file => URL.createObjectURL(file));
//       setImagePreviews(previewUrls);

//       setFormData({
//         ...formData,
//         [name]: files
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleSelectChange = (selectedOptions) => {
//     const selectedValues = selectedOptions.map(option => option.value);
//     setSelectedTyreBrand(selectedOptions); // Keep the selected options for displaying
//     setFormData({
//       ...formData,
//       tyreBrand: selectedValues // Save the selected values in the form data
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/add-dealer', formData);
//       setDealers([...dealers, response.data.dealer]);
//       setFormData({
//         name: '',
//         contactpersonname: '',
//         contactNumber:'',
//         mobileNumber: '',
//         emailId: '',
//         pincode: '',
//         city: '',
//         state: '',
//         tyreBrand: [],
//         address:''
//       });
//       setImagePreviews([]);
//     } catch (error) {
//       setError(error.message);
//     }
//   };



//   const handleToggleActive = async (id, newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:8000/active-dealer/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ active: newStatus }),
//       });
  
//       if (response.ok) {
//         setDealers((prevModel) =>
//           prevModel.map((model) =>
//             model._id === id ? { ...model, active: newStatus } : model
//           )
//         );
//       } else {
//         const errorText = await response.text();
//         setError(`Failed to update brand status: ${errorText}`);
//       }
//     } catch (error) {
//       setError(`Error updating brand status: ${error.message}`);
//     }
//   };

//   // Handle delete
//   const deleteDealer = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/delete-dealer/${id}`);
//       setDealers(dealers.filter(dealer => dealer._id !== id));
//     } catch (error) {
//       setError(error.message);
//     }
//   };


//   useEffect(() => {
//     const fetchTyreBrands = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/get-tyre-brands');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setTyreBrands(data);
//       } catch (error) {
//         console.error('Failed to load tyre brands:', error);
//       }
//     };

//     fetchTyreBrands();
//   }, []);

//   const activeTyreBrands = tyreBrands.filter(brand => brand.active);



//   return (
//     <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
//       <div className="wrapper">
//         <Sidebar />
//         <div className="ec-page-wrapper">
//           <Navbar />
//           <div className="ec-content-wrapper">
//             <div className="content">
//               <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
//                 <h1>Dealer Page</h1>
//                 <p className="breadcrumbs">
//                   <span><a href="#">Home</a></span>
//                   <span><i className="mdi mdi-chevron-right"></i></span>Dealer Page
//                 </p>
//               </div>
//               <div className="row">
//                 {/* Form to Add a Dealer */}
//                 <div className="col-xl-4 col-lg-12">
//                   <div className="ec-cat-list card card-default mb-24px">
//                     <div className="card-body">
//                       <div className="ec-cat-form ec-vendor-uploads">
//                         <h4>Add Dealer</h4>
//                         <form onSubmit={handleSubmit}>
//                           <div className="form-group row">
//                             <label htmlFor="name" className="col-12 col-form-label">Name</label>
//                             <div className="col-12">
//                               <input
//                                 id="name"
//                                 name="name"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="form-group row">
//                              <label htmlFor="contactPersonName" className="col-12 col-form-label">Contact Person Name</label>
//                            <div className="col-12">
//                                <input
//                                 id="contactPersonName"
//                                 name="contactpersonname"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.contactpersonname}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>


//                           <div className="form-group row">
//                             <label htmlFor="contactNumber" className="col-12 col-form-label">Contact Number</label>
//                             <div className="col-12">
//                               <input
//                                 id="contactNumber"
//                                 name="contactNumber"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.contactNumber}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

                         

//                           <div className="form-group row">
//                             <label htmlFor="mobileNumber" className="col-12 col-form-label">Mobile Number</label>
//                             <div className="col-12">
//                               <input
//                                 id="mobileNumber"
//                                 name="mobileNumber"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.mobileNumber}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="form-group row">
//                             <label htmlFor="emailId" className="col-12 col-form-label">Email ID</label>
//                             <div className="col-12">
//                               <input
//                                 id="emailId"
//                                 name="emailId"
//                                 className="form-control here slug-title"
//                                 type="email"
//                                 value={formData.emailId}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="form-group row">
//                             <label htmlFor="pincode" className="col-12 col-form-label">Pincode</label>
//                             <div className="col-12">
//                               <input
//                                 id="pincode"
//                                 name="pincode"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.pincode}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>


//                           <div className="form-group row">
//                             <label htmlFor="address" className="col-12 col-form-label">Address</label>
//                             <div className="col-12">
//                               <input
//                                 id="address"
//                                 name="address"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="form-group row">
//                             <label htmlFor="city" className="col-12 col-form-label">City</label>
//                             <div className="col-12">
//                               <input
//                                 id="city"
//                                 name="city"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.city}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="form-group row">
//                             <label htmlFor="state" className="col-12 col-form-label">State</label>
//                             <div className="col-12">
//                               <input
//                                 id="state"
//                                 name="state"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.state}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div className="form-group row">
//                             <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
//                             <div className="col-12">
//                               <input
//                                 id="tyreBrand"
//                                 name="tyreBrand"
//                                 className="form-control here slug-title"
//                                 type="text"
//                                 value={formData.tyreBrand}
//                                 onChange={handleChange}
//                                 required
//                               />
//                             </div>
//                           </div>
      

//                           <div className="row">
//                             <div className="col-12">
//                               <button type="submit" className="btn btn-primary">Add</button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Table to Display Dealers */}
//                 <div className="col-xl-8 col-lg-12">
//                   <div className="ec-cat-list card card-default">
//                     <div className="card-body">
//                       <div className="table-responsive">
//                         <table className="table">
//                           <thead>
//                             <tr>
                              
//                               <th>Name</th>
//                               <th>Contact Person Name</th>
//                               <th>Contact Number</th>
//                               <th>Mobile Number</th>
//                               <th>Email</th>
//                               <th>Address</th>
//                               <th>Pincode</th>
//                               <th>City</th>
//                               <th>State</th>
//                               <th>Tyre Brand</th>
//                               <th>Active</th>
//                               <th>Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {dealers.map(dealer => (
//                               <tr key={dealer._id}>
                                
//                                 <td>{dealer.name}</td>
//                                 <td>{dealer.contactpersonname}</td>
//                                 <td>{dealer.contactNumber}</td>                               
//                                 <td>{dealer.mobileNumber}</td>
//                                 <td>{dealer.emailId}</td>
//                                 <td>{dealer.address}</td>
//                                 <td>{dealer.pincode}</td>
//                                 <td>{dealer.city}</td>
//                                 <td>{dealer.state}</td>
//                                 <td>{dealer.tyreBrand}</td>
//                                 <td>
//                                   <input
//                                     type="checkbox"
//                                     checked={dealer.active}
//                                     onChange={() => handleToggleActive(dealer._id, !dealer.active)}
//                                   />
//                                 </td>
//                                 <td>
//                                   <div className="btn-group">
//                                     <Link
//                                       to={`/dealer-edit/${dealer._id}`}
//                                       className="btn btn-outline-success"
//                                     >
//                                       Edit
//                                     </Link>
                                   
//                                     <button
//                                       type="button"
//                                       onClick={() => deleteDealer(dealer._id)}
//                                       className="btn btn-outline-danger"
//                                     >
//                                       Delete
//                                     </button>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </body>
//   );
// };

// export default DealerPage;




import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';
import Select from 'react-select';
import Sidebar from '../Siderbar/Sidebar';

const DealerPage = () => {
  const [dealers, setDealers] = useState([]);
  const [tyreBrands, setTyreBrands] = useState([]);
  const [selectedTyreBrand, setSelectedTyreBrand] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    contactpersonname: '',
    contactNumber: '',
    mobileNumber: '',
    emailId: '',
    pincode: '',
    city: '',
    state: '',
    tyreBrand: [],
    address: ''
  });
  const [error, setError] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  // Fetch dealers from the API
  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-dealer');
        setDealers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDealers();
  }, []);

  // Fetch tyre brands from the API
  useEffect(() => {
    const fetchTyreBrands = async () => {
      try {
        const response = await fetch('http://localhost:8000/get-tyre-brands');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTyreBrands(data);
      } catch (error) {
        console.error('Failed to load tyre brands:', error);
      }
    };

    fetchTyreBrands();
  }, []);

  const activeTyreBrands = tyreBrands.filter(brand => brand.active);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const fileArray = Array.from(files);
      const previewUrls = fileArray.map(file => URL.createObjectURL(file));
      setImagePreviews(previewUrls);

      setFormData({
        ...formData,
        [name]: files
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

 


  const handleSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map(option => option.value); // Keep as IDs
    setSelectedTyreBrand(selectedOptions);
    setFormData({
      ...formData,
      tyreBrand: selectedValues
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/add-dealer', formData);
      setDealers([...dealers, response.data.dealer]);
      setFormData({
        name: '',
        contactpersonname: '',
        contactNumber: '',
        mobileNumber: '',
        emailId: '',
        pincode: '',
        city: '',
        state: '',
        tyreBrand: [],
        address: ''
      });
      setImagePreviews([]);
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle toggle active status
  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8000/active-dealer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });

      if (response.ok) {
        setDealers((prevModel) =>
          prevModel.map((model) =>
            model._id === id ? { ...model, active: newStatus } : model
          )
        );
      } else {
        const errorText = await response.text();
        setError(`Failed to update brand status: ${errorText}`);
      }
    } catch (error) {
      setError(`Error updating brand status: ${error.message}`);
    }
  };

  // Handle delete
  const deleteDealer = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/delete-dealer/${id}`);
      setDealers(dealers.filter(dealer => dealer._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                <h1>Dealer Page</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Dealer Page
                </p>
              </div>
              <div className="row">
                {/* Form to Add a Dealer */}
                <div className="col-xl-4 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Add Dealer</h4>
                        <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                             <label htmlFor="name" className="col-12 col-form-label">Name</label>
                             <div className="col-12">
                               <input
                                id="name"
                                name="name"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                             <label htmlFor="contactPersonName" className="col-12 col-form-label">Contact Person Name</label>
                           <div className="col-12">
                               <input
                                id="contactPersonName"
                                name="contactpersonname"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.contactpersonname}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>


                          <div className="form-group row">
                            <label htmlFor="contactNumber" className="col-12 col-form-label">Contact Number</label>
                            <div className="col-12">
                              <input
                                id="contactNumber"
                                name="contactNumber"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                         

                          <div className="form-group row">
                            <label htmlFor="mobileNumber" className="col-12 col-form-label">Mobile Number</label>
                            <div className="col-12">
                              <input
                                id="mobileNumber"
                                name="mobileNumber"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="emailId" className="col-12 col-form-label">Email ID</label>
                            <div className="col-12">
                              <input
                                id="emailId"
                                name="emailId"
                                className="form-control here slug-title"
                                type="email"
                                value={formData.emailId}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="pincode" className="col-12 col-form-label">Pincode</label>
                            <div className="col-12">
                              <input
                                id="pincode"
                                name="pincode"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>


                          <div className="form-group row">
                            <label htmlFor="address" className="col-12 col-form-label">Address</label>
                            <div className="col-12">
                              <input
                                id="address"
                                name="address"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="city" className="col-12 col-form-label">City</label>
                            <div className="col-12">
                              <input
                                id="city"
                                name="city"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label htmlFor="state" className="col-12 col-form-label">State</label>
                            <div className="col-12">
                              <input
                                id="state"
                                name="state"
                                className="form-control here slug-title"
                                type="text"
                                value={formData.state}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="form-group row">
                            <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
                            <div className="col-12">
                            <Select
                      id="tyreBrand"
                      name="tyreBrand"
                      value={selectedTyreBrand}
                      onChange={handleSelectChange}
                      options={activeTyreBrands.map(brand => ({
                        value: brand._id, // ID for form data
                        label: brand.name // Name for display
                      }))}
                      className="form-input"
                      isMulti
                    />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table to Display Dealers */}
                <div className="col-xl-8 col-lg-12">
                  <div className="ec-cat-list card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Contact Person Name</th>
                              <th>Contact Number</th>
                              <th>Mobile Number</th>
                              <th>Email</th>
                              <th>Address</th>
                              <th>Pincode</th>
                              <th>City</th>
                              <th>State</th>
                              <th>Tyre Brand</th>
                              <th>Active</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dealers.map(dealer => (
                              <tr key={dealer._id}>
                                <td>{dealer.name}</td>
                                <td>{dealer.contactpersonname}</td>
                                <td>{dealer.contactNumber}</td>
                                <td>{dealer.mobileNumber}</td>
                                <td>{dealer.emailId}</td>
                                <td>{dealer.address}</td>
                                <td>{dealer.pincode}</td>
                                <td>{dealer.city}</td>
                                <td>{dealer.state}</td>
                                {/* <td>{dealer.tyreBrand.join(', ')}</td> */}

                                <td>
                                  {dealer.tyreBrand.map(id => {
                                    const brand = tyreBrands.find(b => b._id === id);
                                    return brand ? brand.name : 'Unknown';
                                  }).join(', ')}
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={dealer.active}
                                    onChange={() => handleToggleActive(dealer._id, !dealer.active)}
                                  />
                                </td>
                                <td>
                                  <div className="btn-group">
                                    <Link
                                      to={`/dealer-edit/${dealer._id}`}
                                      className="btn btn-outline-success"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      type="button"
                                      onClick={() => deleteDealer(dealer._id)}
                                      className="btn btn-outline-danger"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </body>
  );
};

export default DealerPage;