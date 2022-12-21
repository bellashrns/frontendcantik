import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";

function Register () {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    };

    // create usestate for nama lengkap, email, no telp, username, password
    const [namalengkap, setNamaLengkap] = useState("");
    const [email, setEmail] = useState("");
    const [notelp, setNoTelp] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // create function to register
    const register = async () => {
      try {
        // set csrf token to local storage
        useEffect(() => {
            const getCsrfToken = async () => {
                try {
                  var header = new Headers();

                  var requestOptions = {
                    method: 'GET',
                    headers: header,
                    redirect: 'follow',
                    credentials: "include",
                  };
                  // fetch csrf token and save set-cookie to local storage
                  fetch("https://feodoraflo.itshiroto.me/laravel/sanctum/csrf-cookie", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
                } catch (err) {
                  console.log(err);
                }
            };
            getCsrfToken();
        }, []);

        // register
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "name": namalengkap,
          "email": email,
          "phone": notelp,
          "username": username,
          "password": password
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
          credentials: "include",
        };

        fetch("https://feodoraflo.itshiroto.me/laravel/api/register", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (err) {
        console.log(err);
      }
    };


    return (
        <div>
        <Heading/>
        <div class="container">
            <br/>
        <h2 class="text-center">REGISTER</h2>
        <form className="form" onSubmit={navigateToHome}>
            <label>Nama Lengkap</label>
            <br/>
            <input type="text" name="namalengkap" className="regist-box" onChange={(e) => setNamaLengkap(e.target.value)} />
            <br/><br/>
            <label>Email</label>
            <br/>
            <input type="text" name="email" className="regist-box" onChange={(e) => setEmail(e.target.value)} />
            <br/><br/>
            <label>Nomor Telepon</label>
            <br/>
            <input type="text" name="notelp" className="regist-box" onChange={(e) => setNoTelp(e.target.value)} />
            <br/><br/>
            <label>Username</label>
            <br/>
            <input type="text" name="username" className="regist-box" onChange={(e) => setUsername(e.target.value)} />
            <br/><br/>
            <label>Password</label>
            <br/>
            <input type="password" name="password" className="regist-box" onChange={(e) => setPassword(e.target.value)} />
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