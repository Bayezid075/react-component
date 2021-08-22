import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const products = ["Design kit", "Developmet kit", "Tool kit"];
  const prices = ["$599", "$999"];
  return (
    <div>
      <Components price={prices[0]} prodname={products[0]} />
      <Components price={prices[1]} prodname={products[1]} />

      <Counter />

      <Users />
    </div>
  );
}

function Components(props) {
  const compStyle = {
    // style as object
    width: "400px",
    border: "1px solid grey",
    textAlign: "center",
    margin: "15px",
    padding: "15px",
    float: "left",
  };
  const BtnCompStyle = {
    padding: "10px 25px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  };
  const developers = ["bayezid", "fardin", "ibrahim ", "habib"];

  return (
    <div style={compStyle}>
      <h2> BValid - {props.prodname} </h2>

      <h3> Price: {props.price} </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero,
        temporibus atque dolor hic sit. Rem, eum libero? Repudiandae ullam, sit
        autem cupiditate dolore ex?
      </p>
      <h4>
        {" "}
        list of developers:
        {developers.map((developers) => (
          <li> {developers} </li>
        ))}
      </h4>

      <button style={BtnCompStyle}> Buy Now </button>
    </div>
  );
}

function Counter() {
  const [cart, Setvalue] = useState(0);
  let IncreFun = () => Setvalue(cart + 1);
  let decrfun = () => Setvalue(cart - 1);
  return (
    <div>
      <h1> Cart:{cart} </h1>
      <button onClick={IncreFun}> add to Cart </button>
      <button onClick={decrfun}> Remove from cart </button>
    </div>
  );
}

function Users() {
  const [User, NewUser] = useState([]); //This is state and it have reletion user to newuser parameter
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => NewUser(data));
  });
  return (
    <div style={userStyle}>
      <h2>all users :{User.length}</h2>
      <ol>
        {User.map((User) => (
          <li> {User.name}</li>
        ))}
      </ol>
    </div>
  );
}
const userStyle = {
  margin: "15px",
  padding: "15px",
};

export default App;
