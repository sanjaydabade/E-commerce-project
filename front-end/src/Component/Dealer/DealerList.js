

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
 import Sidebar from '../Siderbar/Sidebar'

const DealerList = () => {
  const [tyres, setTyres] = useState([]);
  const [tyreBrands, setTyreBrands] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [dealerPrices, setDealerPrices] = useState({});
  const [fittingAlignments, setFittingAlignments] = useState({});

  const location = useLocation();
  const { selectedBrands, tyreTypes } = location.state || { selectedBrands: {}, tyreTypes: {} };

     const navigate = useNavigate()
    const [message, setMessage] = useState(''); // State for success message
    const [dealerList, setDealerList] = useState(() => {
        // Retrieve the saved dealer list from local storage
        const savedList = localStorage.getItem('dealerList');
        return savedList ? JSON.parse(savedList) : [];
    });

  useEffect(() => {
    const fetchTyreBrands = async () => {
      try {
        const response = await fetch('http://localhost:8000/get-tyre-brands');
        if (!response.ok) throw new Error('Failed to fetch tyre brands');
        
        const data = await response.json();
        const brandMap = data.reduce((acc, brand) => {
          acc[brand._id] = brand.name;
          return acc;
        }, {});
        setTyreBrands(brandMap);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchFilteredTyres = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          selectedBrands: JSON.stringify(selectedBrands),
          tyreTypes: JSON.stringify(tyreTypes),
        }).toString();

        const response = await fetch(`http://localhost:8000/get-checkbox?${params}`);
        if (!response.ok) throw new Error('Failed to fetch tyres');
        
        const data = await response.json();
        setTyres(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTyreBrands();
    fetchFilteredTyres();
  }, [selectedBrands, tyreTypes]);


  useEffect(() => {
            localStorage.setItem('dealerList', JSON.stringify(dealerList));
        }, [dealerList]);
    
      // Function to handle checkbox toggle
      const handleCheckboxChange = (tyre) => {
        if (dealerList.some((item) => item._id === tyre._id)) {
            setDealerList(dealerList.filter((item) => item._id !== tyre._id));
            setMessage(''); // Clear message when item is unchecked
        } else {
            setDealerList([...dealerList, tyre]);
            setMessage('Added successfully to Dealer Page!'); // Set success message
    
            setTimeout(() => {
                setMessage('');
            }, 3000); // 3000 milliseconds = 3 seconds
        }
        
    };
    
        // Function to navigate to Dealer List Page
        // const handleAddProduct = () => {
        //     navigate('/add-dealer', { state: { dealerList } });
        // };


        const handleAddProduct = () => {
          navigate('/add-dealer', { state: { dealerList, tyreBrands } });
        };
    
        if (loading) {
            return <div className="loading">Loading...</div>;
        }
    
        if (error) {
            return <div className="error">Error: {error}</div>;
        }

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
                    <span><a href="#">Home</a></span>
                    <span><i className="mdi mdi-chevron-right"></i></span>Dealer
                  </p>
                </div>
                <button onClick={handleAddProduct} className="btn btn-primary">
                                         Show Product
                                    </button>
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
                              <th>Tyre Brand</th>
                              <th>Price</th>
                              <th>Sales Price</th>
                              <th>Add To DealerPage</th>

                              
                            </tr>
                          </thead>
                          {/* <tbody>
                            {tyres.map((tyre) => (
                              <tr key={tyre._id}>
                                <td className="table-cell">
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
                                <td>{tyreBrands[tyre.tyreBrand] || 'Unknown Brand'}</td>
                                <td>₹{tyre.price}</td>
                                <td>₹{tyre.Salesprice}</td>
                                <td>
                                <input
                                      type="checkbox"
                                      checked={dealerList.some((item) => item._id === tyre._id)}
                                      onChange={() => handleCheckboxChange(tyre)}
                                  />
                            </td>
                              </tr>
                            ))}
                          </tbody> */}


<tbody>
  {tyres.map((tyre) => (
    <tr key={tyre._id}>
      <td className="table-cell">
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
      <td>{tyreBrands?.[tyre.tyreBrand] || 'Unknown Brand'}</td> {/* Add safe check with ?. */}
      <td>₹{tyre.price}</td>
      <td>₹{tyre.Salesprice}</td>
      <td>
        <input
          type="checkbox"
          checked={dealerList.some((item) => item._id === tyre._id)}
          onChange={() => handleCheckboxChange(tyre)}
        />
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

export default DealerList;   





