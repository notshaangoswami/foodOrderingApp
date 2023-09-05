import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1>Count={count}</h1>
        <h1>Count1={count1}</h1>
        <h1>{name}</h1>
        <h2>Location:-{location}</h2>
        <h3>Contact:shaangoswami18@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
