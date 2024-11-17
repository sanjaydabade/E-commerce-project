
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Siderbar/Sidebar';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useNavigate, useParams } from 'react-router-dom';


 const AddproductEdit = () => {

const {id , tyreType} = useParams()
console.log(id , tyreType);

const [title, setTitle] = useState('');
const [type,setType] = useState('')
const [width, setWidth] = useState([]);
const [height, setHeight] = useState([]);
const [customs, setCustoms] = useState([]);
const [seasons, setSeasons] = useState([]);

const [speedRating, setspeedRating] = useState([]);
const [loadCapacity, setloadCapacity] = useState([]);
const [material, setMaterial] = useState([]);
const [image, setImage] = useState([]);
const [price, setPrice] = useState('');
const [Salesprice, setSalesprice] = useState('');
const [description, setDescription] = useState('');
const [fronttyre, setFronttyre] = useState('');
const [reartyre, setRearTyre] = useState('');
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);
const [manufactureMonth, setManufactureMonth] = useState('');
const [manufactureYear, setManufactureYear] = useState('');
const [description1, setDescription1] = useState('');
const [warranty, setWarranty] = useState('');

const [selectedStates, setSelectedStates] = useState([]);
const [selectedCities, setSelectedCities] = useState([]);
const [quantity, setQuantity] = useState('');
const [tyreBrands, setTyreBrands] = useState([]);
const [selectedTyreBrands, setSelectedTyreBrand] = useState([]);
const [selectedCarModels, setSelectedCarModels] = useState([]);
const [carBrands, setCarBrands] = useState([]);
const [carModels, setCarModels] = useState([]);
const [selectedCarBrands, setSelectedCarBrands] = useState([]); // Supports multiple selections
const [bikeBrands, setBikeBrands] = useState([]);
const [bikeModels, setBikeModels] = useState([]);
const [selectedBikeBrands, setSelectedBikeBrands] = useState([]);
const [selectedBikeModels, setSelectedBikeModels] = useState([]);
const [formData , setFormData] = useState([])
const [cities, setCities] = useState([]);
const [avatarImages, setAvatarImages] = useState([]);
const [avatarImageUrls, setAvatarImageUrls] = useState([]);
const [thumb1Images, setThumb1Images] = useState([]);
const [thumb1ImageUrls, setThumb1ImageUrls] = useState([]);
const [thumb2Images, setThumb2Images] = useState([]);
const [thumb2ImageUrls, setThumb2ImageUrls] = useState([]);
const [thumb3Images, setThumb3Images] = useState([]);
const [thumb3ImageUrls, setThumb3ImageUrls] = useState([])
const [thumb4Images, setThumb4Images] = useState([]);
const [thumb4ImageUrls, setThumb4ImageUrls] = useState([]);
const [thumb5Images, setThumb5Images] = useState([]);
const [thumb5ImageUrls, setThumb5ImageUrls] = useState([]);
const [thumb6Images, setThumb6Images] = useState([]);
const [thumb6ImageUrls, setThumb6ImageUrls] = useState([]);
const [State, setState] = useState('');
const [selectedCity, setSelectedCity] = useState('');
const [pinCode, setPinCode] = useState('');
const [details, setDetails] = useState('');


const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

