import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { Firebase } from "../../firebase/config";
import Logo from "../../sellit-logo.png";
import RoundLoading from "../Loading/RoundLoading";
import "./Login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  document.body.style.backgroundColor = "#28282B"
  const history = useHistory()
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })

  };
  return (<>
    {loading && <RoundLoading/> }
    <div className="overall-body">
      
      <div class="login-box">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name=""
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required="" />
      <label class="email-text">Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required="" />
      <label>Password</label>
    </div>
    <div class="adjacent">
    <a href="#" class="a12">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button class="hemal">
      LOGIN</button>
    </a>
    
    <a href="/signup">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="s1">Sign up</div>
    </a>
    </div>
  </form>
  
</div>



    </div>
    </>
  );
}

export default Login;
