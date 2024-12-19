import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is ECO Food App</h2>
            <div className="flex flex-wrap justify-around">
                <User name={"Lakshmi Siddhachar(func)"} />
                <UserClass name={"Lakshmi Siddhachar(class)"} location={"Belgium(class)"} />
            </div>

        </div>

    )
}
export default About;