import { Route, Switch, Redirect } from "react-router-dom";
import React, { useContext, Suspense } from "react";
import UserContext from "./store/user-contex";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const Welcome = React.lazy(() => import("./pages/Welcome"));
const UserInfo = React.lazy(() => import("./pages/UserInfo"));

function App() {
  const { username } = useContext(UserContext);

  return (
    <Suspense fallback ={<LoadingSpinner/>}>
      <Switch>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        {username && (
          <Route path="/welcome/:username">
            <UserInfo />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/welcome" />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
