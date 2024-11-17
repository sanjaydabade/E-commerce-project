


// import React, { useEffect, useState } from 'react';
// import './Mainheader.css';
// import axios from 'axios';
// import {Link, useNavigate} from 'react-router-dom'
// import FrontendFooter from '../Footer/FrontendFooter';
// import HeaderMenu from '../Menu/HeaderMenu';

//  // Adjust the path based on your file structure
// export default function Mainheader() {
 
//     const [tyreType, setTyreType] = useState('all');
//     const [width, setWidth] = useState('all');
//     const [height, setHeight] = useState('all');
//     const [customs, setCustoms] = useState('all');
//     const [seasons, setSeasons] = useState('all');
//     // const [selectedImage , setSelectedImage]= useState('')
//     const [selectedImage, setSelectedImage] = useState(null); 
//     const [tyre, setTyres] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [result, setResult] = useState([]);
//     const navigate = useNavigate();
//     const [selectedIcon, setSelectedIcon] = useState(null);
    
//     const widthOptionsCar = [115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
//     const heightOptionsCar = [35,40,45,50,55,60,65,70,75,80];
//     const customsOptionsCar = [15,16,17,19];
  
//     const widthOptionsBike = [45, 50, 60, 70, 80,90,100,110,120,125,130,140,145,150,160,170,175,180,185,190,195,200,205,210,225,230,235,240,250,255,260,270,280,300,330];
//     const heightOptionsBike = [60,65,70,75,80,90,100,600,605];
//     const customsOptionsBike = [10,11,12,13,14,15,16,17,18,19,21,23];
  
//     const seasonsOptions = [
//       { value: 'All-Season', label: 'All-Season' },
//       { value: 'Winter', label: 'Winter' },
//       { value: 'Summer', label: 'Summer' },
//     ];
  
//     const handleSearch = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8000/search/${tyreType}/${width}/${height}/${customs}/${seasons}`);
//           navigate('/show', { state: { results: response.data } });
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };

//     const handleCarClick = () => {
//         setTyreType('car');
//         setSelectedImage('car'); // Set selected image to car
//       };
//       const handleBikeClick = () => {
//         setTyreType('bike');
//         setSelectedImage('bike'); // Set selected image to bike
//       };

// // ------ GET api------ // 


//       useEffect(() => {
//         fetch('http://localhost:8000/get-tyres')
//           .then(response => response.json())
//           .then(data => {
//             const firstTenTyres = data.slice(0, 10); // Get the first 10 tyres
//             setResult(firstTenTyres); // Update the state with the first 10 tyres
//           })
//           .catch(error => console.error('Error fetching data:', error));
//       }, []);
         


//   return (
//     <>

// {/*  Header section 1*/}
  

// <HeaderMenu/>


//     {/* Section 2 */}

//     <div className="shop-tyre1">
//         <div className='shop1'></div>
//          <div className="shop-img1">
//             <img src="https://s3-alpha-sig.figma.com/img/5eeb/5177/fea50572f2dfa95848b32cf1646dd0f7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VzuG84QL3KIaEDgReGd0WJ8w-qeH0crjBSzRdm7-0~ZeaO28vAkD-aOCW~az3ZXuXkihbyVCQrkgcl-HMHGfXvTYc6tNICfVeI8YL4hx~xFmQ5hvsVnCrGELP~4ckBFWzWRasI-BhUR6EYWTphP~5XEJWfdhoX1xlhvaRFSfjxF88Z8x3LSN0dwAJ~jrdzixJCEe5OLiHOMoDzVUjKmf~-CQvZy8O0mEgPYby1TNOkRFsB9sBPJc20dEgOjIU2inn-Af17YGjAiJDqXHZOM4AVogs~Lw3dohJMPnpEl4WT9x6nkYk-ePv7hzpgiYJYjvBB6Jo6F7Ss-ZLdKSsZYsMg__"/>
        
//         <h1>The Easiest Way to
//         Buy Tires Online</h1>

//         <p><span><i class="ri-check-line"></i></span>No Money Down Payment Plans*</p>
//         <p><span><i class="ri-check-line"></i></span>Fast and Free Shipping</p>
        
//         <button className="shop-button1">
//             <a>SHOP TIRES NOW </a>
//         </button>

//     </div>
// </div>




// {/* Section 3 */}

// <div className="tyre-choose1">
    
//     <h1 >Why you should choose us ?</h1>

//     <div className="box1">
//           <div className='free-delivery1'>
//                 <span className='delivery-image1'></span>
//                 <h4>Fast and free delivery</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
//                 </div>
        
        
//              <div className='customer1'>
//              <span className='customer-image1'></span>
            
//                 <h4>24/7 Customer Support</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
        
//             </div>

//             <div className='money-back1'>
//             <span className='money-image1'></span>
//                 <h4>Money back guarantee</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>   
//                 </div>
//     </div> 
// </div>





// {/* section 4 */}


// <div className="search_tyre">
//         <div className='search-bg-img'>          
//         </div>

//          <div className="search-name">
//         <h1>The Easiest Way to
//         Buy Tires Online</h1>

//         <p><span><i class="ri-check-line"></i></span>No Money Down Payment Plans*</p>
//         <p><span><i class="ri-check-line"></i></span>Fast and Free Shipping</p>  
        
//     </div>



//     <div className='search-icon-section'>
// <div className='search-size'  >
//   <div className='icons-img' >

//     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g clipPath="url(#clip0_16_50)">
//         <path d="M18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0ZM18 33C9.71592 33 3.00002 26.2841 3.00002 18C3.00002 9.71592 9.71592 3.00002 18 3.00002C26.2841 3.00002 33 9.71592 33 18C33 26.2841 26.2841 33 18 33Z" fill="#FE9832"/>
//         <path d="M26.4853 9.51471C26.4853 9.51464 26.4853 9.51464 26.4853 9.51471C26.4852 9.51464 26.4852 9.51464 26.4853 9.51471C24.3137 7.34311 21.3137 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6275 11.3726 30 18 30C21.3137 30 24.3137 28.6569 26.4852 26.4854C28.6568 24.3138 30 21.3138 30 18.0001C30 14.6864 28.6569 11.6862 26.4853 9.51471ZM25.336 23.2149L23.1683 21.0472C23.4504 20.5697 23.6693 20.0505 23.8109 19.5H26.8748C26.6454 20.8674 26.1082 22.1305 25.336 23.2149ZM9.12518 19.5H12.189C12.3307 20.0505 12.5496 20.5697 12.8317 21.047L10.664 23.2148C9.8918 22.1305 9.35461 20.8674 9.12518 19.5ZM10.664 12.7853L12.8317 14.953C12.5497 15.4305 12.3307 15.9496 12.189 16.5H9.12518C9.35461 15.1326 9.8918 13.8696 10.664 12.7853ZM18 21C17.1723 21 16.423 20.6649 15.8802 20.123C15.8798 20.1224 15.8793 20.1218 15.8788 20.1214C15.8783 20.1209 15.8776 20.1204 15.8771 20.1199C15.3352 19.5771 15.0001 18.8278 15.0001 18.0001C15.0001 17.1724 15.3352 16.4231 15.8771 15.8803C15.8777 15.8798 15.8783 15.8793 15.8788 15.8788C15.8793 15.8783 15.8798 15.8777 15.8802 15.8772C16.423 15.3353 17.1723 15.0001 18 15.0001C19.6571 15.0001 21 16.343 21 18.0002C21 19.6573 19.6571 21 18 21ZM21.0469 12.8316C20.5696 12.5496 20.0504 12.3307 19.5 12.189V9.12518C20.8674 9.35461 22.1303 9.8918 23.2147 10.6639L21.0469 12.8316ZM16.5 12.189C15.9496 12.3307 15.4304 12.5496 14.953 12.8317L12.7853 10.664C13.8697 9.8918 15.1327 9.35461 16.5 9.12518V12.189ZM14.953 23.1684C15.4304 23.4504 15.9495 23.6694 16.5 23.8111V26.8749C15.1326 26.6455 13.8696 26.1083 12.7852 25.3361L14.953 23.1684ZM19.5 23.811C20.0504 23.6693 20.5696 23.4504 21.0469 23.1684L23.2147 25.3361C22.1304 26.1083 20.8674 26.6454 19.5 26.8749V23.811ZM23.811 16.5C23.6693 15.9496 23.4504 15.4303 23.1683 14.9529L25.3361 12.7852C26.1083 13.8695 26.6455 15.1325 26.8749 16.5H23.811V16.5Z" fill="#FE9832"/>
//       </g>
//       <defs>
//         <clipPath id="clip0_16_50">
//           <rect width="36" height="36" fill="white"/>
//         </clipPath>
//       </defs>
//     </svg>
    
//   </div>
//   <p>BY SIZE</p>
// </div>



// <div className="search-car"  >
  
