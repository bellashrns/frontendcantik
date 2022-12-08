import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import LoginPopUp from "./components/LoginPopUp";
import shopee from "./assets/shopee.png";

function Login(button) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [isOpenLoginPopUp, setIsOpenLoginPopUp] = useState(false);
    const togglePopupLoginPopUp = () => {
        setIsOpenLoginPopUp(!isOpenLoginPopUp);
    }
    return (
        <div>
            <Heading/>
            <div className="container">
               <LoginPopUp img={shopee} handleClick={togglePopupLoginPopUp}/>
               {isOpenLoginPopUp && <LoginPopUp closeButton={CloseButton} handleClose={togglePopupLoginPopUp} />}
            </div>
            <Footer/>
        </div>
    );
}

export default Login;