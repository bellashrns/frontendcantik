import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import "./App.css";
import Checkbox from "./components/Checkbox";

function ShoppingCart() {
    const [checkedAll, setCheckedAll] = useState(false);
    const [checkedState, setCheckedState] = useState(
        new Array(cart.length).fill(false)
    );

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let allChecked = true;
        checkedState.forEach((item) => {
            if (item === false) {
                allChecked = false;
            }
        });

        setCheckedAll(allChecked);

        const totalitem = checkedState.reduce((sum, currentState, index) => {
            if (currentState === true) {
                return sum + cart[index].quantity;
            } else {
                return sum;
            }
        }, 0);

        const totalprice = checkedState.reduce((sum, currentState, index) => {
            if (currentState === true) {
                return sum + products[cart[index].id-1].price * cart[index].quantity;
            } else {
                return sum;
            }
        }, 0);

        setTotalItems(totalitem);
        setTotalPrice(totalprice);
    }, [checkedState]);
    

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const selectAll = (value) => {
        setCheckedAll(value);
        setCheckedState(checkedState.map((item) => value));
    };

    // get shopping cart
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getCart = async () => {
            try {
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow',
                    credentials: "include",
                };
                fetch("https://feodoraflo.itshiroto.me/laravel/api/cart", requestOptions)
                    .then(response => response.json())
                    .then(result => setCart(result))
                    .catch(error => console.log('error', error));

            } catch (err) {
                console.log(err);
            }
        };
        getCart();
    }, []);



    return (
        <div>
            <Heading />
            <div className="p-5 row d-flex justify-content-between">
                <h1>Shopping Cart</h1>
                <div className="col-6">
                    <div className="border-bottom">
                        <input onChange={(e) => selectAll(e.target.checked)} checked={checkedAll} className="mx-2" type="checkbox" />
                        <label>Select All</label>
                    </div>
                    <div>
                        {/* map all cart items */}
                        {cart.map((item, index) => (
                            <div className="border-bottom">
                                <Checkbox
                                    label={products[item.id-1].name}
                                    src={products[item.id-1].src}
                                    quantity={item.quantity}
                                    totalPrice={products[item.id-1].price * item.quantity}
                                    checked={checkedState[index]}
                                    onChange={() => handleChange(index)}
                                />
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 row">
                    <div className="col">
                        <h5>Order</h5>
                        <p>Invoice Number</p>
                        <p>Total Items</p>
                        <h5>Subtotal</h5>
                    </div>
                    <div className="col">
                        <h5 style={{marginTop: 30}}></h5>
                        <p>234029502</p>
                        <p>{totalItems}</p>
                        <h5>{totalPrice}</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShoppingCart;