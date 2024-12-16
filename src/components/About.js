import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is ECO Food App</h2>
            <User name={"Lakshmi Siddhachar(func)"} />
            <UserClass name={"Lakshmi Siddhachar(class)"} location={"Belgium(class)"} />
        </div>

    )
}
export default About;