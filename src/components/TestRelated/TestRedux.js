import React from "react";
import { connect } from "react-redux";

const TestRedux = (props) => {
  const increment = props.increment;
  const decrement = props.decrement;
  const filterList = (event) => {
    var updatedList = props.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    props.search(updatedList);
  };
  return (
    <>
      <h1 data-testid="counter">{props.counter}</h1>
      <button data-testid="button-up" onClick={increment}>
        Up
      </button>
      {props.counter > 0 ? (
        <button data-testid="button-down" onClick={decrement}>
          Down
        </button>
      ) : (
        ""
      )}
      <div>
        <input
          data-testid="search-list"
          onChange={filterList}
          type="input"
          placeholder="Searchbar"
        ></input>
        {props.filterList === undefined || props.filterList.length == 0 ? (
          ""
        ) : (
          <h2 data-testid="filter-list">{props.filterList}</h2>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.count,
    initialItems: state.initialItems,
    filterList: state.filterList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (updatedList) => {
      dispatch({ type: "SEARCH", updatedList });
    },
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
