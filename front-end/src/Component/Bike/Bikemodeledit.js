

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import Footer from '../Footer/Footer';
import axios from 'axios';

const BikeModelEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    image: [],
  });
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBikeModelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-bikemodel/${id}`);
        const model = response.data;

        setFormData({
          name: model.name || '',
          slug: model.slug || '',
          description: model.description || '',
          image: model.image || [],
        });

        setImagePreviews(model.image.map(img => `http://localhost:8000/uploads/${img}`));
      } catch (error) {
        console.error('Error details:', error.response || error.message || error);
        setError('Error fetching bike model details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBikeModelDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const selectedImages = Array.from(files);
      setFormData(prevFormData => ({
        ...prevFormData,
        image: selectedImages
      }));
      setImagePreviews(selectedImages.map(file => URL.createObjectURL(file)));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
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
      const response = await axios.put(`http://localhost:8000/update-bikemodel/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        navigate('/bikemodel');
      } else {
        setError('Failed to update bike model');
      }
    } catch (error) {
      console.error('Error updating bike model:', error);
      setError('Error updating bike model. Please try again later.');
    }
  };

  return (
    <div className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">
      <div className="wrapper">
        <aside className="left-sidebar">
          <Sidebar />
        </aside>

        <div className="ec-page-wrapper">
          <Navbar />
          <header className="ec-header">
            {/* Include Header Here */}
          </header>

          <div className="ec-content-wrapper">
            <div className="content">
              <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                <h1>Edit Bike Model</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>
                  Edit Bike Model
                </p>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Edit Model</h4>

                        {error && <div className="alert alert-danger">{error}</div>}

                        {loading ? (
                          <div>Loading...</div>
                        ) : (
                          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                <small>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</small>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="col-12 col-form-label">Sort Description</label>
                              <div className="col-12">
                                <textarea
                                  id="description"
                                  name="description"
                                  cols="40"
                                  rows="2"
                                  className="form-control"
                                  value={formData.description}
                                  onChange={handleChange}
                                ></textarea>
                              </div>
                            </div>

                            <div className="form-group row">
                              <div className="col-12">
                                <div className="ec-vendor-img-upload">
                                  <div className="ec-vendor-main-img">
                                    <div className="avatar-upload">
                                      <div className="avatar-edit">
                                        <input
                                          type="file"
                                          id="imageUpload"
                                          className="ec-image-upload"
                                          accept=".png, .jpg, .jpeg"
                                          multiple
                                          name="image"
                                          onChange={handleChange}
                                        />
                                        <label htmlFor="imageUpload">
                                          <img
                                            src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
                                            className="svg_img header_svg"
                                            alt="edit"
                                          />
                                        </label>
                                      </div>
                                      <div className="avatar-preview ec-preview">
                                        <div className="imagePreview ec-div-preview">
                                          {imagePreviews.map((url, index) => (
                                            <img
                                              key={index}
                                              className="ec-image-preview"
                                              src={url}
                                              alt={`preview-${index}`}
                                            />
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-12">
                                <button
                                  name="submit"
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Update Model
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
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BikeModelEdit;