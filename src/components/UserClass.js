import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      userInfo: "Dummy",
      location: "Default",
      avatar_url: "htpps",
    };
  }
  async componentDidMount() {
    console.log("component did mounnt");
    const data = await fetch(
      `https://api.github.com/users/akshaymarch7?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    console.log("render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>{name}</h1>

        <h2>Location:-{location}</h2>
        <h3>Contact:shaangoswami18@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
