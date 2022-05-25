import { useContext } from "react";
import CardItem from "../components/CardItem";
import ContextAPI from "../context/ContextAPI";
import styled from "../assets/style/ProductPage.module.css";

function ProductPage() {
  const { productItem } = useContext(ContextAPI);
  return (
    <div className={styled.ProdcutPage_Wrapper}>
      <CardItem productItem={productItem} />
    </div>
  );
}

export default ProductPage;
