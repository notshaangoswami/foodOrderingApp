import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const data = await fetch(
      `https://api.github.com/users/notshaangoswami?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const json = await data.json();
    //console.log(json);
    setUser(json);
  };

  const { name, avatar_url, location, login, html_url, bio } = user;

  return (
    <div className="flex flex-wrap p-4 m-4 items-center">
      <div className="p-4 m-4 w-56">
        <img src={avatar_url} className="rounded-lg" />
      </div>
      <ul>
        <li>Name:{name}</li>
        <li>Location:{location}</li>
        <li>Bio:{bio}</li>
        <li>Github Url:{html_url}</li>
        <li>Login Id:{login}</li>
      </ul>
    </div>
  );
};
export default User;
