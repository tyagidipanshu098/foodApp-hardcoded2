import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {data} from "./constants";


const RestaurantMenu = () => {
const {id} = useParams();
const card = data.find(item => item.info.id === id);
const {info} = card;


    return (
        <div className="container">
        <div className="resMenu">
            <div className="resimg">
               <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info.cloudinaryImageId} alt="card image" />
            </div>
            <div className="res-text">
                <div className="res-des">
                   <h2>{info.name}</h2>
                   <h3 className="price">{info.costForTwo}</h3>
                   <p>Locality: {info.locality}</p>
                   <p>Area: {info.areaName}</p>
                   <p>Cuisines: {info.cuisines.join(", ")}</p>
                   <p>Average Rating: {info.avgRating}</p>
                </div>
            <div className="res-btns">
                <button className="res-btn1">Order now!</button>
                <button className="res-btn2"><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
            </div>
        </div>
        </div>
    );
}

export default RestaurantMenu;