//     <p onClick={handleCarClick} // Set tyreType to 'car' on click
//            style={{ cursor: 'pointer', backgroundColor: selectedImage === 'car' ? 'orange' : 'transparent' }}
//      >by car</p>

//     <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0718 25.239C13.0766 26.5638 12.3021 27.761 11.11 28.2714C9.9179 28.7817 8.5434 28.5047 7.62831 27.5696C6.71321 26.6345 6.43803 25.2258 6.93128 24.0012C7.42452 22.7768 8.58887 21.978 9.88064 21.978C10.7254 21.9764 11.5363 22.3191 12.1347 22.9307C12.7332 23.5422 13.0703 24.3725 13.0718 25.239Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7454 25.239C28.7501 26.5638 27.9756 27.761 26.7835 28.2714C25.5915 28.7817 24.2169 28.5047 23.3019 27.5696C22.3868 26.6345 22.1116 25.2258 22.6048 24.0012C23.098 22.7768 24.2624 21.978 25.5542 21.978C26.399 21.9764 27.2098 22.3191 27.8082 22.9307C28.4067 23.5422 28.7438 24.3725 28.7454 25.239Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M3.91647 14.9856C3.70225 15.5688 4.0014 16.2153 4.58461 16.4295C5.16784 16.6437 5.8143 16.3446 6.02851 15.7614L3.91647 14.9856ZM6.09423 12.3195L5.04732 11.9077C5.0442 11.9156 5.04115 11.9236 5.03821 11.9316L6.09423 12.3195ZM14.6952 8.625C15.3165 8.625 15.8202 8.12131 15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375V8.625ZM4.9725 16.4985C5.59381 16.4985 6.0975 15.9948 6.0975 15.3735C6.0975 14.7522 5.59381 14.2485 4.9725 14.2485V16.4985ZM3.05808 15.3735L3.04953 16.4985H3.05808V15.3735ZM1.46249 16.986L0.337493 16.9779V16.986H1.46249ZM0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625C2.08381 20.625 2.5875 20.1213 2.5875 19.5H0.337493ZM4.9725 14.2485C4.35117 14.2485 3.8475 14.7522 3.8475 15.3735C3.8475 15.9948 4.35117 16.4985 4.9725 16.4985V14.2485ZM14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735C15.8202 14.7522 15.3165 14.2485 14.6952 14.2485V16.4985ZM26.2854 15.7614C26.4996 16.3446 27.1461 16.6437 27.7293 16.4295C28.3125 16.2153 28.6116 15.5688 28.3974 14.9856L26.2854 15.7614ZM26.2197 12.3195L27.2757 11.9316C27.2727 11.9236 27.2697 11.9156 27.2666 11.9077L26.2197 12.3195ZM14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5C13.5702 8.12131 14.0739 8.625 14.6952 8.625V6.375ZM27.3414 16.4985C27.9627 16.4985 28.4664 15.9948 28.4664 15.3735C28.4664 14.7522 27.9627 14.2485 27.3414 14.2485V16.4985ZM14.6952 14.2485C14.0739 14.2485 13.5702 14.7522 13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985V14.2485ZM27.3414 14.2485C26.7201 14.2485 26.2164 14.7522 26.2164 15.3735C26.2164 15.9948 26.7201 16.4985 27.3414 16.4985V14.2485ZM32.0433 15.3735V16.4985H32.0508L32.0433 15.3735ZM33.6375 16.986H34.7625V16.9779L33.6375 16.986ZM32.5125 19.5C32.5125 20.1213 33.0162 20.625 33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5H32.5125ZM22.3631 26.364C22.9844 26.364 23.4881 25.8603 23.4881 25.239C23.4881 24.6177 22.9844 24.114 22.3631 24.114V26.364ZM13.0718 24.114C12.4505 24.114 11.9468 24.6177 11.9468 25.239C11.9468 25.8603 12.4505 26.364 13.0718 26.364V24.114ZM28.7454 24.114C28.1241 24.114 27.6204 24.6177 27.6204 25.239C27.6204 25.8603 28.1241 26.364 28.7454 26.364V24.114ZM32.042 25.239L32.0505 24.114H32.042V25.239ZM33.6375 23.6265L34.7625 23.6346V23.6265H33.6375ZM34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375C33.0162 18.375 32.5125 18.8787 32.5125 19.5H34.7625ZM6.68947 26.364C7.31079 26.364 7.81447 25.8603 7.81447 25.239C7.81447 24.6177 7.31079 24.114 6.68947 24.114V26.364ZM3.05808 25.239V24.114H3.04953L3.05808 25.239ZM1.46249 23.6265H0.337463L0.337522 23.6346L1.46249 23.6265ZM2.5875 19.5C2.5875 18.8787 2.08381 18.375 1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5H2.5875ZM15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5H15.8202ZM13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735H13.5702ZM1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625V18.375ZM4.37725 20.625C4.99857 20.625 5.50225 20.1213 5.50225 19.5C5.50225 18.8787 4.99857 18.375 4.37725 18.375V20.625ZM33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375V20.625ZM30.5999 18.375C29.9786 18.375 29.4749 18.8787 29.4749 19.5C29.4749 20.1213 29.9786 20.625 30.5999 20.625V18.375ZM6.02851 15.7614L7.15024 12.7074L5.03821 11.9316L3.91647 14.9856L6.02851 15.7614ZM7.14114 12.7313C7.68841 11.3401 8.23695 10.3179 8.92239 9.64068C9.55996 9.01071 10.3707 8.625 11.6137 8.625V6.375C9.80888 6.375 8.42073 6.97329 7.34097 8.04019C6.30906 9.0598 5.62179 10.4473 5.04732 11.9077L7.14114 12.7313ZM11.6137 8.625H14.6952V6.375H11.6137V8.625ZM4.9725 14.2485H3.05808V16.4985H4.9725V14.2485ZM3.06663 14.2485C2.33886 14.243 1.64455 14.5345 1.13498 15.0495L2.73433 16.6321C2.82324 16.5423 2.93715 16.4976 3.04953 16.4985L3.06663 14.2485ZM1.13498 15.0495C0.626369 15.5635 0.342661 16.2577 0.337493 16.9779L2.58747 16.9941C2.58847 16.8525 2.64448 16.7229 2.73433 16.6321L1.13498 15.0495ZM0.337493 16.986V19.5H2.5875V16.986H0.337493ZM4.9725 16.4985H14.6952V14.2485H4.9725V16.4985ZM28.3974 14.9856L27.2757 11.9316L25.1637 12.7074L26.2854 15.7614L28.3974 14.9856ZM27.2666 11.9077C26.6921 10.4473 26.0049 9.0598 24.9729 8.04019C23.8932 6.97329 22.505 6.375 20.7002 6.375V8.625C21.9432 8.625 22.754 9.01071 23.3915 9.64068C24.077 10.3179 24.6255 11.3401 25.1727 12.7313L27.2666 11.9077ZM20.7002 6.375H14.6952V8.625H20.7002V6.375ZM27.3414 14.2485H14.6952V16.4985H27.3414V14.2485ZM27.3414 16.4985H32.0433V14.2485H27.3414V16.4985ZM32.0508 16.4985C32.2773 16.497 32.5103 16.6915 32.5125 16.9941L34.7625 16.9779C34.7517 15.4872 33.5579 14.2384 32.0358 14.2485L32.0508 16.4985ZM32.5125 16.986V19.5H34.7625V16.986H32.5125ZM22.3631 24.114H13.0718V26.364H22.3631V24.114ZM28.7454 26.364H32.042V24.114H28.7454V26.364ZM32.0333 26.364C32.7611 26.3695 33.4554 26.0779 33.965 25.563L32.3657 23.9803C32.2767 24.0702 32.1629 24.1149 32.0505 24.114L32.0333 26.364ZM33.965 25.563C34.4736 25.0489 34.7573 24.3547 34.7625 23.6346L32.5125 23.6184C32.5115 23.76 32.4555 23.8896 32.3657 23.9803L33.965 25.563ZM34.7625 23.6265V19.5H32.5125V23.6265H34.7625ZM6.68947 24.114H3.05808V26.364H6.68947V24.114ZM3.04953 24.114C2.93715 24.1149 2.82324 24.0702 2.73433 23.9803L1.13499 25.563C1.64455 26.0779 2.33886 26.3695 3.06663 26.364L3.04953 24.114ZM2.73433 23.9803C2.64448 23.8896 2.58847 23.76 2.58747 23.6184L0.337522 23.6346C0.342689 24.3547 0.626369 25.0489 1.13499 25.563L2.73433 23.9803ZM2.5875 23.6265V19.5H0.337493L0.337463 23.6265H2.5875ZM13.5702 7.5V15.3735H15.8202V7.5H13.5702ZM1.46249 20.625H4.37725V18.375H1.46249V20.625ZM33.6375 18.375H30.5999V20.625H33.6375V18.375Z" fill="white"/>
// </svg>

