import React, { useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import {data} from './constants';
import Card from "./Card";
import {Link} from "react-router-dom";
import Notfound from "./NotFound";




// Search--------------------------------------------------------->

const Search=({onSearch})=>{
    const [text, setText] = useState("");
    const textHandler =(e)=>{
        const searchText=e.target.value;
        setText(searchText);
        onSearch(searchText);
    }
    
    return(
        <div className="search">
            <input type="search" placeholder="Search Anything..." value={text} onChange={textHandler}></input>
            
        </div>
    );
}




// Body----------------------------------------------------------------------->




function Body() {
    const [dataArray, setDataArray] = useState([]);
    const [searchArray, setSearchArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                const dataArr = data;
                setDataArray(dataArr);
                setSearchArray(dataArr);
                setLoading(false);
    }, []);

    const handleSearch = (searchText) => {
        const filteredArray = dataArray.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchArray(filteredArray);
    }

    if(loading){
        return <Shimmer/>
    }

    

    return (
        <div className="body">   
            <div className="heading">
            <h1>Restaurants</h1>
            <hr width="84%"></hr>
            <Search onSearch={handleSearch} />
            </div>
            
            
                <div className="cards">
                
                    {
                    (!searchArray.length)?(
                        <Notfound/>
                    ):(searchArray.map((item) => 
                        (
                        <Link to={`/card/${item.info.id}`} key={item.info.name} className="no-underline">
                            <Card key={item.info.name} {...item} />
                            </Link>
                    )))}

        </div>

                
     
        </div>
     )}

export default Body;

