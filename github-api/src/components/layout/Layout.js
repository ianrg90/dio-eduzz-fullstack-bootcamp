import { Fragment, useContext } from "react";
import UserContext from "../../store/user-contex";
import Header from "../header/Header";
import SearchBar from "../user/SearchBar";
import RepoList from "../repos/RepoList";

import LoadingSpinner from "../ui/LoadingSpinner"

function Layout(props) {
  const { isLoading, error } = useContext(UserContext);

  return (
    <Fragment>
      {error && (
        <Fragment>
          <p className="errorState">{error}</p>
          <SearchBar/>
        </Fragment>
      )}
      {isLoading && <LoadingSpinner/>}
      {!isLoading && !error && (
        <Fragment>
          <Header />
          <RepoList/>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Layout;
