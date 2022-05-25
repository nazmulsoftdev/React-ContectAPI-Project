import { useContext } from "react";
import CartCheckout from "../components/CartCheckout";
import ContextAPI from "../context/ContextAPI";
function CardtPage() {
  const { Item } = useContext(ContextAPI);
  return (
    <section>
      <CartCheckout Item={Item} />
    </section>
  );
}

export default CardtPage;
