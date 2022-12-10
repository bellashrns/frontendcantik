import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function Register () {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    };

    return (
        <div>
        <Heading/>
        <div class="container">
            <br/>
        <h2 class="text-center">REGISTER</h2>
        <form className="form">
            <label>Nama Lengkap</label>
            <br/>
            <input type="text" name="namalengkap" className="regist-box" />
            <br/><br/>
            <label>Email</label>
            <br/>
            <input type="text" name="email" className="regist-box" />
            <br/><br/>
            <label>Nomor Telepon</label>
            <br/>
            <input type="text" name="notelp" className="regist-box" />
            <br/><br/>
            <label>Username</label>
            <br/>
            <input type="text" name="username" className="regist-box" />
            <br/><br/>
            <label>Password</label>
            <br/>
            <input type="password" name="password" className="regist-box" />
            <br/><br/><br/>
            <button onClick={navigateToHome} type="submit" className="regist-btn">REGISTER</button>
          </form>
          <br/> <br/>
        </div>
        <Footer/>
        </div>
    );
}

export default Register;