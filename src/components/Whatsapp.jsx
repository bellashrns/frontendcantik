import React from "react";

function Whatsapp() {
    const open = () => {
        window.open('https://api.whatsapp.com/send?phone=62895345960340&text=I%20want%20to%20make%20a%20custom%20order.');
    }
    return(
        <button className="waButton" onClick={open}> Whatsapp</button>
    );
}

export default Whatsapp;