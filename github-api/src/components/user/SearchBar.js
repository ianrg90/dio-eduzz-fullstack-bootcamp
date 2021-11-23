import Button from "../ui/Button";
import classes from "./SearchBar.module.css";
import useInput from "../../hooks/use-input";

function SearchBar() {
  const { enteredValue,cssInputClasses , valueChangleHandler, fieldBlurHandler, handleForm } =
    useInput((value) => value.trim() !== "");


  return (
    <form onSubmit={handleForm} className={classes.form}>
      <Button text={"New search"} />
      <label htmlFor="searchuser" />
      <input 
        autoComplete = "off"
        className={cssInputClasses}
        onChange={valueChangleHandler}
        onBlur={fieldBlurHandler}
        type="text"
        placeholder="e.g : ianrg90"
        name="searchuser"
        value = {enteredValue}
      ></input>
    </form>
  );
}

export default SearchBar;
