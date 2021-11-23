import UserContext from "./user-contex";
import { useState } from "react";

const UserProvider = (props) => {
  const [username, setUserName] = useState(null);
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUserData(username) {
    setUserName(username);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Something went wrong, check if user actually exists");
      }

      const data = await response.json();

      setUserData({ ...data });

      await fetchUserRepositories(username);
      await fetchStarredRepos(username);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }

  async function fetchUserRepositories(username) {
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!response.ok) {
        throw new Error("Something went wrong when fetching user repositories");
      }
      const repos = await response.json();
      setUserRepos([...repos]);
    } catch (err) {
      setError(err.message);
    }
    return userRepos;
  }

  async function fetchStarredRepos(username) {
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/starred`
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong when fetching user starred repositories"
        );
      }
      const starred = await response.json();
      setStarredRepos([...starred]);
    } catch (err) {
      setError(err.message);
    }
    return starredRepos;
  }

  const userContext = {
    username,
    fetchUserData,
    error,
    isLoading,
    userData,
    userRepos,
    starredRepos,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
