


import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Siderbar/Sidebar';


const CarModelPage = () => {
  const [carModels, setCarModels] = useState([]);
  const { state } = useLocation(); // Access location state
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: []
  });
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    fetchCarModels();
  }, []);

  const fetchCarModels = async () => {
    try {
      const response = await fetch(`http://localhost:8000/get-carmodel?brandid=${state.brandid}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCarModels(data);
    } catch (error) {
      console.error('Error fetching car models:', error);
    }
  };


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: files });
      setImagePreviews(Array.from(files).map(file => URL.createObjectURL(file)));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('slug', formData.slug);
    form.append('description', formData.description);

    for (let i = 0; i < formData.image.length; i++) {
      form.append('image', formData.image[i]); // Use 'images' to match the backend expectation
    }
    form.append('brandid', state.brandid);

    try {
      const response = await fetch("http://localhost:8000/add-carmodel", {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);

      fetchCarModels(); // Refresh the car model list after adding/updating
      resetForm(); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8000/active-carmodel/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });
  
      if (response.ok) {
        setCarModels((prevModel) =>
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

  const deleteCarModel = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/delete-carmodel/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Network response was not ok');
      fetchCarModels();
    } catch (error) {
      console.error('Error deleting car model:', error);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', slug: '', description: '', image: [] });
    setImagePreviews([]);
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
                <h1>Car Model Category</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Car Model Category
                </p>
              </div>
              <div className="row">
                {/* Form to Add a Car Model */}
                <div className="col-xl-4 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Add Model</h4>
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
                            <label htmlFor="slug" className="col-12 col-form-label">Slug</label>
                            <div className="col-12">
                              <input
                                id="slug"
                                name="slug"
                                className="form-control here set-slug"
                                type="text"
                                value={formData.slug}
                                onChange={handleChange}
                              />
                              <small>
                                The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                              </small>
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-12 col-form-label">Description</label>
                            <div className="col-12">
                              <textarea
                                id="description"
                                name="description"
                                cols="40"
                                rows="2"
                                className="form-control"
                                value={formData.description}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-12 col-form-label">Upload Images</label>
                            <div className="col-12">
                              <input
                                type="file"
                                name="image"
                                className="form-control"
                                multiple
                                onChange={handleChange}
                              />
                              <div className="image-previews">
                                {imagePreviews.map((url, idx) => (
                                  <img key={idx} src={url} alt="preview" className="preview-img" />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table to Display Car Models */}
                <div className="col-xl-8 col-lg-12">
                  <div className="ec-cat-list card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                             
                              <th>Product</th>
                              <th>Total Sell</th>
                              <th>Active</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {carModels.map((model) => (
                              <tr key={model._id}>
                                    <td className="table-cell">
                {model.image.map((item, idx) => (
                  <img key={idx} src={`http://localhost:8000/uploads/${item}`} alt={item} className="cat-thumb" />
                ))}
              </td>
                                <td>{model.name}</td>
                                
                                <td>{model.product}</td>
                                <td>{model.totalsell}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={model.active}
                                    onChange={() => handleToggleActive(model._id, !model.active)}
                                  />
                                </td>
                                <td>
                                  <div className="btn-group">
                                    <Link
                                      to={`/carmodeledit/${model._id}`}
                                      className="btn btn-outline-success"
                                    >
                                      Edit
                                    </Link>

                                    <button
                                      type="button"
                                      onClick={() => deleteCarModel(model._id)}
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
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModelPage;














