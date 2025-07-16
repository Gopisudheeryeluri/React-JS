import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {RESTAURANT_MENU_API} from '../utils/constants';

const RestaurantMenu = () => {
    const [restaurant, setRestaurantCard] = useState([]);
    const[listItems, setListItems] = useState([]);
    
    console.log("id", useParams());
    const {id} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_API + id);
        const json = await data.json();
        console.log("json", json);
        setRestaurantCard(json?.data?.cards[2]?.card?.card?.info);
        setListItems(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards);
    }
console.log("restaurant", restaurant);
console.log("listItems", listItems);
const listItemmap = listItems[1]?.card?.card?.itemCards;
console.log("listItemmap", listItemmap);
    return (
        <div className="Restaurant_Container">
            <h1>{restaurant.name}</h1>
            <p>{restaurant?.cuisines?.join(',')} - {restaurant.costForTwoMessage}</p>
            <ul className="menu_items">
                {listItemmap?.map((item) => {
                    return(
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - RS {item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}/-</li>
                    )})
                }
                
                {/* <li>chicken</li>
                <li>pasta</li>
                <li>rice</li> */}
            </ul       >
        </div>
    )
}
export default RestaurantMenu;