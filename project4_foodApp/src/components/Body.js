import RestaurentContainer from "./RestaurentContainer";
// import { restaurents } from "../utils/mockData";
import {useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
    const [listOfRestaurents, setListOfRestaurents] = useState([]);
    const [searchText, setSearchText] = useState(''); 
    const [copyOfListOfRestaurents, setCopyOfListOfRestaurents] = useState([]); //use copy of your data to filter and search the data so original data is not lost

    useEffect(() => {
        fetchData();
        console.log("useEffect called");
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
console.log("json", json);
        setListOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCopyOfListOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("listOfRestaurents", listOfRestaurents);
    if(Array.isArray(listOfRestaurents) && listOfRestaurents.length === 0 || listOfRestaurents=== undefined) {
        return (
            <div className="body_layout">
                <Shimmer/>
            </div>  
        )
    }
    return (
        <div className='body_layout'>
            <div className='search-filter'>
                <div className='search_container'>
                    <input 
                    value = {searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className='search_btn' 
                        onClick={() => {
                            const searchFilteredData = listOfRestaurents.filter((data) => {
                                return data.info.name.toLowerCase().includes(searchText.toLowerCase());
                            })
                            setCopyOfListOfRestaurents(searchFilteredData);
                        }}> search </button>
                </div>
                <button 
                    className='filter_btn' 
                    onClick={() => {
                        const filteredData = listOfRestaurents.filter((restaurent) => {
                            return restaurent.info.avgRating > 4.0;
                        })
                        console.log("filterred",filteredData);
                        setCopyOfListOfRestaurents(filteredData);
                    }}>Top Rated</button>
            </div>
            <div className='restaurent_container'>
                {
                    copyOfListOfRestaurents.map((data) => {
                      return( 
                            <Link key={data.info.id} to={`/restaurant/${data.info.id}`}>
                                <RestaurentContainer
                                    restaurentData = {data}/>  
                            </Link>
                        )}
                        
                    )
                }     
            </div>
        </div>
    )
}

export default Body;