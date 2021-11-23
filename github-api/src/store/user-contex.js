import React from "react";

const UserContext = React.createContext({
    username : null,
    fetchUserData : (username) => {},
    fetchUserRepositories: (username) => {},
    fetchStarredRepos: (username) => {},
    error: null,
    isLoading: false,
    userData : {},
    userRepos: [],
    starredRepos: []
})

export default UserContext