const navigate = useNavigate()

  const [addresses, setAddresses] = useState([
    { state: '', city: '', pinCode: '', details: '' }
  ]);

  const addAddress = () => {
    setAddresses([...addresses, { state: '', city: '', pinCode: '', details: '' }]);
  };

  const removeAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  const handleStateChange = (index, state) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].state = state;
    updatedAddresses[index].city = ''; // Reset city when state changes
    setAddresses(updatedAddresses);
    setCities(stateCityData[state] || []);
  };

  const handleCityChange = (index, city) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index].city = city;
    setAddresses(updatedAddresses);
  };

  const handleInputChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  
  // List of months and years
  const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const yearOptions = Array.from({ length: 20 }, (v, k) => (new Date().getFullYear() - k).toString());

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': [] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  // Define the formats to be used in the editor
  const formats = [
    'header', 'font', 'list', 'bullet', 'script', 'indent', 'direction', 'size', 'color', 'background', 'align', 'bold', 'italic', 'underline', 'link', 'image'
  ];
  
  
  const handleEditorChange = (content) => {
    setDescription1(content);
  };


  // Object holding states and their respective cities
  const stateCityData = {
    AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Anantapur'],
    ArunachalPradesh: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Bomdila', 'Tezu', 'Changlang'],
    Assam: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'],
    Bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia', 'Ara', 'Begusarai'],
    Chhattisgarh: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
    Goa: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Canacona'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh'],
    Haryana: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Sonipat', 'Rohtak'],
    HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Bilaspur', 'Chamba'],
    Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
    Karnataka: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Belgaum', 'Davangere', 'Gulbarga', 'Shimoga'],
    Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Palakkad', 'Alappuzha'],
    MadhyaPradesh: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Kolhapur', 'Solapur'],
    Manipur: ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Kakching'],
    Meghalaya: ['Shillong', 'Tura', 'Nongpoh', 'Cherrapunji', 'Nongstoin', 'Baghmara', 'Jowai', 'Mawkyrwat'],
    Mizoram: ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Saiha', 'Kolasib', 'Lawngtlai', 'Mamit'],
    Nagaland: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto', 'Phek'],
    Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Berhampur', 'Sambalpur', 'Balasore', 'Baripada'],
    Punjab: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali'],
    Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bharatpur'],
    Sikkim: ['Gangtok', 'Namchi', 'Geyzing', 'Pelling', 'Ravangla', 'Mangan', 'Yuksom', 'Jorethang'],
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Vellore', 'Erode'],
    Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Ramagundam', 'Suryapet'],
    Tripura: ['Agartala', 'Udaipur', 'Kailashahar', 'Dharmanagar', 'Ambassa', 'Belonia', 'Khowai', 'Teliamura'],
    UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad', 'Bareilly'],
    Uttarakhand: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani', 'Roorkee', 'Rudrapur', 'Kashipur'],
    WestBengal: ['Kolkata', 'Howrah', 'Darjeeling', 'Siliguri', 'Asansol', 'Durgapur', 'Kharagpur', 'Malda']
  };
  



  useEffect(() => {
    const fetchTyreData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/get-tyre/${id}/${tyreType}`);
  
        if (!response.ok) {
          throw new Error('Failed to fetch tyre data');
        }
  
        const data = await response.json(); // Directly parse as JSON
  
        // Populate the state with fetched data
        setTitle(data.title || '');
        setWidth(data.width || []);
        setHeight(data.height || []);
        setSelectedCarBrands(data.carbrand || []);
        setSelectedCarModels(data.carModel || []);
        setSelectedTyreBrand(data.tyreBrand || []);
        setSelectedBikeBrands(data.bikeBrand || []);
        setSelectedBikeModels(data.bikeModel || []);
        setCustoms(data.customs || []);
        setSeasons(data.seasons || []);
        setspeedRating(data.speedRating || []);
        setloadCapacity(data.loadCapacity || []);
        setMaterial(data.material || []);
        setImage(data.image || []);
        setPrice(data.price || '');
        setSalesprice(data.Salesprice || '');
        setDescription(data.description || '');
        setFronttyre(data.frontTyre || '');
        setRearTyre(data.rearTyre || '');
        setManufactureMonth(data.manufactureMonth || '');
        setManufactureYear(data.manufactureYear || '');
        setWarranty(data.warranty || '');
        setQuantity(data.quantity || '');
        setDescription1(data.description1 || '');
  
        // Set avatar and thumbnail images
        setAvatarImages(data.avatarImages || []); // Expect an array for avatarImages
        setThumb1Images(data.thumb1Images || '');
        setThumb2Images(data.thumb2Images || '');
        setThumb3Images(data.thumb3Images || '');
        setThumb4Images(data.thumb4Images || '');
        setThumb5Images(data.thumb5Images || '');
        setThumb6Images(data.thumb6Images || '');
  
        // Set address data
        if (data.addresses && data.addresses.length > 0) {
          const address = data.addresses[0];
          setState(address.state || '');
          setSelectedCity(address.city || '');
          setPinCode(address.pinCode || '');
          setDetails(address.details || '');
        }
  
        // setSuccess('Tyre data fetched successfully!');
      } catch (error) {
        setError('Error fetching tyre data');
        console.error(error);
      }
    };
  
    fetchTyreData();
  }, [id, tyreType]);





  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
  
    // Append text fields
    formData.append('title', title);
    formData.append('tyreType', tyreType);
    formData.append('carbrand', selectedCarBrands.map(option => option.value).join(','));
    formData.append('carModel', selectedCarModels.map(option => option.value).join(','));
    formData.append('bikeBrand', selectedBikeBrands.map(option => option.value).join(','));
    formData.append('bikeModel', selectedBikeModels.map(option => option.value).join(','));
    formData.append('tyreBrand', selectedTyreBrands.map(option => option.value).join(','));
    formData.append('width', width);
    formData.append('height', height);
    formData.append('customs', Array.isArray(customs) ? customs.join(',') : customs);
    // formData.append('seasons', seasons.map(option => option.value).join(','));

    formData.append('seasons', Array.isArray(seasons) ? seasons.join(',') : '');
    formData.append('speedRating', speedRating);
    formData.append('loadCapacity', loadCapacity);
    formData.append('fronttyre', fronttyre);
    formData.append('reartyre', reartyre);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('Salesprice', Salesprice);
    formData.append('description', description);
    formData.append('description1', description1);
    formData.append('manufactureMonth', manufactureMonth);
    formData.append('manufactureYear', manufactureYear);
    formData.append('material', material);
    formData.append('state', selectedStates);
    formData.append('city', selectedCities);
    formData.append('pinCode', pinCode);
    formData.append('details', details);
    formData.append('addresses', JSON.stringify(addresses));
  
    // Append image files (check if they are arrays)
    if (Array.isArray(avatarImages)) {
      avatarImages.forEach(file => formData.append('avatar', file));
    }
  
    if (Array.isArray(thumb1Images)) {
      thumb1Images.forEach(file => formData.append('thumb1', file));
    } else if (thumb1Images) {
      formData.append('thumb1', thumb1Images);
    }
  
    if (Array.isArray(thumb2Images)) {
      thumb2Images.forEach(file => formData.append('thumb2', file));
    }
  
    if (Array.isArray(thumb3Images)) {
      thumb3Images.forEach(file => formData.append('thumb3', file));
    }
  
    if (Array.isArray(thumb4Images)) {
      thumb4Images.forEach(file => formData.append('thumb4', file));
    }
  
    if (Array.isArray(thumb5Images)) {
      thumb5Images.forEach(file => formData.append('thumb5', file));
    }
  
    if (Array.isArray(thumb6Images)) {
      thumb6Images.forEach(file => formData.append('thumb6', file));
    }
  
    try {
      const response = await fetch(`http://localhost:8000/update-tyres/${id}/${tyreType}`, {
        method: 'PUT',
        body: formData, 
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update tyre: ${errorText}`);
      }
  
      const responseData = await response.json();
      console.log('Update successful:', responseData);
      navigate('/list');
    } catch (error) {
      console.error('Error updating tyre:', error);
      setError('Failed to update tyre');
    }
  };


  const handleImageChange = (event, thumbId) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const imageUrls = files.map((file) => URL.createObjectURL(file));
  
      switch (thumbId) {
        case 'avatar':
          setAvatarImages(files); // For avatar image
          setAvatarImageUrls(imageUrls); // For avatar preview
          break;
        case 'thumb1':
          setThumb1Images(files);
          setThumb1ImageUrls(imageUrls);
          break;
        case 'thumb2':
          setThumb2Images(files);
          setThumb2ImageUrls(imageUrls);
          break;
        case 'thumb3':
          setThumb3Images(files);
          setThumb3ImageUrls(imageUrls);
          break;
        case 'thumb4':
          setThumb4Images(files);
          setThumb4ImageUrls(imageUrls);
          break;
        case 'thumb5':
          setThumb5Images(files);
          setThumb5ImageUrls(imageUrls);
          break;
        case 'thumb6':
          setThumb6Images(files);
          setThumb6ImageUrls(imageUrls);
          break;
        default:
          break;
      }
    }
  };




  const tyreModels = {
  Tata: ['Tata Celius Tire', 'Tata Extensa Tire', 'Tata Extensa Hp', 'Tata Wanderer', 'Tata UltraMile'],
  MRF: ['MRF Roadtec', 'MRF Cruistec', 'MRF M7RR', 'MRF ME888', 'MRF ZLX', 'MRF ZVTS', 'MRF Wanderer'],
  Michelin: ['Michelin Pilot Sport', 'Michelin Primacy 4', 'Michelin Energy XM2', 'Michelin Latitude Sport', 'Michelin CrossClimate'],
  Apollo: ['Apollo F1', 'Apollo H7', 'Apollo M 72', 'Apollo Alnac 4G', 'Apollo Aspire 4G', 'Apollo Amazer 4G Life'],
  Pirelli: ['Pirelli P Zero', 'Pirelli Scorpion Verde', 'Pirelli Cinturato P7', 'Pirelli Sottozero', 'Pirelli P4 Four Seasons'],
  CEAT: ['CEAT Milaze', 'CEAT SecuraDrive', 'CEAT Zoom XL', 'CEAT Czar AT', 'CEAT Gripp X3'],
  JKTyre: ['JK Tyre Ranger', 'JK Tyre Ultima', 'JK Tyre Elanzo', 'JK Tyre Blaze', 'JK Tyre Tornado'],
  BirlaTyres: ['Birla BT444', 'Birla BT447', 'Birla Firemax', 'Birla Firestone', 'Birla Roadmax'],
  TVSTyres: ['TVS Eurogrip Dragon', 'TVS Jumbo Poly X', 'TVS Protorq', 'TVS Contender', 'TVS Durapro'],
  GoodyearIndia: ['Goodyear Assurance Duraplus', 'Goodyear Wrangler', 'Goodyear EfficientGrip', 'Goodyear Duraplus', 'Goodyear Eagle F1'],
  FalconTyres: ['Falcon Zetro', 'Falcon Wonder', 'Falcon Vulcan', 'Falcon Enduro', 'Falcon Racer'],
  };




  const widthOptions1 = [45, 50, 60, 70, 80,90,100,110,120,125,130,140,145,150,160,170,175,180,185,190,195,200,205,210,225,230,235,240,250,255,260,270,280,300,330];
  const heightOptions1 = [60,65,70,75,80,90,100,600,605];
  const customsOptions1 = [10,11,12,13,14,15,16,17,18,19,21,23];
  const  SpeedRating1= ['Q : up to 160 km/h', 'R: up to 170 km/h',' S:up to 180 km/h', "T: up to 190 km/h" , " H: up to 210 km/h ", " V: up to 240 km/h"];
  const LoadCapacity1 = [91,94,99] 

  const Quantity = [1,2,3,4,5,6,7,8,9,10];
  const Material = ["Steel","Nylon"];


  const warrantyOptions = ['1 year','2 years','3 years','4 years','5 years','6 years','7 years','8 years','9 years','10 years',
  ];


// ---------------------------------Tyre Brand Section -----------------------------------


    // Handle tyre brand selection
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
    
  
  
    const handleSelectChange = (selectedOptions) => {
      const selectedValues = selectedOptions.map(option => option.value); // Keep as IDs
      setSelectedTyreBrand(selectedOptions);
      setFormData({
        ...formData,
        tyreBrand: selectedValues
      });
    };
  
  


//  ------------------------------ Car Brand / car Model ------------------------


useEffect(() => {
  const fetchCarBrands = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-carbrand');
      const activeCarBrands = response.data.filter(brand => brand.active);
      setCarBrands(activeCarBrands.map(brand => ({ label: brand.name, value: brand._id })));
    } catch (error) {
      console.error('Error fetching car brands:', error);
    }
  };

  fetchCarBrands();
}, []);

// Fetch car models based on selected car brands
useEffect(() => {
  const fetchCarModels = async () => {
    if (selectedCarBrands.length > 0) {
      try {
        const selectedBrandIds = selectedCarBrands.map(option => option.value);
        const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');
        console.log('Fetching models for brand IDs:', selectedBrandIds); // Debugging log

        const response = await axios.get(`http://localhost:8000/get-carmodel?${query}`);
        const activeModels = response.data.filter(model => model.active);

        console.log('Fetched car models:', activeModels); // Debugging log
        setCarModels(activeModels.map(model => ({
          value: model._id,
          label: model.name,
        })));
      } catch (error) {
        console.error('Error fetching car models:', error);
      }
    } else {
      setCarModels([]);
    }
  };

  fetchCarModels();
}, [selectedCarBrands]);