// </div>


//  <div className='search-bike' >
       
//  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M18 7H22L27 22" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"       />
// <path d="M27 26C29.2091 26 31 24.2091 31 22C31 19.7909 29.2091 18 27 18C24.7909 18 23 19.7909 23 22C23 24.2091 24.7909 26 27 26Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"   />
// <path d="M5 26C7.20914 26 9 24.2091 9 22C9 19.7909 7.20914 18 5 18C2.79086 18 1 19.7909 1 22C1 24.2091 2.79086 26 5 26Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M5 14C9.4 14 13 17.6 13 22H19C19 17.6 22.6 14 27 14C27.8 14 28.7 14.1 29.4 14.4" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M23 11H17L16.6 11.6C15 14.2 12 15.6 9 15" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <p>by bike</p>

//         </div>

//         <div className='search-truck'>
       
//        <p>BY TRUCK</p>


//        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0_16_121)">
// <mask id="mask0_16_121"  maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
// <path d="M36 0H0V36H36V0Z" fill="white"/>
// </mask>
// <g mask="url(#mask0_16_121)">
// <path d="M35.9201 17.586L32.7578 9.61312C32.6748 9.40338 32.5306 9.22341 32.344 9.09663C32.1575 8.96984 31.9371 8.90206 31.7115 8.9021H24.5385C24.2401 8.9021 23.954 9.02064 23.743 9.23162C23.532 9.4426 23.4135 9.72873 23.4135 10.0271V24.8479H22.4291V10.0271C22.4291 9.72873 22.3106 9.4426 22.0996 9.23162C21.8886 9.02064 21.6025 8.9021 21.3041 8.9021H1.125C0.826631 8.9021 0.5405 9.02064 0.329521 9.23162C0.118543 9.4426 0 9.72873 0 10.0271V25.9729C0 26.2712 0.118543 26.5574 0.329521 26.7683C0.5405 26.9793 0.826631 27.0979 1.125 27.0979H2.91375C3.14578 27.8013 3.5938 28.4135 4.194 28.8476C4.7942 29.2816 5.51599 29.5152 6.25668 29.5152C6.99737 29.5152 7.7192 29.2816 8.3194 28.8476C8.9196 28.4135 9.36758 27.8013 9.59961 27.0979H26.3981C26.6302 27.8013 27.0782 28.4135 27.6784 28.8476C28.2786 29.2816 29.0004 29.5152 29.7411 29.5152C30.4817 29.5152 31.2036 29.2816 31.8038 28.8476C32.404 28.4135 32.852 27.8013 33.084 27.0979H34.875C35.1734 27.0979 35.4595 26.9793 35.6705 26.7683C35.8815 26.5574 36 26.2712 36 25.9729V18C36.0001 17.8581 35.973 17.7176 35.9201 17.586ZM30.9488 11.1521L33.4406 17.4375H25.6635V11.1521H30.9488ZM6.25726 27.2655C6.00165 27.2652 5.75183 27.1893 5.53941 27.0471C5.32699 26.9049 5.1615 26.7029 5.06384 26.4667C4.96618 26.2305 4.94071 25.9707 4.99071 25.72C5.04071 25.4693 5.16392 25.2391 5.34475 25.0584C5.52557 24.8778 5.75589 24.7548 6.0066 24.705C6.25732 24.6552 6.51717 24.6808 6.7533 24.7787C6.98943 24.8766 7.19125 25.0423 7.33324 25.2548C7.47522 25.4674 7.55101 25.7173 7.55101 25.9729C7.55071 26.3158 7.41426 26.6446 7.17167 26.887C6.92908 27.1293 6.60019 27.2655 6.25726 27.2655ZM19.8979 24.8479H9.60075C9.36871 24.1445 8.92073 23.5322 8.32053 23.0982C7.72033 22.6641 6.9985 22.4305 6.25781 22.4305C5.51713 22.4305 4.7953 22.6641 4.1951 23.0982C3.59489 23.5322 3.14691 24.1445 2.91488 24.8479H2.25V11.1521H20.178V24.8479H19.8979ZM29.7416 27.2655C29.486 27.2652 29.2362 27.1893 29.0238 27.0471C28.8114 26.9049 28.6459 26.7029 28.5482 26.4667C28.4506 26.2305 28.4251 25.9707 28.4751 25.72C28.5251 25.4693 28.6483 25.2391 28.8291 25.0584C29.0099 24.8778 29.2403 24.7548 29.491 24.705C29.7417 24.6552 30.0015 24.6808 30.2377 24.7787C30.4738 24.8766 30.6756 25.0423 30.8176 25.2548C30.9596 25.4674 31.0354 25.7173 31.0354 25.9729C31.0351 26.3158 30.8986 26.6446 30.656 26.887C30.4135 27.1293 30.0846 27.2655 29.7416 27.2655ZM33.0851 24.8479C32.8531 24.1445 32.4051 23.5322 31.8049 23.0982C31.2047 22.6641 30.4829 22.4305 29.7422 22.4305C29.0015 22.4305 28.2797 22.6641 27.6795 23.0982C27.0793 23.5322 26.6313 24.1445 26.3993 24.8479H25.6635V18.5625H33.75V24.8479H33.0851Z" fill="white"/>
// <path d="M28.4062 19.3129H26.8594C26.7102 19.3129 26.5671 19.3721 26.4616 19.4776C26.3561 19.5831 26.2969 19.7262 26.2969 19.8754C26.2969 20.0246 26.3561 20.1676 26.4616 20.2731C26.5671 20.3786 26.7102 20.4379 26.8594 20.4379H28.4062C28.5554 20.4379 28.6985 20.3786 28.804 20.2731C28.9095 20.1676 28.9688 20.0246 28.9688 19.8754C28.9688 19.7262 28.9095 19.5831 28.804 19.4776C28.6985 19.3721 28.5554 19.3129 28.4062 19.3129Z" fill="white"/>
// </g>
// </g>
// <defs>
// <clipPath id="clip0_16_121">
// <rect width="36" height="36" fill="white"/>
// </clipPath>
// </defs>
// </svg>
//         </div>

//     </div>


    
    
//     {/* form*/}

//     <div className='search-form1'>
//         <h3>SEARCH BY SIZE</h3>
//         <div className='form-img'> 
//         </div>

//         <div className='width'> 
//         <label for="fname">WIDTH:</label><br/>
//      <select value={width} onChange={(e) => setWidth(e.target.value)}>
//             <option value="all"></option>
//             {(tyreType === 'car' ? widthOptionsCar : widthOptionsBike).map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>


//         <div className='Height'>
        
//         <label for="fname">HEIGHT:</label><br/>
//         <select value={height} onChange={(e) => setHeight(e.target.value)}>
//             <option value="all"></option>
//             {(tyreType === 'car' ? heightOptionsCar : heightOptionsBike).map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
        
//         </div>


//         <div className='custom'>
       
//             <label for="fname">CUSTOM:</label><br/>
//             <select value={customs} onChange={(e) => setCustoms(e.target.value)}>
//             <option value="all"></option>
//             {(tyreType === 'car' ? customsOptionsCar : customsOptionsBike).map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>

//         </div>


//         <div className='whether'>
        
//         <label for="fname">WHETHER:</label><br/>
//         <select value={seasons} onChange={(e) => setSeasons(e.target.value)}>
//             <option value="all"></option>
//             {seasonsOptions.map(option => (
//               <option key={option.value} value={option.value}>{option.label}</option>
//             ))}
//           </select>
        
//         </div>

//         <div className='form-button'>
//         <button onClick={handleSearch}>Find Tyre</button>
//         </div>
       
//     </div>

// </div>

// {/* Section 5 */}

// <div className='best-seller'>
//   <p>BEST SELLER</p>

// </div>


// <div className="tyres-container">
//         {result.map((tyre) => (
           
         
//           <div key={tyre._id} className="tyre-card">
//             <div className='img-container '>

//             <span className="tyre-status">{status}</span>

//             <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`} alt={tyre.title} className="tyre-image" />
//             </div>
//             <div className="tyre-details">
//               <h2>{tyre.title}</h2>
//               <div className="price-section">
//                 {tyre.Salesprice && (
//                   <span className="Sales-price">₹ {tyre.Salesprice}</span>
//                 )}
//                 <span className="tyre-price">₹ {tyre.price}</span>
//               </div>
//               <p className="tyre-description">
               
//               </p>

//             </div>
//             <Link to={`/details/${tyre._id}/${tyre.tyreType}`}>
//               <button className='tyre-button'><span>View Details</span></button>
//               </Link>
//           </div>
//         ))}
//       </div>




// {result.map((tyre) => {
//     const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 1 hour
//     const isOnSale = tyre.Salesprice < tyre.price;
//     return (
        

