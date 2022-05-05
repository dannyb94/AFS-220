import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../../context/UserProvider";
import {DataContext} from "../../context/DataProvider";

function Sofas(){
  // const [sofas] = useState([])
  const { setCart, dataState } = useContext(DataContext)

  const addToCart = (sofa) => {
    console.log("Added to cart")
    setCart(sofa)
  }

  // Confused how to link the length of cart items to "Bag()" in the navbar

  return (
      <div>
        <h1>Sofas</h1>

        {dataState.sofas.map((sofa) => (
          <div>
            <img src={sofa.image} alt={sofa.name} />
            <p>{sofa.name}</p>
            <p>{"$"[sofa.price]}</p>
            <Link to='/profile'><button onClick={() => addToCart(sofa)}> + </button></Link>
          </div>
        ))}
      </div>
  );
}

export default Sofas;
