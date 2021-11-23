import Button from "../ui/Button";
import classes from "./SelectUser.module.css";
import useInput from "../../hooks/use-input";

function SelectUser() {
  const {
    enteredValue,
    inputHasError,
    cssInputClasses,
    valueChangleHandler,
    fieldBlurHandler,
    handleForm
  } = useInput((value) => value.trim() !== "");

  return (
    <section className={classes.section}>
      <form onSubmit={handleForm} className={classes.form}>
        {!inputHasError ? (
          <label>Insert a github username</label>
        ) : (
          <label className={classes.invalid}>Field can't be left blank</label>
        )}
        <input
          className={cssInputClasses}
          onBlur={fieldBlurHandler}
          onChange={valueChangleHandler}
          type="text"
          placeholder="e.g : ianrg90"
          value={enteredValue}
        />
        <Button text={"Search"} />
      </form>
    </section>
  );
}

export default SelectUser;
