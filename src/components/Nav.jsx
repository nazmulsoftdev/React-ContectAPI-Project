import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import styled from "../assets/style/Nav.module.css";
import { Link } from "react-router-dom";
import ContextAPI from "../context/ContextAPI";

function Nav() {
  const { Item } = useContext(ContextAPI);
  return (
    <nav className={styled.Nav}>
      <div className={styled.addTo_cardWrapper}>
        <Link to="/cartPage">
          <HiShoppingCart className={styled.addTo_card} size={30} />
        </Link>
        <span>{Item.length}</span>
      </div>
    </nav>
  );
}

export default Nav;
