import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Image from "../../assets/flower.jpg";

export const Catalogue = [
  {
    itemName: "Flower A",
    desc: "Blablabla",
    price: "100000",
    status: "active",
    path: "/flowera",
    icon: <Image />,
    cName: "nav-text",
  },
  {
    itemName: "Flower B",
    desc: "Blablabla",
    price: "200000",
    status: "active",
    path: "/flowerb",
    icon: <Image />,
    cName: "nav-text",
  },
  {
    itemName: "Flower C",
    desc: "Blablabla",
    price: "300000",
    status: "active",
    path: "/flowerc",
    icon: <Image />,
    cName: "nav-text",
  },
];