

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Tyrebrand = () => {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
 


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  
  const fetchBrands = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch('http://localhost:8000/get-tyre-brands');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error('Error fetching tyre brands:', error);
      setError('Failed to load tyre brands. Please try again later.');
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchBrands(); // Fetch brands on component mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('slug', formData.slug);
    form.append('description', formData.description);
    for (let i = 0; i < formData.image.length; i++) {
      form.append('image', formData.image[i]);
    }

    try {
      await axios.post('http://localhost:8000/add-tyre-brand', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Added new car brand:', formData); // Log form data
      fetchBrands(); // Refresh the car brand list after adding
      resetForm(); // Reset the form
    } catch (error) {
      console.error('Error adding car brand:', error);
    }
  };

  // Reset form and previews
  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      image: [],
    });
    setImagePreviews([]);
  };



  // Handle brand deletion
  const  deletetyreBrand = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/delete-tyre-brand/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBrands((prevBrands) => prevBrands.filter((brand) => brand._id !== id));
      } else {
        const errorText = await response.text();
        setError(`Failed to delete brand: ${errorText}`);
      }
    } catch (error) {
      setError(`Error deleting brand: ${error.message}`);
    }
  };

  // Handle navigation to edit page
  const handleEdit = (id) => {
    // navigate(`/tyreedit/${id}`);
  };

  // Handle image upload
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const selectedImages = Array.from(files);
      setFormData({ ...formData, image: selectedImages });
      setImagePreviews(selectedImages.map(file => URL.createObjectURL(file)));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8000/active-tyres/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });
  
      if (response.ok) {
        setBrands((prevBrands) =>
          prevBrands.map((brand) =>
            brand._id === id ? { ...brand, active: newStatus } : brand
          )
        );
      } else {
        const errorText = await response.text();
        setError(`Failed to update tyre status: ${errorText}`);
      }
    } catch (error) {
      setError(`Error updating tyre status: ${error.message}`);
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
              <h1>Tyre Brand Category</h1>
              <p className="breadcrumbs">
                <span><a href="#">Home</a></span>
                <span><i className="mdi mdi-chevron-right"></i></span>Tyre Brand Category
              </p>
            </div>
            <div className="row">
              {/* Form to Add a Car Brand */}
              <div className="col-xl-4 col-lg-12">
                <div className="ec-cat-list card card-default mb-24px">
                  <div className="card-body">
                    <div className="ec-cat-form ec-vendor-uploads">
                      <h4>Add Category</h4>
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
                            <button type="submit" className="btn btn-primary">Add</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table to Display Car Brands */}
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
                          {brands.map((brand) => (
                            <tr key={brand._id}>
                             

              <td className="table-cell">
              {brand.image.map((item, idx) => (
                <img key={idx} src={`http://localhost:8000/uploads/${item}`} alt={item} className="cat-thumb" />
              ))}
            </td>
                              <td>{brand.name}</td>
                              
                              <td>{brand.product}</td>
                              <td>{brand.Totalsell}</td>
                              <td>
                                  <input
                                    type="checkbox"
                                    checked={brand.active}
                                    onChange={() => handleToggleActive(brand._id, !brand.active)}
                                  />
                                </td>


                              <td>
                                <div className="btn-group">
                                  <Link 
                                     to={`/tyreedit/${brand._id}`} 
                                    className="btn btn-outline-success"
                                  >
                                    Edit
                                  </Link>
                                 

                                  <button
                                    type="button"
                                    onClick={() => deletetyreBrand(brand._id)}
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

export default Tyrebrand;





