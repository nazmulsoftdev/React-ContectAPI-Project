import { useContext } from "react";
import { AiFillCloseCircle as Delete } from "react-icons/ai";
import ContextAPI from "../context/ContextAPI";
import styled from "../assets/style/Checkout.module.css";

function CartCheckout({ Item }) {
  const { count, RemoverCartAction } = useContext(ContextAPI);
  return Item.length === 0
    ? ""
    : Item.map((item, index) => {
        const { id, name, Images, price } = item;
        return (
          <section key={index} className={styled.Checkout}>
            <div className={styled.Checkout_Wrapper}>
              <div className={styled.Checkout_Content}>
                <img src={Images} alt="s.png" width="100%" height="70%" />
              </div>
              <div className={styled.Checkout_Content}>
                <h4>{name}</h4>
                <p>Item:${count}</p>
                <p>Price:{price * count}</p>
              </div>
            </div>
            <Delete
              onClick={() => RemoverCartAction(id)}
              className={styled.RemoveChekout}
            />
          </section>
        );
      });
}

export default CartCheckout;
