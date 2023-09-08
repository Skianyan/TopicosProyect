import "./style.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import { info } from "./helper/page-data.js";
import { api } from "./helper/data-api.js";

document.body.appendChild(Header(info));
    const gallery = document.createElement("div");
    gallery.id = 'gallery'
    document.body.appendChild(gallery);
api.forEach(apiItem => {
    gallery.appendChild(Card(apiItem));
})