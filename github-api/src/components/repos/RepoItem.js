import classes from "./RepoItem.module.css";

function RepoItem(props) {
  return (
    <li className={classes.list}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <p>{props.name}</p>
        <p>
          Full name: <br />
          <span>{props.fullName}</span>
        </p>
      </a>
    </li>
  );
}

export default RepoItem;
