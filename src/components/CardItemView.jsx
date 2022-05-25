import { useContext, useRef, useEffect } from "react";

import Counter from "./Counter";
import styled from "../assets/style/CardItemView.module.css";
import ContextAPI from "../context/ContextAPI";

function CardItemView({ id, name, images, price, discrip }) {
  const { count, AddtoCartAction } = useContext(ContextAPI);
  const buyRef = useRef();

  useEffect(() => {
    Purches();
  });

  //  when a user order more than 5 item

  const Purches = () => {
    if (count > 4 || 0 > count) {
      buyRef.current.style.display = "none";
    } else {
      buyRef.current.style.display = "block";
    }
  };

  return (
    <div className={styled.CardItemView_Wrapper}>
      <div className={styled.CardItemView_Wrap}>
        <div className={styled.CardItemview_Img}>
          <img src={images} alt="imge.png" />
        </div>
        <div className={styled.CardItemView_ActionWrap}>
          <Counter />
          <div>
            <p>Total: ${price * count}</p>
          </div>
          <div className={styled.ButtonWrapper}>
            <button ref={buyRef} className={styled.buyButton}>
              Buy Now
            </button>
            <button
              onClick={() => AddtoCartAction(id, name, images, price)}
              className={styled.cartButton}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className={styled.CardItemView_ContentWrapp}>
        <div className={styled.CardItemView_Content}>
          <h4>{name}</h4>
          <p>Price: ${price}</p>
          <p>{discrip}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItemView;
