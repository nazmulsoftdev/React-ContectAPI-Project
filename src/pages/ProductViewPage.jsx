import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CardItemView from "../components/CardItemView";

function ProductViewPage() {
  const { name } = useParams();
  const location = useLocation();

  return (
    <div>
      <CardItemView
        id={location.state.id}
        name={name}
        images={location.state.image}
        price={location.state.price}
        discrip={location.state.discrip}
      />
    </div>
  );
}

export default ProductViewPage;
