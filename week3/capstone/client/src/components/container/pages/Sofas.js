import React, { useState } from "react";
// import UserContext from "../../context/UserProvider";

function Sofas(){
  const [sofas] = useState([])

  // const addToCart = (sofa) => {
  //   console.log("Added to cart")
  //   setCart([...cart, sofa])
  // }

  // Confused how to link the length of cart items to "Bag()" in the navbar

  return (
      <div>
        <h1>Sofas</h1>

        {/* {sofas.map((sofa) => (
          <div>
            <img src={sofas.image} alt={sofas.name} />
            <p>{sofas.name}</p>
            <p>{"$"[sofas.price]}</p>
            <button onClick={() => addToCart(sofa)}> + </button>
          </div>
        ))} */}
      </div>
  );
}

export default Sofas;
