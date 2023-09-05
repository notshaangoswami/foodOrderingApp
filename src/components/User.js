import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      <h1>Count1={count1}</h1>
      <h1>{name}</h1>
      <h2>Location:-Delhi</h2>
      <h3>Contact:shaangoswami18@gmail.com</h3>
    </div>
  );
};
export default User;
