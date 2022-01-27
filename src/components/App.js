import React from "react";
import { Redirect, Switch, Route, withRouter } from "react-router";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

class App extends React.Component {
  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/page1" />} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>
    );
  }
}

export default withRouter(App);
