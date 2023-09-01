import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
  -Logo
  -Nav items
Body
  -Search
  -RestaurantContainer
  -Restaurant Card
       -Img
       -Name of res,Star Rating,cuisine,delivery tie

Footer
   -Copyright
   -LInks
   -address
   -contact

*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutTvjP5Nx7u5vk-IZlmBsiIZIn4ZgTli70lW3i_KRw2FriVJ0YxtVctxFi56AgnqZgrk&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = [
  {
    id: "1",
    resName: "Haldiram",
    cusine: "Biryani,chole bhature,pizza",
    rating: "4.6",
  },
  {
    id: "2",
    resName: "KFC",
    cusine: "Burgerpizza",
    rating: "4.5",
  },
  {
    id: "3",
    resName: "6 Degree",
    cusine: "Biryani,chole bhature,pizza",
    rating: "4",
  },
  {
    id: "4",
    resName: "Amristari Kulche",
    cusine: "Kulche",
    rating: "4.6",
  },
  {
    id: "5",
    resName: "Dominos",
    cusine: "pizza",
    rating: "4.5",
  },
  {
    id: "6",
    resName: "Pizza Hut",
    cusine: "Biryani,chole bhature,pizza",
    rating: "4.6",
  },
  {
    id: "7",
    resName: "Bengal Sweets",
    cusine: "Sweets",
    rating: "4.8",
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cusine, rating } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_640.jpg"
      />
      <h1>{resName}</h1>
      <h2>{cusine}</h2>
      <h3>{rating}</h3>
    </div>
  );
};
//not using key in map(bad practice)<<<<use index as key<<<<use id as key(best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //functional Component
