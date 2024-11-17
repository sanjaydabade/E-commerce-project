
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';

const AddDealerList = () => {
  const { state } = useLocation();
  const [dealerList, setDealerList] = useState(state?.dealerList || []);
  const [prices, setPrices] = useState({});
  const [alignments, setAlignments] = useState({});
  const [tyreBrands, setTyreBrands] = useState(state?.tyreBrands || {});

  // Retrieve dealerList, prices, and alignments from local storage when the component mounts
  useEffect(() => {
    const savedDealerList = localStorage.getItem('dealerList');
    const savedPrices = localStorage.getItem('prices');
    const savedAlignments = localStorage.getItem('alignments');

    if (savedDealerList) {
      setDealerList(JSON.parse(savedDealerList));
    }
    if (savedPrices) {
      setPrices(JSON.parse(savedPrices));
    }
    if (savedAlignments) {
      setAlignments(JSON.parse(savedAlignments));
    }
  }, []);

  const handlePriceChange = (id, value) => {
    setPrices((prev) => {
      const updatedPrices = { ...prev, [id]: value };
      localStorage.setItem('prices', JSON.stringify(updatedPrices));
      return updatedPrices;
    });
  };

  const handleAlignmentChange = (id) => {
    setAlignments((prev) => {
      const updatedAlignments = { ...prev, [id]: !prev[id] };
      localStorage.setItem('alignments', JSON.stringify(updatedAlignments));
      return updatedAlignments;
    });
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
                  <h1>Dealer List</h1>
                  <p className="breadcrumbs">
                    <span><Link to="/">Home</Link></span>
                    <span><i className="mdi mdi-chevron-right"></i></span> Dealer List
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card card-default">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="responsive-data-table" className="table" style={{ width: '100%' }}>
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Vehicle Type</th>
                              <th>Tyre Brand</th>
                              <th>Price</th>
                              <th>Sales Price</th>
                              <th>Your Price</th>
                              <th>Fitting Alignment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dealerList.length > 0 ? (
                              dealerList.map((tyre) => (
                                <tr key={tyre._id}>
                                  <td>
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
                                  <td>{tyreBrands[tyre.tyreBrand] || 'Unknown Brand'}</td> {/* Use tyreBrands to get the name */}
                                  <td>₹{tyre.price}</td>
                                  <td>₹{tyre.Salesprice}</td>
                                  <td>
                                    <input
                                      type="text"
                                      placeholder="Enter your price"
                                      className="form-control"
                                      style={{ width: '120px' }}
                                      value={prices[tyre._id] || ''}
                                      onChange={(e) => handlePriceChange(tyre._id, e.target.value)}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      checked={alignments[tyre._id] || false}
                                      onChange={() => handleAlignmentChange(tyre._id)}
                                    />
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="8">No items added to the dealer list yet.</td>
                              </tr>
                            )}
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

export default AddDealerList;