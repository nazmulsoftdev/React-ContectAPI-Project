import { Link } from "react-router-dom";
import styled from "../assets/style/CardItem.module.css";

function CardItem({ productItem }) {
  return productItem.length === 0
    ? ""
    : productItem.map((item) => {
        const { id, image, name, price, discrip } = item;
        return (
          <Link key={id} to={name} state={{ id, image, name, price, discrip }}>
            <div className={styled.CardItem}>
              <div className={styled.CardItemImage_Wrap}>
                <img src={image} alt="product.png" width="100%" height="100%" />
              </div>
              <div className={styled.CardItem_Discription}>
                <h4>{name}</h4>
                <p>${price}</p>
              </div>
            </div>
          </Link>
        );
      });
}

export default CardItem;
