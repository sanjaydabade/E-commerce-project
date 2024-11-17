
// import React, { useState, useEffect } from "react";

// const Signup = () => {
  
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");

//     useEffect(() => {
//         const auth = localStorage.getItem('user');
//         if (auth) {
         
//         }
//     }, []);

//     const collectData = async () => {
//         console.warn( email, password);
//         let result = await fetch('http://localhost:8000/register', {
//             method: 'post',
//             body: JSON.stringify({  email, password }),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });
//         result = await result.json();
//         console.log(result);
//         if (result) {
//             localStorage.setItem("user", JSON.stringify(result.result));
//             localStorage.setItem("token", JSON.stringify(result.auth));
          
//         }
        
//     }

//     return (
//         <>
//      <body class="sign-inup" id="body">
// 		<div class="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
// 			<div class="row justify-content-center">
// 				<div class="col-lg-6 col-md-10">
// 					<div class="card">
// 						<div class="card-header bg-primary">
// 							<div class="ec-brand">
// 								<a href="#" title="Ekka">
									
//                   <img class="ec-brand-icon" src="https://amuze.in/projects//tyreking-admin-ui/assets/img/logo/logo-login.png" alt="Logo" />

// 								</a>
// 							</div>
// 						</div>
// 						<div class="card-body p-5">
// 							<h4 class="text-dark mb-5">Sign In</h4>
							
// 							<form action="/dashboard">
// 								<div class="row">
// 									<div class="form-group col-md-12 mb-4">
// 										<input type="email" class="form-control" id="email"  value={email}
//                        onChange={(e) => setEmail(e.target.value)} placeholder="Useremail"/>
// 									</div>
									
// 									<div class="form-group col-md-12 ">
// 										<input type="password" class="form-control" id="password"  value={password}
//                    onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
// 									</div>
									
// 									<div class="col-md-12">
										
// 										<button type="submit" onClick={collectData} class="btn btn-primary btn-block mb-4">Sign In</button>
										
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//     </body>
//         </>
//     );
// }

// export default Signup;



import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            
            navigate('/'); 
        }
    }, [navigate]);

    // API fetch for login
    const handleLogin = async (e) => {
        e.preventDefault(); 
        console.log(email, password); 

        try {
            let result = await fetch('http://localhost:8000/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 
                    'Content-Type': 'application/json'
                }
            });

            result = await result.json();
            console.log(result); 

            if (result.user) { 
                localStorage.setItem("user", JSON.stringify(result.user)); 
                navigate('/dashboard'); 
            } else {
                alert("Please enter correct details"); 
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again."); 
        }
    };  

    return (
        <body className="sign-inup" id="body">
            <div className="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <div className="ec-brand">
                                    <a href="#" title="Ekka">
                                        <img className="ec-brand-icon" src="https://amuze.in/projects//tyreking-admin-ui/assets/img/logo/logo-login.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="card-body p-5">
                                <h4 className="text-dark mb-5">Sign In</h4>
                                <form onSubmit={handleLogin}>
                                    <div className="row">
                                        <div className="form-group col-md-12 mb-4">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} 
                                                placeholder="User email" 
                                                required 
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="password" 
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} 
                                                placeholder="Password" 
                                                required 
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Login;