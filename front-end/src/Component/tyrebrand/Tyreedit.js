

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import Footer from '../Footer/Footer';
import axios from 'axios';
import Sidebar from '../Siderbar/Sidebar';

const TyreEdit = () => {
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
    const fetchBrand = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-tyre-brand/${id}`);
        const data = response.data;

        setFormData({
          name: data.name,
          slug: data.slug,
          description: data.description,
          image: data.image,
        });

        setImagePreviews(data.image.map(file => `http://localhost:8000/uploads/${file}`));
      } catch (error) {
        console.error('Error fetching tyre brand:', error);
        setError('Failed to load tyre brand. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBrand();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      image: files,
    });
    setImagePreviews(files.map(file => URL.createObjectURL(file)));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('slug', formData.slug);
      formDataToSend.append('description', formData.description);
      formData.image.forEach((file) => {
        formDataToSend.append('image', file);
      });

      const response = await axios.put(`http://localhost:8000/update-tyre-brand/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Update successful:', response.data);
      navigate('/tyre');
    } catch (error) {
      console.error('Error updating tyre brand:', error);
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
                <h1>Edit Tyre Brand</h1>
                <p className="breadcrumbs">
                  <span><a href="#">Home</a></span>
                  <span><i className="mdi mdi-chevron-right"></i></span>
                  Edit Tyre Brand
                </p>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="ec-cat-list card card-default mb-24px">
                    <div className="card-body">
                      <div className="ec-cat-form ec-vendor-uploads">
                        <h4>Edit Brand</h4>

                        {error && <div className="alert alert-danger">{error}</div>}
                        {loading ? (
                          <div>Loading...</div>
                        ) : (
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
                                  onChange={handleInputChange}
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
                                  onChange={handleInputChange}
                                />
                                <small>The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.</small>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label htmlFor="description" className="col-12 col-form-label">Sort Description</label>
                              <div className="col-12">
                                <textarea
                                  id="description"
                                  name="description"
                                  cols="40"
                                  rows="2"
                                  className="form-control"
                                  value={formData.description}
                                  onChange={handleInputChange}
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
                                          onChange={handleImageChange}
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
                                  Update Brand
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

export default TyreEdit;