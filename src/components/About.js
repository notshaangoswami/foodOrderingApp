import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <UserClass name={"Shaan Goswami(Class)"} location={"Delhi"}/>
      <User name={"Shaan Goswami(Functional)"} />
    </div>
  );
};
export default About;
