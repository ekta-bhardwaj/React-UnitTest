import React from "react";
import { Link } from "react-router-dom";

const TestRouter = () => {
  const name = "John Doe";
  return (
    <div className="bgBlack">
      <div className="container">
        <nav className="nav-wrapper" data-testid="navbar">
          <Link data-testid="to-do" to="/" className="brand-logo center">
            To Do
          </Link>
          <ul className="right">
            <li>
              <Link to="/TestRedux" data-testid="add-subtract-search">
                Add,subtarct,Search
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TestRouter;
