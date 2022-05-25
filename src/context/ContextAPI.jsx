import { createContext, useState, useEffect } from "react";
import ProductListDb from "../db/ProductListDb";

const ContextAPI = createContext();

export const ProductProvider = ({ children }) => {
  const [productItem, setProductItem] = useState([]);
  const [Item, setItem] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    setProductItem(ProductListDb);
  }, []);

  // Add to Cart Function

  const AddtoCartAction = (id, name, Images, price) => {
    setItem((PrevState) => [...PrevState, { id, name, Images, price }]);
  };

  // remove from cart function

  const RemoverCartAction = (index) => {
    const newList = Item.filter((item) => item.id !== index);
    setItem(newList);
  };

  // increment Item Action

  const IncrementItem = () => {
    setCount((PrevState) => PrevState + 1);
  };

  // Decrement Item Action
  const DecrementItem = () => {
    setCount((PrevState) => PrevState - 1);
  };

  return (
    <ContextAPI.Provider
      value={{
        productItem: productItem,
        Item: Item,
        AddtoCartAction,
        RemoverCartAction,
        count: count,
        IncrementItem,
        DecrementItem,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default ContextAPI;
