import {useState, useEffect} from 'react';

const useListOfRestaurants = () =>{

    const [listOfRestaurents, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() =>{
        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log("json", json);
        // setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurents;
}
export default useListOfRestaurants;