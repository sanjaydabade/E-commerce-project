


import React, { useState, useEffect } from 'react';
import './Productlist.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';

const ProductList = () => {
  const [tyres, setTyres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTyres = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8000/get-tyres');
        const data = await response.json();
        console.log(data);
        setTyres(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTyres();
  }, []);




  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Toggle active status
  const handleToggleActive = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8000/active-tyre/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: newStatus }),
      });
  
      if (response.ok) {
        setTyres((prevTyres) =>
          prevTyres.map((tyre) =>
            tyre._id === id ? { ...tyre, active: newStatus } : tyre
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

  // Delete API fetch
  const handleDelete = async (tyre) => {
    console.log(tyre); // Add this line to check the tyre object
    const id = tyre._id;
    const type = tyre.tyreType;

    if (!type) {
      console.error("Tyre type is not defined");
      return;
    }

    try {
      await fetch(`http://localhost:8000/api/tyres/${type}/${id}`, {
        method: 'DELETE',
      });
      setTyres(tyres.filter((t) => t._id !== id));
    } catch (error) {
      console.error(error);
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
              <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                <div>
                  <h1>Product</h1>
                  <p className="breadcrumbs">
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span>Product
                  </p>
                </div>
                <div>
                  <a href="addproduct" className="btn btn-primary">Add Product</a>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="responsive-data-table" className="table" style={{ width: "100%" }}>
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Vehicle Type</th>
                              <th>Car Brand</th>
                              <th>Car Model</th>
                              <th>Bike Brand</th>
                              <th>Bike Model</th>
                              <th>Tyre Brand</th>
                              <th>Price</th>
                              <th>Sales Price</th>
                              <th>Manufacturing Year</th>
                              <th>Active</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tyres.map((tyre) => (
                              <tr key={tyre._id}>
                                <td className="table-cell">
                                  {/* Display avatar */}
                                  {tyre.avatarImages && (
                                    <img
                                      src={`http://localhost:8000/uploads/${tyre.avatarImages}`}
                                      alt="Avatar"
                                      className="tbl-thumb"
                                    />
                                  )}
                                 
                                </td>
                                <td>{tyre.title}</td>
                                <td>{tyre.tyreType}</td>
                                <td>{tyre.carbrand}</td>
                                <td>{tyre.carModel}</td>
                                <td>{tyre.bikeBrand}</td>
                                <td>{tyre.bikeModel}</td>
                                <td>{tyre.tyreBrand}</td>
                                <td>₹{tyre.price}</td>
                                <td>₹{tyre.Salesprice}</td>
                                <td>{tyre.manufactureYear}</td>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={tyre.active}
                                    onChange={() => handleToggleActive(tyre._id, !tyre.active)}
                                  />
                                </td>
                                <td>
                                  <div className="btn-group">
                                    <Link
                                      to={`/addproductedit/${tyre._id}/${tyre.tyreType}`}
                                      className="btn btn-outline-success"
                                    >
                                      Edit
                                    </Link>
                                   
                                    <button
                                      type="button"
                                      onClick={() => handleDelete(tyre)}
                                      className="btn btn-outline-success"
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
    </div>
  );
};

export default ProductList;




