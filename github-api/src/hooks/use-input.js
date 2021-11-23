import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../store/user-contex";

const useInput = (validateValue) => {
  const {fetchUserData} = useContext(UserContext)  
  const history = useHistory()
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const inputHasError = isTouched && !valueIsValid;
  const cssInputClasses = inputHasError ? "input-invalid" : null;


  function valueChangleHandler(e) {
    setEnteredValue(e.target.value);
  }

  function fieldBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setIsTouched(false);
    setEnteredValue("");
  }

  function handleForm(e) {
    e.preventDefault();
    if (!enteredValue) {
      return;
    } else {
      history.push(`/welcome/${enteredValue}/repos`);
      fetchUserData(enteredValue);
      reset();
    }
  }

  return {
    enteredValue,
    valueIsValid,
    inputHasError,
    cssInputClasses,
    valueChangleHandler,
    fieldBlurHandler,
    reset,
    handleForm
  };
};

export default useInput;
