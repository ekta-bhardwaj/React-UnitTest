import React from "react";
import "./App.css";
import ToDo from "./components/ToDoTask/ToDo";
import TestRedux from "./components/TestRelated/TestRedux";
import TestRouter from "./components/TestRelated/TestRouter";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
export default function App() {
  //return <TestRouter />;

  //return <TestRedux />;
  return (
    <BrowserRouter>
      <div className="App">
        <TestRouter />
        {/* {props.getAvailableItems()} */}

        <Switch>
          <Route exact path="/" component={ToDo} />
          <Route path="/TestRedux" component={TestRedux} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
