import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     // State Variable in CBC
            count: 0,
            userInfo: {
                name: "",
                location: "",
                avatar: ""
            }              // Big Object which holds all the state variables.
        };
        console.log("constructor")
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/lakshmi-kri");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("component Did Update")
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render() {
        console.log("render");
        const { name, location } = this.props;
        const { count } = this.state;
        return (
            <div className="">
                <h5>Using Class Based Component</h5>
                {/* <div className="count">
                    <h2>Count:{count}</h2>
                    <button className="CountBtn" onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}>Increase Count</button>
                </div> */}
                <img className="w-56" src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Place: {this.state.userInfo.location}</h3>
                <h3>Bio: {this.state.userInfo.bio}</h3>
                <h3>Contact: lakshmisacharya3@gmail.com</h3>
            </div>
        )

    }
}
export default UserClass;

//....MOUNTING....
//constructor(dummy)
//Render(dummy)
//      <HTML dummy>
//component did mount
//      <API call>
//      <this.setState> state variable is updated

//.....UPDATING......
//render(API data)
//      <HTML(new API data)
//component did update

//......unmounting....
//component will unmount