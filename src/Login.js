import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function Login () {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    };

    return (
        <div>
        <Heading/>
        <div class="container">
            <br/>
        <h2 class="text-center">LOGIN</h2>
        <form className="form">
            <label>Username</label>
            <br/>
            <input type="text" name="username" className="regist-box" />
            <br/><br/>
            <label>Password</label>
            <br/>
            <input type="password" name="password" className="regist-box" />
            <br/><br/><br/>
            <button onClick={navigateToHome} type="submit" className="regist-btn">LOGIN</button>
          </form>
          <br/> <br/>
          <center className="registerlink">
          <a href="/register">Or register here</a>
          </center>
          <br/> <br/>
        </div>
        <Footer/>
        </div>
    );
}

export default Login;