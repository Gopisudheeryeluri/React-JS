import { useEffect, useState } from 'react';
import { RESTAURANT_MENU_API } from './constants';

const useRestaurantMenu = (id) => {
    const [json, setJson] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_MENU_API + id);
        const json = await data.json();
        console.log("json", json);
        setJson(json);
    }
    return json;
}

export default useRestaurantMenu;