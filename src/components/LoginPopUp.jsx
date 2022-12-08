import React from "react";

const LoginPopUp = props => {
    return(
        <div className="popup-box">
        <div className="popup-container">
            <img src={props.closeButton} className='close-button' onClick={props.handleClose} />
        <h2 class="text-center">LOGIN</h2>
        <form className="form">
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br/><br/>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br/><br/>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
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