//       <div className="tyres-container">
//         {result.map((tyre) => (
           
         
//           <div key={tyre._id} className="tyre-card">
         
//             <div className='img-container '>

          
           

// {isOnSale && (
//             <div className="tyre-status sale">
//               <span>Sale</span>
//             </div>
//           )}
//           {isNew && (
//             <div className="tyre-status new">
//               <span>New</span>
//             </div>
//           )}
            

//             <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`} alt={tyre.title} className="tyre-image" />
//             </div>
//             <div className="tyre-details">
//               <h2>{tyre.title}</h2>
//               <div className="price-section">
//                 {tyre.Salesprice && (
//                   <span className="Sales-price">₹ {tyre.Salesprice}</span>
//                 )}
//                 <span className="tyre-price">₹ {tyre.price}</span>
//               </div>
//               <p className="tyre-description">
               
//               </p>
 
//             </div>

           
       
//             <Link to={`/details/${tyre._id}/${tyre.tyreType}`}>
//               <button className='tyre-button'><span>View Details</span></button>
//               </Link>
//           </div>
//         ))}
//       </div>
//     );
// })}



//       {/* section 6 */}
     
//      <div className='tyres-brand'>
//       <h1>Popular Tire Brands We Carry</h1>
//       <div className="tyres-brand-img">
//         <div className='logo-container'>
//           <img src='https://s3-alpha-sig.figma.com/img/09b8/553f/559ff5377b56ba6815a3c65c65ebebec?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQjaZP378ddSXbo9RJzBLCI7NAz~4VNJU9q0kcN2WeD3-zDssgjngvWh8U0m6lpBMQd3Xwesm14AFjJKgs9~hK7tmYM-IQy3jd4nW7WF6bTE3qZlywjZ36-uCS6EwhSplqHl-ano7HlJvzONmPiAySSfJAxUCYLVljceHQo5WIMm4YtpbAUcAIv-rCa0zFG~YxN2kd2qXKPkHs44h1n4GXIzub2lX0kYLSCUnekj48~UyugKmDuu-YPPCYljbdrno-Ziu7QAA0OHafBI5U1-tNGaG-mIO4I~c48g4~6tmEvHoore89GnEmpKaFvlk2AiBl2v2Df9fI0E55raoiqLZQ__' />
//         </div>

//         <div className='logo-container'>
//           <img src='https://s3-alpha-sig.figma.com/img/e310/9305/727a09f7906cd877821b365ac4528f07?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zo-Cacrx1ozEqFsKEftFwKf3CmbmpEobGkHlDsocyyktOMXIHGT8hKCL~qyaZK199el-3EQ6QfOXCBpoi2v~iL~JioumEHiafWwzwpiFQ~kyNc7gbx7RZOzgKjDCuZROxIQVm5unyzbskOhBqeh6cVakf9mRwX7xAHQDXKtNml7-Q6w0HTdd0SIdZ-qbsCjoxiqWmYULBuRgQPpeQ7LOblr5qjf8DtD2L7OFl9REBaF8MgJVKRPcJOd8WcALFhfFew0gR4nXD0aZLwg7SQyqXUWwWfsdPvncxFiMYORCyIYSD68c0uxrZKN8nmz6-c9omF702hJR~ygxt9eGkSCEaA__' />
//         </div>

//         <div className='logo-container'>
//           <img src='https://s3-alpha-sig.figma.com/img/ff8c/d625/6a8f1a1aaa2a38927357b05fa25b1724?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhBHGvOupIY-ZSNva-WXZ~aHDPwQJ7r9xYFgtsNwIS-Kw-akf-BqppdPvikQctKRwnI6gqW2jkacJtJEoTRfn85~-30YTDPx3cibcnzoAZQ19cYkimNneWxPw608Kaftc0ayvnFqKdVYNo1YFWMG7As-QHiaKxlXRW4MQ-jfful2KGp1gOruzC4Q88JIdrNGqNDG49lPwoHHrgTQ~bFXqLv3QHmDYQS6ytx6cH~6atMbqKAgMWIR53b4SzZ5ZbyYJlATPtde~gFaCkUKll-CEeaE62ekgQkx7w3deE9KKq2zlHRWMkvB8HDLTGKBZWDlZBIEKaIOFDbwHzMyz81fKQ__' />
//         </div>

//         <div className='logo-container'>
//           <img src='https://s3-alpha-sig.figma.com/img/0a03/d39c/ecbe104aaa8251160fbf7010e07c1dea?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cHoQI~~AdCI0Ucgy60UsNiP7sWtbFj4cyp2oBaGFOshUtuynizio3~tcK37EezIRkTBipQWjxIOdZ4wb77OcRI29BJSAs3qCVjn-UlOWBsN~xyYF8Jfv1woLzoaxOTObknSevQ9W5bCapLeM1zep0AX15wz6K3RwRR56QQZXWZQiF6cfQgmgfXqPYx36J5UtTS6mn2CNd5J6kSpQduRaUmYRClt2fPDDXydcKzB1VMOkU-HcIvVoi6riPnVS7XZSWChaR1vZUx9zJe0z-jarw88GfMl0G9bNu7WxksBd~IMtp~aUprCgdHooTzetw1UqWU9S1AKGoVAyw5kBGuS8Jg__' />
//         </div>

//         <div className='logo-container'>

//           <img src='https://s3-alpha-sig.figma.com/img/81ac/fb3b/90375d4d3bdfec06874771188943c679?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZBTWQeGmZUa0-0j6sJJm8qaAMGtrddR1njJUAByBEBwk0MvDAQhxeA9fKpYJUWQ-9DXd-AcOLyxcww-YdxX1Po~wG2gpW4TeL1arll75-~~K01FcuDFkqaTbla5JluG9CbsVeZkEpvVbHadSsEWLalD~mDfIhiwJebbXw1M8dSo9J2kkb-Hp5LblewVAWruxW0DFgbUYMa3D4Zq9ibLvlyLFCdqFNQF85jWjNxV2jGyTMaozPj5IvEEwYW6d0M3PTDcJ7c~aa0beCUG6HIpuHQNxTyvSPCjGM5I1GGPXnyEwLC3-FPizeGyOwVaErxH2APtBn9-rSm-iWu4H72zhg__' />
//         </div>

//         <div className='logo-container'>
//         <img src='https://s3-alpha-sig.figma.com/img/09b8/553f/559ff5377b56ba6815a3c65c65ebebec?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQjaZP378ddSXbo9RJzBLCI7NAz~4VNJU9q0kcN2WeD3-zDssgjngvWh8U0m6lpBMQd3Xwesm14AFjJKgs9~hK7tmYM-IQy3jd4nW7WF6bTE3qZlywjZ36-uCS6EwhSplqHl-ano7HlJvzONmPiAySSfJAxUCYLVljceHQo5WIMm4YtpbAUcAIv-rCa0zFG~YxN2kd2qXKPkHs44h1n4GXIzub2lX0kYLSCUnekj48~UyugKmDuu-YPPCYljbdrno-Ziu7QAA0OHafBI5U1-tNGaG-mIO4I~c48g4~6tmEvHoore89GnEmpKaFvlk2AiBl2v2Df9fI0E55raoiqLZQ__'  />
//         </div>

//         <div className='logo-container'>
//           <img src='https://s3-alpha-sig.figma.com/img/369c/3225/d1fe99b677b54c3c89668a0e424b3dc0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrBmi3hqpZx0txSdu4FXvykFYuzTsJIrfsfdUYYx~hlFYD4e7j2ZKzquBXllbRW5CEXsN76bWEAJu1b3l0V1nVBnOEvWcIzxf53N8fC-LramA4zPaYynP0z~-VTH7Yn7eR0e5x-nTXRXQL~moBsgZqd9RANiaEkjN2~gDUILDg7Uw~S34a-b9UQCu7njKXIS~7Acdk7u71OEOwtJ5RxqOlTIRd6CwgeM~BiVQvo-ZPYcYcqxNSLsGIqGPTLkS79gUWe2F-auDLizVsiK6I~7RuSlddG9k-2rJ4jQ7thMhIUtmfSiyDiPil4EyPL5jUTEUuifks-ATbIPI509n0HYqg__'/>
//         </div>
        
//         <div className='logo-container'>
//           <img src='https://s3-alpha-sig.figma.com/img/369c/3225/d1fe99b677b54c3c89668a0e424b3dc0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrBmi3hqpZx0txSdu4FXvykFYuzTsJIrfsfdUYYx~hlFYD4e7j2ZKzquBXllbRW5CEXsN76bWEAJu1b3l0V1nVBnOEvWcIzxf53N8fC-LramA4zPaYynP0z~-VTH7Yn7eR0e5x-nTXRXQL~moBsgZqd9RANiaEkjN2~gDUILDg7Uw~S34a-b9UQCu7njKXIS~7Acdk7u71OEOwtJ5RxqOlTIRd6CwgeM~BiVQvo-ZPYcYcqxNSLsGIqGPTLkS79gUWe2F-auDLizVsiK6I~7RuSlddG9k-2rJ4jQ7thMhIUtmfSiyDiPil4EyPL5jUTEUuifks-ATbIPI509n0HYqg__'/>
//         </div>
//       </div>
//      </div>
     
