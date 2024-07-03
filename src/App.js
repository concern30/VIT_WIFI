import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReportForm from "./components/ReportForm";
import IssueList from "./components/IssueList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/report" component={ReportForm} />
          <Route path="/issues" component={IssueList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
