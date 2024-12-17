import { useEffect, useState } from "react"
import { MENU_URL } from "../Utils/Constants";

const useRestaurantMenu = (resId) => {
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchResInfo()
    }, []);

    const fetchResInfo = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResData(json.data);
    };
    return resData;
};
export default useRestaurantMenu;