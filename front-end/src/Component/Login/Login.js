import React , {useEffect} from "react";

const Login = ()=>{

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
   
   

    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth){
            
        }
        });
      
      

//api fetch
    const handleLogin=  async ()=>{
        console.log(email,password)
        let result = await fetch('http://localhost:8000/Login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{ 
                'content-Type':'application/json'
            }
    });

    result = await result.json();
    console.log(result);
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
      
    }else{
        alert("please enter correct details")
    }
    }

  
    return (
      
<body class="sign-inup" id="body">
		<div class="container d-flex align-items-center justify-content-center form-height-login pt-24px pb-24px">
			<div class="row justify-content-center">
				<div class="col-lg-6 col-md-10">
					<div class="card">
						<div class="card-header bg-primary">
							<div class="ec-brand">
								<a href="#" title="Ekka">
									
                  <img class="ec-brand-icon" src="https://amuze.in/projects//tyreking-admin-ui/assets/img/logo/logo-login.png" alt="Logo" />

								</a>
							</div>
						</div>
						<div class="card-body p-5">
							<h4 class="text-dark mb-5">Sign In</h4>
							
							<form action="dashboard.php">
								<div class="row">
									<div class="form-group col-md-12 mb-4">
										<input type="email" class="form-control" id="email"  value={email}
                       onChange={(e) => setEmail(e.target.value)} placeholder="Useremail"/>
									</div>
									
									<div class="form-group col-md-12 ">
										<input type="password" class="form-control" id="password"  value={password}
                   onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
									</div>
									
									<div class="col-md-12">
										
										<button type="submit" onClick={handleLogin} class="btn btn-primary btn-block mb-4">Sign In</button>
										
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

