import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {id} = useParams();
    const data = useRestaurantMenu(id);
    const listItemmap = data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
    const restaurant = data?.data?.cards[2]?.card?.card?.info;

    return (
        <div className="Restaurant_Container">
            <h1>{restaurant?.name}</h1>
            <p>{restaurant?.cuisines?.join(',')} - {restaurant?.costForTwoMessage}</p>
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