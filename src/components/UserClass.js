import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    console.log("child component Mount");
    //api calls
  }
  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count={count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increace Count
        </button>

        <h1>{name}</h1>
        <h2>Location:-{location}</h2>
        <h3>Contact:shaangoswami18@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
