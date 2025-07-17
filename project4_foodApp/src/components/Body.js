import RestaurentCard from "./RestaurentCard";
// import { restaurents } from "../utils/mockData";
import {use, useEffect, useState } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus"; //custom hook to check online status

const Body = () =>{
    const [searchText, setSearchText] = useState(''); 
    const[updatedRestaurantList, setUpdatedRestaurantList] = useState([]);

    let listOfRestaurents = useListOfRestaurants();
    let copyOfListOfRestaurents = useListOfRestaurants();

    useEffect(() =>{
        setUpdatedRestaurantList(copyOfListOfRestaurents);
    },[copyOfListOfRestaurents]);

    const isOnline = useOnlineStatus(); //custom hook to check online status
 
    if(isOnline === false){
        return (
            <div className="body_layout">
                <h1>Looks like you are offline</h1>
            </div>
        )
    }
    if(Array.isArray(listOfRestaurents) && listOfRestaurents.length === 0 ) {
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
                            setUpdatedRestaurantList(searchFilteredData);
                        }}> search </button>
                </div>
                <button 
                    className='filter_btn' 
                    onClick={() => {
                        const filteredData = listOfRestaurents.filter((restaurent) => {
                            return restaurent.info.avgRating > 4.0;
                        })
                        setUpdatedRestaurantList(filteredData);
                    }}>Top Rated</button>
            </div>
            <div className='restaurent_container'>
                {
                    updatedRestaurantList.map((data) => {
                      return( 
                            <Link key={data.info.id} to={`/restaurant/${data.info.id}`}>
                                <RestaurentCard
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