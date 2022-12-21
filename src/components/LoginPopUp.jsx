import React from "react";
import useState from "react";

const LoginPopUp = props => {

    // usestate for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // function to handle login
    const handleLogin = () => {
        // check if username and password is empty
        if (username === "" || password === "") {
            alert("Please fill in all fields");
        } else {
            // if not empty, send login request to backend
            fetch("https://feodoraflo.itshiroto.me/laravel/api/login", {
                method: "POST",
                credentials: "include",
                mode: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    // if login is successful, redirect to home
                    if (data.status === "success") {
                        window.location.href = "/";
                    }
                    // if login is not successful, show error message
                    else {
                        alert("Login failed");
                    }

                }
                );
        }
    };

    return(
        <div className="popup-box">
        <div className="popup-container">
            <img src={props.closeButton} className='close-button' onClick={props.handleClose} />
        <h2 class="text-center">LOGIN</h2>
        <form className="form" onSubmit={handleLogin}>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" onChange={(e) => setUsername(e.target.value)} />
            <br/><br/>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" onChange={(e) => setPassword(e.target.value)} />
            <br/><br/>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
          <br/>
          <center className="registerlink">
          <a href="/register">Or register here</a>
          </center>
        </div>
        
        </div>
    );
}

export default LoginPopUp;

//function LoginPopUp({pict, handleClick}) {
//     function handleClickFunction() {
//         handleClick ()
//     }
    
//     return (
            
//     )
// }; 
{/* <div className="login" onClick={handleClickFunction}>
                <img className="LoginPopUp" src={pict} />
            <div className="popup-box">
                         <div className="popup-container">
                         <h2 class="text-center">LOGIN</h2>
                         <form>
                             <label>Username:
                                 <input type="text" />
                             </label>
                             <label>Password:
                                 <input type="password" />
                             </label>
                         </form>
                         </div>
                         </div>
                         </div> */}
/* // const LoginPopUp = (button) => 
//     function close() {
//         console.log("test");
//         button.handleClose();
//     }
//     return(
//         <div className="popup-box">
//             <div className="popup-container">
//             <h2 class="text-center">LOGIN</h2>
//             <form>
//                 <label>Username:
//                     <input type="text" />
//                 </label>
//                 <label>Password:
//                     <input type="password" />
//                 </label>
//             </form>
//             </div>
//         </div>
//     );
// }; */ 


