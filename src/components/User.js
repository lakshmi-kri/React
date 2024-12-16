import { useState, useEffect } from "react";


const User = (props) => {
    const [count, SetCount] = useState(0);
    const [userInfo, SetUserInfo] = useState([]);

    //const { name } = props;

    // useEffect(() => {
    //     fetchUserApi();
    // }, []);

    const fetchUserApi = async () => {
        const data = await fetch("https://api.github.com/users/lakshmi-kri");
        const json = await data.json();
        SetUserInfo(json);
        console.log(json);
    }

    return (
        <div className="userCard">
            <h5>Using Functional Component</h5>
            {/* <div className="count">
                <h2>Count:{count}</h2>
                <button className="CountBtn" onClick={() => {
                    SetCount(count + 1)
                }}>Increase Count</button>
            </div> */}
            <img className="userImage" src={userInfo.avatar_url} />
            <h2>Name: {userInfo.name}</h2>
            <h3>Place: {userInfo.location}</h3>
            <h3>Bio: {userInfo.bio}</h3>
            <h3>Contact: lakshmisacharya3@gmail.com</h3>
        </div>
    )
}
export default User;