// Handle car brand selection change
const handleCarBrandsChange = (selectedOptions) => {
  console.log('Selected car brands:', selectedOptions); // Debugging log
  setSelectedCarBrands(selectedOptions || []);
};

// Handle car model selection change
const handleCarModelsChange = (selectedOptions) => {
  setSelectedCarModels(selectedOptions || []);
};


// // -------------------------- Bike Brand / Model--------------------

  useEffect(() => {
    const fetchBikeBrands = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-bikebrand');
        const activeBikeBrands = response.data.filter(brand => brand.active);
        setBikeBrands(activeBikeBrands.map(brand => ({ label: brand.name, value: brand._id })));
      } catch (error) {
        console.error('Error fetching bike brands:', error);
      }
    };

    fetchBikeBrands();
  }, []);

  // Fetch bike models based on selected bike brands
  useEffect(() => {
    const fetchBikeModels = async () => {
      if (selectedBikeBrands.length > 0) {
        try {
          const selectedBrandIds = selectedBikeBrands.map(option => option.value);
          const query = selectedBrandIds.map(id => `brandid=${id}`).join('&');

          const response = await axios.get(`http://localhost:8000/get-bikemodel?${query}`);
          const activeModels = response.data.filter(model => model.active);

          setBikeModels(activeModels.map(model => ({
            value: model._id,
            label: model.name,
          })));
        } catch (error) {
          console.error('Error fetching bike models:', error);
        }
      } else {
        setBikeModels([]);
      }
    };

    fetchBikeModels();
  }, [selectedBikeBrands]);




  // Handle bike brand selection change
  const handleBikeBrandsChange = (selectedOptions) => {
    setSelectedBikeBrands(selectedOptions);
  };

  // Handle bike model selection change
  const handleBikeModelsChange = (selectedOptions) => {
    setSelectedBikeModels(selectedOptions);
  };

  