//     <FrontendFooter/>
//     </>
//   )
// }








import React, { useEffect, useState } from 'react';
import './Mainheader.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import FrontendFooter from '../Footer/FrontendFooter';
import HeaderMenu from '../Menu/HeaderMenu';

 // Adjust the path based on your file structure
export default function Mainheader() {
 
    const [tyreType, setTyreType] = useState('all');
    const [width, setWidth] = useState('all');
    const [height, setHeight] = useState('all');
    const [customs, setCustoms] = useState('all');
    const [seasons, setSeasons] = useState('all');
    // const [selectedImage , setSelectedImage]= useState('')
    const [selectedImage, setSelectedImage] = useState(null); 
    const [tyre, setTyres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState([]);
    const navigate = useNavigate();
    const [selectedIcon, setSelectedIcon] = useState(null);
    
    const widthOptionsCar = [115,125,130,135,140,145,150,155,160,165,170,175,180,185,190, 195,200,205,210,215,220,225,235,240,245,250,255,265,270,275,285,295,305,315,325,335,345,355];
    const heightOptionsCar = [35,40,45,50,55,60,65,70,75,80];
    const customsOptionsCar = [15,16,17,19];
  
    const widthOptionsBike = [45, 50, 60, 70, 80,90,100,110,120,125,130,140,145,150,160,170,175,180,185,190,195,200,205,210,225,230,235,240,250,255,260,270,280,300,330];
    const heightOptionsBike = [60,65,70,75,80,90,100,600,605];
    const customsOptionsBike = [10,11,12,13,14,15,16,17,18,19,21,23];
  
    const seasonsOptions = [
      { value: 'All-Season', label: 'All-Season' },
      { value: 'Winter', label: 'Winter' },
      { value: 'Summer', label: 'Summer' },
    ];
  
    const handleSearch = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/search/${tyreType}/${width}/${height}/${customs}/${seasons}`);
          navigate('/show', { state: { results: response.data } });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handleCarClick = () => {
        setTyreType('car');
        setSelectedImage('car'); // Set selected image to car
      };
      const handleBikeClick = () => {
        setTyreType('bike');
        setSelectedImage('bike'); // Set selected image to bike
      };

// ------ GET api------ // 


      useEffect(() => {
        fetch('http://localhost:8000/get-tyres')
          .then(response => response.json())
          .then(data => {
            const firstTenTyres = data.slice(0, 10); // Get the first 10 tyres
            setResult(firstTenTyres); // Update the state with the first 10 tyres
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
         


  return (
    <>

{/*  Header section 1*/}
  
<div className='main-homepage'>
<HeaderMenu/>


    {/* Section 2 */}

    <div className="shop-tyre1">
        <div className='shop1'></div>
         <div className="shop-img1">
            <img src="https://s3-alpha-sig.figma.com/img/5eeb/5177/fea50572f2dfa95848b32cf1646dd0f7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VzuG84QL3KIaEDgReGd0WJ8w-qeH0crjBSzRdm7-0~ZeaO28vAkD-aOCW~az3ZXuXkihbyVCQrkgcl-HMHGfXvTYc6tNICfVeI8YL4hx~xFmQ5hvsVnCrGELP~4ckBFWzWRasI-BhUR6EYWTphP~5XEJWfdhoX1xlhvaRFSfjxF88Z8x3LSN0dwAJ~jrdzixJCEe5OLiHOMoDzVUjKmf~-CQvZy8O0mEgPYby1TNOkRFsB9sBPJc20dEgOjIU2inn-Af17YGjAiJDqXHZOM4AVogs~Lw3dohJMPnpEl4WT9x6nkYk-ePv7hzpgiYJYjvBB6Jo6F7Ss-ZLdKSsZYsMg__"/>
        
        <h1>The Easiest Way to
        Buy Tires Online</h1>

        <p><span><i class="ri-check-line"></i></span>No Money Down Payment Plans*</p>
        <p><span><i class="ri-check-line"></i></span>Fast and Free Shipping</p>
        
        <button className="shop-button1">
            <a>SHOP TIRES NOW </a>
        </button>

    </div>
</div>




{/* Section 3 */}

<div className="tyre-choose1">
    
    <h1 >Why you should choose us ?</h1>

    <div className="box1">
          <div className='free-delivery1'>
                <span className='delivery-image1'></span>
                <h4>Fast and free delivery</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                </div>
        
        
             <div className='customer1'>
             <span className='customer-image1'></span>
            
                <h4>24/7 Customer Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
        
            </div>

            <div className='money-back1'>
            <span className='money-image1'></span>
                <h4>Money back guarantee</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>   
                </div>
    </div> 
</div>





{/* section 4 */}


<div className="search_tyre">
        <div className='search-bg-img'>          
        </div>

         <div className="search-name">
        <h1>The Easiest Way to
        Buy Tires Online</h1>

        <p><span><i class="ri-check-line"></i></span>No Money Down Payment Plans*</p>
        <p><span><i class="ri-check-line"></i></span>Fast and Free Shipping</p>  
        
    </div>



    <div className='search-icon-section'>
<div className='search-size'  >
  <div className='icons-img' >

    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_16_50)">
        <path d="M18 0C8.05908 0 0 8.05908 0 18C0 27.9409 8.05908 36 18 36C27.9409 36 36 27.9409 36 18C36 8.05908 27.9409 0 18 0ZM18 33C9.71592 33 3.00002 26.2841 3.00002 18C3.00002 9.71592 9.71592 3.00002 18 3.00002C26.2841 3.00002 33 9.71592 33 18C33 26.2841 26.2841 33 18 33Z" fill="#FE9832"/>
        <path d="M26.4853 9.51471C26.4853 9.51464 26.4853 9.51464 26.4853 9.51471C26.4852 9.51464 26.4852 9.51464 26.4853 9.51471C24.3137 7.34311 21.3137 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6275 11.3726 30 18 30C21.3137 30 24.3137 28.6569 26.4852 26.4854C28.6568 24.3138 30 21.3138 30 18.0001C30 14.6864 28.6569 11.6862 26.4853 9.51471ZM25.336 23.2149L23.1683 21.0472C23.4504 20.5697 23.6693 20.0505 23.8109 19.5H26.8748C26.6454 20.8674 26.1082 22.1305 25.336 23.2149ZM9.12518 19.5H12.189C12.3307 20.0505 12.5496 20.5697 12.8317 21.047L10.664 23.2148C9.8918 22.1305 9.35461 20.8674 9.12518 19.5ZM10.664 12.7853L12.8317 14.953C12.5497 15.4305 12.3307 15.9496 12.189 16.5H9.12518C9.35461 15.1326 9.8918 13.8696 10.664 12.7853ZM18 21C17.1723 21 16.423 20.6649 15.8802 20.123C15.8798 20.1224 15.8793 20.1218 15.8788 20.1214C15.8783 20.1209 15.8776 20.1204 15.8771 20.1199C15.3352 19.5771 15.0001 18.8278 15.0001 18.0001C15.0001 17.1724 15.3352 16.4231 15.8771 15.8803C15.8777 15.8798 15.8783 15.8793 15.8788 15.8788C15.8793 15.8783 15.8798 15.8777 15.8802 15.8772C16.423 15.3353 17.1723 15.0001 18 15.0001C19.6571 15.0001 21 16.343 21 18.0002C21 19.6573 19.6571 21 18 21ZM21.0469 12.8316C20.5696 12.5496 20.0504 12.3307 19.5 12.189V9.12518C20.8674 9.35461 22.1303 9.8918 23.2147 10.6639L21.0469 12.8316ZM16.5 12.189C15.9496 12.3307 15.4304 12.5496 14.953 12.8317L12.7853 10.664C13.8697 9.8918 15.1327 9.35461 16.5 9.12518V12.189ZM14.953 23.1684C15.4304 23.4504 15.9495 23.6694 16.5 23.8111V26.8749C15.1326 26.6455 13.8696 26.1083 12.7852 25.3361L14.953 23.1684ZM19.5 23.811C20.0504 23.6693 20.5696 23.4504 21.0469 23.1684L23.2147 25.3361C22.1304 26.1083 20.8674 26.6454 19.5 26.8749V23.811ZM23.811 16.5C23.6693 15.9496 23.4504 15.4303 23.1683 14.9529L25.3361 12.7852C26.1083 13.8695 26.6455 15.1325 26.8749 16.5H23.811V16.5Z" fill="#FE9832"/>
      </g>
      <defs>
        <clipPath id="clip0_16_50">
          <rect width="36" height="36" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    
  </div>
  <p>BY SIZE</p>
</div>



<div className="search-car"  >
  
    <p onClick={handleCarClick} // Set tyreType to 'car' on click
           style={{ cursor: 'pointer', backgroundColor: selectedImage === 'car' ? 'orange' : 'transparent' }}
     >by car</p>

    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0718 25.239C13.0766 26.5638 12.3021 27.761 11.11 28.2714C9.9179 28.7817 8.5434 28.5047 7.62831 27.5696C6.71321 26.6345 6.43803 25.2258 6.93128 24.0012C7.42452 22.7768 8.58887 21.978 9.88064 21.978C10.7254 21.9764 11.5363 22.3191 12.1347 22.9307C12.7332 23.5422 13.0703 24.3725 13.0718 25.239Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.7454 25.239C28.7501 26.5638 27.9756 27.761 26.7835 28.2714C25.5915 28.7817 24.2169 28.5047 23.3019 27.5696C22.3868 26.6345 22.1116 25.2258 22.6048 24.0012C23.098 22.7768 24.2624 21.978 25.5542 21.978C26.399 21.9764 27.2098 22.3191 27.8082 22.9307C28.4067 23.5422 28.7438 24.3725 28.7454 25.239Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.91647 14.9856C3.70225 15.5688 4.0014 16.2153 4.58461 16.4295C5.16784 16.6437 5.8143 16.3446 6.02851 15.7614L3.91647 14.9856ZM6.09423 12.3195L5.04732 11.9077C5.0442 11.9156 5.04115 11.9236 5.03821 11.9316L6.09423 12.3195ZM14.6952 8.625C15.3165 8.625 15.8202 8.12131 15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375V8.625ZM4.9725 16.4985C5.59381 16.4985 6.0975 15.9948 6.0975 15.3735C6.0975 14.7522 5.59381 14.2485 4.9725 14.2485V16.4985ZM3.05808 15.3735L3.04953 16.4985H3.05808V15.3735ZM1.46249 16.986L0.337493 16.9779V16.986H1.46249ZM0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625C2.08381 20.625 2.5875 20.1213 2.5875 19.5H0.337493ZM4.9725 14.2485C4.35117 14.2485 3.8475 14.7522 3.8475 15.3735C3.8475 15.9948 4.35117 16.4985 4.9725 16.4985V14.2485ZM14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735C15.8202 14.7522 15.3165 14.2485 14.6952 14.2485V16.4985ZM26.2854 15.7614C26.4996 16.3446 27.1461 16.6437 27.7293 16.4295C28.3125 16.2153 28.6116 15.5688 28.3974 14.9856L26.2854 15.7614ZM26.2197 12.3195L27.2757 11.9316C27.2727 11.9236 27.2697 11.9156 27.2666 11.9077L26.2197 12.3195ZM14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5C13.5702 8.12131 14.0739 8.625 14.6952 8.625V6.375ZM27.3414 16.4985C27.9627 16.4985 28.4664 15.9948 28.4664 15.3735C28.4664 14.7522 27.9627 14.2485 27.3414 14.2485V16.4985ZM14.6952 14.2485C14.0739 14.2485 13.5702 14.7522 13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985V14.2485ZM27.3414 14.2485C26.7201 14.2485 26.2164 14.7522 26.2164 15.3735C26.2164 15.9948 26.7201 16.4985 27.3414 16.4985V14.2485ZM32.0433 15.3735V16.4985H32.0508L32.0433 15.3735ZM33.6375 16.986H34.7625V16.9779L33.6375 16.986ZM32.5125 19.5C32.5125 20.1213 33.0162 20.625 33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5H32.5125ZM22.3631 26.364C22.9844 26.364 23.4881 25.8603 23.4881 25.239C23.4881 24.6177 22.9844 24.114 22.3631 24.114V26.364ZM13.0718 24.114C12.4505 24.114 11.9468 24.6177 11.9468 25.239C11.9468 25.8603 12.4505 26.364 13.0718 26.364V24.114ZM28.7454 24.114C28.1241 24.114 27.6204 24.6177 27.6204 25.239C27.6204 25.8603 28.1241 26.364 28.7454 26.364V24.114ZM32.042 25.239L32.0505 24.114H32.042V25.239ZM33.6375 23.6265L34.7625 23.6346V23.6265H33.6375ZM34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375C33.0162 18.375 32.5125 18.8787 32.5125 19.5H34.7625ZM6.68947 26.364C7.31079 26.364 7.81447 25.8603 7.81447 25.239C7.81447 24.6177 7.31079 24.114 6.68947 24.114V26.364ZM3.05808 25.239V24.114H3.04953L3.05808 25.239ZM1.46249 23.6265H0.337463L0.337522 23.6346L1.46249 23.6265ZM2.5875 19.5C2.5875 18.8787 2.08381 18.375 1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5H2.5875ZM15.8202 7.5C15.8202 6.87868 15.3165 6.375 14.6952 6.375C14.0739 6.375 13.5702 6.87868 13.5702 7.5H15.8202ZM13.5702 15.3735C13.5702 15.9948 14.0739 16.4985 14.6952 16.4985C15.3165 16.4985 15.8202 15.9948 15.8202 15.3735H13.5702ZM1.46249 18.375C0.841172 18.375 0.337493 18.8787 0.337493 19.5C0.337493 20.1213 0.841172 20.625 1.46249 20.625V18.375ZM4.37725 20.625C4.99857 20.625 5.50225 20.1213 5.50225 19.5C5.50225 18.8787 4.99857 18.375 4.37725 18.375V20.625ZM33.6375 20.625C34.2588 20.625 34.7625 20.1213 34.7625 19.5C34.7625 18.8787 34.2588 18.375 33.6375 18.375V20.625ZM30.5999 18.375C29.9786 18.375 29.4749 18.8787 29.4749 19.5C29.4749 20.1213 29.9786 20.625 30.5999 20.625V18.375ZM6.02851 15.7614L7.15024 12.7074L5.03821 11.9316L3.91647 14.9856L6.02851 15.7614ZM7.14114 12.7313C7.68841 11.3401 8.23695 10.3179 8.92239 9.64068C9.55996 9.01071 10.3707 8.625 11.6137 8.625V6.375C9.80888 6.375 8.42073 6.97329 7.34097 8.04019C6.30906 9.0598 5.62179 10.4473 5.04732 11.9077L7.14114 12.7313ZM11.6137 8.625H14.6952V6.375H11.6137V8.625ZM4.9725 14.2485H3.05808V16.4985H4.9725V14.2485ZM3.06663 14.2485C2.33886 14.243 1.64455 14.5345 1.13498 15.0495L2.73433 16.6321C2.82324 16.5423 2.93715 16.4976 3.04953 16.4985L3.06663 14.2485ZM1.13498 15.0495C0.626369 15.5635 0.342661 16.2577 0.337493 16.9779L2.58747 16.9941C2.58847 16.8525 2.64448 16.7229 2.73433 16.6321L1.13498 15.0495ZM0.337493 16.986V19.5H2.5875V16.986H0.337493ZM4.9725 16.4985H14.6952V14.2485H4.9725V16.4985ZM28.3974 14.9856L27.2757 11.9316L25.1637 12.7074L26.2854 15.7614L28.3974 14.9856ZM27.2666 11.9077C26.6921 10.4473 26.0049 9.0598 24.9729 8.04019C23.8932 6.97329 22.505 6.375 20.7002 6.375V8.625C21.9432 8.625 22.754 9.01071 23.3915 9.64068C24.077 10.3179 24.6255 11.3401 25.1727 12.7313L27.2666 11.9077ZM20.7002 6.375H14.6952V8.625H20.7002V6.375ZM27.3414 14.2485H14.6952V16.4985H27.3414V14.2485ZM27.3414 16.4985H32.0433V14.2485H27.3414V16.4985ZM32.0508 16.4985C32.2773 16.497 32.5103 16.6915 32.5125 16.9941L34.7625 16.9779C34.7517 15.4872 33.5579 14.2384 32.0358 14.2485L32.0508 16.4985ZM32.5125 16.986V19.5H34.7625V16.986H32.5125ZM22.3631 24.114H13.0718V26.364H22.3631V24.114ZM28.7454 26.364H32.042V24.114H28.7454V26.364ZM32.0333 26.364C32.7611 26.3695 33.4554 26.0779 33.965 25.563L32.3657 23.9803C32.2767 24.0702 32.1629 24.1149 32.0505 24.114L32.0333 26.364ZM33.965 25.563C34.4736 25.0489 34.7573 24.3547 34.7625 23.6346L32.5125 23.6184C32.5115 23.76 32.4555 23.8896 32.3657 23.9803L33.965 25.563ZM34.7625 23.6265V19.5H32.5125V23.6265H34.7625ZM6.68947 24.114H3.05808V26.364H6.68947V24.114ZM3.04953 24.114C2.93715 24.1149 2.82324 24.0702 2.73433 23.9803L1.13499 25.563C1.64455 26.0779 2.33886 26.3695 3.06663 26.364L3.04953 24.114ZM2.73433 23.9803C2.64448 23.8896 2.58847 23.76 2.58747 23.6184L0.337522 23.6346C0.342689 24.3547 0.626369 25.0489 1.13499 25.563L2.73433 23.9803ZM2.5875 23.6265V19.5H0.337493L0.337463 23.6265H2.5875ZM13.5702 7.5V15.3735H15.8202V7.5H13.5702ZM1.46249 20.625H4.37725V18.375H1.46249V20.625ZM33.6375 18.375H30.5999V20.625H33.6375V18.375Z" fill="white"/>
</svg>

</div>


 <div className='search-bike' >
       
 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 7H22L27 22" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"       />
<path d="M27 26C29.2091 26 31 24.2091 31 22C31 19.7909 29.2091 18 27 18C24.7909 18 23 19.7909 23 22C23 24.2091 24.7909 26 27 26Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"   />
<path d="M5 26C7.20914 26 9 24.2091 9 22C9 19.7909 7.20914 18 5 18C2.79086 18 1 19.7909 1 22C1 24.2091 2.79086 26 5 26Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 14C9.4 14 13 17.6 13 22H19C19 17.6 22.6 14 27 14C27.8 14 28.7 14.1 29.4 14.4" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 11H17L16.6 11.6C15 14.2 12 15.6 9 15" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p>by bike</p>

        </div>

        <div className='search-truck'>
       
       <p>BY TRUCK</p>


  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_16_121)">
<mask id="mask0_16_121"  maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<path d="M36 0H0V36H36V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_16_121)">
<path d="M35.9201 17.586L32.7578 9.61312C32.6748 9.40338 32.5306 9.22341 32.344 9.09663C32.1575 8.96984 31.9371 8.90206 31.7115 8.9021H24.5385C24.2401 8.9021 23.954 9.02064 23.743 9.23162C23.532 9.4426 23.4135 9.72873 23.4135 10.0271V24.8479H22.4291V10.0271C22.4291 9.72873 22.3106 9.4426 22.0996 9.23162C21.8886 9.02064 21.6025 8.9021 21.3041 8.9021H1.125C0.826631 8.9021 0.5405 9.02064 0.329521 9.23162C0.118543 9.4426 0 9.72873 0 10.0271V25.9729C0 26.2712 0.118543 26.5574 0.329521 26.7683C0.5405 26.9793 0.826631 27.0979 1.125 27.0979H2.91375C3.14578 27.8013 3.5938 28.4135 4.194 28.8476C4.7942 29.2816 5.51599 29.5152 6.25668 29.5152C6.99737 29.5152 7.7192 29.2816 8.3194 28.8476C8.9196 28.4135 9.36758 27.8013 9.59961 27.0979H26.3981C26.6302 27.8013 27.0782 28.4135 27.6784 28.8476C28.2786 29.2816 29.0004 29.5152 29.7411 29.5152C30.4817 29.5152 31.2036 29.2816 31.8038 28.8476C32.404 28.4135 32.852 27.8013 33.084 27.0979H34.875C35.1734 27.0979 35.4595 26.9793 35.6705 26.7683C35.8815 26.5574 36 26.2712 36 25.9729V18C36.0001 17.8581 35.973 17.7176 35.9201 17.586ZM30.9488 11.1521L33.4406 17.4375H25.6635V11.1521H30.9488ZM6.25726 27.2655C6.00165 27.2652 5.75183 27.1893 5.53941 27.0471C5.32699 26.9049 5.1615 26.7029 5.06384 26.4667C4.96618 26.2305 4.94071 25.9707 4.99071 25.72C5.04071 25.4693 5.16392 25.2391 5.34475 25.0584C5.52557 24.8778 5.75589 24.7548 6.0066 24.705C6.25732 24.6552 6.51717 24.6808 6.7533 24.7787C6.98943 24.8766 7.19125 25.0423 7.33324 25.2548C7.47522 25.4674 7.55101 25.7173 7.55101 25.9729C7.55071 26.3158 7.41426 26.6446 7.17167 26.887C6.92908 27.1293 6.60019 27.2655 6.25726 27.2655ZM19.8979 24.8479H9.60075C9.36871 24.1445 8.92073 23.5322 8.32053 23.0982C7.72033 22.6641 6.9985 22.4305 6.25781 22.4305C5.51713 22.4305 4.7953 22.6641 4.1951 23.0982C3.59489 23.5322 3.14691 24.1445 2.91488 24.8479H2.25V11.1521H20.178V24.8479H19.8979ZM29.7416 27.2655C29.486 27.2652 29.2362 27.1893 29.0238 27.0471C28.8114 26.9049 28.6459 26.7029 28.5482 26.4667C28.4506 26.2305 28.4251 25.9707 28.4751 25.72C28.5251 25.4693 28.6483 25.2391 28.8291 25.0584C29.0099 24.8778 29.2403 24.7548 29.491 24.705C29.7417 24.6552 30.0015 24.6808 30.2377 24.7787C30.4738 24.8766 30.6756 25.0423 30.8176 25.2548C30.9596 25.4674 31.0354 25.7173 31.0354 25.9729C31.0351 26.3158 30.8986 26.6446 30.656 26.887C30.4135 27.1293 30.0846 27.2655 29.7416 27.2655ZM33.0851 24.8479C32.8531 24.1445 32.4051 23.5322 31.8049 23.0982C31.2047 22.6641 30.4829 22.4305 29.7422 22.4305C29.0015 22.4305 28.2797 22.6641 27.6795 23.0982C27.0793 23.5322 26.6313 24.1445 26.3993 24.8479H25.6635V18.5625H33.75V24.8479H33.0851Z" fill="white"/>
<path d="M28.4062 19.3129H26.8594C26.7102 19.3129 26.5671 19.3721 26.4616 19.4776C26.3561 19.5831 26.2969 19.7262 26.2969 19.8754C26.2969 20.0246 26.3561 20.1676 26.4616 20.2731C26.5671 20.3786 26.7102 20.4379 26.8594 20.4379H28.4062C28.5554 20.4379 28.6985 20.3786 28.804 20.2731C28.9095 20.1676 28.9688 20.0246 28.9688 19.8754C28.9688 19.7262 28.9095 19.5831 28.804 19.4776C28.6985 19.3721 28.5554 19.3129 28.4062 19.3129Z" fill="white"/>
</g>
</g>
<defs>
<clipPath id="clip0_16_121">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>

    </div>


    
    
    {/* form*/}

    <div className='search-form1'>
        <h3>SEARCH BY SIZE</h3>
        <div className='form-img'> 
        </div>

        <div className='width'> 
        <label for="fname">WIDTH:</label><br/>
     <select value={width} onChange={(e) => setWidth(e.target.value)}>
            <option value="all"></option>
            {(tyreType === 'car' ? widthOptionsCar : widthOptionsBike).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>


        <div className='Height'>
        
        <label for="fname">HEIGHT:</label><br/>
        <select value={height} onChange={(e) => setHeight(e.target.value)}>
            <option value="all"></option>
            {(tyreType === 'car' ? heightOptionsCar : heightOptionsBike).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        
        </div>


        <div className='custom'>
       
            <label for="fname">CUSTOM:</label><br/>
            <select value={customs} onChange={(e) => setCustoms(e.target.value)}>
            <option value="all"></option>
            {(tyreType === 'car' ? customsOptionsCar : customsOptionsBike).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

        </div>


        <div className='whether'>
        
        <label for="fname">WHETHER:</label><br/>
        <select value={seasons} onChange={(e) => setSeasons(e.target.value)}>
            <option value="all"></option>
            {seasonsOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        
        </div>

        <div className='form-button'>
        <button onClick={handleSearch}>Find Tyre</button>
        </div>
       
    </div>

</div>

{/* Section 5 */}

<div className='best-seller'>
  <p>BEST SELLER</p>

</div>



{result.map((tyre) => {
    const isNew = (new Date() - new Date(tyre.createdAt)) < 30 * 24 * 60 * 60 * 1000; // within 1 hour
    const isOnSale = tyre.Salesprice < tyre.price;
    return (
        

      <div className="tyres-container">
        {result.map((tyre) => (
           
         
          <div key={tyre._id} className="tyre-card">
         
            <div className='img-container '>

          
           

{isOnSale && (
            <div className="tyre-status sale">
              <span>Sale</span>
            </div>
          )}
          {isNew && (
            <div className="tyre-status new">
              <span>New</span>
            </div>
          )}
            

            <img src={`http://localhost:8000/uploads/${tyre.avatarImages}`} alt={tyre.title} className="tyre-image" />
            </div>
            <div className="tyre-details">
              <h2>{tyre.title}</h2>
              <div className="price-section">
                {tyre.Salesprice && (
                  <span className="Sales-price">₹ {tyre.Salesprice}</span>
                )}
                <span className="tyre-price">₹ {tyre.price}</span>
              </div>
              <p className="tyre-description">
               
              </p>
 
            </div>

           
       
            <Link to={`/details/${tyre._id}/${tyre.tyreType}`}>
              <button className='tyre-button'><span>View Details</span></button>
              </Link>
          </div>
        ))}
      </div>
    );
})}







      {/* section 6 */}
     
     <div className='tyres-brand'>
      <h1>Popular Tire Brands We Carry</h1>
      <div className="tyres-brand-img">
        <div className='logo-container'>
          <img src='https://s3-alpha-sig.figma.com/img/09b8/553f/559ff5377b56ba6815a3c65c65ebebec?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQjaZP378ddSXbo9RJzBLCI7NAz~4VNJU9q0kcN2WeD3-zDssgjngvWh8U0m6lpBMQd3Xwesm14AFjJKgs9~hK7tmYM-IQy3jd4nW7WF6bTE3qZlywjZ36-uCS6EwhSplqHl-ano7HlJvzONmPiAySSfJAxUCYLVljceHQo5WIMm4YtpbAUcAIv-rCa0zFG~YxN2kd2qXKPkHs44h1n4GXIzub2lX0kYLSCUnekj48~UyugKmDuu-YPPCYljbdrno-Ziu7QAA0OHafBI5U1-tNGaG-mIO4I~c48g4~6tmEvHoore89GnEmpKaFvlk2AiBl2v2Df9fI0E55raoiqLZQ__' />
        </div>

        <div className='logo-container'>
          <img src='https://s3-alpha-sig.figma.com/img/e310/9305/727a09f7906cd877821b365ac4528f07?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zo-Cacrx1ozEqFsKEftFwKf3CmbmpEobGkHlDsocyyktOMXIHGT8hKCL~qyaZK199el-3EQ6QfOXCBpoi2v~iL~JioumEHiafWwzwpiFQ~kyNc7gbx7RZOzgKjDCuZROxIQVm5unyzbskOhBqeh6cVakf9mRwX7xAHQDXKtNml7-Q6w0HTdd0SIdZ-qbsCjoxiqWmYULBuRgQPpeQ7LOblr5qjf8DtD2L7OFl9REBaF8MgJVKRPcJOd8WcALFhfFew0gR4nXD0aZLwg7SQyqXUWwWfsdPvncxFiMYORCyIYSD68c0uxrZKN8nmz6-c9omF702hJR~ygxt9eGkSCEaA__' />
        </div>

        <div className='logo-container'>
          <img src='https://s3-alpha-sig.figma.com/img/ff8c/d625/6a8f1a1aaa2a38927357b05fa25b1724?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhBHGvOupIY-ZSNva-WXZ~aHDPwQJ7r9xYFgtsNwIS-Kw-akf-BqppdPvikQctKRwnI6gqW2jkacJtJEoTRfn85~-30YTDPx3cibcnzoAZQ19cYkimNneWxPw608Kaftc0ayvnFqKdVYNo1YFWMG7As-QHiaKxlXRW4MQ-jfful2KGp1gOruzC4Q88JIdrNGqNDG49lPwoHHrgTQ~bFXqLv3QHmDYQS6ytx6cH~6atMbqKAgMWIR53b4SzZ5ZbyYJlATPtde~gFaCkUKll-CEeaE62ekgQkx7w3deE9KKq2zlHRWMkvB8HDLTGKBZWDlZBIEKaIOFDbwHzMyz81fKQ__' />
        </div>

        <div className='logo-container'>
          <img src='https://s3-alpha-sig.figma.com/img/0a03/d39c/ecbe104aaa8251160fbf7010e07c1dea?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cHoQI~~AdCI0Ucgy60UsNiP7sWtbFj4cyp2oBaGFOshUtuynizio3~tcK37EezIRkTBipQWjxIOdZ4wb77OcRI29BJSAs3qCVjn-UlOWBsN~xyYF8Jfv1woLzoaxOTObknSevQ9W5bCapLeM1zep0AX15wz6K3RwRR56QQZXWZQiF6cfQgmgfXqPYx36J5UtTS6mn2CNd5J6kSpQduRaUmYRClt2fPDDXydcKzB1VMOkU-HcIvVoi6riPnVS7XZSWChaR1vZUx9zJe0z-jarw88GfMl0G9bNu7WxksBd~IMtp~aUprCgdHooTzetw1UqWU9S1AKGoVAyw5kBGuS8Jg__' />
        </div>

        <div className='logo-container'>

          <img src='https://s3-alpha-sig.figma.com/img/81ac/fb3b/90375d4d3bdfec06874771188943c679?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZBTWQeGmZUa0-0j6sJJm8qaAMGtrddR1njJUAByBEBwk0MvDAQhxeA9fKpYJUWQ-9DXd-AcOLyxcww-YdxX1Po~wG2gpW4TeL1arll75-~~K01FcuDFkqaTbla5JluG9CbsVeZkEpvVbHadSsEWLalD~mDfIhiwJebbXw1M8dSo9J2kkb-Hp5LblewVAWruxW0DFgbUYMa3D4Zq9ibLvlyLFCdqFNQF85jWjNxV2jGyTMaozPj5IvEEwYW6d0M3PTDcJ7c~aa0beCUG6HIpuHQNxTyvSPCjGM5I1GGPXnyEwLC3-FPizeGyOwVaErxH2APtBn9-rSm-iWu4H72zhg__' />
        </div>

        <div className='logo-container'>
        <img src='https://s3-alpha-sig.figma.com/img/09b8/553f/559ff5377b56ba6815a3c65c65ebebec?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQjaZP378ddSXbo9RJzBLCI7NAz~4VNJU9q0kcN2WeD3-zDssgjngvWh8U0m6lpBMQd3Xwesm14AFjJKgs9~hK7tmYM-IQy3jd4nW7WF6bTE3qZlywjZ36-uCS6EwhSplqHl-ano7HlJvzONmPiAySSfJAxUCYLVljceHQo5WIMm4YtpbAUcAIv-rCa0zFG~YxN2kd2qXKPkHs44h1n4GXIzub2lX0kYLSCUnekj48~UyugKmDuu-YPPCYljbdrno-Ziu7QAA0OHafBI5U1-tNGaG-mIO4I~c48g4~6tmEvHoore89GnEmpKaFvlk2AiBl2v2Df9fI0E55raoiqLZQ__'  />
        </div>

        <div className='logo-container'>
          <img src='https://s3-alpha-sig.figma.com/img/369c/3225/d1fe99b677b54c3c89668a0e424b3dc0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrBmi3hqpZx0txSdu4FXvykFYuzTsJIrfsfdUYYx~hlFYD4e7j2ZKzquBXllbRW5CEXsN76bWEAJu1b3l0V1nVBnOEvWcIzxf53N8fC-LramA4zPaYynP0z~-VTH7Yn7eR0e5x-nTXRXQL~moBsgZqd9RANiaEkjN2~gDUILDg7Uw~S34a-b9UQCu7njKXIS~7Acdk7u71OEOwtJ5RxqOlTIRd6CwgeM~BiVQvo-ZPYcYcqxNSLsGIqGPTLkS79gUWe2F-auDLizVsiK6I~7RuSlddG9k-2rJ4jQ7thMhIUtmfSiyDiPil4EyPL5jUTEUuifks-ATbIPI509n0HYqg__'/>
        </div>
        
        <div className='logo-container'>
          <img src='https://s3-alpha-sig.figma.com/img/369c/3225/d1fe99b677b54c3c89668a0e424b3dc0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrBmi3hqpZx0txSdu4FXvykFYuzTsJIrfsfdUYYx~hlFYD4e7j2ZKzquBXllbRW5CEXsN76bWEAJu1b3l0V1nVBnOEvWcIzxf53N8fC-LramA4zPaYynP0z~-VTH7Yn7eR0e5x-nTXRXQL~moBsgZqd9RANiaEkjN2~gDUILDg7Uw~S34a-b9UQCu7njKXIS~7Acdk7u71OEOwtJ5RxqOlTIRd6CwgeM~BiVQvo-ZPYcYcqxNSLsGIqGPTLkS79gUWe2F-auDLizVsiK6I~7RuSlddG9k-2rJ4jQ7thMhIUtmfSiyDiPil4EyPL5jUTEUuifks-ATbIPI509n0HYqg__'/>
        </div>
      </div>
     </div>
     
    <FrontendFooter/>
    </div>
    </>
  )
}



