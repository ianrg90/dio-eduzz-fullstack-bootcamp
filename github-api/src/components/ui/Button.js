import classes from "./Button.module.css";

function Button(props) {
  return <button className={classes.button}>{props.text}</button>;
}

export default Button;