return (
    
<body className="ec-header-fixed ec-sidebar-fixed ec-sidebar-dark ec-header-light" id="body">

<div className="wrapper">

  <Sidebar/>

  <div className="ec-page-wrapper">

 <Navbar/>

  
    <div className="ec-content-wrapper">
      <div className="content">
        <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
          <div>
            <h1>Update Product</h1>
            <p className="breadcrumbs"><span><a href="#">Home</a></span>
              <span><i className="mdi mdi-chevron-right"></i></span>Product</p>
          </div>
          <div>
            <a href="/list" className="btn btn-primary"> View All
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card card-default">
              <div className="card-header card-header-border-bottom">
                <h2>Update Product</h2>
              </div>

              <div className="card-body">
                <div className="row ec-vendor-uploads">
                  <div className="col-lg-4">
                    <div className="ec-vendor-img-upload">
                      <div className="ec-vendor-main-img">
                        <div className="avatar-upload">
                       
  <div className="avatar-edit">
  <input
  type="file"
  name="avatar"  // Updated to 'avatar'
  multiple
  accept=".png, .jpg, .jpeg"
  onChange={(e) => handleImageChange(e, 'avatar')}
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
    <img
      className="ec-image-preview"
      src={avatarImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
      alt="preview"
    />
  </div>
</div>
  </div>



  <div className="thumb-upload-set colo-md-12">
  {/* Thumbnail 1 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input
  type="file"
  name="thumb1"  // Updated to 'thumb1'
  multiple
  accept=".png, .jpg, .jpeg"
  onChange={(e) => handleImageChange(e, 'thumb1')}
/>
      <label htmlFor="thumbUpload01">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb1ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>



  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb2" multiple onChange={(e) => handleImageChange(e, 'thumb2')} />
      <label htmlFor="thumbUpload02">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb2ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>




  {/* Thumbnail 3 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb3" multiple onChange={(e) => handleImageChange(e, 'thumb3')} />
      <label htmlFor="thumbUpload03">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb3ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>


 {/* Thumbnail 4 */}
 <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb4" multiple onChange={(e) => handleImageChange(e, 'thumb4')} />
      <label htmlFor="thumbUpload04">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb4ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>

  {/* Thumbnail 5 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb5" multiple onChange={(e) => handleImageChange(e, 'thumb5')} />

      <label htmlFor="thumbUpload05">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb5ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>


  {/* Thumbnail 6 */}
  <div className="thumb-upload">
    <div className="thumb-edit">
    <input type="file" name="thumb6" multiple onChange={(e) => handleImageChange(e, 'thumb6')} />
      <label htmlFor="thumbUpload06">
        <img
          src="https://amuze.in/projects//tyreking-admin-ui/assets/img/icons/edit.svg"
          className="svg_img header_svg"
          alt="edit"
        />
      </label>
    </div>
    <div className="thumb-preview ec-preview">
      <div className="image-thumb-preview">
        <img
          className="ec-image-preview"
          src={thumb6ImageUrls[0] || 'https://amuze.in/projects//tyreking-admin-ui/assets/img/vendor/u1.jpg'}
          alt="preview"
        />
      </div>
    </div>
  </div>      
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ec-vendor-upload-detail">
                      <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-12">
                          <label for="inputEmail4" className="form-label">Product name</label>
                          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control slug-title" id="inputEmail4"/>
                                              
                        </div>
                        <div className="col-md-12">
                          <label for="slug" className="col-12 col-form-label">Slug</label> 
                          <div className="col-12">
                            <input id="slug" name="slug" className="form-control here set-slug" type="text"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Sort Description</label>
                          <textarea  value={description} onChange={(event) => setDescription(event.target.value)} className="form-control" rows="2"></textarea>
                        </div>
                     
                       



                              <div className="form-group row">
                            <label htmlFor="tyreBrand" className="col-12 col-form-label">Tyre Brand</label>
                            <div className="col-12">
                                <div>
                                <Select
                      id="tyreBrand"
                      name="tyreBrand"
                      value={selectedTyreBrands}
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
                          </div>

                        <div className="col-md-4">
                          <label className="form-label">Warranty</label>    
                            <select  name="categories" id="Categories" value={warranty} onChange={(event) => setWarranty(event.target.value)} className="form-select">
                            <option value="">Select Warranty Period</option>
                            {warrantyOptions.map((option, index) => (
                            <option key={index} value={option}>
                               {option}
                                 </option>
                                ))}
                              </select>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Speed Rating</label>
                          <select name="categories" id="Categories" value={speedRating} onChange={(event) => setspeedRating(event.target.value)} className="form-select">
                      <option value="">Select SpeedRating</option>
                      {SpeedRating1.map((speedRating, index) => (
                          <option key={index} value={speedRating}>
                            {speedRating}
                          </option>
                        ))}
                      </select>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Load Capacity</label>
                          <select  name="categories" id="Categories" value={loadCapacity} onChange={(event) => setloadCapacity(event.target.value)} className="form-input">
                          <option value="">Select LoadCapacity</option>
                          {LoadCapacity1.map((loadCapacity, index) => (
                              <option key={index} value={loadCapacity}>
                                {loadCapacity}
                              </option>
                            ))}
                          </select>
                        </div>


                        <div className="col-md-4">
                          <label className="form-label">Material</label>
                          <select name="categories" id="Categories" value={material} onChange={(event) => setMaterial(event.target.value)} className="form-input">
                            <option value="">Material</option>
                               {Material.map((material, index) => (
                              <option key={index} value={material}>
                                   {material}
                                   </option>
                                    ))}
                                  </select>
                        </div>

                        
                        <div className="col-md-2">
                          <label className="form-label">Width</label>
                          <select name="categories" id="Categories" value={width} onChange={(event) => setWidth(event.target.value)} className="form-input">
                            <option value="">width</option>
                               {widthOptions1.map((width, index) => (
                              <option key={index} value={width}>
                                   {width}
                                   </option>
                                    ))}
                                  </select>
                        </div>


                        <div className="col-md-2">
                          <label className="form-label">Height</label>
                          <select name="categories" id="Categories" value={height} onChange={(event) => setHeight(event.target.value)} className="form-input">
                          <option value="">Height</option>
                          {heightOptions1.map((height, index) => (
                            <option key={index} value={height}>
                              {height}
                            </option>
                          ))}
                        </select>
                        </div>


                        <div className="col-md-3">
                          <label className="form-label">Customs</label>
                          <select name="categories" id="Categories" value={customs} onChange={(event) => setCustoms(event.target.value)} className="form-input">
                        <option value="">Customs</option>
                        {customsOptions1.map((customs, index) => (
                          <option key={index} value={customs}>
                            {customs}
                          </option>
                        ))}
                      </select>
                        </div>

                  <div className="col-md-5 mb-25">
                    <label className="form-label">Seasons</label>
                    <div className="form-checkbox-box">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="seasons"
                          value="Winter"
                          checked={seasons.includes("Winter")}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSeasons([...seasons, event.target.value]);
                            } else {
                              setSeasons(seasons.filter((season) => season !== event.target.value));
                            }
                          }}
                        />
                        <label>Winter</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="seasons"
                          value="Summer"
                          checked={seasons.includes("Summer")}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSeasons([...seasons, event.target.value]);
                            } else {
                              setSeasons(seasons.filter((season) => season !== event.target.value));
                            }
                          }}
                        />
                        <label>Summer</label>
                      </div>
                     
                    </div>
                  </div>


                        <div className="col-md-5">
                          <label className="form-label">Price <span>( In INR
                              )</span></label>
                              <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} className="form-select" />
                        </div>

                        <div className="col-md-5">
                          <label className="form-label">Sale Price <span>( In INR
                            )</span></label>
                           <input type="number" value={Salesprice} onChange={(event) => setSalesprice(event.target.value)} className="form-select" />
                        </div>
                        <div className="col-md-2">
                          <label className="form-label">Quantity</label>
                          <select name="categories" id="Categories" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="form-input">
                        <option value="number">Quantity</option>
                        {Quantity.map((quantity, index) => (
                          <option key={index} value={quantity}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                        </div>

                        <div className="col-md-5">
                          <label className="form-label">Manufacture Month
                              </label>
                              <select value={manufactureMonth} onChange={(event) => setManufactureMonth(event.target.value)} className="form-input">
                          <option value="">Select Month</option>
                          {monthOptions.map((month, index) => (
                            <option key={index} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                        </div>


                        <div className="col-md-5">
                          <label className="form-label">Manufacture Year   </label>
                          <select value={manufactureYear} onChange={(event) => setManufactureYear(event.target.value)} className="form-input">
                          <option value="">Select Year</option>
                          {yearOptions.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                        </div>

                       
                         <hr/>

                        <div className="col-md-12 mt-5 mb-25">
                          <label className="form-label">Vehicle Type</label>
                          <div className="form-checkbox-box">
                            <div className="form-check form-check-inline">
                            <input type="radio" value="car" name="size1" checked={tyreType === 'car'} onChange={(event) => setType(event.target.value)} />
                              <label>Car</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input type="radio" value="bike" name="size1" checked={tyreType === 'bike'} onChange={(event) => setType(event.target.value)} />
                              <label>Bike</label>
                            </div>
                           
                          </div>
                        </div>

                        {tyreType === 'car' && (
                          <>
    
<div>
    <div className="col-md-12">
      <label className="form-label">Car Brand</label>
      <Select
        isMulti
        options={carBrands}
        value={selectedCarBrands}
        onChange={handleCarBrandsChange}
        className="form-input"
      />
      
      <div className="col-md-12">
        <label className="form-label">Add Models <span>(Type and make comma to separate tags)</span></label>
        <Select
          isMulti
          options={carModels}
          value={selectedCarModels}
          onChange={handleCarModelsChange}
          className="form-input"
        />
      </div>
    </div>
  </div>      
                        </>
                        )}

                            {tyreType === 'bike' && (
                          <>
                          

<div className="col-md-12">
      <label className="form-label">Bike Brand</label>
      <Select
        isMulti
        options={bikeBrands}
        value={selectedBikeBrands}
        onChange={handleBikeBrandsChange}
        className="form-input"
      />

      <div className="col-md-12">
        <label className="form-label">
          Add Models <span>(Type and make comma to separate tags)</span>
        </label>
        <Select
          isMulti
          options={bikeModels}
          value={selectedBikeModels}
          onChange={handleBikeModelsChange}
          className="form-input"
        />
      </div>
    </div>



                        <div className="col-md-12 mt-5 mb-25">
                          <label className="form-label">Tyre Type</label>
                          <div className="form-checkbox-box">
                            <div className="form-check form-check-inline">
                            <input type="radio" value={fronttyre} onChange={(event) => setFronttyre(event.target.value)} className="form-input" />
                              <label>Front Tyre</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input type="radio" value={reartyre} onChange={(event) => setRearTyre(event.target.value)} className="form-input" />
                              <label>Rear Tyre</label>
                            </div>
                           
                          </div>
                        </div>

                        </>
                        )}  


                        <hr/>

    <div>
      <label>
        Description:
        <ReactQuill
          value={description1}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
          className="form-input" // You can style this with your own CSS
          placeholder="Write something awesome..."
        />
      </label>    
      <br />
    </div>
    {addresses.map((address, index) => (
        <div key={index} className="address-section">
          <label>
            State:
            <select
              value={address.state}
              onChange={(e) => handleStateChange(index, e.target.value)}
            >
              <option value="">Select State</option>
              {Object.keys(stateCityData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>

          <label>
            City:
            <select
              value={address.city}
              onChange={(e) => handleCityChange(index, e.target.value)}
              disabled={!address.state}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>


<label>
  Pincode:
  <input
    type="text"
    name="pinCode"
    value={addresses[index].pinCode}  
    onChange={(e) => handleInputChange(index, 'pinCode', e.target.value)}  // Update pinCode in addresses array
    placeholder="Pincode"
    
  />
</label>


<label>
  Addresses:
  <textarea
    value={address.details}
    onChange={(e) => handleInputChange(index, 'details', e.target.value)}
    placeholder="Enter address details"
  />
</label>

          <button type="button" className='btn btn-danger' onClick={() => removeAddress(index)}>Delete</button> 
          <button type="button"  className="btn btn-success m-3"  onClick={addAddress}>Add</button>
        </div>
      ))}

                        <div className="col-md-12">
                       
                        {success && <p className="success-message1">{success}</p>}
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <Footer/>

  </div> 
</div> 

</body>
  );
};

export default AddproductEdit;





