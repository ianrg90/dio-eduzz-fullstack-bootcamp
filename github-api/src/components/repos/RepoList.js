import { useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../store/user-contex";
import RepoItem from "./RepoItem";
import classes from "./RepoList.module.css";

function RepoList() {
  const { userRepos, starredRepos } = useContext(UserContext);
  const location = useLocation();
  const path = location.pathname

  const repositories = userRepos.map((repo) => {
    return (
      <RepoItem
        key={repo.id}
        name={repo.name}
        fullName={repo["full_name"]}
        link={repo["html_url"]}
      />
    );
  });

  const starred = starredRepos.map((repo) => {
    return (
      <RepoItem
        key={repo.id}
        name={repo.name}
        fullName={repo["full_name"]}
        link={repo["html_url"]}
      />
    );
  });

  return (
    <ul className={classes.ul}>
      {path.includes("repo") ? repositories : starred}
    </ul>
  );
}

export default RepoList;
