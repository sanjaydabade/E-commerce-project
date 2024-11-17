


import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import { useParams, useNavigate } from 'react-router-dom';

export default function DealerEdit() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    contactPersonName: '',
    mobileNumber: '',
    emailId: '',
    pincode: '',
    city: '',
    state: '',
    tyreBrand: '',
    
  });
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 

  // Fetch dealer details for editing
  useEffect(() => {
    const fetchDealerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/edit-dealer/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const dealer = await response.json();

        setFormData({
          name: dealer.name || '',
          contactPersonName: dealer.contactPersonName || '',
          mobileNumber: dealer.mobileNumber || '',
          emailId: dealer.emailId || '',
          pincode: dealer.pincode || '',
          city: dealer.city || '',
          state: dealer.state || '',
          tyreBrand: dealer.tyreBrand || '',
          
        });

      } catch (error) {
        setError('Error fetching dealer details. Please try again later.');
        console.error('Error fetching dealer details:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDealerDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/update-dealer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Update successful:', data);

      navigate('/dealer'); // Navigate to the list of dealers or wherever appropriate
    } catch (error) {
      console.error('Error updating dealer:', error);
      setError('Error updating dealer. Please try again later.');
    }
  };

  return (
    <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <Sidebar />
        <div className="ec-page-wrapper">
          <Navbar />
          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                <h1>Edit Dealer</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Edit Dealer
                </p>
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Edit Dealer</h4>
                        {error && <p className="text-danger">{error}</p>}
                        {!error && (
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
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
                              <div className="col-12">
                                <input
                                  id="tyreBrand"
                                  name="tyreBrand"
                                  className="form-control here slug-title"
                                  type="text"
                                  value={formData.tyreBrand}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            {/* Submit button */}
                            <div className="form-group row">
                              <div className="col-12">
                                <button type="submit" className="btn btn-primary">
                                  Update Dealer
                                </button>
                              </div>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}