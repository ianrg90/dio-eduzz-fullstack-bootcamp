import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../store/user-contex";
import SearchBar from "../user/SearchBar";
import classes from "./Header.module.css";

function Header() {

  
  const { userData, userRepos, starredRepos, username} = useContext(UserContext);
  const { blog, location, company } = userData;

  const numberOfRepos = userRepos.length;
  const numberOfStarredRepos = starredRepos.length

  return (
    <Fragment>
      <SearchBar />
      <div className={classes.header}>
        <div className={classes.profile}>
          <img src={userData["avatar_url"]} alt="user avatar" />
          <div className={classes.profileInfo}>
            <div>
              <h2>{userData.name}</h2>
              <h3>
                Username:
                <a href={userData["html_url"]} target="_blank" rel="noreferrer">
                  {userData.login}
                </a>
              </h3>
              {company && company.trim() !== "" && <h3>Company: {company} </h3>}
              {location && location.trim() !== "" && (
                <h3>Location: {location} </h3>
              )}
              {blog && blog.trim() !== "" && <h3>Blog: {blog} </h3>}
            </div>
            <div className={classes.info}>
              <div>
                <h4>Followers</h4>
                <span>{userData.followers}</span>
              </div>
              <div>
                <h4>Starred</h4>
                <span>{numberOfStarredRepos}</span>
              </div>
              <div>
                <h4>Following</h4>
                <span>{userData.following}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <NavLink activeClassName = {classes.active} to = {`/welcome/${username}/repos`}>
            <h4>Repositories: {numberOfRepos}</h4>
          </NavLink>
          <NavLink activeClassName = {classes.active} to= {`/welcome/${username}/starred`}>
            <h4>Starred: {numberOfStarredRepos}</h4>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
