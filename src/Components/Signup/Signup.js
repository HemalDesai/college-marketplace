import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../sellit-logo.png";
import "./Signup.css";
import { Firebase } from "../../firebase/config";
import { useHistory } from "react-router";
import SignUpLoading from "../Loading/SignUpLoading";

export default function Signup() {
  const history = useHistory();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [loading,setLoading]=useState(false)
  document.body.style.backgroundColor = "#28282B"
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: name }).then(() => {
          Firebase.firestore().collection("users").doc(result.user.uid).set({
            id: result.user.uid,
            name: name,
            phone: phone,
          });
        });
      })
      .then(() => {
        history.push("/login");
      });
  };
  return (<>
    {loading && <SignUpLoading/> } <div>
      <div className="signupParentDiv">
        {/* <img width="200px" height="200px" src={Logo} alt=""></img> */}
        {/* <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link> */}




<div class="login-box">
  <h2>Signup</h2>
  <form onSubmit={handleSubmit}>

  <div class="user-box">
      <input type="text" name=""
      value={name}
      onChange={(e) => setName(e.target.value)}
      required="" />
      <label class="email-text">Full Name</label>
    </div>




    <div class="user-box">
      <input type="text" name=""
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required="" />
      <label class="email-text">Email</label>
    </div>


    <div class="user-box">
      <input type="text" name=""
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required="" />
      <label class="email-text">Phone No</label>
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
      SIGN UP</button>
    </a>
    
    <a href="/login">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="s1">LOGIN</div>
    </a>
    </div>
  </form>
  
</div>










      </div>
    </div> 
    </>
  );
}
