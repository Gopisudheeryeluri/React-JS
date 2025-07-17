import { useState, useEffect } from 'react';

const useUserDetails = () => {
const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/Gopisudheeryeluri');
        const json = await data.json();
        setUserDetails(json);
    }
    console.log("userDetails", userDetails);
    return userDetails;
}

export default useUserDetails;