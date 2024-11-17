


import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../Siderbar/Sidebar';

export default function Caredit() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: [], 
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); 

  // Fetch car brand details for editing
  useEffect(() => {
    const fetchCarBrandDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/get-carbrand/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const brand = await response.json();

        setFormData({
          name: brand.name || '',
          slug: brand.slug || '',
          description: brand.description || '',
          image: [], // Initialize empty array for new images
        });

        setImagePreviews(brand.image.map(img => `http://localhost:8000/uploads/${img}`));
      } catch (error) {
        setError('Error fetching car brand details. Please try again later.');
        console.error('Error fetching car brand details:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCarBrandDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const selectedImages = Array.from(files);
      setFormData(prevFormData => ({
        ...prevFormData,
        image: selectedImages,
      }));
      setImagePreviews(selectedImages.map(file => URL.createObjectURL(file)));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('slug', formData.slug);
    formDataToSend.append('description', formData.description);
    formData.image.forEach((file) => {
      formDataToSend.append('image', file);
    });

    try {
      const response = await fetch(`http://localhost:8000/car-update/${id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Update successful:', data);

      // Update image previews if new images were uploaded
      if (data.image && Array.isArray(data.image)) {
        setImagePreviews(data.image.map(img => `http://localhost:8000/uploads/${img}`));
      }

      navigate('/carbrand');
    } catch (error) {
      console.error('Error updating car brand:', error);
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
                <h1>Edit Car Brand Category</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>Edit Car Brand Category
                </p>
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Edit Category</h4>
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
                                <button type="submit" className="btn btn-primary">Update Category</button>
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
    </body>
  );
}