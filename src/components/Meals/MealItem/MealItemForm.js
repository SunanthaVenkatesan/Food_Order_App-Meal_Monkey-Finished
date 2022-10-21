import { useRef,useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid]=useState(true)
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount=amountInputRef.current.value
    const enteredAmountNumber=+enteredAmount//this converts the string number to a number number 
    if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid Quantity(1 - 5).</p>}
    </form>
  );
};
export default MealItemForm;