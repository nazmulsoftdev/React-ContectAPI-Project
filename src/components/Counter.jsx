import { useContext } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import styled from "../assets/style/Counter.module.css";
import ContextAPI from "../context/ContextAPI";

function Counter() {
  const { count, IncrementItem, DecrementItem } = useContext(ContextAPI);
  return (
    <div className={styled.Counter_Wrapper}>
      <AiFillPlusCircle
        onClick={IncrementItem}
        size={30}
        className={styled.Increment_Counter}
      />
      <span>{count}</span>
      <AiFillMinusCircle
        onClick={DecrementItem}
        size={30}
        className={styled.Decrement_Counter}
      />
    </div>
  );
}

export default Counter;
