import {useState, useEffect} from 'react';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        addEventListener('online', () => {
            setIsOnline(true);
        });
        addEventListener('offline', () => {
            setIsOnline(false);
        });
    },[]);

    return isOnline;
}
export default useOnlineStatus;